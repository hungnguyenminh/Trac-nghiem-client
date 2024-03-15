'use client';

import {
  HeartOutlined,
  HistoryOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import {Avatar, Modal} from 'antd';
import React from 'react';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/ultils/format-date';
import {useSelector} from "react-redux";
import {useBoolean} from "@/ultils/custom-hook";

interface IProps {
  itemExam?: any;
}
export function ExamCard(props: IProps) {
  const { itemExam } = props;
  const router = useRouter();
  const user = useSelector((state: any) => state.user);
  const isOpenModal = useBoolean(false)

  const handleStartExam = (): void => {
    console.log('user', user)
      if(user?.access_token){
        router.push(`/quiz/${itemExam?.id}`);
        return;
      }
      isOpenModal.onTrue()
  }

  const startExam = (): void => {
    router.push(`/login`);
    isOpenModal.onFalse();
  }

  return (
    <div className="w-full rounded-lg border bg-white overflow-hidden hover:shadow-lg">
      <div className="flex justify-center items-center overflow-hidden">
        <img src="/img/quiz.jpg" className="w-full h-[168px] overflow-hidden" />
      </div>
      <div className="p-4">
        <div>
          <p className="mb-3">{itemExam?.title}</p>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <Avatar />
            <span className="ml-2">{itemExam?.create_by}</span>
          </div>
          <div className="flex justify-center items-center">
            <HistoryOutlined />
            <span className="ml-2">{formatDate(itemExam?.created_at)}</span>
          </div>
        </div>
        <div className="flex mb-3">
          <div>
            <LikeOutlined />
            <span>20</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="badge mb-2">{itemExam?.name_subject}</div>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              onClick={handleStartExam}
              className="h-8 px-4 rounded-sm bg-blue-600 text-white"
            >
              Bắt đầu
            </button>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center items-center hover:text-blue-500">
              <LikeOutlined />
            </div>
            <div className="mr-2 flex justify-center items-center hover:text-red-500">
              <HeartOutlined />
            </div>
          </div>
        </div>
      </div>
      <Modal title="Bạn chưa đăng nhập" open={isOpenModal.value} onOk={startExam} onCancel={isOpenModal.onFalse}>
        <p>Bạn chưa đăng nhập, vui lòng đăng nhập để làm đề!</p>
      </Modal>

    </div>
  );
}
