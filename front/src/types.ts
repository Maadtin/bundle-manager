export interface Bundle {
  id: number
  name: string
  bundle: string
  company: string
  email: string
  active: boolean
  category: number | undefined
  categoryName: string | undefined
}

export interface Category {
  id?: number
  name: string
}

export interface Response<Resource> {
  data: Resource
  status: 'error' | 'ok'
  message: string
}
