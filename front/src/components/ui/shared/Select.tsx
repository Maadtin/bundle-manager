import styled from '@emotion/styled'
import Box from './Box'

interface SelectProps {}

const Select = styled(Box)<SelectProps>`
  width: 100%;
  border: 1px solid #d9e0e6;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: inherit;
`
export default Select.withComponent('select')
