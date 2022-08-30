import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
