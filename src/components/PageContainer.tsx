import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface PageContainerProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-max px-4 sm:max-w-[322px] sm:px-0', className)}>
      {children}
    </div>
  );
};
