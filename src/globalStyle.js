import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}
  * {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    transition: background-color 0.4s ease 0.2s;
  }

  body, html {
    height: 100vh;
  }
`
