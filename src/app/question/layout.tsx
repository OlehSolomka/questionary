import { PageHeader } from '@/components';
import { PageContainer } from '@/components';
import React from 'react';

const QuestionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-background h-screen">
      <PageHeader />
      <PageContainer className="mt-5">{children}</PageContainer>
    </div>
  );
};

export default QuestionLayout;
