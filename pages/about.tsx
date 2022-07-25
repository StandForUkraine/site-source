import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import About from 'core/components/About'
import WidgetScript from 'core/components/WidgetScript';

export default function AboutPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <About />
      <WidgetScript />
    </>
  )
}
