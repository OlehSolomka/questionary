import { PageHeader } from '@/components';
import { PageContainer } from '@/components';
import React from 'react';

const ResultLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <PageHeader />
      <PageContainer className="mt-4 pb-8 text-center">{children}</PageContainer>
    </>
  );
};

export default ResultLayout;
