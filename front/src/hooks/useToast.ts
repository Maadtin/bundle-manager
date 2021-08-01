import { CSSProperties } from 'react'
import { toast } from 'react-hot-toast'

type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'
type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

type Renderable = JSX.Element | string | null

interface IconTheme {
  primary: string
  secondary: string
}
type ValueFunction<TValue, TArg> = (arg: TArg) => TValue
type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>

export interface Toast {
  type: ToastType
  id: string
  message: ValueOrFunction<Renderable, Toast>
  icon?: Renderable
  duration?: number
  pauseDuration: number
  position?: ToastPosition
  ariaProps: {
    role: 'status' | 'alert'
    'aria-live': 'assertive' | 'off' | 'polite'
  }
  style?: CSSProperties
  className?: string
  iconTheme?: IconTheme
  createdAt: number
  visible: boolean
  height?: number
}

type ToastOptions = Partial<
  Pick<
    Toast,
    | 'id'
    | 'icon'
    | 'duration'
    | 'ariaProps'
    | 'className'
    | 'style'
    | 'position'
    | 'iconTheme'
  >
>

type Message = ValueOrFunction<Renderable, Toast>

export default function useToast() {
  const createDefaultOptions = (toastOptions?: ToastOptions): ToastOptions => ({
    position: 'top-center',
    ...toastOptions,
  })

  return {
    success: (message: Message, options?: ToastOptions) =>
      toast.success(message, createDefaultOptions(options)),
    error: (message: Message, options?: ToastOptions) =>
      toast.error(message, createDefaultOptions(options)),
    custom: (message: Message, options?: ToastOptions) =>
      toast.custom(message, createDefaultOptions(options)),
  }
}
