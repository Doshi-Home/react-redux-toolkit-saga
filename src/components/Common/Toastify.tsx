import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

interface ToastifyProps {
  content: string
  status: 'info' | 'success' | 'warn' | 'error'
  position: 'top-right' | 'bottom-right'
}

export const Toastify = (props: ToastifyProps) => {
  const { content } = props
  return <div>{content}</div>
}
