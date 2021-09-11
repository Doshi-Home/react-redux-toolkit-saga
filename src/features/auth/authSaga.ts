import { decrement } from 'features/counter/counterSlice'
import {
  call,
  fork,
  put,
  take,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { loginApi } from 'api/loginApi'
import { SMC_AUTH } from 'configs/constants'
import { push } from 'connected-react-router'
import { LoginPayload, LoginResponse, ResponseData } from 'models'
import { toast } from 'react-toastify'
import { getDataStorage, setDataStorage } from 'utils'
import { authActions, hello } from './authSlice'

function* handleLogin(payload: LoginPayload) {
  try {
      // eslint-disable-next-line no-console
    console.log(payload, '<----');
    const response: ResponseData<LoginResponse> = yield call(
      loginApi.login,
      payload
    )
    if (response) {
      console.log(response)
      // yield put(authActions.loginSuccess(response.data))
      // setDataStorage(SMC_AUTH, response.data)
      // yield put(push('/'))
    }
  } catch (error: any) {
    console.log(error)
    // toast.error(error?.response?.data)
    // yield put(authActions.loginFailed())
  }
}

function* handleLogout() {
  yield put(authActions.logout())
  yield put(push('/login'))
}

function* watchLoginFlow() {
  while (true) {
    const isSigned = getDataStorage(SMC_AUTH)
    if (!isSigned) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      )
      yield fork(handleLogin, action.payload)
    }
    yield take(authActions.logout)
    yield call(handleLogout)
  }
}

function* hello2() {
  console.log('hello FN')
  yield
  // yield put(authActions.hello())
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
  // yield takeEvery(hello.type, hello2)
}
