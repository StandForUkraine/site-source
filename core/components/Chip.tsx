import styled from 'styled-components'

export const Chip = styled.button<{ isActive?: boolean }>`
  background: #f2f2f2;
  border-radius: 40px;
  padding: 6px 10px;
  border: 2px solid #f2f2f2;
  outline: none;
  font-weight: 500;
  white-space: nowrap;
  margin-right: 5px;

  &:hover {
    border-color: rgba(255, 229, 0, 0.5);
  }

  &:focus {
    border-color: #ffe500;
  }

  ${({ isActive }) =>
    isActive
      ? `
        background: #000;
        color: #fff;
        border-color: #000;
        `
      : ''}
`

export default Chip
