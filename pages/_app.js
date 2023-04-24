import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from '@/components/LayoutWrapper'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { GridLayoutProvider } from '@/context/GridLayoutContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <GridLayoutProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </GridLayoutProvider>
    </ThemeProvider>
  )
}
