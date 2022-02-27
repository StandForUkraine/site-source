import Index from 'pages/index'
import { langs } from 'texts'

export default Index

export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: langs.map((lang) => ({
      params: { lang },
    })),
  }
}
