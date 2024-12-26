import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-normal whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-button text-primary-foreground shadow-button hover:bg-primary-button/70 active:bg-gradient-primary active:text-secondary-foreground',
        secondary:
          'bg-secondary-button text-accent-foreground shadow-button hover:bg-secondary-button/80',
        ghost: '',
      },
      size: {
        default: 'h-[64px] whitespace-normal px-[16px] py-[12px] leading-[1.4]',
        sm: 'h-8 whitespace-normal rounded-md px-3 text-xs leading-[1.4]',
        lg: 'h-10 whitespace-normal rounded-md px-8 leading-[1.4]',
        icon: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
