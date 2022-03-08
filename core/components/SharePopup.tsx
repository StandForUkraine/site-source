import ShareIcon from 'core/components/ShareIcon'
import SocialButtons from 'core/components/SocialButtons'
import { useGtag } from 'core/utils/useGtag'
import styled from 'styled-components'
import { useLang, useText } from 'core/utils/lang'
import CopyButton from './CopyButton'
import Popup from './Popup'

const baseUrl = process.env.NEXT_PUBLIC_SITE_BASEURL

export const SharePopup = ({ onClose }: { onClose: () => any }) => {
  const t = useText()
  const gtag = useGtag()
  const { lang } = useLang()

  const link = baseUrl + (lang === 'en' ? '' : lang)

  return (
    <Popup onClose={onClose}>
      <SharePopupContent>
        <ShareIcon size={60} />
        <SharePopupTitle>{t('sharePopupTitle')}</SharePopupTitle>
        <p>
          {t('sharePopupText1')}
          <br />
          {t('sharePopupText2')}
        </p>
        <SocialButtons
          link={link}
          text={t('sharingText')}
          onClick={(network) => gtag('event', 'social_profile_click', { event_category: network })}
        />
        <CopyButton content={link} />
      </SharePopupContent>
    </Popup>
  )
}

export default SharePopup

const SharePopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
