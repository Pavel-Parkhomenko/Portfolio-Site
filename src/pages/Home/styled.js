import styled, { css, keyframes } from 'styled-components'
import moon from '../../assets/svg/moon.svg'
import sun from '../../assets/svg/sun.svg'

const paddLeft = '20%'
const paddRight = '20%'

const mediaMobile = `
  @media (max-width: 568px){
      padding-left: 5%;
      padding-right: 5%;
  } 
`

const roundContainer = `
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.bgColor.primary};
`

export const ContainerNav = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 30px ${paddRight} 0  ${paddLeft};

  ${mediaMobile}
`

export const IconTheme = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${(props) => {
    switch (props.icon) {
      case 'light': return sun
      case 'dark': return moon
      default: return sun
    }
  }});
`

const toLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const toRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`

export const ContainerHeader = styled.div`
  padding: 80px ${paddRight} 70px  ${paddLeft};
  background-color: ${({ theme }) => theme.bgColor.primary};
  color: ${({ theme }) => theme.textColor.primary};

  @media (max-width: 568px) {
    ${(props) => (props.active ? css`
      overflow-y: hidden;
      animation: ${toLeft} 0.5s;
      animation-fill-mode: forwards;
  ` : css`
      animation: ${toRight} 0.5s;
    `)};
  }
  ${mediaMobile}
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: ${({ theme }) => theme.bgColor.secondary};
  color: ${({ theme }) => theme.textColor.primary};

  ${roundContainer}

  ${mediaMobile}
`

export const ContainerTags = styled.div`
  background-color: ${({ theme }) => theme.bgColor.secondary};

  ${roundContainer}
`
export const ContainerTechnologies = styled.div`
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: ${({ theme }) => theme.bgColor.primary};
  color: ${({ theme }) => theme.textColor.primary};
  ${mediaMobile}
`

export const ContainerWorks = styled.div`
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: ${({ theme }) => theme.bgColor.primary};
  color: ${({ theme }) => theme.textColor.primary};
  ${mediaMobile}
`

export const ContainerExtraWorks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: ${({ theme }) => theme.bgColor.secondary};
  color: ${({ theme }) => theme.textColor.primary};
  background-color: ${(props) => {
    switch (props.bg) {
      case 'primary': return ({ theme }) => theme.bgColor.primary
      case 'secondary': return ({ theme }) => theme.bgColor.secondary
      default: return ({ theme }) => theme.bgColor.secondary
    }
  }};
  
  ${mediaMobile}
`

export const TitleContainer = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  // color: ${({ theme }) => theme.textColor.primary};
  text-align: center;
  padding: 50px 0 50px 0;
  margin: 0;

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, red, fuchsia);
  text-transform: uppercase;
`

export const ContainerMailForm = styled.div`
  margin-bottom: 50px;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: ${({ theme }) => theme.bgColor.primary};
  color: ${({ theme }) => theme.textColor.primary};
  ${mediaMobile}
`
