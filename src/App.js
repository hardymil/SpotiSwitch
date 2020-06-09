import React, { useState }from 'react'
import './App.css'
import Routes from './config/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './config/theme'
import {GlobalStyles} from './config/global'
import {useDispatch, useSelector, Provider} from 'react-redux'
import {store} from './config/store'
import ToggleTheme from './components/ToggleTheme'
import { Notifications } from 'react-push-notification';
import { useTranslation } from 'react-i18next';
import {StyledTitle} from './screens/Genres/styles'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const {t,i18n} = useTranslation()
  
  return (
  
    <Provider store={store}>
      <Notifications />
      <StyledTitle>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
      </StyledTitle>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
       
        <Routes/>
      </ThemeProvider>
    </Provider>
  )
}

export default App
