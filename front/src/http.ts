import axios from 'axios'

export interface CreateParams {
  controller?: string
  action: string
  extraParams?: { [key: string]: string }
}

export function createParams({
  controller = '',
  action = '',
  extraParams = {},
}: CreateParams) {
  const params: { [key: string]: string } = {}
  Object.keys(extraParams).forEach((key) => {
    if (extraParams[key]) {
      params[key] = extraParams[key]
    }
  })

  return {
    controller,
    action,
    ...params,
  }
}

const http = axios.create({
  baseURL: 'http://tappx-prueba-tecnica.local',
})

export default http
