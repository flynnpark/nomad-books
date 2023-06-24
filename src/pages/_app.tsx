import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import { useState } from 'react';

import Header from '~/components/Header';
import { GlobalStyle } from '~/styles/global';
import { ContentContainer } from '~/styles/layout';

function CustomApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: unknown }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Header />
        <ContentContainer>
          <Component {...pageProps} />
        </ContentContainer>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
