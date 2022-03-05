import styled from 'styled-components'
import { socialNetworks } from 'utils/socialNetworks'

export const SocialButtons = ({
  text,
  link,
  onClick,
}: {
  link: string
  onClick: (networkName: string) => any
  text?: string
}) => (
  <SocialButtonsWrapper>
    {socialNetworks.map((network, i) => (
      <SocialButton
        key={i}
        target="_blank"
        rel="noopener"
        href={network.generateLink(link, text || '')}
        dangerouslySetInnerHTML={{ __html: network.icon }}
        onClick={() => onClick(network.name)}
      />
    ))}
  </SocialButtonsWrapper>
)

export default SocialButtons

const SocialButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialButton = styled.a`
  margin: 5px;
`
