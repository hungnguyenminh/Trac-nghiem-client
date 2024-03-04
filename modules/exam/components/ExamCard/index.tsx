"use client";
import {
  HeartOutlined,
  HistoryOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {Avatar, Modal} from "antd";
import React from "react";
import {useRouter} from "next/navigation";

export function ExamCard() {
  const router = useRouter()
  return (
    <div className="w-full rounded-lg border bg-white overflow-hidden hover:shadow-lg">
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src="/img/quiz.jpg"
          className="w-full h-[168px] overflow-hidden"
        ></img>
      </div>
      <div className="p-4">
        <div>
          <p className="mb-3">Exam title</p>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <Avatar></Avatar>
            <span className="ml-2">Nguyen Van An</span>
          </div>
          <div className="flex justify-center items-center">
            <HistoryOutlined />
            <span className="ml-2">19/02/2024</span>
          </div>
        </div>
        <div className="flex mb-3">
          <div>
            <LikeOutlined></LikeOutlined>
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
            <button onClick={() => {router.push("/quiz")}} className="h-8 px-4 rounded-sm bg-blue-600 text-white">
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
    </div>
  );
}
