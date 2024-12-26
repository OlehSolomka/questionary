import { Button } from './ui/button';
import { OptionElementProps } from '@/lib/types';

export const OptionElementButton = ({ option, onOptionClick }: OptionElementProps) => {
  const { description } = option;

  return (
    <Button variant={'primary'} className="w-full" onClick={() => onOptionClick(option)}>
      {description}
    </Button>
  );
};
