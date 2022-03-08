import styled from 'styled-components'
import { useText } from 'core/utils/lang'
import Langs from './Langs'

export const Hero = () => {
  const t = useText()

  return (
    <>
      <Langs />
      <HeroWrapper>
        <HeroHeader>{t('heroHeader')}</HeroHeader>
        <HeroText>{t('heroText1')}</HeroText>
        <HeroText>{t('heroText2')}</HeroText>
        <HeroText>{t('heroText3')}</HeroText>
      </HeroWrapper>
    </>
  )
}

export default Hero

const HeroWrapper = styled.div`
  padding: 20px;
  padding-top: 0;
`

const HeroHeader = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  text-align: center;
  margin: 0;
  word-wrap: break-word;
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #333;
`
