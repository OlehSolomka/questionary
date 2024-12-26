import { PageHeader } from '@/components';
import { PageContainer } from '@/components';

export const dynamic = 'force-dynamic';

const ResultLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <PageHeader />
      <PageContainer className="mt-4 pb-8 text-center">{children}</PageContainer>
    </>
  );
};

export default ResultLayout;
