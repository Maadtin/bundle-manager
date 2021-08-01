import React, { useState } from 'react'
import { AxiosError } from 'axios'

import Button from '../shared/Button'
import Table from '../shared/Table'
import { Bundle, Response } from '../../../types'
import { deleteBundle } from '../../../api/bundles'
import useToast from '../../../hooks/useToast'
import Text from '../shared/Text'
import Modal from '../shared/Modal'
import Box from '../shared/Box'
import Flex from '../shared/Flex'

interface BundleListProps {
  bundles: Bundle[]
  deletedBundle: () => void
}

function BundleList({ bundles, deletedBundle }: BundleListProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBundleId, setSelectedBundleId] = useState<number>(0)
  const toast = useToast()

  function handleDeleteBundle(bundleId: number) {
    deleteBundle(bundleId)
      .then((response) => {
        toast.success(response.message)
        deletedBundle()
        setIsOpen(false)
      })
      .catch((error: AxiosError<Response<[]>>) => {
        if (error.response) {
          toast.error(error.response.data.message)
        }
      })
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <Text textAlign="center" fontSize="18px">
            Are you sure you want to delete the selected bundle? This action is
            irreversible.
          </Text>
          <Flex justify="flex-end" mt="20px">
            <Button
              mr="10px"
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => handleDeleteBundle(selectedBundleId)}
            >
              Delete
            </Button>
          </Flex>
        </Box>
      </Modal>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bundle</th>
            <th>Company</th>
            <th>Email</th>
            <th>Active</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bundles.length ? (
            bundles.map((bundle) => (
              <tr key={bundle.id}>
                <td>{bundle.name}</td>
                <td>{bundle.bundle}</td>
                <td>{bundle.company}</td>
                <td>{bundle.email}</td>
                <td>{bundle.active ? 'Active' : 'Inactive'}</td>
                <td>{bundle.categoryName}</td>
                <td>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setIsOpen(true)
                      setSelectedBundleId(bundle.id)
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <Text>No bundles</Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default BundleList
