import React from 'react'
import FacebookIcon from 'core/assets/facebook.svg'
import TwitterIcon from 'core/assets/twitter.svg'

export interface SocialNetwork {
  name: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  generateLink: (link: string, text: string) => string
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'facebook',
    Icon: FacebookIcon,
    generateLink: (link, text) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
  },
  {
    name: 'twitter',
    Icon: TwitterIcon,
    generateLink: (link, text) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text ? text + ' ' + link : link
      )}`,
  },
]
