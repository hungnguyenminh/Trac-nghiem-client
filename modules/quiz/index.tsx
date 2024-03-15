'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDetailExam } from '@/api/ApiExam';
import { useQuery } from 'react-query';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { useBoolean } from '@/ultils/custom-hook';

interface IProps {
  idExam?: number;
}

export function Quiz(props: IProps) {
  const { idExam } = props;

  let idTimeout;

  const router = useRouter();
  const [dataDetailExam, setDataDetailExam] = useState<any>();
  const isStart = useBoolean(false);
  const [statusExam, setStatusExam] = useState<'start' | 'doing' | 'finished'>(
    'start'
  );
  const [timeCowndown, setTimecowndown] = useState<any>({
    minute: '',
    second: '',
  });
  const [listQuestionSubmit, setListQuestionSubmit] = useState<any>([
    {
      content: '',
      is_correct: false,
      is_selected: '',
    },
  ]);

  console.log('listQuestionSubmit', listQuestionSubmit)

  const handleStatusExam = (): string => {
    let text = '';
    switch (statusExam) {
      case 'start':
        text = 'Bắt đầu bài thi';
        break;
      case 'doing':
        text = 'Đang làm đề';
        break;
      default:
        text = 'Hoàn thành';
    }

    return text;
  };

  const onChangeSelectAnswer = (e: RadioChangeEvent, itemQuestion: any) => {
    const newListQuestionSubmit = listQuestionSubmit.map((item: any) => {
      if (item?.id_question === itemQuestion?.id_question) {
        const newItemQuestion = { ...item, is_selected: e.target.value };
        return newItemQuestion;
      }

      return item;
    });
    setListQuestionSubmit(newListQuestionSubmit);
  };

  // console.log('dataDetailExam', dataDetailExam);
  const getDataDetailExam = (): Promise<any> =>
    getDetailExam(idExam).then((res: any) => {
      setTimecowndown({
        minute: res?.data?.duration,
        second: 0,
      });
      setDataDetailExam(res?.data);
    });

  useQuery('GET_DETAIL_EXAM', getDataDetailExam);

  const countdown = (minutes: any, seconds: any) => {
    let minutesCount = minutes;
    let secondsCount = seconds;
    if (minutesCount === 0 && secondsCount === 0) {
      // Hành động khi thời gian kết thúc
      console.log("Hết giờ!");
      setStatusExam("finished");
      return;
    }

    if (secondsCount === 0) {
      secondsCount = 59;
      minutesCount--;
    } else {
      secondsCount--;
    }

    setTimecowndown({
      minute: minutesCount,
      second: secondsCount,
    });

    idTimeout = setTimeout(() => countdown(minutesCount, secondsCount), 1000);
  };

  // useEffect(() => {
  //   if (statusExam === 'doing') {
  //     let minutesCount = timeCowndown.minute - 1;
  //     let secondsCount = 60;
  //
  //     if (minutesCount === 0 && secondsCount === 0) {
  //       // Hành động khi thời gian kết thúc
  //       console.log("Hết giờ!");
  //       setStatusExam("finished");
  //       return;
  //     }
  //
  //     if (secondsCount === 0) {
  //       secondsCount = 59;
  //       minutesCount--;
  //     } else {
  //       secondsCount--;
  //     }
  //   }
  // }, [statusExam]);

  const handleSubmitExam = (): void => {
    if (statusExam === 'start') {
      setStatusExam('doing');
      // countdown(timeCowndown.minute - 1, 60);
      countdown(0, 14);

      return;
    }

    router.push('/test_result');
    localStorage.setItem('listQuestionSubmit', JSON.stringify(listQuestionSubmit))

    // router.push()
    // router.push('/test_result');
  };

  useEffect(() => {
    const listQuestionTmp =
      dataDetailExam?.list_question &&
      dataDetailExam?.list_question.map((item: any) => {
        const itemQuestion = {
          id_question: item?.id_question,
          title_question: item?.title_question,
          description_question: item?.description_question,
          image_question: item?.image_question,
          difficulty_level: item?.difficulty_level,
          subject_question: item?.subject_question,
          list_answer: item?.list_answer,
          is_selected: '',
        };
        return itemQuestion;
      });

    setListQuestionSubmit(listQuestionTmp);
    console.log('listQuestionTmp', listQuestionTmp);
  }, [dataDetailExam]);

  return (
    <form action="" method="get" className="m-6">
      <div className="lg:flex lg:justify-between mb-6">
        <div className="w-[calc(100%-18rem)]">
          {dataDetailExam?.list_question &&
            dataDetailExam?.list_question.map((item: any, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <div className="card mb-6" key={index}>
                <h4 className="mb-2">{`Câu ${index + 1}`}</h4>
                <div>
                  <fieldset>
                    <legend>{item?.title_question}</legend>
                    <hr className="my-4" />

                    <Radio.Group
                      disabled={statusExam !== 'doing'}
                      onChange={(e) => onChangeSelectAnswer(e, item)}
                    >
                      <Space direction="vertical">
                        {item?.list_answer.map(
                          (itemAnswer: any, index: number) => (
                            <Radio key={index} value={index + 1}>
                              {itemAnswer?.content}
                            </Radio>
                          )
                        )}
                      </Space>
                    </Radio.Group>
                  </fieldset>
                </div>
              </div>
            ))}
        </div>

        <div className="lg:fixed top-0 right-[2rem] z-20 flex-shrink-0  lg:pt-16 lg:w-[17rem] h-full duration-200 lg:flex transition-width">
          <div className="w-full lg:ml-6 h-fit p-6 rounded-lg bg-white mt-6 shadow-xl shadow-gray-200">
            <div className="mb-[1rem]">
              Thời gian: {timeCowndown?.minute} phút {timeCowndown?.second} giây
            </div>
            <h4 className="mb-2">Mục lục câu hỏi</h4>
            <div className="mb-4 flex flex-wrap lg:grid lg:grid-cols-5">
              {listQuestionSubmit &&
                listQuestionSubmit.map((item: any, index: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    key={index}
                    className={`${
                      item?.is_selected ? 'bg-active ' : ''
                    } color-white flex right-6 h-8 w-8 mr-1.5 mb-3 rounded border justify-center items-center cursor-pointer`}
                  >
                    <span
                      className={`${
                        item?.is_selected ? 'text-white ' : 'text-black'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                ))}
            </div>

            <button
              type="button"
              className={`btn w-full ${
                statusExam === 'doing' ? 'opacity-60' : ''
              }`}
              disabled={statusExam === 'doing'}
              onClick={handleSubmitExam}
            >
              {handleStatusExam()}
            </button>

            {/*{statusExam === 'finished' && (*/}
            {/*  <button*/}
            {/*    type="button"*/}
            {/*    className="mt-[1rem] btn w-full"*/}
            {/*    onClick={() => {*/}
            {/*      router.push('/test_result');*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Xem kết quả*/}
            {/*  </button>*/}
            {/*)}*/}
          </div>
        </div>
      </div>
    </form>
  );
}
