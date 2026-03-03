import * as React from 'react'

function Toaster() {
  return null
}

export interface ToastActionElement {
  altText: string
  action: React.ReactNode
}

export interface ToastProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export { Toaster }
