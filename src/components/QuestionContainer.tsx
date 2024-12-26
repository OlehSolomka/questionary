import { cn } from '@/lib/utils';
import React, { ComponentProps } from 'react';

interface QuestionContainer extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export const QuestionContainer = ({ children, className, ...props }: QuestionContainer) => {
  return (
    <div className={cn('flex flex-col gap-[30px]', className)} {...props}>
      {children}
    </div>
  );
};
