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
  
  p, span {
    color: transparent; !important;
    -webkit-background-clip: text; !important;
    background-clip: text; !important;
    background-image: linear-gradient(to right, red, fuchsia); !important;
  }
`
