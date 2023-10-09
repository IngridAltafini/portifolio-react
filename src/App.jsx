import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import lightTheme from './styles/themes/lightTheme'

import { AppRoutes } from './routes'

import GlobalStyles from './styles/global-styles'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />

        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
