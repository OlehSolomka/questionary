import { cn } from '@/lib/utils';
import React, { ComponentProps, ElementType } from 'react';

type TypographyVariant = 'primary' | 'secondary' | 'helper' | 'muted';

type TypographyProps<T extends ElementType = 'p'> = {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: T;
} & ComponentProps<T>;

const typographyStyles: {
  [key in TypographyVariant]: string;
} = {
  primary: 'text-2xl leading-7 font-bold',
  secondary: 'text-[18px] leading-7 font-bold',
  helper: 'text-sm leading-[1.8]',
  muted: 'text-[12px] leading-[1.4]',
} as const;

export const Typography = ({
  variant = 'primary',
  as: Tag = 'p',
  className,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Tag className={cn('', typographyStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
