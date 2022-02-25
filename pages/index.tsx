import React, { useState } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Head from 'next/head'
import { renderMetaData } from './_app'

type Tab = 'donate' | 'inform'

const allTags = [
  'Military',
  'Non-government',
  'Medical',
  'Humanitarian',
  'Non-lethal',
  'Refugees',
  'Human Rights',
] as const

type Tag = typeof allTags[number]

type TagOrAll = Tag | 'All'

interface DonationItem {
  logo: string
  logoAlt?: string
  title: string
  description: string
  tags: Tag[]
  link: string
}

export interface PostItem {
  segment: string
  text: string
  image: string
  imageAlt: string
}

interface SocialNetwork {
  icon: string
  generateLink: (link: string, text: string) => string
}

const donations: DonationItem[] = [
  {
    logo: '/logos/nbu.png',
    logoAlt: `National bank of Ukraine`,
    title: `Armed Forces of Ukraine (IBAN)`,
    tags: ['Military'],
    description: `The National Bank of Ukraine has decided to open a special fundraising account to support the Armed Forces of Ukraine. This account accepts multiple currencies. It has been established and opened to receive transfers from international partners and donors in multiple currencies.`,
    link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
  },
  {
    logo: '/logos/cba.png',
    title: `Come Back Alive Foundation`,
    tags: ['Military', 'Non-government', 'Medical'],
    description: `One of the largest charity foundations in Ukraine. We help veterans, in particular we coorganize Invictus Games in Ukraine. The money raised here will fund the operations of our media and veteran divisions.`,
    link: 'https://savelife.in.ua/en/donate/',
  },
  {
    logo: '/logos/unicef.png',
    title: `The Ukraine Humanitarian Fund`,
    tags: ['Non-government', 'Humanitarian', 'Medical'],
    description: `The Ukrainian Humanitarian Fund is one of the UN's country-based pooled funds. Contributions are collected into a single, unearmarked fund and managed locally under UN leadership. As crises evolve, funds are made directly and immediately available to a wide range of partner organizations at the front lines of response. This way, funding reaches the people most in need when they need it.`,
    link: 'https://www.unocha.org/ukraine/donor-contributions',
  },
  {
    logo: '/logos/uawg.png',
    title: `Ukrainian Women's Guard`,
    tags: ['Military', 'Non-government', 'Medical'],
    description: `Ukrainian voluntary women's organization, emerged in 2014 with the beginning of the Russo-Ukrainian war and began its activity with mass premedical training for women, it is combination of psychological and psychiatric training. Since 2014 more than 30,000 women across Ukraine passed our training.`,
    link: 'https://uavarta.org/vnesok/',
  },
  {
    logo: '/logos/asos.png',
    title: `Army SOS`,
    tags: ['Military', 'Non-government', 'Non-lethal'],
    description: `Army SOS Citizen's Initiative coordinates people's efforts to help soldiers of Ukraine. Manages purchases of necessary ammunition, shields, intercommunication and reconnaissance facilities, uniforms and food supply. Delivers all goods directly to the unit's emplacement and pass them right to the hands of our warriors.`,
    link: 'https://armysos.com.ua/en/help-the-army',
  },
  {
    logo: '/logos/rcros.png',
    title: `Ukrainian Red Cross Society`,
    tags: ['Non-government', 'Humanitarian', 'Medical'],
    description: `Anyone who got into trouble - loneliness, sickness, poverty, unemployment, loss of family links, emergency or armed conflict - may refer to the Red Cross.`,
    link: 'https://redcross.org.ua/en/donate/',
  },
  {
    logo: '/logos/voc.png',
    title: `Voices of Children`,
    tags: ['Humanitarian', 'Non-government', 'Refugees'],
    description: `Charitable foundation Voices of Children helps children affected by the war in eastern Ukraine. We provide psychological and psychosocial support to help Ukrainian children overcome the consequences of armed conflict.`,
    link: 'https://voices.org.ua/en/donat/',
  },
  {
    logo: '/logos/uhu.png',
    title: `United Help Ukraine`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `United Help Ukraine is working to provide life-saving individual first aid kits (IFAKs containing blood-stopping bandages and tourniquets) and other emergency medical supplies to the front lines. In addition, UHU is also cooperating with other emergency response organizations to prepare humanitarian aid for civilians that might be directly affected if Russian forces attack.`,
    link: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FAXD9R7CFB4SJ',
  },
  {
    logo: '/logos/razom.png',
    title: `Razom`,
    tags: ['Humanitarian', 'Non-government', 'Human Rights'],
    description: `Razom initiates short and long-term projects or collaborates on existing projects with partner organizations, which help Ukraine stay on the path of fostering democracy and prosperity. We've grown a diverse community of volunteers and collaborators across the US and Ukraine which allows us to create spaces where people can meet, partner, and execute these projects.`,
    link: 'https://razomforukraine.org/donate/',
  },
  {
    logo: '/logos/rsu.png',
    title: `Revived Soldiers Ukraine`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `Revived Soldiers Ukraine is a non-profit organization dedicated to providing aid to the people of Ukraine in support of their fundamental human rights and medical rehabilitation of Ukrainian soldiers.`,
    link: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=EECANTTJNHN7Y',
  },
  {
    logo: '/logos/vsos.png',
    title: `Vostok SOS`,
    tags: ['Humanitarian', 'Non-government'],
    description: `Vostok SOS is a non-governmental organization helping to find shelter for internally displaced persons, assisting in the evacuation of people from the conflict zone, collecting and distributing humanitarian aid to IDPs in Kyiv as well as delivering humanitarian aid to front-line settlements, and providing psychological first aid.`,
    link: 'https://vostok-sos.org/en/make-a-donation/',
  },
  {
    logo: '/logos/molfar.png',
    title: `Molfar`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `Molfar(sorcerer-healer) is a project of the Ukrainian nongovernmental organization People's Victory. The project's aim is effective logistics system for the medical rescue of the wounded.`,
    link: 'http://molfar.org/en/take-part/donate/money',
  },
  {
    logo: '/logos/pwings.png',
    title: `Phoenix Wings`,
    tags: ['Non-government', 'Military', 'Non-lethal', 'Medical'],
    description: `Charitable Foundation Phoenix Wings provides the Ukrainian army with the necessary assistance in regards to the appropriate equipment & uniform, personal non-lethal protection(vests, helmets), required treatment of the wounded soldiers, and acquisition the individual first aid kits, and repair of the buildings used by the army.`,
    link: 'http://wings-phoenix.org.ua/en/donate/',
  },
  {
    logo: '/logos/pp.png',
    title: `People's Project`,
    tags: ['Non-government', 'Humanitarian', 'Military', 'Medical', 'Non-lethal'],
    description: `Ukraine's military and civil crowdfunding with multiple initiatives. People's Project is a non-commercial and nonprofit organization. It is an association made up of volunteers and caring people who coordinate their efforts for social initiatives aimed to support the People of Ukraine.`,
    link: 'https://www.peoplesproject.com/en/projects/',
  },
]

