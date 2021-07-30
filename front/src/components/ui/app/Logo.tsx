import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import Image from '../shared/Image'

interface LogoProps extends HTMLAttributes<HTMLImageElement> {}

export default styled(Image)<LogoProps>`
  max-width: ${(props) => props.width || '150px'};
`
