import React from 'react'
import { ErrorMessage as FormikErrorMessage } from 'formik'

import Text from '../shared/Text'

function ErrorMessage({ name }: { name: string }) {
  return (
    <FormikErrorMessage name={name}>
      {(errorMessage) => (
        <Text color="crimson" mt="8px" fontSize="14px">
          {errorMessage}
        </Text>
      )}
    </FormikErrorMessage>
  )
}

export default ErrorMessage
