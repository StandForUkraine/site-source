import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import LandingPage from 'core/components/LandingPage'
import { DonationItem } from 'core/utils/donations'
import { langs } from 'core/texts'

export default function Index({ donations }: { donations: DonationItem[] }) {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <LandingPage donations={donations || []} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: langs.map((lang) => ({
      params: { lang },
    })),
  }
}
