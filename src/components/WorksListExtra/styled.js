import styled from 'styled-components'

export const Details = styled.details`
  background-color: ${({ theme }) => theme.bgColor.secondary};
  margin: 0;
  padding: 0;
`

export const Summary = styled.summary`
  background-color: ${({ theme }) => theme.bgColor.secondary};
  padding: 10px 0 0 10px;
  margin: 0;
`
