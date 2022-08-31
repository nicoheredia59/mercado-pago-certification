import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/main'
import { SWRConfig } from 'swr'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (resource, init) => await fetch(resource, init).then(async res => await res.json())
      }}
    >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SWRConfig>
  )
}

export default MyApp
