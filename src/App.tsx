import { PrivateRoute } from 'components/Common'
import React, { lazy } from 'react'
import { Route, Switch } from 'react-router'
import { Routes, routes } from 'routes'

const LoginPage = lazy(() => import('features/auth/pages/LoginPage'))
const NotFound = lazy(() => import('components/Common/NotFound'))

function App() {
  return (
    <Switch>
      {routes.map((route: Routes) => (
        <PrivateRoute
          key={route.title}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Route path='/login' component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
