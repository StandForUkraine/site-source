import React, { useState } from 'react'
import styled from 'styled-components'
import { useText } from 'utils/lang'
import LazyLoad from 'react-lazyload'
import Button from './Button'
type Tab = 'uk' | 'us'

export default function OrganizationVerify() {
  const t = useText()
  const [tab, setTab] = useState<Tab>('uk')
  return (
    <>
      <VerifyHeader>{t('verifyHeader')}</VerifyHeader>
      <VerifyTabButton color={tab === 'uk' ? 'dark' : 'default'} onClick={() => setTab('uk')}>
        {t('verifyUK')}
      </VerifyTabButton>
      <VerifyTabButton color={tab === 'us' ? 'dark' : 'default'} onClick={() => setTab('us')}>
        {t('verifyUS')}
      </VerifyTabButton>

      {tab === 'uk' && <UKTab />}
      {tab === 'us' && <USTab />}
    </>
  )
}

const UKTab = () => {
  const t = useText()
  return (
    <>
      <VerifyText>{t('verifyUKText1')}</VerifyText>
      <VerifyText>{t('verifyUKText2')}</VerifyText>
      <VerifyText>{t('verifyUKText3')}</VerifyText>
      <LazyLoad>
        <VerifyImage src="/about/verify_uk.png" alt={t('verifyUK')} />
      </LazyLoad>
    </>
  )
}

const USTab = () => {
  const t = useText()
  return <div>US</div>
}

const VerifyHeader = styled.h4`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`
const VerifyTabButton = styled(Button)`
  margin-right: 16px;
`
const VerifyText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
`

const VerifyImage = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
  margin: auto;
`
