import { LoginPayload, LoginResponse, User } from 'models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { removeAllDataStorage } from 'utils'

export interface AuthState {
  isLoggedIn: boolean
  logging: boolean
  currentUser?: User | {}
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.logging = false
      state.currentUser = action.payload.user
    },
    loginFailed: (state) => {
      state.logging = false
      state.currentUser = initialState.currentUser
    },

    hello: (state) => {
      // eslint-disable-next-line no-console
      // state.logging = true;
    },
    logout: () => {
      removeAllDataStorage()
      // return initialState;
    },
  },
})

export const authActions = authSlice.actions
export const { hello } = authSlice.actions

const authReducer = authSlice.reducer
export default authReducer
