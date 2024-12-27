'use client';

import { AppStore, makeStore } from '@/store';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  readonly children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
