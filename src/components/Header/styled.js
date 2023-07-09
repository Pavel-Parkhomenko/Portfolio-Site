import styled, { css } from 'styled-components'
import avatar from '../../assets/img/avatar.jpg'
import avatar2 from '../../assets/img/avatar2.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 568px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7] + 4}px;
  width: 100%;
  margin-top: 0;
  
  @media (max-width: 568px) {
    font-size: 32px;
    margin-top: 34px;
  }
`

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[1] + 2}px;
  line-height: 24px;
  width: 100%;
  margin-bottom: 38px;
`

export const TextContainer = styled.div`
  width: 60%;

  @media (max-width: 568px) {
    width: 100%;
    text-align: center;
  }
`

export const Avatar = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 248px;
  height: 248px;
  background-color: ${({ theme }) => theme.bgColor.secondary};
  bottom: 0;
  left: 11px;
`

export const BigCircleAvatar = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  //background-color: blue;
`

export const ImgAvatar = styled.div`
  position: absolute;
  bottom: -1.8px;
  right: 2.7px;
  background: url(${avatar2}) 100%;
  background-size: cover;
  width: 264.5px;
  height: 300px;
  border-radius: 50%;
  
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`
