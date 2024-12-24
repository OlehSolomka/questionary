import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './ui/button';

interface InfoButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const InfoButton = ({ children, className, ...props }: Readonly<InfoButtonProps>) => {
  return (
    <Button
      variant="secondary"
      className={cn('h-[50px] text-[18px] font-medium leading-[1.16]', className)}
      {...props}
    >
      {children}
    </Button>
  );
};
