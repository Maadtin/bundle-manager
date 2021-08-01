import React from 'react'
import Button from '../shared/Button'
import Table from '../shared/Table'
import { Bundle } from '../../../types'
import { deleteBundle } from '../../../api/bundles'
import useToast from '../../../hooks/useToast'
import Text from '../shared/Text'

interface BundleListProps {
  bundles: Bundle[]
  deletedBundle: () => void
}

function BundleList({ bundles, deletedBundle }: BundleListProps) {
  const toast = useToast()

  function handleDeleteBundle(bundleId: number) {
    deleteBundle(bundleId).then((response) => {
      if (response.status === 'ok') {
        toast.success(response.message)
        deletedBundle()
      } else {
        toast.error(response.message)
      }
    })
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Bundle</th>
          <th>Company</th>
          <th>Email</th>
          <th>Active</th>
          <th>Category</th>
          <th>Delete</th>
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
              <td>{bundle.category}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => handleDeleteBundle(bundle.id)}
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
  )
}

export default BundleList
