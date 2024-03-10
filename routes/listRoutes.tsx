import {
  ContactsOutlined,
  FileOutlined,
  FileWordOutlined,
  HomeOutlined,
  UpCircleOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';

export interface IRoute {
  path: string;
  label: string;
  icon?: ReactNode;
}

const listRoutes: IRoute[] = [
  {
    path: '/home',
    label: 'Trang chủ',
    icon: <HomeOutlined />,
  },
  {
    path: '/exam',
    label: 'Đề thi',
    icon: <FileOutlined />,
  },
  {
    path: '/docs',
    label: 'Tài liệu',
    icon: <FileWordOutlined />,
  },
  {
    path: '/my_exam',
    label: 'Đề thi của tôi',
    icon: <ContactsOutlined />,
  },
  {
    path: '/exam_done',
    label: 'Đề thi đã làm',
    icon: <ContactsOutlined />,
  },
  {
    path: '/upgrade_account',
    label: 'Nâng cấp tài khoản',
    icon: <UpCircleOutlined />,
  },
];

export { listRoutes };
