import { useState, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import { DonationItem } from 'utils/donations'
import { useLang, useText } from 'utils/lang'
import { allTags, Tag } from 'utils/tags'
import LazyLoad from 'react-lazyload'
import Button from './Button'
import { useGtag } from 'hooks/useGtag'
import { payMethods, PayMethod } from 'utils/payMethods'
import MultipleSelection from './MultipleSelection'

export const Donations = ({ donations }: { donations: DonationItem[] }) => {
  const t = useText()
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [selectedMethods, setSelectedMethods] = useState<PayMethod[]>([])
  const { lang } = useLang()
  const gtag = useGtag()

  const filteredDonations = useMemo(
    () =>
      donations
        .filter((donation) => {
          const tagResult =
            selectedTags.length > 0
              ? !!donation.tags.find((tag) => selectedTags.indexOf(tag) >= 0)
              : true

          const methodResult =
            selectedMethods.length > 0
              ? !!donation.payMethods.find((method) => selectedMethods.indexOf(method) >= 0)
              : true

          return tagResult && methodResult
        })
        .map((donation) => ({ ...donation, ...donation.byLang[lang] })),
    [donations, selectedTags, selectedMethods, lang]
  )

  const onTagClick = useCallback(
    (tag: Tag) => {
      const newTags =
        selectedTags.indexOf(tag) >= 0
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags, tag]
      setSelectedTags(newTags)
    },
    [selectedTags, setSelectedTags]
  )

  const onMethodClick = useCallback(
    (method: PayMethod) => {
      const newMethods =
        selectedMethods.indexOf(method) >= 0
          ? selectedMethods.filter((m) => m !== method)
          : [...selectedMethods, method]
      setSelectedMethods(newMethods)
    },
    [selectedMethods, setSelectedMethods]
  )

  return (
    <>
      <MultipleSelection
        title={t('filterTo')}
        allOptions={[...allTags]}
        selectedOptions={selectedTags}
        onOptionClick={onTagClick}
      />

      <MultipleSelection
        title={t('filterPayVia')}
        allOptions={payMethods.filter((m) => m !== 'Western Union')}
        selectedOptions={selectedMethods}
        onOptionClick={onMethodClick}
      />

      {filteredDonations.length < 1 && <h1>Nothing found.</h1>}

      {filteredDonations.map((donation) => (
        <DonationPost key={donation.id}>
          <LazyLoad once offset={500}>
            <DonationLogo src={donation.logo} alt={donation.logoAlt || donation.title} />
          </LazyLoad>
          <DonationTitle
            href={donation.link}
            target="_blank"
            rel="noopener"
            onClick={() =>
              gtag('event', 'external_link_click', {
                event_category: 'home_page',
                event_label: donation.link,
              })
            }
          >
            {donation.title}
          </DonationTitle>
          <DonationTags>{donation.tags.join(', ')}</DonationTags>
          <DonationDescription>{donation.description}</DonationDescription>
          <DonationPayMethods>
            {donation.payMethods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </DonationPayMethods>
          <DonationButton
            as="a"
            href={donation.donateLink}
            target="_blank"
            rel="noopener"
            onClick={() =>
              gtag('event', 'external_link_click', {
                event_category: 'donate',
                event_label: donation.donateLink,
              })
            }
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
  margin: 10px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const DonationTags = styled.div`
  color: #777;
`

const DonationPayMethods = styled.div`
  margin-bottom: 15px;

  span {
    border: 1px solid #aaa;
    border-radius: 15px;
    padding: 3px 5px;
    font-size: 13px;
    margin-right: 8px;
  }
`

const DonationDescription = styled.p`
  margin: 10px 0 20px;
`

const DonationButton = styled(Button).attrs({
  color: 'dark',
})``
