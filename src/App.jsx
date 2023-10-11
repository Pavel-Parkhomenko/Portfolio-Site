import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import GlobalStyle from './globalStyle'
import theme from './generalTheme'
import { dark, light } from './themes'

function App() {
  const [myTheme, setMyTheme] = useState(localStorage.getItem('__curTheme') || 'light')
  const changeTheme = () => {
    setMyTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    console.log(myTheme)
    localStorage.setItem('__curTheme', myTheme)
  }
  return (
    <ThemeProvider
      theme={myTheme === 'light'
        ? { ...theme, ...light }
        : { ...theme, ...dark }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home icon={myTheme} changeTheme={changeTheme} />}
          />
          <Route
            path="/projs"
            element={<Projects icon={myTheme} changeTheme={changeTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
