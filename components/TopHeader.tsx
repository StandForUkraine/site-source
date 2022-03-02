import { useState } from 'react'
import styled from 'styled-components'
import { useText } from 'utils/lang'
import Button from './Button'
import ShareIcon from './ShareIcon'
import SharePopup from './SharePopup'

export const TopHeader = () => {
  const [visibleShare, setVisibleShare] = useState(false)
  const t = useText()

  return (
    <TopHeaderWrapper>
      <TopHeaderFlag />
      <TopHeaderTitle>{t('siteName')}</TopHeaderTitle>

      <ShareButton onClick={() => setVisibleShare(true)}>
        <span>{t('share')}</span>
        <ShareIcon />
      </ShareButton>

      {visibleShare && <SharePopup onClose={() => setVisibleShare(false)} />}
    </TopHeaderWrapper>
  )
}

export default TopHeader

const TopHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
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

const ShareButton = styled(Button)`
  margin-top: 6px;

  span {
    display: none;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    margin-right: 9px;
    span {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    background-color: #fff !important;
    border-color: #fff !important;
  }
`
