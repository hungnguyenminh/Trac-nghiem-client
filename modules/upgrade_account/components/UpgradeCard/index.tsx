'use client';

import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import { Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

interface IProp {
  title: string;
  price?: number;
  time?: string;
  listBenefit: string[];
}

export default function UpgradeCard(props: IProp): JSX.Element {
  const { title, price, time, listBenefit } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-2xl shadow-xl shadow-gray-200 xl:p-8">
      <div className="flex-1">
        <h4 className="mb-4 text-gray-500">{title}</h4>
        {price && time ? (
          <div className="flex justify-center items-baseline text-gray-900">
            <h2 className="tracking-tight">{price}</h2>
            <h3 className="">VNĐ</h3>
            <h5 className="ml-1 text-xl font-normal text-gray-500">/{time}</h5>
          </div>
        ) : (
          <></>
        )}

        <ul role="list" className="my-7 space-y-5">
          {listBenefit.map((item, index) => (
            <li className="flex space-x-3" key={index}>
              <CheckCircleFilled />
              <span className="text-sm md:text-base font-normal leading-tight text-gray-500">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {price && time ? (
        <a
          href="#"
          onClick={() => {
            openModal();
          }}
          className="text-white hover:scale-[1.02] bg-primary shadow-md shadow-gray-300 transition-transform font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Choose plan
        </a>
      ) : (
        <></>
      )}
      <Modal
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
      >
        <h2 className="mb-4">Nâng cấp tài khoản</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="col-span-1 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-6 px-6 h-full ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
              <div className="flex-1">
                <h4 className="mb-4 text-gray-500">{title}</h4>
                {price && time ? (
                  <div className="flex justify-center items-baseline text-gray-900">
                    <h2 className="tracking-tight">{price}</h2>
                    <h3 className="">VNĐ</h3>
                    <h5 className="ml-1 text-xl font-normal text-gray-500">
                      /{time}
                    </h5>
                  </div>
                ) : (
                  <></>
                )}

                <ul role="list" className="my-7 space-y-5">
                  {listBenefit.map((item, index) => (
                    <li className="flex space-x-3" key={index}>
                      <CheckCircleFilled />
                      <span className="text-sm md:text-base font-normal leading-tight text-gray-500">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Form layout="vertical">
              <Form.Item
                name="price"
                label="Giá"
                style={{ marginBottom: '12px' }}
              >
                <Input value="40.000VND" />
              </Form.Item>
              <Form.Item
                name="voucher"
                label="Mã giảm giá"
                style={{ marginBottom: '12px' }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="paymentMethod"
                label="Chọn phương thức thanh toán"
                style={{ marginBottom: '12px' }}
              >
                <Input />
              </Form.Item>
              <div className="bg-gray-50 py-2 px-2 rounded-md border">
                <div className="flex justify-between py-2 border-b">
                  <span>Gói tài khoản</span>
                  <span>40,000 VNĐ</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Giảm giá</span>
                  <span>4,000 VNĐ</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Số tiền thanh toán</span>
                  <span>36,000 VNĐ</span>
                </div>
              </div>
              <Form.Item style={{ marginBottom: '12px' }}>
                <button
                  type="submit"
                  className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {' '}
                  Xác nhận thanh toán
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
