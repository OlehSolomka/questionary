'use client';

import { Option, OptionElementProps, Question, ScreenType } from '@/lib/types';
import { OptionElementButton } from './OptionElementButton';
import { useAppDispatch } from '@/store/hooks';
import {
  answerQuestion,
  updateInfoBreakData,
  updateIsCompleted,
} from '@/store/features/questionnaire';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/constants';

//add more screen types and map them to the corresponding option element
const optionElementMap: Record<ScreenType, React.ElementType<OptionElementProps>> = {
  single_choice_text: OptionElementButton,
} as const;

export const OptionsList = ({ question }: { question: Question }) => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { options, screen_type, info_break } = question;

  const OptionElement = optionElementMap[screen_type];

  const onOptionClick = (option: Option) => {
    if (isPending) return;

    startTransition(() => {
      dispatch(answerQuestion({ question, answer: option }));

      switch (true) {
        case Boolean(info_break):
          dispatch(updateInfoBreakData(question.info_break));
          router.push(ROUTES.INFO);
          break;
        case Boolean(option.next):
          router.push(String(option.next));
          break;

        default:
          dispatch(updateIsCompleted(true));
          router.push(ROUTES.RESULT);
      }
    });
  };

  return (
    <ul className="flex flex-col gap-4">
      {options.map((option) => (
        <li key={option.id}>
          <OptionElement option={option} onOptionClick={onOptionClick} />
        </li>
      ))}
    </ul>
  );
};
