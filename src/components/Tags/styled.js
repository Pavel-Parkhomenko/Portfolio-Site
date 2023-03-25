import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  height: 500px;
  ${({ theme }) => theme.textColor.primary};
  //position: relative;

  @media (max-width: 568px){
    height: 350px;
  }
`

export const A = styled.div``

