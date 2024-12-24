'use client';

import { Button } from './ui/button';
import { OptionElementProps } from '@/lib/types';

export const OptionElementButton = ({ option }: OptionElementProps) => {
  const { description } = option;

  const onOptionClick = () => {};

  return (
    <Button variant={'primary'} className="w-full" onClick={onOptionClick}>
      {description}
    </Button>
  );
};
