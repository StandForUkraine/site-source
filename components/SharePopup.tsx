import ShareIcon from 'components/ShareIcon'
import SocialButtons from 'components/SocialButtons'
import useMountedRef from 'hooks/useMountedRef'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { useText } from 'utils/lang'
import Button from './Button'
import CloseIcon from './CloseIcon'

export const SharePopup = ({ onClose }: { onClose: () => any }) => {
  const t = useText();
  const mountedRef = useMountedRef();
  const [copied, setCopied] = useState(false);

  const button = <CopyButton
    color={copied ? 'success' : 'default'}
  >
    {t(copied ? 'copyLinkDone' : 'copyLink')}
  </CopyButton>;

  return (
    <>
      <SharePopupBG onClick={onClose} />

      <SharePopupWrapper>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <ShareIcon size={60} />
        <SharePopupTitle>{t('sharePopupTitle')}</SharePopupTitle>
        <p>
          {t('sharePopupText1')}
          <br />
          {t('sharePopupText2')}
        </p>
        <SocialButtons link="https://standforukraine.com/" text={t('sharingText')} />
        {
          !copied ? (
            <CopyToClipboard
              text="https://standforukraine.com/"
              onCopy={() => {
                setCopied(true);
                setTimeout(() => {
                  if (!mountedRef.current) {
                    return;
                  }
                  
                  setCopied(false)
                }, 2000);
              }}
            >
              {button}
            </CopyToClipboard>
          ) : button
        }
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
  top: 19px;
  right: 19px;
  background: none;
  padding: 5px;
  border: none;

  svg path {
    fill: #4F4F4F;
  }

  &:hover {
    text-decoration: underline;
  }
`

const CopyButton = styled(Button).attrs({
  fullWidth: true,
})`
  margin-top: 16px;
`;
