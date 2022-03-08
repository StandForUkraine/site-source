import React, { useState } from 'react'
import styled from 'styled-components'
import TopHeader from 'core/components/TopHeader'
import Hero from 'core/components/Hero'
import Footer from 'core/components/Footer'
import PageTabs, { Tab } from 'core/components/PageTabs'
import Donations from 'core/components/Donations'
import SocialPosts from 'core/components/SocialPosts'
import { DonationItem } from 'core/utils/donations'

export default function LandingPage({ donations }: { donations: DonationItem[] }) {
  const [currentTab, setTab] = useState<Tab>('donate')

  return (
    <>
      <TopHeader />
      <Page>
        <Hero />
        <PageTabs currentTab={currentTab} onTabChange={setTab} />

        {currentTab === 'donate' && <Donations donations={donations} />}
        {currentTab === 'inform' && <SocialPosts />}
        <Footer />
      </Page>
    </>
  )
}

const Page = styled.div`
  padding-top: 60px;
  max-width: 100%;
  width: 1112px;
  margin: auto;
`
