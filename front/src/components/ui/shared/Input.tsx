import styled from '@emotion/styled'
import Box from './Box'

interface InputProps {}

const Input = styled(Box.withComponent('input'))<InputProps>`
  border: 1px solid #d9e0e6;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: inherit;
  &:not([type='checkbox']) {
    width: 100%;
  }
  &[type='search'] {
    -webkit-appearance: none;
  }
`
export default Input
