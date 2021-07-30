export interface Bundle {
  name: string
  bundle: string
  email: string
  active: boolean
  category: Category
}

export type Category = 'Tool' | 'Music' | 'Game' | 'Social'
