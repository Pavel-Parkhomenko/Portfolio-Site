import styled from 'styled-components'

const paddLeft = '20%'
const paddRight = '20%'

export const Container = styled.div`
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`

export const ContainerHeader = styled.div`
  margin-top: 140px;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  margin-bottom: 71px;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
  background-color: #EDF7FA;
`

export const ContainerWorks = styled.div`
  padding-left: ${paddLeft};
  padding-right: ${paddRight};
`

export const TitleContainer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  color: #21243D;
  text-align: center;
`

export const ContainerCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
