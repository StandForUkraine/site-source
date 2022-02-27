import ShareIcon from 'components/ShareIcon'
import SocialButtons from 'components/SocialButtons'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { useText } from 'utils/lang'

export const SharePopup = ({ onClose }: { onClose: () => any }) => {
  const t = useText()

  return (
    <>
      <SharePopupBG onClick={onClose} />

      <SharePopupWrapper>
        <CloseButton onClick={onClose}>{t('close')}</CloseButton>
        <ShareIcon size={60} />
        <SharePopupTitle>{t('sharePopupTitle')}</SharePopupTitle>
        <p>
          {t('sharePopupText1')}
          <br />
          {t('sharePopupText2')}
        </p>
        <SocialButtons link="https://standforukraine.com/" text={t('sharingText')} />
        <CopyToClipboard text="https://standforukraine.com/">
          <CopyButton>{t('copyLink')}</CopyButton>
        </CopyToClipboard>
      </SharePopupWrapper>
    </>
  )
}
export default SharePopup

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
  width: 560px;
  max-width: 90%;
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
  margin-top: 10px;
  border: none;
  width: 100%;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background: #999;
  }
`
