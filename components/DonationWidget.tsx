import styled from 'styled-components'
import { DonationItem } from 'utils/donations'
import { useText } from 'utils/lang'
import LazyLoad from 'react-lazyload'
import Button from './Button'
import { useGtag } from 'hooks/useGtag'

export const DonationWidget = ({ donation }: { donation: DonationItem }) => {
  const t = useText()
  const gtag = useGtag()

  return (
    <DonationPost>
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
  )
}

export default DonationWidget

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
