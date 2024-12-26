import { createQuestionRoutePath } from '@/lib/utils';
import { getQuestions } from '@/store/features/config';
import { useAppSelector } from '@/store/hooks';
import { notFound, redirect } from 'next/navigation';

export const useRootRedirect = (): (() => never) => {
  const questions = useAppSelector(getQuestions);

  const rootQuestion = questions.find((q) => q.root);

  if (!rootQuestion) {
    notFound();
  }

  return () => {
    redirect(createQuestionRoutePath(rootQuestion.id));
  };
};
