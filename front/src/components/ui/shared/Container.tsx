import styled from '@emotion/styled'
import Box from './Box'

interface ContainerProps {
  maxWidth?: string
}

const Container = styled(Box)<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.maxWidth || '1200px'};
  padding: 1em;
`

export default Container
