import React from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import Container from '../shared/Container'
import Text from '../shared/Text'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

function Navigation() {
  return (
    <Container p="2em 0" as={Grid}>
      <Logo src="/images/logo.png" />
      <Text as="h1" textAlign="center">
        Bundle Manager
      </Text>
    </Container>
  )
}

export default Navigation
