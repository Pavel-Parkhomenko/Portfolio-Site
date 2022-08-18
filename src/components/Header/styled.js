import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7] + 4}px;
  width: 506px;
`

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[1] + 2}px;
  line-height: 24px;
  width: 497px;
`

export const Avatar = styled.div`
  border-radius: 50%;
  width: 243px;
  height: 243px;
  background-color: cadetblue;
`

export const Button = styled.button`
  width: 208px;
  height: 47px;
  background-color: #FF6464;
  border-radius: 2px;
  color: white;
  border: 0;
`
