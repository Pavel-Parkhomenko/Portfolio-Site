import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  min-height: 500px;
  ${({ theme }) => theme.textColor.primary};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColor.primary};

  @media (max-width: 568px){
    min-height: 350px;
  }
`

export const A = styled.div``

