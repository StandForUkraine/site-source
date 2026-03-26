import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import About from 'core/components/About'

export default function AboutPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>
        {renderMetadata({
          title: 'About the Project — Stand For Ukraine',
          description:
            'Learn about Stand For Ukraine, a volunteer-run project that curates vetted Ukrainian military and humanitarian organizations for international donors.',
        })}
      </Head>
      <About />
    </>
  )
}
