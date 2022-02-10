import '@lib/styles/index.css'
import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import type { AppProps } from 'next/app'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
