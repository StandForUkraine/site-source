import React, { useState } from 'react'
import styled from 'styled-components'
import { useText } from 'core/utils/lang'
import LazyLoad from 'react-lazyload'
import Button from 'core/components/Button'
import Link from 'next/link'
type Tab = 'uk' | 'us'

export default function AboutOrganization() {
  const t = useText()
  const [tab, setTab] = useState<Tab>('uk')
  return (
    <ExplanationWrapper>
      <ExplanationBlock>
        <ExplanationTitle>{t('aboutOrganizationHeader')}</ExplanationTitle>
        <ExplanationText>{t('aboutOrganizationText1')}</ExplanationText>
        <ExplanationText>{t('aboutOrganizationText2')}</ExplanationText>
        <ExplanationText>{t('aboutOrganizationText3')}</ExplanationText>
        <ExplanationText>{t('aboutOrganizationText4')}</ExplanationText>
        <Link href="">
          <Button color="white">{t('suggestOrganization')}</Button>
        </Link>
      </ExplanationBlock>
      <ExplanationBlock>
        <ExplanationSubTitle>{t('verifyHeader')}</ExplanationSubTitle>
        <VerifyTabButton color={tab === 'uk' ? 'dark' : 'white'} onClick={() => setTab('uk')}>
          {t('verifyUK')}
        </VerifyTabButton>
        <VerifyTabButton color={tab === 'us' ? 'dark' : 'white'} onClick={() => setTab('us')}>
          {t('verifyUS')}
        </VerifyTabButton>

        {tab === 'uk' && (
          <>
            <VerifyText>{t('verifyUKText1')}</VerifyText>
            <VerifyText>{t('verifyUKText2')}</VerifyText>
            <VerifyText>{t('verifyUKText3')}</VerifyText>
          </>
        )}
        {tab === 'us' && (
          <>
            CHANGE
            <VerifyText>{t('verifyUKText1')}</VerifyText>
            <VerifyText>{t('verifyUKText2')}</VerifyText>
            <VerifyText>{t('verifyUKText3')}</VerifyText>
          </>
        )}
      </ExplanationBlock>
      <ExplanationBlock>
        <LazyLoad>
          {tab === 'uk' && <VerifyImage src="/about/verify_uk.png" alt={t('verifyUK')} />}
          {tab === 'us' && <VerifyImage src="/about/verify_uk.png" alt={t('verifyUK')} />}
        </LazyLoad>
      </ExplanationBlock>
    </ExplanationWrapper>
  )
}

const ExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    border-top: none;
    padding: 40px;
    flex-direction: row;
    background: #f2f2f2;
    border-radius: 12px;
    margin-top: 24px;
  }
`
const ExplanationBlock = styled.div`
  @media (min-width: 768px) {
    margin-right: 40px;
    max-width: 400px;
  }
`
const ExplanationTitle = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
  margin: 0 0 12px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`
const ExplanationSubTitle = styled.h4`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 16px 0;

  @media (min-width: 768px) {
    margin: 0 0 16px 0;
  }
`
const ExplanationText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
  margin: 12px 0;
`

const VerifyTabButton = styled(Button).attrs({
  borderRadius: 16,
})`
  margin-right: 8px;
  font-size: 14px;
`
const VerifyText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
`
const VerifyImage = styled.img`
  max-width: 500px;
  width: 100%;

  @media (min-width: 768px) {
    width: 278px;
    margin-top: 80px;
  }
`
