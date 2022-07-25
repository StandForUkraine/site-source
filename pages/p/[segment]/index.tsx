export { getStaticPaths } from 'core/post-page'
import Page, { PostPageParams } from 'core/post-page'
import { loadDonations } from 'core/utils/donations'
import { posts } from 'core/utils/posts'
import WidgetScript from 'core/components/WidgetScript';

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

export default (params: PostPageParams) => (
  <>
    <Page {...params} />
    <WidgetScript />
  </>
)
