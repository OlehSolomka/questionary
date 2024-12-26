import { PageHeader } from '@/components';
import { PageContainer } from '@/components';

const QuestionLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary-background">
      <PageHeader />
      <PageContainer className="mt-5 pb-8">{children}</PageContainer>
    </div>
  );
};

export default QuestionLayout;
