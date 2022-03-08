import useMountedRef from 'core/utils/useMountedRef'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { useText } from 'core/utils/lang'
import Button from './Button'

export const CopyButton = ({ content }: { content: string }) => {
  const t = useText()
  const mountedRef = useMountedRef()
  const [copied, setCopied] = useState(false)

  return !copied ? (
    <CopyToClipboard
      text={content}
      onCopy={() => {
        setCopied(true)
        setTimeout(() => {
          if (!mountedRef.current) {
            return
          }

          setCopied(false)
        }, 2000)
      }}
    >
      <CopyBtn color="default">{t('copyLink')}</CopyBtn>
    </CopyToClipboard>
  ) : (
    <CopyBtn color="success">{t('copyLinkDone')}</CopyBtn>
  )
}

export default CopyButton

const CopyBtn = styled(Button).attrs({
  fullWidth: true,
})`
  margin-top: 16px;
`
