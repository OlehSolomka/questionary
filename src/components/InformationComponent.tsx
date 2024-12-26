'use client';
import { useAppSelector } from '@/store/hooks';
import { InfoButton } from './InfoButton';
import { Typography } from './ui/typography';
import { getCurrentQuestion, getInfoBreakData, getAnswers } from '@/store/features/questionnaire';

import { useRootRedirect } from '@/hooks';
import { useRouter } from 'next/navigation';
import { createQuestionRoutePath } from '@/lib/utils';

export const InformationComponent = () => {
  const redirectToRootQuestion = useRootRedirect();
  const router = useRouter();
  const currentQuestion = useAppSelector(getCurrentQuestion);
  const answers = useAppSelector(getAnswers);
  const infoBreakData = useAppSelector(getInfoBreakData);

  if (!infoBreakData) {
    redirectToRootQuestion();
    return null;
  }

  const handleNext = () => {
    if (!currentQuestion) {
      redirectToRootQuestion();
      return;
    }

    const nextQuestionId = answers[currentQuestion.id].answer.next;
    router.push(createQuestionRoutePath(nextQuestionId));
  };

  return (
    <>
      <Typography variant="primary" className="text-secondary-foreground">
        {infoBreakData.title}
      </Typography>
      <Typography variant="helper" className="mt-4 text-secondary-foreground">
        {infoBreakData.description}
      </Typography>
      <InfoButton onClick={handleNext} className="mt-10 w-full">
        Next
      </InfoButton>
    </>
  );
};
