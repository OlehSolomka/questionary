'use client';
import { useAppSelector } from '@/store/hooks';
import { BackButton, BackButtonProps } from './BackButton';
import { getCurrentQuestion } from '@/store/features/questionnaire';

export const HeaderBackButton = ({ ...props }: BackButtonProps) => {
  const currentQuestion = useAppSelector(getCurrentQuestion);
  return currentQuestion?.root ? null : <BackButton {...props} />;
};
