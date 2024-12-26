'use client';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { useAppSelector } from '@/store/hooks';
import { getAnswers, getIsCompleted } from '@/store/features/questionnaire';
import { buildOrderedResultDataArray } from '@/lib/utils';
import { useRootRedirect } from '@/hooks';

const ResultPage = () => {
  const answers = useAppSelector(getAnswers);
  const isCompleted = useAppSelector(getIsCompleted);

  const redirectToRootQuestion = useRootRedirect();

  if (!isCompleted) {
    redirectToRootQuestion();
    return null;
  }

  const orderedResultDataArray = buildOrderedResultDataArray(answers);
  if (!orderedResultDataArray) return null;

  return (
    <>
      <Typography variant="primary" className="text-primary-foreground">
        Congratulation!
      </Typography>
      <Typography variant="helper" className="mt-4 text-primary-foreground">
        You have successfully completed the quiz!
      </Typography>

      <ul className="mt-4 flex flex-col gap-5 text-left">
        {orderedResultDataArray.map(({ answer_description, description_short }) => {
          return (
            <li key={description_short} className="flex flex-col">
              <Typography variant="muted" className="text-primary-foreground">
                {description_short}
              </Typography>
              <Typography variant="muted" className="ml-4 text-right text-primary-foreground/50">
                {answer_description}
              </Typography>
            </li>
          );
        })}
      </ul>

      <Button onClick={redirectToRootQuestion} size="sm" className="mt-8 w-full">
        Start again
      </Button>
    </>
  );
};

export default ResultPage;
