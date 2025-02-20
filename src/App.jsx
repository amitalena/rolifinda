import { ThemeProvider } from '@emotion/react'
import MainRoute from './router/MainRoute'
import AppTheme from './theme/AppTheme';

function App() {

  return (
    <ThemeProvider theme={AppTheme}>
      <MainRoute />
    </ThemeProvider>
  )
}

export default App
