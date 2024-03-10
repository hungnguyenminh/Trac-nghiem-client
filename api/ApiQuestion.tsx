import { fetcher } from './Fetcher';

interface IParamsGetAllApply {
  isAllRequest?: boolean;
  page?: number;
  size?: number;
  sort?: string[];
  statuses?: string;
}

export interface IItemAllQuestionRes {
  id_question?: number;
  title?: string;
  description?: string;
  answers?: {
    content: string;
    is_correct: boolean;
  }[];
  difficulty_level?: string;
  number_question?: string;
  subject_id?: string | number | null;
  image_question?: string;
  fullname?: string;
  created_at?: string;
}

export interface IGetAllQuestionRes {
  data?: IItemAllQuestionRes[];
}

export interface IGetDetailQuestionRes {
  data?: {
    title: string;
    description: string;
    difficulty_level: string;
    question_type: string;
    image_question: string | null;
    answers: string;
    updated_at: string;
    created_at: string;
    id: number;
  };
}

export interface IItemApplyRes {
  helperInformationId?: number;
  personalAvatar?: string;
  email?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  placeOfResidence?: string;
  homeTown?: string;
  fullName?: string;
  status?: string;
}

export interface IGetAllApplyRes {
  data?: {
    pageNumber?: number;
    pageSize?: number;
    totalElements?: number;
    totalPages?: number;
    numberOfElement?: number;
    content?: IItemApplyRes[];
  };
}

export interface IListServiceDetailApply {
  serviceRegistrationId?: number;
  serviceName?: string;
  serviceIcon?: string;
  createAt?: string;
  status?: string;
}
export interface IGetDetailApplyRes {
  data?: {
    helperInformationId?: number;
    personalAvatar?: string;
    email?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    placeOfResidence?: string;
    homeTown?: string;
    fullName?: string;
    status?: string;
    attachments?: string[];
    services?: IListServiceDetailApply[];
  };
}

export interface IDetailBookingRes {
  data?: {
    bookingId?: number;
    latitude?: number | string;
    longitude?: number | string;
    locationDescription?: string;
    orderDate?: string;
    totalPrice?: number;
    totalPriceActual?: number;
    requestCount?: number;
    rejectionReasonContent?: string | null;
    rejectionReasonDescription?: string | null;
    bookingCode?: string;
    renterName?: string;
    renterAvatar?: string;
    currentStatus?: string;
    details?: {
      bookingDetailId?: number;
      bookingCode?: string;
      orderDate?: string;
      serviceId?: number;
      serviceUnitId?: number;
      serviceName?: string;
      serviceIcon?: string;
      workDate?: string;
      note?: string;
      workTime?: string;
      value?: string;
      equivalent?: number;
      price?: number;
      status?: string;
    }[];
  };
}

export interface IResSetBooking {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

const path = {
  getAllSubject: '/question/get-all',
  createQuestionPath: '/question/create-question',
  deleteQuestionPath: '/question/delete-question',
  getDetailQuestionPath: '/question/detail-question',
  editQuestionPath: '/question/edit-question',

  setBookingForManager: '/booking/setBookingForManager',
  rejectApproveBookingPath: '/booking/manager',
  sendMoney: 'money-request/sendMoney/',
  getAllApply: '/helper-registration',
  cancelApplyPath: '/helper-registration/cancellation',
  acceptApplyPath: '/helper-registration/acceptance',
  confirmApplyPath: '/helper-registration/confirmation',
  setApplyForManager: '/helper-registration/setManager',
};
function getAllQuestion(): Promise<IGetAllQuestionRes> {
  return fetcher({
    url: path.getAllSubject,
    method: 'get',
  });
}

function getDetailQuestion(
  id: number | string | undefined
): Promise<IGetDetailQuestionRes> {
  return fetcher({
    url: `${path.getDetailQuestionPath}/${id}`,
    method: 'get',
  });
}

function createQuestion(body: FormData): Promise<never> {
  return fetcher({
    url: path.createQuestionPath,
    method: 'post',
    data: body,
  });
}

function editQuestion(data: {
  data: FormData;
  id: number | string;
}): Promise<never> {
  return fetcher({
    url: `${path.editQuestionPath}/${data.id}`,
    method: 'post',
    data: data.data,
  });
}

function deleteQuestion(id: number): Promise<never> {
  return fetcher({
    url: `${path.deleteQuestionPath}/${id}`,
    method: 'delete',
  });
}

function getAllApply(params: IParamsGetAllApply): Promise<IGetAllApplyRes> {
  return fetcher({
    url: path.getAllApply,
    method: 'get',
    params: params,
  });
}

function getDetailApplyById(params: {
  id: number;
}): Promise<IGetDetailApplyRes> {
  return fetcher({
    url: `${path.getAllApply}/${params.id}`,
    method: 'get',
  });
}

function cancelApply(params: { id: number; reason: string }): Promise<any> {
  return fetcher({
    url: `${path.cancelApplyPath}/${params.id}`,
    method: 'put',
    data: {
      reason: params.reason,
    },
  });
}

function acceptApply(params: { id: number }): Promise<any> {
  return fetcher({
    url: `${path.acceptApplyPath}/${params.id}`,
    method: 'post',
  });
}

function confirmApply(params: {
  id: number;
  serviceRegistrationIds: number[];
}): Promise<any> {
  return fetcher({
    url: `${path.confirmApplyPath}/${params.id}`,
    method: 'post',
    data: {
      serviceRegistrationIds: params.serviceRegistrationIds,
    },
  });
}

export interface IRes {
  status: string;
  message: string;
  data: null;
}

function setApplyForManager(): Promise<IRes> {
  return fetcher({
    url: path.setApplyForManager,
    method: 'post',
  });
}

function sendMoney(id: number | undefined): Promise<IRes> {
  return fetcher({
    url: `${path.sendMoney}/${id}`,
    method: 'post',
  });
}

export {
  getAllQuestion,
  createQuestion,
  deleteQuestion,
  getDetailQuestion,
  editQuestion,
  getAllApply,
  cancelApply,
  acceptApply,
  confirmApply,
  getDetailApplyById,
  setApplyForManager,
  sendMoney,
};
