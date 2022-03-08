import Index from 'core/home-page'
import { loadDonations } from 'core/utils/donations'

export async function getStaticProps() {
  const donations = loadDonations()
  return {
    props: {
      donations,
    },
  }
}

export default Index
