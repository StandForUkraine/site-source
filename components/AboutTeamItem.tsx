import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Link from 'next/link'
import InstagramIcon from 'assets/instagram.svg'
import FacebookIcon from 'assets/facebook.svg'
import TwitterIcon from 'assets/twitter.svg'
import ViberIcon from 'assets/viber.svg'
import LinkedinIcon from 'assets/linkedin.svg'
import TelegramIcon from 'assets/telegram.svg'

const socialLinks = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  viber: <ViberIcon />,
  linkedIn: <LinkedinIcon />,
  telegram: <TelegramIcon />,
}

export default function AboutTeamItem({ member }) {
  const renderSocialLinks = (links) =>
    Object.keys(links).map((key) => (
      <Link href={links[key]} key={key}>
        <SocialLink href={links[key]}>{socialLinks[key]}</SocialLink>
      </Link>
    ))

  return (
    <TeamMember>
      <LazyLoad once offset={500}>
        <TeamMemberAvatar src={member.avatar} alt={member.name} />
      </LazyLoad>
      <TeamMemberName>{member.name}</TeamMemberName>
      <TeamMemberPosition>{member.position}</TeamMemberPosition>
      <TeamMemberSocial>{renderSocialLinks(member.links)}</TeamMemberSocial>
      <TeamMemberDescription>{member.description}</TeamMemberDescription>
    </TeamMember>
  )
}

const TeamMember = styled.div`
  padding: 24px 0;
  width: 100%;
  display: inline-block;

  @media (min-width: 768px) {
    width: calc((100% - 48px * 3) / 4);
    max-width: none;
    vertical-align: top;
    margin-right: 48px;
    &:nth-child(5) {
      margin-right: 0;
    }
  }
`

const TeamMemberAvatar = styled.img`
  border-radius: 50%;
  margin: auto;
  display: block;
`

const TeamMemberName = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin: 8px 0;
`
const TeamMemberPosition = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  margin: 8px 0;
`
const TeamMemberDescription = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
  max-width: 556px;
  margin: 0 auto;
`

const TeamMemberSocial = styled.div`
  margin: 8px 0;
  text-align: center;
`

const SocialLink = styled.a`
  margin-right: 16px;

  path {
    fill: #828282;
  }
`
