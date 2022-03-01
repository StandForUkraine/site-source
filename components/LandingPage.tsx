import React, { useState } from 'react'
import styled from 'styled-components'
import TopHeader from 'components/TopHeader'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import PageTabs, { Tab } from 'components/PageTabs'
import Donations from 'components/Donations'
import SocialPosts from 'components/SocialPosts'
import { DonationItem } from 'utils/donations'

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
