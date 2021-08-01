import * as Yup from 'yup'

interface SchemaBuilder {
  string: () => Yup.StringSchema
  boolean: () => Yup.BooleanSchema
  number: () => Yup.NumberSchema
}

export default function useValidationSchema<TShape extends {}>(
  schema: (builder: SchemaBuilder) => TShape,
  excludes?: [string, string][]
) {
  return Yup.object().shape(schema(Yup), excludes)
}
