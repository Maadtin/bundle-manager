import { Bundle, Response } from '../types'
import http from '../http'

export function getBundles(): Promise<Response<Bundle[]>> {
  return http.get('/?controller=bundle&method=get')
}

export function createBundle(bundle: Bundle): Promise<Response<Bundle>> {
  return http.post('/?controller=bundle&method=create', bundle)
}

export function deleteBundle(bundleId: number): Promise<Response<[]>> {
  return http.delete('?controller=bundle&method=delete', bundleId)
}
