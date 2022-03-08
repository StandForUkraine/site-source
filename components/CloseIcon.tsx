import React from 'react'

export const CloseIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9.818 2.182 0 0 2.182 9.818 12 0 21.818 2.182 24 12 14.182 21.818 24 24 21.818 14.182 12 24 2.182 21.818 0 12 9.818Z"
      fill="#4F4F4F"
    />
  </svg>
)

export default CloseIcon
