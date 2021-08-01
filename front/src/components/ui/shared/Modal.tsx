import React, {
  ReactChildren,
  ReactNode,
  MouseEvent,
  useEffect,
  useState,
} from 'react'
import styled from '@emotion/styled'
import Box from './Box'

const ModalOverlay = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`

const ModalContent = styled(Box)<{ maxWidth?: string }>`
  width: 100%;
  margin: auto;
  max-width: 500px;
  padding: 1em;
`

const ModalBody = styled(Box)`
  padding: 1em;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
`

interface ModalProps {
  isOpen: boolean
  children: ReactNode | ReactChildren
  onClose: () => void
}

function Modal({ onClose, isOpen, children }: ModalProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => setOpen(isOpen), [isOpen])

  return open ? (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  ) : null
}

export default Modal
