import styled from 'styled-components'

export const Hero = () => (
  <HeroWrapper>
    <HeroHeader>Help Ukrainian Military &amp; Humanitarian Organizations</HeroHeader>
    <HeroText>
      Support Ukraine in the face of <i>Russian military aggression</i>.
    </HeroText>
    <HeroText>
      Donate to verified projects to help Armed Forces of Ukraine or humanitarian charities.
    </HeroText>
    <HeroText>Inform the public by sharing our newslets.</HeroText>
  </HeroWrapper>
)

export default Hero

const HeroWrapper = styled.div`
  padding: 20px;
`

const HeroHeader = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  text-align: center;
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #333;
`
