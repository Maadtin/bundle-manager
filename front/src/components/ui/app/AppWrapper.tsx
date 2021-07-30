import React, { ReactChildren, ReactNode } from 'react'

interface AppWrapperProps {
  children: ReactChildren | ReactNode
}

function AppWrapper({ children }: AppWrapperProps) {
  return <div>{children}</div>
}

export default AppWrapper
