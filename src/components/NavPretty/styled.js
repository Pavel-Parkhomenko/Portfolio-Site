import styled, { keyframes } from 'styled-components'

const opac = keyframes`
  0% { opacity: 0; transform:scale(0.7); }
  30% { opacity: 1; transform:scale(1); }
  45% { opacity: 1; transform:scale(1); }
  80% { opacity: 0; transform:scale(0.7)  }
  100% { opacity: 0; transform:scale(0.7);  }
`

export const Box = styled.div`

`

export const Container = styled.div`
  font-family: 'Yanone Kaffeesatz', sans-serif; 
  font-size: 60px;
  display: flex;
  cursor: pointer;

  & > svg {
    height: 50vh;
    margin: 0px auto;
    width: 100%;
  }

  g > text {
    text-anchor: middle;
    fill: hsl(247, 77%, 7%);
    opacity: 0;
    transform-origin: 50% 50%;
    transform-box: view-box;
    animation-name: ${opac};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  g > text:nth-child(1) {
    animation-delay: 0s;
  }

  g > text:nth-child(2) {
    animation-delay: 4s;
  }
`
