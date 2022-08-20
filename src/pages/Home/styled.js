import styled from 'styled-components'

const paddLeft = '20%'
const paddRight = '20%'

const mediaMobile = `
  @media (max-width: 568px){
      padding-left: 5%;
      padding-right: 5%;
  } 
`

export const Container = styled.div`
  height: 100vh;
`

export const ContainerHeader = styled.div`
  margin-top: 140px;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  margin-bottom: 71px;
  ${mediaMobile}
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: #EDF7FA;
  ${mediaMobile}
`

export const ContainerWorks = styled.div`
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  ${mediaMobile}
`

export const TitleContainer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  color: #21243D;
  text-align: center;
`
