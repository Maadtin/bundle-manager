import styled from '@emotion/styled'
import Box from './Box'

interface TextProps {
  color?: string
  fontSize?: string
  display?: string
  textAlign?: string
}

const Text = styled(Box)<TextProps>`
  color: ${(props) => props.color || props.theme.colors.text};
  font-size: ${(props) => props.fontSize};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`

export default Text.withComponent('p')
