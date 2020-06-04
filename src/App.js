import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Routes from './config/router'
import { theme } from './config/theme'
import {Provider} from 'react-redux'
import {store} from './config/store'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </Provider>
  )
}

export default App
