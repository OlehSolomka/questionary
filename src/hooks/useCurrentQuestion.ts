import { getQuestions } from '@/store/features/config';
import { getCurrentQuestion, updateCurrentQuestion } from '@/store/features/questionnaire';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export const useCurrentQuestion = (id: string) => {
  const dispatch = useAppDispatch();

  const storedCurrentQuestion = useAppSelector(getCurrentQuestion);
  const questions = useAppSelector(getQuestions);

  const currentQuestion = questions.find((q) => q.id === id);

  if (!currentQuestion) {
    notFound();
  }

  useEffect(() => {
    if (storedCurrentQuestion?.id !== currentQuestion.id) {
      dispatch(updateCurrentQuestion(currentQuestion));
    }
  }, [dispatch, currentQuestion, storedCurrentQuestion]);

  return currentQuestion;
};
