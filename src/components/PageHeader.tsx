import Image from 'next/image';
import { HeaderBackButton } from './HeaderBackButton';

interface HeaderProps {
  onClick?: () => void;
  variant?: PageHeaderVariant;
}

type PageHeaderVariant = 'default' | 'info';
type PageHeaderConfigValue = { imageScr: string; logoSrc: string };
type PageHeaderConfig = Record<PageHeaderVariant, PageHeaderConfigValue>;

const headerConfig: PageHeaderConfig = {
  info: {
    logoSrc: '/svg/logo-white.svg',
    imageScr: '/svg/chevron_left-white.svg',
  },
  default: {
    logoSrc: '/svg/logo-black.svg',
    imageScr: '/svg/chevron_left-black.svg',
  },
};

export const PageHeader = ({ variant = 'default' }: HeaderProps) => {
  const { imageScr, logoSrc } = headerConfig[variant];

  return (
    <div className="mx-auto flex h-[44] max-w-[1200px] items-center justify-between px-[15px] sm:h-[54px] sm:px-0">
      <HeaderBackButton imageScr={imageScr} />
      <Image src={logoSrc} alt="main logo" width={24} height={24} className="mx-auto" />
    </div>
  );
};
