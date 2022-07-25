import Index from 'core/home-page'
import { DonationItem, loadDonations } from 'core/utils/donations'
import WidgetScript from 'core/components/WidgetScript'

export async function getStaticProps({ params }: any) {
  const donations = loadDonations(params?.lang)
  return {
    props: {
      donations,
    },
  }
}

export default ({ donations }: { donations: DonationItem[] }) => (
  <>
    <Index donations={donations} />
    <WidgetScript />
  </>
)
