import styled from 'styled-components'

export const Details = styled.details`
  background-color: ${({ theme }) => theme.bgColor.secondary};
  margin: 0;
  padding: 0;
`

export const Summary = styled.summary`
  background-color: ${({ theme }) => theme.bgColor.secondary};
  padding: 30px 0 30px 0;
  margin: 0;
  font-weight: 700;
  font-size: 22px;
`
