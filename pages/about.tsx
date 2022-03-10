import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'utils/metadata'
import About from 'components/About'

export default function AboutPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <About />
    </>
  )
}
