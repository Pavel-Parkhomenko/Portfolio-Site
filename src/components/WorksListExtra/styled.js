import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
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
  background-color: ${({ theme }) => theme.bgColor.secondary};
  margin: 0;
  padding: 0;

  animation: ${slideUp} 1.5s;
  
  &[open] {
    animation: ${slideDown} 1.5s;
  }
`

export const Summary = styled.summary`
  background-color: ${({ theme }) => theme.bgColor.secondary};
  padding: 30px 0 30px 0;
  margin: 0;
  font-weight: 700;
  font-size: 22px;

  &::before {
    content: "  ";
    padding-right: 10px;
  }
`
