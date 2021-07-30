import React from 'react'
import { Global } from '@emotion/react'

import { Bundle } from './types'
import globalStyles from './globalStyles'
import AppWrapper from './components/ui/app/AppWrapper'
import Navigation from './components/ui/app/Navigation'
import CreateBundleForm from './components/CreateBundleForm'
import Container from './components/ui/shared/Container'
import Table from './components/ui/shared/Table'
import Box from './components/ui/shared/Box'

function App() {
  function handleOnSubmit(bundle: Bundle) {
    console.log(bundle)
  }

  return (
    <>
      <Global styles={globalStyles} />
      <AppWrapper>
        <Navigation />
        <Container>
          <CreateBundleForm onSubmit={handleOnSubmit} />
          <Box mt="50px">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Bundle</th>
                  <th>Company</th>
                  <th>Active</th>
                  <th>Category</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </Table>
          </Box>
        </Container>
      </AppWrapper>
    </>
  )
}

export default App
