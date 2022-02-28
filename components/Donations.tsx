import { useState } from 'react'
import styled from 'styled-components'
import { DonationItem } from 'utils/donations'
import { useLang, useText } from 'utils/lang'
import { allTags, TagOrAll } from 'utils/tags'
import ContentTags from './ContentTags'

export const Donations = ({ donations }: { donations: DonationItem[] }) => {
  const t = useText()
  const [currentTag, setTag] = useState<TagOrAll>('All')
  const { lang } = useLang()
  donations = donations.map((donation) => ({ ...donation, ...donation.byLang[lang] }))

  const filteredDonations =
    currentTag !== 'All'
      ? donations.filter((donation) => donation.tags.includes(currentTag))
      : donations

  return (
    <>
      <ContentTags tags={['All', ...allTags]} currentTag={currentTag} onTagChange={setTag} />

      {filteredDonations.map((donation) => (
        <DonationPost key={donation.id}>
          <DonationLogo src={donation.logo} alt={donation.logoAlt || donation.title} />
          <DonationTitle href={donation.link}>{donation.title}</DonationTitle>
          <DonationDescription>{donation.description}</DonationDescription>
          <DonationButton href={donation.donateLink} target="_blank">
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
  min-width: 50%;
  display: inline-block;
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
