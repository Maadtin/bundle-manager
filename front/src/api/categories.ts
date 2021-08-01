import { Category, Response } from '../types'
import http from '../http'

export function getCategories(): Promise<Response<Category[]>> {
  return http.get('/?controller=category&method=get')
}

export function createCategory(
  category: Category
): Promise<Response<Category>> {
  return http.post('/?controller=category&method=create', category)
}

export function deleteCategory(categoryId: number): Promise<Response<[]>> {
  return http.delete('?controller=category&method=delete', categoryId)
}
