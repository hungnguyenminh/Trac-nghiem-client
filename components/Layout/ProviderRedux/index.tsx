'use client';

import { Provider } from 'react-redux';
import store, { persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Config from '@/config';

export function ProviderRedux({ children }: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: Config.NETWORK_CONFIG.RETRY,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}
