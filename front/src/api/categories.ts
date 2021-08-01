import { Category, Response } from '../types'
import http, { CreateParams, createParams } from '../http'

function createCategoryParams(categoryParams: CreateParams) {
  return createParams({
    controller: 'category',
    ...categoryParams,
  })
}

export function getCategories(): Promise<Response<Category[]>> {
  const params = createCategoryParams({ action: 'get' })
  return http.get('/', { params }).then((response) => response.data)
}

export function createCategory(
  category: Category
): Promise<Response<Category>> {
  const params = createCategoryParams({ action: 'create' })
  return http
    .post('/?controller=category&method=create', category, { params })
    .then((response) => response.data)
}

export function deleteCategory(categoryId: number): Promise<Response<[]>> {
  const params = createCategoryParams({ action: 'delete' })
  return http
    .delete('?controller=category&method=delete', {
      data: categoryId,
      params,
    })
    .then((response) => response.data)
}
