import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { LangContextProvider } from 'core/utils/lang'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  html,
  body,
  div#__next {
    height: 100%;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }
`

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      const gtag = (window as any).gtag as any
      gtag('config', GA_ID, { page_path: url })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <LangContextProvider>
        <Component {...pageProps} />
      </LangContextProvider>
    </>
  )
}

export default App
