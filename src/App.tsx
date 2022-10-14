import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { CycleContextprovider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CycleContextprovider>
          <Router />
        </CycleContextprovider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
