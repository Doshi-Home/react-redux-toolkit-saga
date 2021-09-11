import { Box, Typography } from '@material-ui/core'
import { useAppDispatch } from 'app/hooks'
import logo from 'assets/images/logo.svg'
import { LoginPayload } from 'models'
import React from 'react'
import { authActions, hello } from '../authSlice'
import { LoginForm } from '../components'
import * as S from './styles'
import { loginApi } from 'api/loginApi'
import { toast } from 'react-toastify'
import { decrement } from 'features/counter/counterSlice'

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  const dispatch = useAppDispatch()

  const initialValue: LoginPayload = {
    email: 'contact@smc-compliance.fr',
    password: 'smc202122',
  }

  const handleLogin = (values: LoginPayload) => {
    dispatch(authActions.login(values))
  }

  return (
    <S.Wrapper>
      <S.Bg />
      <S.FormLogin>
        <S.WrapLogo>
          <img src={logo} alt='logo-smc' />
        </S.WrapLogo>
        <Typography color='primary' component='h2'>
          Gestion de la Conformité à la Protection des Données Personnelles
        </Typography>
        <Box mt={3}>
          <LoginForm initialValue={initialValue} onSubmit={handleLogin} />
        </Box>
      </S.FormLogin>
    </S.Wrapper>
  )
}

export default LoginPage
