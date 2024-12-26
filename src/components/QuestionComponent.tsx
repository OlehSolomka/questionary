'use client';

import { useCurrentQuestion } from '@/hooks';
import { Typography } from './ui/typography';
import { OptionsList } from './OptionsList';
import { QuestionContainer } from './QuestionContainer';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { resetQuestionnaire, updateIsCompleted } from '@/store/features/questionnaire';
import { QuestionDescription } from './QuestionDescription';

const QuestionComponent = ({ questionId }: { questionId: string }) => {
  const dispatch = useAppDispatch();
  const question = useCurrentQuestion(questionId);

  useEffect(() => {
    if (question.root) {
      dispatch(resetQuestionnaire());
    } else {
      dispatch(updateIsCompleted(false));
    }
  }, [question.id, question.root, dispatch]);

  const { helper_text } = question;

  return (
    <QuestionContainer className={question.helper_text ? 'text-center' : 'text-left'}>
      <QuestionDescription question={question} />
      {helper_text && <Typography variant="secondary">{helper_text}</Typography>}
      <OptionsList question={question} />
    </QuestionContainer>
  );
};
export default QuestionComponent;
