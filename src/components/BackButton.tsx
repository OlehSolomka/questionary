import Image from 'next/image';
import { Button, ButtonProps } from './ui/button';

interface BackButtonProps extends ButtonProps {
  imageScr?: string;
}

export const BackButton = ({
  imageScr = '/svg/chevron_left-black.svg',
  ...props
}: BackButtonProps) => {
  return (
    <Button variant="ghost" size="icon" {...props}>
      <Image src={imageScr} alt="back" width={24} height={24} />
    </Button>
  );
};
