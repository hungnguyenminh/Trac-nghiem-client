import { Exam } from '@/modules/exam';
import React from 'react';
import { postData } from '@/lib/post-data';

const ExamPage = async () => {
  const paramApi: any = {
    url: `exam-question/get-all`,
    method: 'get',
  };

  const listExam = await postData(paramApi);

  return <Exam listExam={listExam?.data} />;
};

export default ExamPage;
