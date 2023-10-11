import styled, { css, keyframes } from 'styled-components'

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
