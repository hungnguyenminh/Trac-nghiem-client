import { fetcher } from '@app/api/Fetcher';

const path = {
  getAllSubject: '/subject/get-all',
  createNewSubject: '/subject/create-subject',
  deleteSubject: '/subject/delete-subject',
  editSubject: '/subject/update-subject',
};

interface IListSubject {
  status?: number;
  data?: [
    {
      id?: 1;
      user_created?: string;
      image_subject?: null;
      description?: string;
      name_subject?: string;
      created_at?: string;
      updated_at?: string;
    }
  ];
}

interface IResponse {
  data: any;
  message: string;
  status: number;
}

function getAllSubject(): Promise<IListSubject> {
  return fetcher({
    url: path.getAllSubject,
    method: 'get',
  });
}

function createNewSubject(data: FormData): Promise<IResponse> {
  return fetcher({
    url: path.createNewSubject,
    method: 'post',
    data: data,
  });
}

function deleteSubject(id: string): Promise<IResponse> {
  return fetcher({
    url: `${path.deleteSubject}/${id}`,
    method: 'delete',
  });
}

function editSubject(data: { data: FormData; id: any }): Promise<IResponse> {
  return fetcher({
    url: `${path.editSubject}/${data.id}`,
    method: 'post',
    data: data.data,
  });
}

export { getAllSubject, createNewSubject, deleteSubject, editSubject };
