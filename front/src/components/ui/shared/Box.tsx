import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { createSpacingStyles, SpacingStyles } from './utils/createSpacingStyles'

interface BoxProps extends HTMLAttributes<HTMLDivElement>, SpacingStyles {
  background?: string
  bg?: BoxProps['background']
  display?: string
  d?: BoxProps['display']
  width?: string
  w?: BoxProps['width']
}

const Box = styled('div', {
  shouldForwardProp: (propName) =>
    propName !== 'd' &&
    propName !== 'textAlign' &&
    propName !== 'as' &&
    propName !== 'bg' &&
    propName !== 'mb' &&
    propName !== 'width' &&
    propName !== 'variant',
})<BoxProps>`
  background: ${(props) => props.background || props.bg};
  display: ${(props) => props.display || props.d};
  width: ${(props) => props.width || props.w};
  ${(props) => createSpacingStyles(props)};
`

export default Box
