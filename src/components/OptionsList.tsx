import { OptionElementProps, Question, ScreenType } from '@/lib/types';
import { OptionElementButton } from './OptionElementButton';

const testData: Question = {
  id: 'question_9',
  root: false,
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

export const OptionsList = () => {
  const { options, screen_type } = testData;

  //add more screen types and map them to the corresponding option element
  const optionElementMap: Record<ScreenType, React.ElementType<OptionElementProps>> = {
    single_choice_text: OptionElementButton,
  } as const;

  const OptionElement = optionElementMap[screen_type];

  return (
    <ul className="flex flex-col gap-4">
      {options.map((option) => (
        <li key={option.id}>
          <OptionElement option={option} />
        </li>
      ))}
    </ul>
  );
};
