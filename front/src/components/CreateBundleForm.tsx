import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { Bundle, Category } from '../types'
import Button from './ui/shared/Button'
import Modal from './ui/shared/Modal'
import Input from './ui/shared/Input'
import Label from './ui/shared/Label'
import Text from './ui/shared/Text'
import Select from './ui/shared/Select'

interface CreateBundleFormProps {
  onSubmit: (bundle: Bundle) => void
}

const initialValues: Bundle = {
  bundle: '',
  active: false,
  category: 'Game',
  email: '',
  name: '',
}

const categories: Category[] = ['Game', 'Music', 'Social', 'Tool']

function CreateBundleForm({ onSubmit }: CreateBundleFormProps) {
  const [open, setOpen] = useState(false)

  function handleOnSubmit(values: Bundle) {
    onSubmit(values)
  }

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
          <Form>
            <Label mb="10px" d="block">
              <Text mb="5px" as="span" d="block">
                Name
              </Text>
              <Input type="text" />
            </Label>
            <Label mb="10px" d="block">
              <Text mb="5px" as="span" d="block">
                Bundle
              </Text>
              <Input type="text" />
            </Label>
            <Label mb="10px" d="block">
              <Text mb="5px" as="span" d="block">
                Company
              </Text>
              <Input type="text" />
            </Label>
            <Label mb="10px" d="block">
              <Text mb="5px" as="span" d="block">
                Active
              </Text>
              <Input width="fit-content" type="checkbox" />
            </Label>
            <Label mb="10px" d="block">
              <Text mb="5px" as="span" d="block">
                Category
              </Text>
              <Select>
                {categories.map((category) => (
                  <option>{category}</option>
                ))}
              </Select>
            </Label>
            <Button width="100%" type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Formik>
      </Modal>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Add bundle registry
      </Button>
    </>
  )
}

export default CreateBundleForm
