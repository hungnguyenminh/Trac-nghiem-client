'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDetailExam } from '@/api/ApiExam';
import { useQuery } from 'react-query';
import { Modal, Radio, RadioChangeEvent, Space } from 'antd';
import { LoadingGlobal } from '@/components/LoadingGlobal';
import { useBoolean } from '@/ultils/custom-hook';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import Image from 'next/image';

interface IProps {
  idExam?: number;
}

export function Quiz(props: IProps) {
  const { idExam } = props;

  const router = useRouter();
  const isOpenModalConfirm = useBoolean(false);
  const [statusExam, setStatusExam] = useState<'start' | 'doing' | 'finished'>(
    'start'
  );
  const [timeCowndown, setTimecowndown] = useState<any>({
    minute: 0,
    second: 0,
  });

  const [listQuestionSubmit, setListQuestionSubmit] = useState<any>();

  const handleStatusExam = (): string => {
    let text = '';
    switch (statusExam) {
      case 'start':
        text = 'Bắt đầu bài thi';
        break;
      case 'doing':
        text = 'Nộp bài';
        break;
      default:
        text = 'Quay lại trang chủ';
      // default:
      //   text = 'Xem kết quả';
    }

    return text;
  };

  console.log('listQuestionSubmit', listQuestionSubmit);

  const isSelectedAll = (): boolean => {
    const findQuestionNotAnswer = listQuestionSubmit.filter(
      (item: any) => !item.is_selected
    );

    return !(findQuestionNotAnswer.length > 0);
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

  const getDataDetailExam = (): Promise<any> =>
    getDetailExam(idExam).then((res: any) => {
      setTimecowndown({
        minute: res?.data?.duration,
        second: 0,
      });
      setListQuestionSubmit(res?.data?.list_question);
    });

  const fetchDetailExam = useQuery('GET_DETAIL_EXAM', getDataDetailExam);

  const countdown = (minutes: any, seconds: any) => {
    let minutesCount = minutes;
    let secondsCount = seconds;
    if (minutesCount === 0 && secondsCount === 0) {
      // Hành động khi thời gian kết thúc
      // setStatusExam("finished");
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
  };

  const handleConfirmSubmit = (): void => {
    setStatusExam('finished');
    isOpenModalConfirm.onFalse();
  };

  const handleSubmitExam = (): void => {
    if (statusExam === 'start') {
      setStatusExam('doing');
      setTimecowndown({
        minute: timeCowndown.minute - 1,
        second: 60,
      });

      return;
    }

    if (statusExam === 'doing') {
      if (!isSelectedAll()) {
        console.log('isSelectedAll()', isSelectedAll());
        isOpenModalConfirm.onTrue();
        return;
      }
      setStatusExam('finished');
      return;
    }
    router.push('/');

    // router.push('/test_result');
    // localStorage.setItem(
    //   'listQuestionSubmit',
    //   JSON.stringify(listQuestionSubmit)
    // );
  };

  useEffect(() => {
    if (statusExam === 'start') {
      return;
    }

    if (
      statusExam === 'finished' &&
      timeCowndown.minute !== 0 &&
      timeCowndown.second !== 0
    ) {
      setTimecowndown({
        minute: 0,
        second: 0,
      });

      return;
    }

    setTimeout(() => {
      countdown(timeCowndown.minute, timeCowndown.second);
    }, 1000);
  }, [timeCowndown, statusExam]);

  return (
    <div className="m-6">
      <div className="lg:flex lg:justify-between mb-6">
        {statusExam === 'start' ? (
          <div className="h-[30rem] w-[calc(100%-18rem)] flex flex-col items-center mt-[3rem]">
            <Image alt="" src="/img/start-exam.jpg" width={600} height={600} />
            <p className="font-semibold text-blue-600">
              Bấm "BẮT ĐẦU BÀI THI" để làm bài
            </p>
          </div>
        ) : (
          <div className="w-[calc(100%-18rem)]">
            {fetchDetailExam.isLoading ? (
              <LoadingGlobal number={5} />
            ) : (
              listQuestionSubmit &&
              listQuestionSubmit.map((item: any, index: number) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card mb-6" key={index}>
                  <h4 className="mb-2">{`Câu ${index + 1}`}</h4>
                  <div>
                    <fieldset>
                      <legend>{item?.title_question}</legend>
                      {statusExam === 'finished' && (
                        <p className="mt-2">
                          Giải thích: {item?.description_question}
                        </p>
                      )}
                      <hr className="my-4" />

                      <Radio.Group
                        disabled={statusExam !== 'doing'}
                        onChange={(e) => onChangeSelectAnswer(e, item)}
                      >
                        <Space direction="vertical">
                          {item?.list_answer.map(
                            (itemAnswer: any, index: number) => (
                              <Radio key={index} value={index + 1}>
                                <div className="flex items-center">
                                  {itemAnswer?.content}

                                  {statusExam === 'finished' && (
                                    <div>
                                      {item.is_selected ? (
                                        <div>
                                          <div className="ml-2 text-red-700">
                                            {item.is_selected === index + 1 &&
                                              (itemAnswer?.is_correct ? (
                                                <CheckCircleFilled
                                                  style={{
                                                    fontSize: 16,
                                                    color: 'green',
                                                  }}
                                                />
                                              ) : (
                                                <CloseCircleFilled
                                                  style={{ fontSize: 16 }}
                                                />
                                              ))}

                                            {item.is_selected !== index + 1 &&
                                              itemAnswer?.is_correct && (
                                                <CheckCircleFilled
                                                  style={{
                                                    fontSize: 16,
                                                    color: 'green',
                                                  }}
                                                />
                                              )}
                                          </div>
                                        </div>
                                      ) : (
                                        <div>
                                          <div className="ml-2 text-red-700">
                                            {itemAnswer?.is_correct ? (
                                              <CheckCircleFilled
                                                style={{
                                                  fontSize: 16,
                                                  color: 'green',
                                                }}
                                              />
                                            ) : (
                                              <CloseCircleFilled
                                                style={{ fontSize: 16 }}
                                              />
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </Radio>
                            )
                          )}
                        </Space>
                      </Radio.Group>
                    </fieldset>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

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
                fetchDetailExam.isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={fetchDetailExam.isLoading}
              onClick={handleSubmitExam}
            >
              {handleStatusExam()}
            </button>
          </div>
        </div>

        <Modal
          title="Lưu ý"
          open={isOpenModalConfirm.value}
          onOk={handleConfirmSubmit}
          onCancel={isOpenModalConfirm.onFalse}
        >
          <p className="text-orange-700 font-bold text-[1rem]">
            Bạn chưa hoàn thành bài thi, kiểm tra kết quả làm bài ở phía bên
            phải màn hình.
          </p>
          <div className="flex flex-wrap">
            Nếu bạn muốn tiếp tục làm bài, hãy nhấn
            <p className="mx-2 font-bold text-orange-600">CANCEL</p>
          </div>
          <div className="flex flex-wrap">
            Nếu bạn muốn nộp bài, hãy nhấn
            <p className="mx-2 font-bold text-blue-600">OK</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
