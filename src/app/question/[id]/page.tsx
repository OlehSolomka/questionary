import { OptionsList } from '@/components';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const testData = {
  id: 'question_9',
  description: 'Do you agree with the statement below?',
  sub_description: '“My partner and I make sex a priority in our relationship”',
  dynamic_values: null,
  info_break: null,
  screen_type: 'single_choice_text',
  options: [
    {
      description: 'Strongly agree',
      id: 'option_21',
      next: 'question_10',
    },
    {
      description: 'Agree',
      id: 'option_22',
      next: 'question_10',
    },
    {
      description: 'Neutral',
      id: 'option_23',
      next: 'question_10',
    },
    {
      description: 'Disagree',
      id: 'option_24',
      next: 'question_10',
    },
    {
      description: 'Strongly disagree',
      id: 'option_25',
      next: 'question_10',
    },
  ],
};

const SingleQuestionPage = ({}) => {
  const { description, sub_description } = testData;

  const textAlign = sub_description ? 'text-center' : 'text-left';

  return (
    <>
      <div className={cn('flex flex-col gap-[30px]', textAlign)}>
        <Typography>{description}</Typography>
        {sub_description && <Typography variant="secondary">{sub_description}</Typography>}
        <OptionsList />
      </div>
    </>
  );
};

export default SingleQuestionPage;
