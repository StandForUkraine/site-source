import Index from 'core/home-page'
import { loadDonations } from 'core/utils/donations'

export async function getStaticProps({ params }: any) {
  const donations = loadDonations(params?.lang)
  return {
    props: {
      donations,
    },
  }
}

export default Index
