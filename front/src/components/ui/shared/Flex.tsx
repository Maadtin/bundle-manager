import styled from '@emotion/styled'
import Box from './Box'

interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly'
  align?: 'center' | 'flex-start' | 'flex-end'
}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`

export default Flex
