import { Header } from 'components/Common'
import React from 'react'
import styled from 'styled-components'

interface AdminLayoutProps {}

const Root = styled.div`
  min-height: 100vh;
`
const HeaderLayout = styled.div`
  background: red;
`
const MainLayout = styled.div`
  background: green;
  height: 100%;
`

export const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <Root>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <MainLayout>main</MainLayout>
    </Root>
  )
}
