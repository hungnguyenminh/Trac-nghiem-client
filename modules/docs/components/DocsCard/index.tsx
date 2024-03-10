'use client';

import {
  HeartOutlined,
  HistoryOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import { useRouter } from 'next/navigation';

export function DocsCard() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/detail_docs');
  };
  return (
    <div className="w-full rounded-lg border bg-white overflow-hidden hover:shadow-lg">
      <div className="flex justify-center items-center overflow-hidden">
        <img src="/img/quiz.jpg" className="w-full h-[168px] overflow-hidden" />
      </div>
      <div className="p-4">
        <div>
          <p className="mb-3">Exam title</p>
        </div>
        <div className="flex mb-3">
          <div className="flex justify-center items-center">
            <HistoryOutlined />
            <span className="ml-2">19/02/2024</span>
          </div>
        </div>
        <div className="flex mb-3">
          <div>
            <LikeOutlined />
            <span>20</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="badge mb-2">Chủ đề 1</div>
          <div className="badge mb-2">Chủ đề 1</div>
          <div className="badge mb-2">Chủ đề 1</div>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              className="h-8 px-4 rounded-sm bg-blue-600 text-white"
              onClick={handleOnClick}
            >
              Xem chi tiết
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
    </div>
  );
}