export const posts: PostItem[] = [
  {
    segment: 'declared-war',
    text: '',
    image: '/posts/declared-war.png',
    imageAlt: 'Russia & Belarus Officially Declared War on Ukraine.',
  },
  {
    segment: 'aggresion',
    text: '',
    image: '/posts/aggresion.png',
    imageAlt: 'RUSSIAN AGGRESION WILL TO BE STOPPED',
  },
  {
    segment: 'savelife',
    text: '',
    image: '/posts/savelife.png',
    imageAlt: 'I support Come Back Alive Fuoundation. Join me.',
  },
  {
    segment: 'savelife-ua-army',
    text: '',
    image: '/posts/savelife-ua-army.png',
    imageAlt: 'I support Come Back Alive Foundation & Ukraninan Armed Forces. Join Me!',
  },
]

const socialNetworks: SocialNetwork[] = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9859 5.85094 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.2934 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.12 10.5 18.5 11.7334 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8056C26.1491 30.6053 32 23.9859 32 16Z" fill="#4F4F4F"/></svg>`,
    generateLink: (link, text) => `https://www.facebook.com/sharer/sharer.php?u=${link}`,
  },
  {
    icon: `<svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0669 26C22.1394 26 28.7444 15.9957 28.7444 7.32254C28.7444 7.04129 28.7381 6.75379 28.7256 6.47254C30.0105 5.54334 31.1193 4.3924 32 3.07379C30.8034 3.60619 29.5329 3.9539 28.2319 4.10504C29.6017 3.28394 30.6274 1.99402 31.1187 0.474417C29.8301 1.23814 28.4208 1.77688 26.9513 2.06754C25.9611 1.01548 24.652 0.318883 23.2262 0.0854624C21.8005 -0.147958 20.3376 0.0947949 19.0637 0.77619C17.7897 1.45758 16.7757 2.53967 16.1785 3.85514C15.5812 5.17062 15.4339 6.64621 15.7594 8.05379C13.15 7.92285 10.5972 7.245 8.26664 6.06419C5.93604 4.88338 3.87959 3.22598 2.23062 1.19942C1.39253 2.64439 1.13608 4.35425 1.51337 5.98152C1.89067 7.60878 2.87342 9.03132 4.26188 9.96004C3.2195 9.92695 2.19997 9.6463 1.2875 9.14129V9.22254C1.28657 10.7389 1.8108 12.2088 2.77108 13.3824C3.73136 14.556 5.06843 15.3608 6.555 15.66C5.58941 15.9242 4.57598 15.9627 3.59313 15.7725C4.01261 17.0766 4.82876 18.2172 5.92769 19.0352C7.02662 19.8531 8.35349 20.3075 9.72313 20.335C7.3979 22.1615 4.52557 23.1522 1.56875 23.1475C1.04438 23.1467 0.520532 23.1146 0 23.0513C3.00381 24.9784 6.49804 26.0019 10.0669 26Z" fill="#4F4F4F"/></svg>`,
    generateLink: (link, text) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(link)}`,
  },
]

const ShareIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 7.58908L10 0.5V3.7791C4.17347 5.79286 0 11.2274 0 17.614C0 18.2526 0.0428571 18.8833 0.122449 19.5C0.877551 14.8298 5.01224 11.2574 10 11.2574V14.6801L20 7.58908Z"
      fill="black"
    />
  </svg>
)

const SharePopup = ({ onClose }: { onClose: () => any }) => (
  <>
    <SharePopupBG onClick={onClose} />

    <SharePopupWrapper>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <ShareIcon size={60} />
      <SharePopupTitle>Spread The Cause</SharePopupTitle>
      <p>
        Share this resource to your friends and colleagues.
        <br />
        Let people know how to support Ukraine.
      </p>
      <CopyToClipboard text="https://standforukraine.com/">
        <CopyButton>Copy Link</CopyButton>
      </CopyToClipboard>
    </SharePopupWrapper>
  </>
)

const SharePopupBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

const SharePopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 24px;
  padding: 20px;
  max-width: 100%;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;

  svg path {
    fill: #bdbdbd;
  }

  p {
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }
`

