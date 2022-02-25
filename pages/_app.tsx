import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

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

const defaultTitle = 'Stand For Ukraine'
const defaultDescription =
  'Support Ukraine in the face of Russian military aggression. Donate to verified projects to help Armed Forces of Ukraine or humanitarian charities. Inform the public by sharing our newslets.'
const defaultImage = '/thumbnail.png'

export const renderMetaData = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
}: {
  title?: string
  description?: string
  image?: string
}) => {
  const fullImage = 'https://standforukraine.com' + image

  return (
    <>
      <title>Stand For Ukraine</title>
      <meta property="og:type" content="article" />

      <meta property="og:site_name" content={title} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="name" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta itemProp="image" content={fullImage} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:image" content={fullImage} />
    </>
  )
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
