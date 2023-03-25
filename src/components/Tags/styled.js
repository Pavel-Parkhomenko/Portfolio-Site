import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  height: 500px;
  ${({ theme }) => theme.textColor.primary};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColor.primary};

  @media (max-width: 568px){
    height: 350px;
  }
`

export const A = styled.div``

