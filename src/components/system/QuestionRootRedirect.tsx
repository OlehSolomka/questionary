'use client';
import { useRootRedirect } from '@/hooks';

export const QuestionRootRedirect = () => {
  const redirect = useRootRedirect();
  redirect();
  return null;
};
