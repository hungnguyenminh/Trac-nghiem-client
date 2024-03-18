import { Quiz } from '@/modules/quiz';
import { postData } from '@/lib/post-data';
import { map } from 'lodash';

export async function generateStaticParams() {
  const paramApi: any = {
    url: `exam-question/get-all`,
    method: 'get',
  };

  const listExam = await postData(paramApi);

  return map(listExam?.data, (item: any, index: number) => ({
    slug: item?.id.toString() || undefined,
  }));
}
const QuizPage = async ({ params }: any) => {
  return <Quiz idExam={params?.slug} />;
};

export default QuizPage;
