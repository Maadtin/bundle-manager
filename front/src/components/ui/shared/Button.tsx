import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Box from './Box'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

const Button = styled(Box)<ButtonProps>`
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 0;
  font-size: inherit;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme.colors.secondary};
      color: ${props.theme.colors.white};
    `}
`

export default Button.withComponent('button')
