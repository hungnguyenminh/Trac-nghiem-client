'use client';

import { Avatar, Card } from 'antd';
import {
  CopyOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useQuery } from 'react-query';
import { getAllSubject } from "@/api/ApiSubject";
import Image from 'next/image';

const { Meta } = Card;
export function Subject() {
  const getDataSubject = (): Promise<any> => getAllSubject();
  const { data, isLoading } = useQuery('LIST_SUBJECT', getDataSubject);

  console.log('dataSubject', data);

  return (
    <div className="p-4 px-[2rem]">
      <h2>Danh sách môn học</h2>
      <div className="mt-5 grid grid-cols-5 gap-8">
        {data?.data.map((item: any, index: number) => (
          <Card
            key={index}
            style={{ width: 300 }}
            cover={
              <div className="h-[18rem] w-[5rem]">
                <Image
                  src={item?.image_subject ?? '/img/avatar/avatar.jpg'}
                  alt=""
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
            }
            actions={[
              <div>
                <CopyOutlined key="s" />
                <span className="ml-2 font-bold">Xem</span>
              </div>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={item?.name_subject ?? ''}
              description={`${item?.number_chapter} chương`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
