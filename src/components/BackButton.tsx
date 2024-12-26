'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from './ui/button';

export interface BackButtonProps extends ButtonProps {
  imageScr?: string;
}

export const BackButton = ({
  imageScr = '/svg/chevron_left-black.svg',
  ...props
}: BackButtonProps) => {
  const router = useRouter();
  return (
    <Button variant="ghost" size="icon" {...props} onClick={() => router.back()}>
      <Image src={imageScr} alt="back" width={24} height={24} />
    </Button>
  );
};
