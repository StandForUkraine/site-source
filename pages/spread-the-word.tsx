import { loadSocialFeed, SocialFeedPost } from 'core/utils/social-feed/feed'
import SpreadTheWordPage from 'core/spread-the-word-page'

export default ({ feed }: { feed: SocialFeedPost[] }) => <SpreadTheWordPage feed={feed} />

export async function getStaticProps() {
  const feed = await loadSocialFeed()
  return {
    props: {
      feed,
    },
  }
}
