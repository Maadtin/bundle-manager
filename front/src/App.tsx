import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Global } from '@emotion/react'
import { AxiosError } from 'axios'

import { Bundle, Response } from './types'
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
import Flex from './components/ui/shared/Flex'
import SearchBox from './components/ui/app/SearchBox'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: false })
  const [searchText, setSearchText] = useState('')
  const { bundles, refetch } = useBundles({ text: searchText })
  const [categories] = useCategories()

  const toast = useToast()

  function handleCreateBundle(bundle: Bundle) {
    createBundle(bundle)
      .then((response) => {
        toast.success(response.message)
        onClose()
        refetch()
      })
      .catch((error: AxiosError<Response<[]>>) => {
        if (error.response) {
          toast.error(error.response.data.message)
        }
      })
  }

  function handleOnSearch(query: string) {
    setSearchText(query)
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
          <Flex justify="space-between">
            <Button variant="secondary" onClick={onOpen}>
              Add bundle
            </Button>
            <SearchBox onSearch={handleOnSearch} />
          </Flex>
          <Box mt="50px">
            <BundleList deletedBundle={() => refetch()} bundles={bundles} />
          </Box>
        </Container>
      </AppWrapper>
    </>
  )
}

export default App
