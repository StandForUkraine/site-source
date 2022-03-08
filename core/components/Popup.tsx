import { ReactNode } from 'react'
import styled from 'styled-components'
import CloseIcon from 'core/assets/close.svg'

export const Popup = ({
  onClose,
  children,
  width,
}: {
  onClose: () => any
  children: ReactNode
  width?: number
}) => (
  <>
    <PopupBG onClick={onClose} />

    <PopupWrapper width={width}>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>

      {children}
    </PopupWrapper>
  </>
)

export default Popup

const PopupBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

const PopupWrapper = styled.div<{ width?: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 24px;
  padding: 20px;
  width: ${({ width }) => width || 560}px;
  max-width: 90%;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 19px;
  background: none;
  padding: 5px;
  border: none;

  svg path {
    fill: #4f4f4f;
  }

  &:hover {
    text-decoration: underline;
  }
`
