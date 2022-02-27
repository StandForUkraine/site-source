import Head from 'next/head'
import { useMetadataRenderer } from 'utils/metadata'
import LandingPage from 'components/LandingPage'
import { PostItem, posts } from 'utils/posts'
import { langs } from 'texts'
import { DonationItem, loadDonations } from 'utils/donations'

export default ({ postData, donations }: { postData: PostItem; donations: DonationItem[] }) => {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>
        {renderMetadata({
          title: postData.imageAlt,
          image: postData.image,
        })}
      </Head>
      <LandingPage donations={donations} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const postData = posts.find((p) => p.segment === params.segment.toLowerCase().trim())
  const donations = loadDonations()
  return {
    props: {
      donations,
      postData,
    },
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: langs
      .map((lang) =>
        posts.map(({ segment }) => ({
          params: { segment, lang },
        }))
      )
      .flat(),
  }
}
