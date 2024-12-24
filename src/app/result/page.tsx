import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import config from '../../config.json';

const ResultPage = () => {
  const questions = config.questionaree.questions;
  return (
    <>
      <Typography variant="primary" className="text-primary-foreground">
        Congratulation!
      </Typography>
      <Typography variant="helper" className="text-primary-foreground mt-4">
        You have successfully completed the quiz!
      </Typography>

      <ul className="mt-4 flex flex-col gap-3 text-left">
        {questions.map((question) => (
          <li key={question.id} className="flex flex-col">
            <Typography variant="muted" className="text-primary-foreground">
              {question.description}
            </Typography>
            <Typography variant="muted" className="text-primary-foreground/50 ml-4">
              {question.description}
            </Typography>
          </li>
        ))}
      </ul>

      <Button variant="primary" size="sm" className="mt-8 w-full">
        Start again
      </Button>
    </>
  );
};

export default ResultPage;
