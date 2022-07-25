import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import Widget from '../core/components/Widget'
import WidgetScript from 'core/components/WidgetScript';

export default function WidgetPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <Widget />
      <WidgetScript />
    </>
  )
}
