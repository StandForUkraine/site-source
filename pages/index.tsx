import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import LandingPage from 'core/components/LandingPage'
import { DonationItem, loadDonations } from 'core/utils/donations'

export default function Index({ donations }: { donations: DonationItem[] }) {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <LandingPage donations={donations} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const donations = loadDonations()
  return {
    props: {
      donations,
    },
  }
}
