import { loadSocialFeed, SocialFeedPost } from 'core/utils/social-feed/feed'
import SpreadTheWordPage from 'core/spread-the-word-page'
import WidgetScript from 'core/components/WidgetScript'

export default ({ feed }: { feed: SocialFeedPost[] }) => (
  <>
    <SpreadTheWordPage feed={feed} />
    <WidgetScript />
  </>
)

export async function getStaticProps() {
  const feed = await loadSocialFeed()
  return {
    props: {
      feed,
    },
  }
}
