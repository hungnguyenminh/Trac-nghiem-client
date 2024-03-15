'use client';

import {
  CheckCircleFilled,
  CheckOutlined,
  CloseCircleFilled, CloseOutlined,
  FlagFilled,
  MinusCircleFilled,
} from '@ant-design/icons';
import { Button, Collapse, Modal } from 'antd';
import {useEffect, useState} from 'react';


export function TestResult() {
  const [isOpen, setIsOpen] = useState(false);
  const listDataLocalStorage: any = localStorage.getItem('listQuestionSubmit');
  const listData: any = JSON.parse(listDataLocalStorage)
  const [listResult, setListResult] = useState<any>()
  const [numberAnswer, setNumberAnswer] = useState({
    totalCorrect: 0,
    totalIncorect: 0,
    notSelect: 0,
  })

  console.log('numberAnswer', numberAnswer)
  console.log('listResult', listResult)

  const convertAnswer = (idAnswer:  1 | 2 | 3 | 4) => {
      if(idAnswer === 1) {
        return 'A'
      }
    if(idAnswer === 2) {
      return 'B'
    }
    if(idAnswer === 3) {
      return 'C'
    }
    if(idAnswer === 4) {
      return 'D'
    }
  }

  useEffect(() => {
    // console.log('listData', listData)
    let arrayTmp: any = [];
    let countAnswerCorrect = 0;
    let notSelect = 0;

    listData.forEach((item: any, index: any) => {
      const answer_correct = item?.list_answer.findIndex((itemanswer: any) => itemanswer?.is_correct === true)
      const newObject = {
        answer_correct: answer_correct + 1,
        answer_selected: item.is_selected,
        result: answer_correct + 1 === item.is_selected
      }

      if(item.is_selected && answer_correct + 1 === item.is_selected) {
        countAnswerCorrect++
      }
      if(!item.is_selected) {
        notSelect++;
      }
      arrayTmp.push(newObject)
    })
    setListResult(arrayTmp)

    setNumberAnswer({
      totalCorrect: countAnswerCorrect,
      totalIncorect: listData.length - countAnswerCorrect - notSelect,
      notSelect: notSelect
    })
  }, []);
  return (
    <div className="m-6 p-6 rounded-lg bg-white shadow-lg shadow-gray-200">
      <h3 className="mb-6">Kết quả</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-x-8 mb-6">
        {/*<div className="p-6 rounded-lg shadow-gray-200 border bg-gray-50 w-full">*/}
        {/*  <div>*/}
        {/*    <table className="w-full text-left text-gray-500">*/}
        {/*      <tbody>*/}
        {/*        <tr>*/}
        {/*          <th*/}
        {/*            scope="row"*/}
        {/*            className="py-4 text-gray-900 whitespace-nowrap"*/}
        {/*          >*/}
        {/*            <CheckCircleFilled />*/}
        {/*          </th>*/}
        {/*          <td className="py-4">Kết quả làm bài</td>*/}
        {/*          <td className="py-4 font-semibold">40/50</td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <th*/}
        {/*            scope="row"*/}
        {/*            className="py-4 text-gray-900 whitespace-nowrap"*/}
        {/*          >*/}
        {/*            <CheckCircleFilled />*/}
        {/*          </th>*/}
        {/*          <td className="py-4">Kết quả làm bài</td>*/}
        {/*          <td className="py-4 font-semibold">40/50</td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <th*/}
        {/*            scope="row"*/}
        {/*            className="py-4 text-gray-900 whitespace-nowrap"*/}
        {/*          >*/}
        {/*            <CheckCircleFilled />*/}
        {/*          </th>*/}
        {/*          <td className="py-4">Kết quả làm bài</td>*/}
        {/*          <td className="py-4 font-semibold">40/50</td>*/}
        {/*        </tr>*/}
        {/*      </tbody>*/}
        {/*    </table>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="rounded-lg border flex flex-col justify-center items-center p-2">
            <h3 className="text-green-700 mb-2">
              <CheckCircleFilled />
            </h3>
            <h4 className="text-green-700 mb-2">Số câu đúng</h4>
            <h3>{numberAnswer?.totalCorrect}</h3>
          </div>
          <div className="rounded-lg border flex flex-col justify-center items-center p-2">
            <h3 className="text-red-700 mb-2">
              <CloseCircleFilled/>
            </h3>
            <h4 className="text-red-700 mb-2">Số câu sai</h4>
            <h3>{numberAnswer?.totalIncorect}</h3>
          </div>
          <div className="rounded-lg border flex flex-col justify-center items-center p-2">
            <h3 className="text-gray-700 mb-2">
              <MinusCircleFilled />
            </h3>
            <h4 className="text-gray-700 mb-2">Bỏ qua</h4>
            <h3>{numberAnswer?.notSelect}</h3>
          </div>
          {/*<div className="rounded-lg border flex flex-col justify-center items-center p-2">*/}
          {/*  <h3 className="text-gray-700 mb-2">*/}
          {/*    <FlagFilled />*/}
          {/*  </h3>*/}
          {/*  <h4 className="text-gray-700 mb-2">Điểm số</h4>*/}
          {/*  <h3>8</h3>*/}
          {/*</div>*/}
        </div>
      </div>
      <h3 className="mb-6">Đáp án</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listResult && listResult.map((item: any, index: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex items-center">
            <div className="rounded-[50%] w-8 h-8 flex items-center justify-center bg-blue-200 text-blue-950 font-bold mr-2">
              <span>{index}</span>
            </div>
            <span className='mr-[0.2rem]'>{convertAnswer(item?.answer_correct)}</span>
            <span className="line-through mr-2">{convertAnswer(item?.answer_selected)}</span>
            {item?.result === true ? <CheckOutlined className="text-green-700 mr-2" /> : <CloseOutlined className='text-red-700' />}


            {/*<Button onClick={() => setIsOpen(true)}>Chi tiết</Button>*/}
          </div>
        ))}
      </div>
      <Modal
        open={isOpen}
        width={1000}
        onCancel={() => setIsOpen(false)}
        title="Câu 1"
        footer={[]}
      >
        <div>
          <h4 className="text-gray-500">Tiêu đề bài thi</h4>
        </div>
        <hr className="my-8" />
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-[50%] flex items-center justify-center bg-blue-200 text-blue-950 font-bold mr-2">
            <span>1</span>
          </div>
          <p>
            Mark the letter A, B, C, or D on your answer sheet to indicate the
            correct answer to each of the following questions
          </p>
        </div>
        <ul className="ml-6">
          <li>
            <span>A. red Japanese expensive</span>
          </li>
          <li>
            <span>B. red Japanese expensive</span>
          </li>
          <li>
            <span>C. red Japanese expensive</span>
          </li>
          <li>
            <span>D. red Japanese expensive</span>
          </li>
        </ul>
        <hr className="my-8" />
        <Collapse
          items={[
            {
              key: '1',
              label: 'Đáp án chi tiết',
              children: (
                <>
                  <p>
                    Khi có nhiều tính từ cùng đứng trước 1 danh từ, sắp xếp
                    chúng theo thứ tự: OSASCOMP + N. Trong đó:
                  </p>
                  <ul>
                    <li>O – opinion: quan điểm</li>
                    <li>S – size: kích thước</li>
                    <li>A – age: độ tuổi (mới, cũ, trẻ, già,…)</li>
                    <li>S – shape: hình dạngm</li>
                    <li>C – color: màu sắc</li>
                    <li>O – origin: nguồn gốc</li>
                  </ul>
                </>
              ),
            },
          ]}
        />
      </Modal>
    </div>
  );
}
