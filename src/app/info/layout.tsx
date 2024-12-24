import { PageHeader } from '@/components';
import { PageContainer } from '@/components';
import React from 'react';

const InfoLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-screen bg-gradient-primary">
      <PageHeader variant="info" />
      <PageContainer className="mt-4 text-center">{children}</PageContainer>
    </div>
  );
};

export default InfoLayout;
