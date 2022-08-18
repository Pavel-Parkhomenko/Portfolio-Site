import styled from 'styled-components'
import avatar from '../../assets/img/avatar.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 568px) {
    flex-direction: column-reverse;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7] + 4}px;
  max-width: 80%;
  width: 100%;
`

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[1] + 2}px;
  line-height: 24px;
  max-width: 80%;
  width: 100%;
  margin-bottom: 38px;
`

export const Avatar = styled.div`
  border-radius: 50%;
  width: 243px;
  height: 243px;
  background: url(${avatar}) 50%;
  background-size: cover;
`

export const Button = styled.button`
  width: 208px;
  height: 47px;
  background-color: #FF6464;
  border-radius: 2px;
  color: white;
  border: 0;
`
