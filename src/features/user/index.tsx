import { useAppDispatch } from 'app/hooks'
import { AdminLayout } from 'components/Layout'
import { authActions } from 'features/auth/authSlice'
import React from 'react'

interface IndexProps {}

const Index = (props: IndexProps) => {
  const dispatch = useAppDispatch()
  const onSubmit = () => {
    dispatch(authActions.logout())
  }
  return <AdminLayout />
}
export default Index
