import React, { useState } from 'react'
import styled from 'styled-components'
import TopHeader from 'components/TopHeader'
import Hero from 'components/Hero'
import PageTabs, { Tab } from 'components/PageTabs'
import Donations from 'components/Donations'
import SocialPosts from 'components/SocialPosts'

export default function LandingPage() {
  const [currentTab, setTab] = useState<Tab>('donate')

  return (
    <>
      <TopHeader />
      <Page>
        <Hero />
        <PageTabs currentTab={currentTab} onTabChange={setTab} />

        {currentTab === 'donate' && <Donations />}
        {currentTab === 'inform' && <SocialPosts />}
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
