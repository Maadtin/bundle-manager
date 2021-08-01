import { AxiosResponse } from 'axios'
import { Bundle, Response } from '../types'
import http, { CreateParams, createParams } from '../http'

function createBundleParams(bundleParams: CreateParams) {
  return createParams({
    controller: 'bundle',
    ...bundleParams,
  })
}

export function getBundles({ text = '' } = {}): Promise<Response<Bundle[]>> {
  const params = createBundleParams({ action: 'get', extraParams: { text } })
  return http
    .get('/', { params })
    .then((response: AxiosResponse<Response<Bundle[]>>) => response.data)
}

export function createBundle(bundle: Bundle): Promise<Response<Bundle>> {
  const params = createBundleParams({ action: 'create' })
  return http
    .post('/', bundle, { params })
    .then((response: AxiosResponse<Response<Bundle>>) => response.data)
}

export function deleteBundle(bundleId: number): Promise<Response<[]>> {
  const params = createBundleParams({ action: 'delete' })
  return http
    .delete('/', {
      data: bundleId,
      params,
    })
    .then((response: AxiosResponse<Response<[]>>) => response.data)
}
