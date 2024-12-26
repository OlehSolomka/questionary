import config from '../../../config.json';
import QuestionComponent from '@/components/QuestionComponent';

export async function generateStaticParams() {
  const questions = config.questionnaire.questions;

  return questions.map((question) => ({
    id: question.id,
  }));
}

export const dynamicParams = false;

const SingleQuestionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <QuestionComponent questionId={id} />;
};

export default SingleQuestionPage;
