import { Quiz } from '@/modules/quiz';

const QuizPage = async ({ params }: any) => {
  return <Quiz idExam={params?.slug} />;
};

export default QuizPage;
