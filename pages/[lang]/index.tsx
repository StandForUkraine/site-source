export { getStaticProps } from 'pages/index'
import Index from 'pages/index'
import { langs } from 'core/texts'

export default Index

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: langs.map((lang) => ({
      params: { lang },
    })),
  }
}
