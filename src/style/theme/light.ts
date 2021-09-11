import { createTheme } from '@material-ui/core/styles'

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#2887C7',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})
