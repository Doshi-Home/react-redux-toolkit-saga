import { ThemeProvider } from '@material-ui/styles'
import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle, lightTheme, ResetCSS } from 'style'
import { history } from 'utils'
import { store } from './app/store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export const Providers: React.FC = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<div>loading...🚀</div>}>
              <ToastContainer />
              <ResetCSS />
              <GlobalStyle />
              {children}
            </Suspense>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </div>
  )
}
