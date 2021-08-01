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
  overflow?: string
}

const forwardedProps = [
  'overflow',
  'as',
  'textAlign',
  'width',
  'w',
  'bg',
  'd',
  'mb',
  'width',
  'variant',
  'mt',
  'm',
  'mb',
  'justify',
  'align',
]

const Box = styled('div', {
  shouldForwardProp: (propName: string) => !forwardedProps.includes(propName),
})<BoxProps>`
  background: ${(props) => props.background || props.bg};
  display: ${(props) => props.display || props.d};
  width: ${(props) => props.width || props.w};
  overflow: ${(props) => props.overflow};
  ${(props) => createSpacingStyles(props)};
`

export default Box
