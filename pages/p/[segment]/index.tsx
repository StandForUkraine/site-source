export { getStaticPaths } from 'core/post-page'
import Page from 'core/post-page'
import { loadDonations } from 'core/utils/donations'
import { posts } from 'core/utils/posts'

export async function getStaticProps({ params }: any) {
  const postData = posts.find((p) => p.segment === params.segment.toLowerCase().trim())
  const donations = loadDonations(params?.lang)
  return {
    props: {
      donations,
      postData,
    },
  }
}

export default Page
