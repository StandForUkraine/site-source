import styled from 'styled-components'
import { DonationItem } from 'core/utils/donations'
import { useText } from 'core/utils/lang'
import { useGtag } from 'core/utils/useGtag'
import Popup from './Popup'
import CopyButton from './CopyButton'
import OutIcon from 'core/assets/out.svg'

export const LegalPopup = ({
  donation,
  onClose,
}: {
  donation: DonationItem
  onClose: () => any
}) => {
  const t = useText()
  const gtag = useGtag()

  return (
    <Popup onClose={onClose} width={440}>
      <PopupContent>
        <Logo src={donation.logo} alt={donation.logoAlt || donation.title} />

        <Title>{donation.title}</Title>
        <CodeLabel>ЄДРПОУ</CodeLabel>
        <Code>{donation.edrpou!}</Code>

        <CopyButton content={donation.edrpou!} />

        <Description>
          ЄДРПОУ(EDRPOU) is a code of the legal enity from State Tax Service of Ukraine.
          <hr />
          1. Copy EDRPOU code
          <hr />
          2. Verify the organization by the code in the register:
        </Description>

        <ServiceLink
          target="_blank"
          rel="noopener"
          href="https://cabinet.tax.gov.ua/registers/non-profit"
          onClick={() =>
            gtag('event', 'legal_info_click', {
              event_category: 'edrpou_out',
              event_label: donation.edrpou,
            })
          }
        >
          State Tax Service of Ukraine <OutIcon />
        </ServiceLink>
      </PopupContent>
    </Popup>
  )
}

export default LegalPopup

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Logo = styled.img``

const Title = styled.h3`
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
  text-align: center;
`

const CodeLabel = styled.span`
  font-weight: 500;
  font-size: 18px;
  width: 100%;
`

const Code = styled.span`
  font-weight: 700;
  font-size: 26px;
  width: 100%;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: left;

  hr {
    border: none;
  }
`

const ServiceLink = styled.a`
  font-size: 18px;
  color: #2f80ed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    margin-left: 10px;
  }
`
