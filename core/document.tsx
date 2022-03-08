import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { langs } from 'core/texts'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const baseUrl = process.env.NEXT_PUBLIC_SITE_BASEURL

type MyDocumentProps = DocumentInitialProps & {
  origin: string
  styles: JSX.Element
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        origin: baseUrl,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `,
            }}
          />

          <link rel="canonical" href={this.props.origin} />

          {/* See: https://developers.google.com/search/docs/advanced/crawling/localized-versions#html */}
          <link rel="alternate" hrefLang="x-default" href={`${this.props.origin}/`} />
          {langs.map((lang) => (
            <link
              key={lang}
              rel="alternate"
              hrefLang={lang}
              href={`${this.props.origin}/${lang === 'en' ? '' : lang}`}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
