import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyle from './globalStyle'
import theme from './generalTheme'
import { dark, light } from './themes'

function App() {
  const [myTheme, setMyTheme] = useState('light')
  const changeTheme = () => {
    setMyTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeProvider
      theme={myTheme === 'light'
        ? { ...theme, ...light }
        : { ...theme, ...dark }}
    >
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Home icon={myTheme} changeTheme={changeTheme} />}
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
