import React, { useState } from 'react'
import styled from 'styled-components'
import TopHeader from 'core/components/TopHeader'
import Langs from 'core/components/Langs'
import Footer from 'core/components/Footer'
import { useText } from 'core/utils/lang'
import AboutTeamItem from './AboutTeamItem'
import Link from 'next/link'
import Button from 'core/components/Button'
import AboutOrganization from './AboutOrganization'

const email = process.env.NEXT_PUBLIC_EMAIL

export default function About() {
  const t = useText()

  return (
    <>
      <TopHeader />
      <Page>
        <Langs />
        <HeroWrapper>
          <HeroHeader>{t('aboutHeader')}</HeroHeader>
          <HeroText>{t('aboutHeaderText1')}</HeroText>
        </HeroWrapper>
        <AboutHeader>
          <AboutHeaderContent>
            <AboutContentHeader>{t('aboutManifestoHeader')}</AboutContentHeader>
            <AboutHeaderText>
              <i>{t('aboutManifestoText1')}</i>
            </AboutHeaderText>
            <AboutHeaderText>{t('aboutManifestoText2')}</AboutHeaderText>
            <AboutHeaderText>{t('aboutManifestoText3')}</AboutHeaderText>
            <AboutHeaderText>{t('aboutManifestoText4')}</AboutHeaderText>
            <AboutHeaderText>
              {t('aboutDonateLink')}
              {/* <AboutHeaderLink href="">{t('aboutDonateLink')}</AboutHeaderLink> */}
              {t('aboutManifestoText5')}

              {/* <AboutHeaderLink href="">{t('aboutShareLink')}</AboutHeaderLink> */}
              {t('aboutShareLink')}
              {t('aboutManifestoText6')}
            </AboutHeaderText>
          </AboutHeaderContent>

          <AboutHeaderImage src="/about/ukraine.png" />
        </AboutHeader>
        <AboutContent>
          <AboutContentHeader>{t('aboutTeamHeader')}</AboutContentHeader>
          {teamMembers.map((member, i) => (
            <AboutTeamItem key={i} member={member} />
          ))}
          <AboutFlexBlock>
            <AboutTeamMore>
              <AboutTeamMoreText>{t('aboutTeamMore')}</AboutTeamMoreText>
              🇺🇦 🇬🇧 🇪🇸 🇫🇷 🇩🇪 🇦🇹 🇵🇱 🇷🇴 🇭🇺 🇬🇷 🇹🇷 🇮🇱
            </AboutTeamMore>
            <JoinWrapper>
              <JoinWrapperHeader>{t('aboutTeamJoinHeader')}</JoinWrapperHeader>
              <JoinWrapperText>{t('aboutTeamJoinText')}</JoinWrapperText>
              <JoinWrapperLink href={`mailto:${email}`}>{t('aboutTeamJoinLink')}</JoinWrapperLink>
            </JoinWrapper>
          </AboutFlexBlock>
        </AboutContent>

        {/* <AboutOrganization /> */}

        <Footer />
      </Page>
    </>
  )
}

const teamMembers = [
  {
    name: 'Mikola Parfenyuck',
    position: 'leading developer',
    avatar: '/team/team_1.png',
    links: {
      twitter: 'twitter.com',
      linkedIn: 'linkedin.com',
    },
    description:
      'Software developer and data scientist, born and lives in Rivne. His specialization is computer vision for satellite images. He’s trying to help his homeland.',
  },
  {
    name: 'Valeriia Sapega',
    position: 'coordinator',
    avatar: '/team/team_2.png',
    links: {
      linkedIn: 'linkedin.com',
      viber: 'viber.com',
      telegram: 'tg.com',
    },
    description:
      'Russian-speaking Ukrainian born in Odessa, based in Kyiv until the war started. Past hobbies: reading, classical music, piano. New hobbies: surviving, charity, military shopping.',
  },
  {
    name: 'Sergii Knyr',
    position: 'coordinator',
    avatar: '/team/team_3.png',
    links: {
      linkedIn: 'linkedin.com',
      viber: 'viber.com',
      telegram: 'tg.com',
    },
    description:
      'Product manager & consultant from Kyiv. He’s into startups, long distance swimming, and road trips on motobike.',
  },
  {
    name: 'Anastasiia Pogorielova',
    position: 'content manager',
    avatar: '/team/team_4.png',
    links: {
      facebook: 'facebook.com',
      instagram: 'instagram.com',
    },
    description:
      'Kyivan, project manager & ecological activist. She loves dogs, swimming, and making her city better.',
  },
]

const Page = styled.div`
  padding-top: 60px;
  max-width: 100%;
  width: 1112px;
  margin: auto;
`
const HeroWrapper = styled.div`
  padding: 20px;
  padding-top: 0;
`

const HeroHeader = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  text-align: center;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 78px;
  }
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #333;
`
const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
  padding: 16px;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    padding: 40px 0;
  }
`

const AboutHeaderContent = styled.div`
  @media (min-width: 768px) {
    max-width: 640px;
  }
`

const AboutHeaderImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    width: 663px;
    display: block;
    position: absolute;
    right: 0;
    transform: translateY(64px);
  }
`

const AboutContent = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`

const AboutContentHeader = styled.h3`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`
const AboutHeaderText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const AboutContentText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
`

const AboutHeaderLink = styled.a`
  font-size: 16px;
  line-height: 140%;
  color: #2f80ed;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const AboutFlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`

const AboutTeamMore = styled.div`
  font-size: 20px;
  line-height: 128%;
  color: #4f4f4f;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`
const AboutTeamMoreText = styled.p`
  margin-bottom: 16px;
`

const JoinWrapper = styled.div`
  background: linear-gradient(
    130.9deg,
    rgba(255, 229, 0, 0.5) 1.71%,
    rgba(242, 242, 242, 0) 97.27%
  );
  border-radius: 16px;
  padding: 16px;
  margin: 24px auto 0;
  max-width: 536px;

  @media (min-width: 768px) {
    margin: 0 0 0 auto;
    width: 536px;
  }
`
const JoinWrapperHeader = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`
const JoinWrapperText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #000000;
`
const JoinWrapperLink = styled.a`
  font-size: 16px;
  line-height: 140%;
  text-decoration-line: underline;
  color: #2f80ed;
`