const SharePopupTitle = styled.h2`
  font-weight: 900;
  font-size: 30px;
  text-align: center;
`

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  padding: 5px;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`

const CopyButton = styled.button`
  background: #f2f2f2;
  border-radius: 4px;
  padding: 8px;
  border: none;
  width: 100%;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background: #999;
  }
`

const TopHeader = () => {
  const [visibleShare, setVisibleShare] = useState(false)

  return (
    <TopHeaderWrapper>
      <TopHeaderFlag />
      <TopHeaderTitle>Stand For Ukraine</TopHeaderTitle>

      <ShareButton onClick={() => setVisibleShare(true)}>
        <span>Share</span>
        <ShareIcon />
      </ShareButton>

      {visibleShare && <SharePopup onClose={() => setVisibleShare(false)} />}
    </TopHeaderWrapper>
  )
}

const TopHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-left: 90px;
  background: #fff;
  display: flex;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
`

const TopHeaderFlag = styled.div`
  position: absolute;
  width: 83px;
  height: 77px;
  left: 0px;
  top: 0px;

  background: url(/ua-flag.png);
`

const TopHeaderTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  flex-grow: 1;
`

const ShareButton = styled.button`
  background: none;
  border: none;
  display: flex;
  height: 100%;
  width: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  span {
    display: none;
    margin-right: 5px;
  }
  @media (min-width: 768px) {
    width: 100px;
    span {
      display: inline;
    }
  }
`

const Hero = () => (
  <HeroWrapper>
    <HeroHeader>Help Ukrainian Military &amp; Humanitarian Organizations</HeroHeader>
    <HeroText>
      Support Ukraine in the face of <i>Russian military aggression</i>.
    </HeroText>
    <HeroText>
      Donate to verified projects to help Armed Forces of Ukraine or humanitarian charities.
    </HeroText>
    <HeroText>Inform the public by sharing our newslets.</HeroText>
  </HeroWrapper>
)

const HeroWrapper = styled.div`
  padding: 20px;
