import styled from '@emotion/styled'
import Box from './Box'

interface ImageProps {
  width?: string
  height?: string
  boxSize?: string
}

const Image = styled(Box)<ImageProps>`
  width: ${(props) => props.boxSize || props.width};
  height: ${(props) => props.boxSize || props.height};
  object-fit: cover;
`

export default Image.withComponent('img')
