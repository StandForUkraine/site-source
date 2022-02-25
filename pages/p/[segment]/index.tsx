import { LandingPage, posts, PostItem } from 'pages/index'
import Head from 'next/head'
import { renderMetaData } from 'pages/_app'

export default ({ postData }: { postData: PostItem }) => (
  <>
    <Head>
      {renderMetaData({
        title: postData.imageAlt,
        image: postData.image,
      })}
    </Head>
    <LandingPage />
  </>
)

export async function getStaticProps({ params }: any) {
  const postData = posts.find((p) => p.segment === params.segment.toLowerCase().trim())
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: posts.map((p) => ({
      params: { segment: p.segment },
    })),
  }
}
