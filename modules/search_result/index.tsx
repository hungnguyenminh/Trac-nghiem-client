"use client"
import {Form, Select, SelectProps} from "antd";
import {ExamCard} from "@/modules/exam/components/ExamCard";
import {CloseOutlined, FilterOutlined} from "@ant-design/icons";
import React, {useState} from "react";

export function SearchResult() {

    const [isOpenFilter ,setIsOpenFilter] = useState(false);
    const options: SelectProps['options'] = [
        {
            value: 'NextJs',
            label: 'NextJs'
        },
        {
            value: 'ReactJs',
            label: 'ReactJs'
        },
        {
            value: 'Java',
            label: 'Java'
        },
        {
            value: 'PHP',
            label: 'PHP'
        },

    ];

    return (
        <div className={"grid grid-cols-4 gap-8 relative m-6"}>
            <div
                className={`flex flex-col lg:static fixed top-0 left-0 z-20 bg-gray-50 lg:bg-white border lg:border-0 pt-16 lg:p-6 w-64 h-full duration-200 lg:col-span-1 lg:rounded-xl lg:shadow-lg lg:shadow-gray-200 transition-width lg:w-full ${isOpenFilter ? "" : "hidden"} lg:flex`}>
                <div className={"flex justify-between border-b pb-4 mb-4 px-2 pt-6 lg:pt-0"}>
                    <h3>Bộ lọc</h3>
                    <button className={"lg:hidden"} onClick={() => {
                        setIsOpenFilter(!isOpenFilter)
                    }}><CloseOutlined/></button>
                </div>
                <div className={"flex flex-col flex-1 bg-gray-50 lg:bg-white px-2 pt-6 lg:p-0"}>
                    <Form
                        layout={"vertical"}
                    >
                        <Form.Item name={"level"} label={"Độ khó"}>
                            <Select
                                options={[
                                    {value: 'easy', label: 'Dễ'},
                                    {value: 'medium', label: 'Trung bình'},
                                    {value: 'hard', label: 'Khó'},
                                ]}
                                size={"large"}
                            />
                        </Form.Item>
                        <Form.Item name={"topic"} label={"Chủ đề"}>
                            <Select
                                mode="tags"
                                placeholder="Chủ đề"
                                options={options}
                                size={"large"}
                            />
                        </Form.Item>
                        <Form.Item name={"arrange"} label={"Xắp sếp"}>
                            <Select
                                defaultValue="newest"
                                options={[
                                    {value: 'newest', label: 'Mới nhất'},
                                    {value: 'noibat', label: 'Nổi bật nhất'},
                                ]}
                                size={"large"}
                            />
                        </Form.Item>
                        <Form.Item name={"skill"} label={"Kĩ năng"}>
                            <Select
                                options={[
                                    {value: 'skill1', label: 'Kĩ năng'},
                                    {value: 'skill2', label: 'Kĩ năng'},
                                    {value: 'skill3', label: 'Kĩ năng'},
                                ]}
                                size={"large"}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={`fixed inset-0 z-10 bg-gray-900 opacity-50 lg:hidden ${isOpenFilter ? "" : "hidden"}`}
                 onClick={() => setIsOpenFilter(!isOpenFilter)}></div>
            <div className={"col-span-4 lg:col-span-3 p-6 bg-white rounded-xl shadow-lg shadow-gray-200"}>
                <div className={"flex justify-between border-b pb-4 mb-4"}>
                    <h3>Đề thi</h3>
                    <button className={"lg:hidden"} onClick={() => {
                        setIsOpenFilter(!isOpenFilter)
                    }}><FilterOutlined/></button>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                    <div className={"col-span-1"}>
                        <ExamCard></ExamCard>
                    </div>
                </div>
            </div>
        </div>
    )
}