import Head from 'next/head'
import DesignSystem from 'core/components/DesignSystem'
import { useMetadataRenderer } from 'core/utils/metadata'

/**
 * Internal design-system reference. Open: http://localhost:3000/ds (or your SERVER_PORT).
 */
export default function DesignSystemPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        {renderMetadata({
          title: 'Design system — Stand For Ukraine',
          description: 'Internal UI reference: colors, typography, and component patterns.',
        })}
      </Head>
      <DesignSystem />
    </>
  )
}
