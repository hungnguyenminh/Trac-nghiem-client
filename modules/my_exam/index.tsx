"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper/modules";
import {ExamCard} from "@/modules/exam/components/ExamCard";
import MyPagination from "@/components/Pagination";
import React, {useState} from "react";
import {SearchOutlined} from "@ant-design/icons";

export function MyExam() {
    const [activeIndex2, setActiveIndex2] = useState(0);

    const handleSlideChange2 = (swiper: any) => {
        setActiveIndex2(swiper.activeIndex);
    };
    return (
        <div className={"m-6"}>
            <div className={"card mb-6 flex justify-between"}>
                <div>
                    <div className="relative">
                        <div
                            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <SearchOutlined className={"w-5 h-5 text-gray-500"}></SearchOutlined>
                        </div>
                        <input type="text" name="email" id="mobile-search"
                               className="bg-gray-50 border border-gray-300 text-dark-500 text-sm font-light rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full pl-10 p-2.5 "
                               placeholder="Search"/>
                    </div>
                </div>
                <div>
                    <button className={"sm:inline-flex text-white bg-gradient-to-br from-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"}>Làm đề</button>
                </div>
            </div>
            <div className={"card"}>
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
    )
}