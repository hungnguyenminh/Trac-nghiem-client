"use client"
import {Space, Table} from "antd";
import {BarChartOutlined, GlobalOutlined, LayoutOutlined, ProjectOutlined} from "@ant-design/icons";

const columns = [
    {
        title: "Đề thi",
        dataIndex: 'exam',
        key: 'exam',
        render: (_:any, record :any) => (<div className={"md:flex md:items-center"}>
            <img className={"w-16 h-16 rounded-lg shadow-lg shadow-gray-300 mb-2 md:mb-0 md:mr-2"} src={"/img/quiz.jpg"} alt={""}/>
            <span>{record.exam}</span>
        </div>)
    },
    {
        title: 'Tổng số câu hỏi',
        dataIndex: 'SumOfQuestion',
        key: 'SumOfQuestion',
    },
    {
        title: 'Số câu trả lời đúng',
        dataIndex: 'SumOfCorrectAnswer',
        key: 'SumOfCorrectAnswer',
    },
    {
        title: 'Số câu trả lời sai',
        dataIndex: 'SumOfIncorrectAnswer',
        key: 'SumOfIncorrectAnswer',
    },
    {
        title: '',
        key: 'action',
        render: (_:any, record:any) => (
            <Space size="middle">
                <a>Làm lại</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        exam: "Demo",
        SumOfQuestion: 50,
        SumOfCorrectAnswer: 35,
        SumOfIncorrectAnswer: 15,
    },
    {
        key: '2',
        exam: "Demo",
        SumOfQuestion: 50,
        SumOfCorrectAnswer: 35,
        SumOfIncorrectAnswer: 15,
    },
    {
        key: '3',
        exam: "Demo",
        SumOfQuestion: 50,
        SumOfCorrectAnswer: 35,
        SumOfIncorrectAnswer: 15,
    },
    {
        key: '4',
        exam: "Demo",
        SumOfQuestion: 50,
        SumOfCorrectAnswer: 35,
        SumOfIncorrectAnswer: 15,
    },
];
export function ExamDone() {
    return (
        <div className="m-6">
            <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4">
                <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
                    <div className="flex items-center">
                        <div
                            className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                            <ProjectOutlined />
                        </div>
                        <div className="flex-shrink-0 ml-3">
                            <span className="text-2xl font-bold leading-none text-gray-900">600</span>
                            <h3 className="text-base font-normal text-gray-500">Số lượng</h3>
                        </div>
                        <div
                            className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
                            +16%
                            <ProjectOutlined />
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
                    <div className="flex items-center">
                        <div
                            className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                            <LayoutOutlined />
                        </div>
                        <div className="flex-shrink-0 ml-3">
                            <span className="text-2xl font-bold leading-none text-gray-900">2,300</span>
                            <h3 className="text-base font-normal text-gray-500">Trung bình điểm</h3>
                        </div>
                        <div
                            className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
                            +3%
                            <LayoutOutlined />
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
                    <div className="flex items-center">
                        <div
                            className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                            <GlobalOutlined />
                        </div>
                        <div className="flex-shrink-0 ml-3">
                            <span className="text-2xl font-bold leading-none text-gray-900">+3,462</span>
                            <h3 className="text-base font-normal text-gray-500">New Clients</h3>
                        </div>
                        <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-red-500">
                            -2%

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
                    <div className="flex items-center">
                        <div
                            className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                            <BarChartOutlined />
                        </div>
                        <div className="flex-shrink-0 ml-3">
                            <span className="text-2xl font-bold leading-none text-gray-900">$83,430</span>
                            <h3 className="text-base font-normal text-gray-500">Sales</h3>
                        </div>
                        <div
                            className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
                            +5.34%
                        </div>
                    </div>
                </div>
            </div>
            <div className={"card"}>
                <Table columns={columns} dataSource={data}/>
            </div>
        </div>
    )
}