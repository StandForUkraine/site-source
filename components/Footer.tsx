import styled from 'styled-components'
import { useText } from 'utils/lang'
import InstagramIcon from 'assets/instagram.svg'
import FacebookIcon from 'assets/facebook.svg'
import TwitterIcon from 'assets/twitter.svg'

export const Hero = () => {
  const t = useText()

  return (
    <FooterWrapper>
      <Column>
        <FirstColumnText>{t('footerHeader')}.</FirstColumnText>
      </Column>
      <Column>
        <SecondColumnTitle>{t('footerGoals')}</SecondColumnTitle>
        <SecondColumnList>
          <li>{t('goal1')}</li>
          <li>{t('goal2')}</li>
          <li>{t('goal3')}</li>
          <li>{t('goal4')}</li>
          <li>{t('goal5')}</li>
        </SecondColumnList>
      </Column>
      <Column>
        <p>{t('footerCreds')}</p>
        <br />
        <Flags>🇺🇦 🇬🇧 🇫🇷 🇩🇪 🇦🇹 🇵🇱 🇷🇴 🇹🇷</Flags>
        <br />
        <p>
          {t('footerContact')}:{' '}
          <a href="mailto:team@standforukraine.com">team@standforukraine.com</a>
        </p>
        <br />
        <SocialIcons>
          <a href="https://twitter.com/StandForUkraine" target="_blank" rel="noopener">
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/Stand-For-Ukraine-107357145224435/"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/stand4ukraine/" target="_blank" rel="noopener">
            <InstagramIcon />
          </a>
        </SocialIcons>
      </Column>
    </FooterWrapper>
  )
}

export default Hero

const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  line-height: 1.3;
  flex-wrap: wrap;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 30px 0;
  }
`

const Column = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 30%;
    margin-bottom: 0;
  }
`

const FirstColumnText = styled.p`
  font-size: 20px;
`

const SecondColumnTitle = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
`

const SecondColumnList = styled.ul`
  li {
    margin-bottom: 5px;
  }
`

const Flags = styled.p`
  font-size: 20px;
`

const SocialIcons = styled.div`
  svg {
    margin-right: 10px;

    &:hover path {
      fill: #666;
    }
  }
`
