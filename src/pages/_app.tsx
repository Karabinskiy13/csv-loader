import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/Pagination.tsx';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
