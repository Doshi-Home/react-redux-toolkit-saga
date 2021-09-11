import { SMC_AUTH } from 'configs/constants'
import { Redirect, Route, RouteProps } from 'react-router'
import { getDataStorage } from 'utils/localStorageHelpers'

export const PrivateRoute = (props: RouteProps) => {
  const token = Boolean(getDataStorage(SMC_AUTH))
  if (!token) return <Redirect to='/login' />
  return <Route {...props} />
}
