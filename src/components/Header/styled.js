import styled from 'styled-components'
import avatar from '../../assets/img/avatar.jpg'

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
  border-radius: 50%;
  width: 243px;
  height: 243px;
  background: url(${avatar}) 50%;
  background-size: cover;
  box-shadow: 0 0 10px ${({ theme }) => theme.bgColor.dark};
  
  @media (max-width: 568px) {
    width: 180px;
    height: 180px;
  }
`

export const Button = styled.button`
  width: 208px;
  height: 47px;
  background-color: #FF6464;
  border-radius: 2px;
  color: white;
  border: 0;

  :hover {
    transition: 0.2s ease-in;
    box-shadow: 0 0 10px ${({ theme }) => theme.textColor.secondary};
  }
  
  & > a {
    color: white;
    text-decoration: none;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  svg {
    position: absolute;
    top: -16px;
    width: 275px;
    height: 275px;
    animation: rotate linear 20s infinite;

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 568px) {
      width: 212px;
      height: 212px;
    }
  }

  svg text {
    font-size: 16px;
    fill: ${({ theme }) => theme.textColor.primary};
  }
`
