import { PageHeader } from '@/components';
import { PageContainer } from '@/components';

export const dynamic = 'force-dynamic';

const InfoLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <PageHeader variant="info" />
      <PageContainer className="mt-4 pb-8 text-center">{children}</PageContainer>
    </div>
  );
};

export default InfoLayout;
