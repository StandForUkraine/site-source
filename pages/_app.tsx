import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { LangContextProvider } from 'utils/lang'

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
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <LangContextProvider>
        <Component {...pageProps} />
      </LangContextProvider>
    </>
  )
}

export default App
