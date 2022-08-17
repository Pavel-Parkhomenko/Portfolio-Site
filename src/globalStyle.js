import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}
  
  * {
    font-family: "Roboto", sans-serif;
    font-style: normal;
  }
  
  body, html {
    height: 100vh;
  }
`
