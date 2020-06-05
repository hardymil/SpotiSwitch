import React, { useState }from 'react'
import './App.css'
import Routes from './config/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './config/theme'
import {GlobalStyles} from './config/global'
import {Provider} from 'react-redux'
import {store} from './config/store'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
        <Routes/>
      </ThemeProvider>
    </Provider>
  )
}

export default App
