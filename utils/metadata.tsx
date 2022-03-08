import { useText } from './lang'

export interface MetadataParams {
  title: string
  description: string
  image: string
  siteName: string
}

const twitterUser = process.env.NEXT_PUBLIC_TWITTER_USER
const baseUrl = process.env.NEXT_PUBLIC_SITE_BASEURL

export const renderMetaData = ({ title, description, image, siteName }: MetadataParams) => {
  const fullImage = baseUrl + image.replace('/', '') + '?t=' + Date.now()

  return (
    <>
      <title>Stand For Ukraine</title>
      <meta property="og:type" content="article" />

      <meta property="og:site_name" content={siteName} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="name" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={'@' + twitterUser} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta itemProp="image" content={fullImage} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:image" content={fullImage} />
    </>
  )
}

export function useMetadataRenderer() {
  const t = useText()
  return ({ title, description, image }: Partial<MetadataParams>) => {
    return renderMetaData({
      title: title || t('siteName'),
      description: description || t('siteDescription'),
      image: image || t('thumbnail'),
      siteName: t('siteName'),
    })
  }
}
