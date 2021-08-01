import React from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { Bundle, Category } from '../../../types'
import Button from '../shared/Button'
import Input from '../shared/Input'
import Label from '../shared/Label'
import Text from '../shared/Text'
import Select from '../shared/Select'
import useValidationSchema from '../../../hooks/useValidationSchema'
import ErrorMessage from './ErrorMessage'
import Flex from '../shared/Flex'

interface CreateBundleFormProps {
  onSubmit: (bundle: Bundle) => void
  onCancel: () => void
  categories: Category[]
}

const initialValues: Bundle = {
  id: 0,
  name: '',
  bundle: '',
  company: '',
  email: '',
  active: false,
  category: undefined,
  categoryName: '',
}

function CreateBundleForm({
  categories,
  onSubmit,
  onCancel,
}: CreateBundleFormProps) {
  const validationSchema = useValidationSchema((builder) => ({
    name: builder.string().required('The name is required.'),
    bundle: builder
      .string()
      .required('The bundle is required.')
      .matches(
        /^([a-z][a-z\d_]*\.)+[a-z][a-z\d_]*$/g,
        'Invalid bundle format. It should be all lower case and a valid android package name (Example: com.tappx.app)'
      ),
    company: builder.string().required('The company is required.'),
    email: builder.string().required('The email is required.'),
    category: builder.string().required('The category is required.'),
  }))

  function handleOnSubmit(values: Bundle) {
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        ...initialValues,
        category: categories[0]?.id,
      }}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Name
          </Text>
          <Input as={Field} name="name" type="text" />
          <ErrorMessage name="name" />
        </Label>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Bundle
          </Text>
          <Input as={Field} name="bundle" type="text" />
          <ErrorMessage name="bundle" />
        </Label>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Company
          </Text>
          <Input as={Field} name="company" type="text" />
          <ErrorMessage name="company" />
        </Label>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Email
          </Text>
          <Input as={Field} name="email" type="email" />
          <ErrorMessage name="email" />
        </Label>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Active
          </Text>
          <Input as={Field} name="active" width="fit-content" type="checkbox" />
          <ErrorMessage name="active" />
        </Label>
        <Label mb="10px" d="block">
          <Text mb="5px" as="span" d="block">
            Category
          </Text>
          <Field name="category">
            {({ field }: FieldProps<Bundle['category']>) => (
              <Select {...field}>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            )}
          </Field>
          <ErrorMessage name="category" />
        </Label>
        <Flex justify="flex-end">
          <Button type="button" mr="10px" onClick={onCancel} variant="primary">
            Cancel
          </Button>
          <Button type="submit" variant="secondary">
            Create
          </Button>
        </Flex>
      </Form>
    </Formik>
  )
}

export default CreateBundleForm
