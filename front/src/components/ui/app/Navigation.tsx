import React from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import Container from '../shared/Container'
import Text from '../shared/Text'

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`

const PageTitle = styled(Text)`
  font-style: italic;
  font-size: 20px;
  @media (min-width: 800px) {
    font-size: 40px;
  }
`

const ResponsiveLogo = styled(Logo)`
  width: 100px;
  @media (min-width: 800px) {
    width: 150px;
  }
`

function Navigation() {
  return (
    <Container p="2em 0" as={NavigationContainer}>
      <ResponsiveLogo src="/images/logo.png" />
      <PageTitle as="h1" textAlign="center">
        Bundle Manager
      </PageTitle>
    </Container>
  )
}

export default Navigation