`

const HeroHeader = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  text-align: center;
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #333;
`

const PageTabs = ({
  currentTab,
  onTabChange,
}: {
  currentTab: Tab
  onTabChange: (value: Tab) => any
}) => (
  <TabsWrapper>
    <Tab isActive={currentTab === 'donate'} onClick={() => onTabChange('donate')}>
      Donate
    </Tab>
    <Tab isActive={currentTab === 'inform'} onClick={() => onTabChange('inform')}>
      Inform
    </Tab>
  </TabsWrapper>
)

const TabsWrapper = styled.div`
  width: 100%;
  background: #ffe600;
  height: 64px;
  display: flex;
`

const Tab = styled.button<{ isActive?: boolean }>`
  text-decoration: underline;
  font-size: 32px;
  width: 50%;
  background: transparent;
  border: none;
  border-top: 4px solid #ffe600;

  ${({ isActive }) =>
    isActive
      ? `
      background: #fff !important;
      cursor: auto;
      text-decoration: none;`
      : ''}

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const ContentTags = ({
  tags,
  currentTag,
  onTagChange,
}: {
  tags: TagOrAll[]
  currentTag: TagOrAll
  onTagChange: (value: TagOrAll) => any
}) => (
  <TagsWrapper>
    {tags.map((tag) => (
      <Tag key={tag} isActive={tag === currentTag} onClick={() => onTagChange(tag)}>
        {tag}
      </Tag>
    ))}
  </TagsWrapper>
)

const TagsWrapper = styled.div`
  overflow-x: auto;
  padding: 10px;
  margin: auto;
  max-width: 100%;
`

const Tag = styled.button<{ isActive?: boolean }>`
  background: #f2f2f2;
  border-radius: 40px;
  padding: 8px 12px;
  border: none;
  margin-right: 5px;

  ${({ isActive }) =>
    isActive
      ? `
      background: #000;
      color: #fff;`
      : ''}

  &:hover {
    background: #999;
  }
`

const Donations = () => {
  const [currentTag, setTag] = useState<TagOrAll>('All')

  const filteredDonations =
    currentTag !== 'All'
      ? donations.filter((donation) => donation.tags.includes(currentTag))
      : donations

  return (
    <>
      <ContentTags tags={['All', ...allTags]} currentTag={currentTag} onTagChange={setTag} />

      {filteredDonations.map((donation) => (
        <DonationPost key={donation.title}>
          <DonationLogo src={donation.logo} alt={donation.logoAlt || donation.title} />
          <DonationTitle>{donation.title}</DonationTitle>
          <DonationDescription>{donation.description}</DonationDescription>
          <DonationButton href={donation.link} target="_blank">
            Donate
          </DonationButton>
        </DonationPost>
      ))}
    </>
  )
}

const DonationPost = styled.div`
  padding: 20px;
  max-width: 556px;
  display: inline-block;
`

const DonationLogo = styled.img``

const DonationTitle = styled.h3``

const DonationDescription = styled.p`
  margin: 10px 0 20px;
`

const DonationButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  background: #000;
  color: #fff;
  font-size: 24px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
`

const SocialPosts = () => (
  <>
    {posts.map((post) => (
      <PostWrapper key={post.segment}>
        <PostImage src={post.image} alt={post.imageAlt} />
        <SocialButtons>
          {socialNetworks.map((network, i) => (
            <SocialButton
              key={i}
              target="_blank"
              href={network.generateLink(
                `https://standforukraine.com/p/${post.segment}`,
                post.text
              )}
              dangerouslySetInnerHTML={{ __html: network.icon }}
            />
          ))}
        </SocialButtons>
      </PostWrapper>
    ))}
  </>
)

const PostWrapper = styled.div`
  padding: 20px;
  max-width: 556px;
  display: inline-block;
`

const PostImage = styled.img`
  max-width: 100%;
  width: 100%;
`

const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialButton = styled.a`
  margin: 5px;
`

export function LandingPage() {
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

export default function Index() {
  return (
    <>
      <Head>{renderMetaData({})}</Head>
      <LandingPage />
    </>
  )
}
