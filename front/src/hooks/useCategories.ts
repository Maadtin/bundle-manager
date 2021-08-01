import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Category } from '../types'
import { getCategories } from '../api/categories'

export default function useCategories(): [
  Category[],
  Dispatch<SetStateAction<Category[]>>
] {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data)
    })
  }, [])

  return [categories, setCategories]
}
