import { fetcher } from './Fetcher';

interface IDataSubmitCreateExam {
  title: string;
  description: string;
  duration: number;
  number_of_question: number;
  subject_id: number;
  list_question_id: any;
}

export interface IItemGetAllExamRes {
  id?: number;
  title?: string;
  duration?: number;
  description?: string;
  number_of_question?: string;
  name_subject?: string;
  create_by?: string;
  created_at?: string;
  updated_at?: string;
}
export interface IItemQuestionDetailExam {
  id_question?: number;
  title_question?: string;
  description_question?: string;
  difficulty_level?: string;
  question_type?: string;
  subject_question?: string;
  image_question?: string | null;
  list_answer?: {
    content: string;
    is_correct: boolean;
  }[];
}

export interface IDetailRes {
  data?: {
    id?: number;
    title?: string;
    duration?: 60;
    description?: string;
    number_of_question?: string;
    created_by?: string;
    name_subject?: string;
    id_subject?: number;
    list_question?: IItemQuestionDetailExam[];
    created_at?: string;
    updated_at?: string;
  };
}

export interface IGetAllExamRes {
  data?: IItemGetAllExamRes[];
}

const path = {
  getAllExam: '/exam-question/get-all',
  getDetailExamPath: 'exam-question/detail-exam',
  createExamPath: '/exam-question/create-exam',
  editExamPath: '/exam-question/edit-exam',
  deleteExamPath: '/exam-question/delete-exam',
};
function getAllExam(): Promise<IGetAllExamRes> {
  return fetcher({
    url: path.getAllExam,
    method: 'get',
  });
}
function getDetailExam(id: any): Promise<IDetailRes> {
  return fetcher({
    url: `${path.getDetailExamPath}/${id}`,
    method: 'get',
  });
}
function createExam(body: IDataSubmitCreateExam): Promise<never> {
  return fetcher({
    url: path.createExamPath,
    method: 'post',
    data: body,
  });
}

function editExam(data: {
  body: IDataSubmitCreateExam;
  id: number;
}): Promise<never> {
  return fetcher({
    url: `${path.editExamPath}/${data.id}`,
    method: 'post',
    data: data.body,
  });
}
function deleteExam(id: number): Promise<never> {
  return fetcher({
    url: `${path.deleteExamPath}/${id}`,
    method: 'delete',
  });
}

export { getAllExam, getDetailExam, createExam, editExam, deleteExam };
