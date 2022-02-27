import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'utils/metadata'
import LandingPage from 'components/LandingPage'


export default function Index() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <LandingPage />
    </>
  )
}
