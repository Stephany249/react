import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globals'
import { Router } from './Router'
import { CheckoutContextProvider } from './context/CheckoutProvider'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>    
      <GlobalStyle />  
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>     
    </ThemeProvider>
  )
}

export default App
