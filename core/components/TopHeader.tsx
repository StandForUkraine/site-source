import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { useLang, useText } from 'core/utils/lang'
import Button from './Button'
import ShareIcon from './ShareIcon'
import SharePopup from './SharePopup'

export const TopHeader = () => {
  const [visibleShare, setVisibleShare] = useState(false)
  const { lang } = useLang()
  const t = useText()

  const rootPathname = lang === 'en' ? '/' : `/${lang}`

  return (
    <TopHeaderWrapper>
      <Link href={rootPathname} passHref>
        <TopNavLink>
          <TopHeaderFlag
            srcSet={`/ua-flag.png 1x,
            /ua-flag@2x.png`}
            width={78}
            height={72}
          />
        </TopNavLink>
      </Link>

      <TopHeaderTitle>
        <Link href={rootPathname} passHref>
          <TopNavLink>{t('siteName')}</TopNavLink>
        </Link>
      </TopHeaderTitle>

      <ShareButton onClick={() => setVisibleShare(true)}>
        <span>{t('share')}</span>
        <ShareIcon />
      </ShareButton>

      {visibleShare && <SharePopup onClose={() => setVisibleShare(false)} />}
    </TopHeaderWrapper>
  )
}

export default TopHeader

const TopNavLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const TopHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const TopHeaderFlag = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
`

const TopHeaderTitle = styled.h1`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  flex-grow: 1;

  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 92px;
  }
`

const ShareButton = styled(Button)`
  position: absolute;
  top: 6px;
  right: 0;

  span {
    display: none;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    right: 9px;
    span {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    background-color: #fff !important;
    border-color: #fff !important;
  }
`
