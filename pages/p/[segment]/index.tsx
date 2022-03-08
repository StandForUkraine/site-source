import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import LandingPage from 'core/components/LandingPage'
import { PostItem, posts } from 'core/utils/posts'
import { langs } from 'core/texts'
import { DonationItem, loadDonations } from 'core/utils/donations'

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
