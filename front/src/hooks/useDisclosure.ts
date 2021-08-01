import { useEffect, useState } from 'react'

export default function useDisclosure({ isOpen }: { isOpen: boolean }): {
  toggle: () => void
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
} {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => setOpen(isOpen), [isOpen])

  function toggle() {
    setOpen(!open)
  }

  function onOpen() {
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  return {
    isOpen: open,
    toggle,
    onOpen,
    onClose,
  }
}
