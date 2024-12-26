'use client';

import { useAppSelector } from '@/store/hooks';
import { Typography } from './ui/typography';

import { Question } from '@/lib/types';
import { getAnswers } from '@/store/features/questionnaire';
import { parseDynamicValues } from '@/lib/utils';

//think what to do if no answers
export const QuestionDescription = ({ question }: { question: Question }) => {
  const answers = useAppSelector(getAnswers);
  const parsedDesc = parseDynamicValues(question, answers);

  return <Typography>{parsedDesc}</Typography>;
};
