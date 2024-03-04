"use client";
import React, {useState} from "react";
import {ExamCard} from "./components/ExamCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, A11y, Navigation, Pagination} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import MyPagination from "../../components/Pagination";

const listExam = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export function Exam() {
    const [activeIndex2, setActiveIndex2] = useState(0);

    const handleSlideChange2 = (swiper: any) => {
        setActiveIndex2(swiper.activeIndex);
    };

    return (
        <div className={"m-6"}>
            <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="">Mới nhất</h2>
                    <a>Xem thêm</a>
                </div>
                <div
                    className="">
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
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                        </Swiper>
                        <MyPagination
                            numberOfSlide={5}
                            activeIndex={activeIndex2}
                        ></MyPagination>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200 mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="">Nổi bật</h2>
                    <a>Xem thêm</a>
                </div>
                <div
                    className="">
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
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                        </Swiper>
                        <MyPagination
                            numberOfSlide={5}
                            activeIndex={activeIndex2}
                        ></MyPagination>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200 mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="">Mới nhất</h2>
                    <a>Xem thêm</a>
                </div>
                <div
                    className="">
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
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExamCard></ExamCard>
                            </SwiperSlide>
                        </Swiper>
                        <MyPagination
                            numberOfSlide={5}
                            activeIndex={activeIndex2}
                        ></MyPagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
