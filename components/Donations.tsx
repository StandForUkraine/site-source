import { useState } from 'react'
import styled from 'styled-components'
import { DonationItem } from 'utils/donations'
import { useLang, useText } from 'utils/lang'
import { allTags, TagOrAll } from 'utils/tags'
import ContentTags from './ContentTags'
import LazyLoad from 'react-lazyload'
import Button from './Button'
import { useGtag } from 'hooks/useGtag'
import PayMethods from './PayMethods'
import { payMethods, PayMethodWithAll } from 'utils/payMethods'

export const Donations = ({ donations }: { donations: DonationItem[] }) => {
  const t = useText()
  const [currentTag, setTag] = useState<TagOrAll>('All');
  const [currentMethod, setMethod] = useState<PayMethodWithAll>('All');
  const { lang } = useLang()
  const gtag = useGtag();

  donations = donations.map((donation) => ({ ...donation, ...donation.byLang[lang] }))

  const filteredDonations = donations.filter((donation) => {
    const tagResult = currentTag !== 'All' ? donation.tags.includes(currentTag) : true;
    const methodResult = currentMethod !== 'All' ? (donation.payMethods ?? []).includes(currentMethod) : true;
    
    return tagResult && methodResult;
  });

  return (
    <>
      <ContentTags tags={['All', ...allTags]} currentTag={currentTag} onTagChange={setTag} />

      <PayMethods methods={['All', ...payMethods]} active={currentMethod} onChange={setMethod} />

      {filteredDonations.map((donation) => (
        <DonationPost key={donation.id}>
          <LazyLoad once offset={500}>
            <DonationLogo src={donation.logo} alt={donation.logoAlt || donation.title} />
          </LazyLoad>
          <DonationTitle
            href={donation.link}
            target="_blank"
            rel="noopener"
            onClick={() => {
              gtag('event', 'external_link_click', {
                event_category: 'home_page',
              });
            }}
          >
            {donation.title}
          </DonationTitle>
          <DonationDescription>{donation.description}</DonationDescription>
          <DonationButton
            as="a"
            href={donation.donateLink}
            target="_blank"
            rel="noopener"
            onClick={() => {
              gtag('event', 'external_link_click', {
                event_category: 'donate',
              });
            }}
          >
            {t('donateButton')}
          </DonationButton>
        </DonationPost>
      ))}
    </>
  )
}

export default Donations

const DonationPost = styled.div`
  padding: 20px;
  max-width: 556px;
  width: 100%;
  display: inline-block;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const DonationLogo = styled.img``

const DonationTitle = styled.a`
  display: block;
  color: #000;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const DonationDescription = styled.p`
  margin: 10px 0 20px;
`

const DonationButton = styled(Button).attrs({
  color: 'dark',
})``
