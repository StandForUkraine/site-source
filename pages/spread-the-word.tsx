import { loadSocialFeed } from 'core/utils/social-feed/feed'
import SpreadTheWordPage from 'core/spread-the-word-page'

export default SpreadTheWordPage;

export async function getStaticProps() {
  const feed = await loadSocialFeed();
  return {
    props: {
      feed,
    },
  }
}
