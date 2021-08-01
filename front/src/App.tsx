import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Global } from '@emotion/react'

import { Bundle } from './types'
import globalStyles from './globalStyles'
import AppWrapper from './components/ui/app/AppWrapper'
import Navigation from './components/ui/app/Navigation'
import CreateBundleForm from './components/ui/app/CreateBundleForm'
import Container from './components/ui/shared/Container'
import Box from './components/ui/shared/Box'
import { createBundle } from './api/bundles'
import useBundles from './hooks/useBundles'
import useCategories from './hooks/useCategories'
import useToast from './hooks/useToast'
import BundleList from './components/ui/app/BundleList'
import Button from './components/ui/shared/Button'
import Modal from './components/ui/shared/Modal'
import useDisclosure from './hooks/useDisclosure'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: false })
  const { bundles, refetch } = useBundles()
  const [categories] = useCategories()

  const toast = useToast()

  function handleCreateBundle(bundle: Bundle) {
    createBundle(bundle).then((response) => {
      if (response.status === 'ok') {
        toast.success(response.message)
        onClose()
        refetch()
      } else {
        toast.error(response.message)
      }
    })
  }

  return (
    <>
      <Global styles={globalStyles} />
      <AppWrapper>
        <Toaster />
        <Navigation />
        <Container mt="50px">
          <Modal isOpen={isOpen} onClose={onClose}>
            <CreateBundleForm
              categories={categories}
              onSubmit={handleCreateBundle}
              onCancel={onClose}
            />
          </Modal>
          <Button variant="secondary" onClick={onOpen}>
            Add bundle
          </Button>
          <Box mt="50px">
            <BundleList deletedBundle={() => refetch()} bundles={bundles} />
          </Box>
        </Container>
      </AppWrapper>
    </>
  )
}

export default App
