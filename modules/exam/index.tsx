'use client';

import React, { useState } from 'react';
import { ExamCard } from './components/ExamCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

import MyPagination from '../../components/Pagination';
import { IGetAllQuestionRes } from '@/api/ApiQuestion';
import { getAllExam } from '@/api/ApiExam';
import { useQuery } from 'react-query';
import { postData } from '@/lib/post-data';

interface Iprops {
  listExam?: any;
}

export function Exam(props: Iprops) {
  const { listExam } = props;

  // const paramApi: any = {
  //     url: `exam-question/get-all`,
  //     method: 'get',
  // };
  //
  // const listExam111=  postData(paramApi).then((res) => console.log('ress', res));
  //
  // console.log('listExam111', listExam111)

  const [activeIndex2, setActiveIndex2] = useState(0);

  // const getDataExam = (): Promise<IGetAllQuestionRes> => getAllExam();

  // const { data, refetch, isLoading } = useQuery('GET_ALL_EXAM', getDataExam);

  const handleSlideChange2 = (swiper: any) => {
    setActiveIndex2(swiper.activeIndex);
  };

  return (
    <div className="m-6">
      <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h2 className="">Mới nhất</h2>
          <a>Xem thêm</a>
        </div>
        <div className="">
          <div className="">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Autoplay, Pagination, A11y]}
              slidesPerView={4}
              spaceBetween={20}
              onSlideChange={handleSlideChange2}
              className="swiper-layout1"
            >
              {listExam &&
                listExam?.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <ExamCard itemExam={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <MyPagination numberOfSlide={5} activeIndex={activeIndex2} />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="">Nổi bật</h2>
          <a>Xem thêm</a>
        </div>
        <div className="">
          <div className="">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Autoplay, Pagination, A11y]}
              slidesPerView={4}
              spaceBetween={20}
              onSlideChange={handleSlideChange2}
              className="swiper-layout1"
            >
              {listExam &&
                listExam?.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <ExamCard itemExam={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <MyPagination numberOfSlide={5} activeIndex={activeIndex2} />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="">Mới nhất</h2>
          <a>Xem thêm</a>
        </div>
        <div className="">
          <div className="">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Autoplay, Pagination, A11y]}
              slidesPerView={4}
              spaceBetween={20}
              onSlideChange={handleSlideChange2}
              className="swiper-layout1"
            >
              {listExam &&
                listExam?.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <ExamCard itemExam={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <MyPagination numberOfSlide={5} activeIndex={activeIndex2} />
          </div>
        </div>
      </div>
    </div>
  );
}
