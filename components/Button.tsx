import styled from 'styled-components'

export interface ButtonProps {
  color?: 'default' | 'dark' | 'success'
  fullWidth?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  text-decoration: none;
  padding: 6px 16px;
  border: 2px solid
    ${(props) =>
      props.color === 'dark' ? '#000' : props.color === 'success' ? '#D0F1D5' : '#F2F2F2'};
  background-color: ${(props) =>
    props.color === 'dark' ? '#000' : props.color === 'success' ? '#D0F1D5' : '#F2F2F2'};
  color: ${(props) =>
    props.color === 'dark' ? '#fff' : props.color === 'success' ? '#219653' : '#000'};
  font-size: 16px;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  height: 36px;
  justify-content: center;

  ${(props) => (props.fullWidth ? 'width: 100%;' : '')}

  ${(props) =>
    props.color === 'dark'
      ? `
  &:hover {
    color: #FFE600;
  }
  &:focus {
    border-color: #FFE600;
  }
  `
      : props.color === 'success'
      ? `
  &:hover {
    background-color: #D0F1D5;
    border-color: transparent;
  }
  &:focus {
    border-color: transparent;
  }
  `
      : `
  &:hover {
    background-color: rgba(255, 230, 0, 0.5);
    border-color: transparent;
  }
  &:focus {
    border-color: #FFE600;
  }
  `}
`

Button.defaultProps = {
  color: 'default',
  fullWidth: false,
}

export default Button
