import React, { useState }from 'react'
import './App.css'
import Routes from './config/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './config/theme'
import {GlobalStyles} from './config/global'
import {useDispatch, useSelector, Provider} from 'react-redux'
import {store} from './config/store'
// import {translation} from "./I18n/i18n";
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

  // const lang = useSelector(state=> state.languageReducer.language);
  // const dispatch = useDispatch();
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
        {/* <div>
          <button  onClick={(()=>dispatch({type:'fr'}))}>français</button>
          <button  onClick={(()=>dispatch({type:'en'}))}>anglais</button>
        </div>    
        <div className='titre'>
            <h1>{translation(lang,"see")}</h1>
        </div>   */}
        <Routes/>
      </ThemeProvider>
    </Provider>
  )
}

export default App
