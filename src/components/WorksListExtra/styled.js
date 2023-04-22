import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Details = styled.details`
  margin: 0;
  padding: 0;
`

export const Summary = styled.summary`
  padding: 30px 0 30px 0;
  margin: 0;
  font-weight: 700;
  font-size: 22px;

  &::before {
    content: "  ";
    padding-right: 10px;
  }
`
