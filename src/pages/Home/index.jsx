import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerCardInfo, ContainerHeader,
  ContainerInfo, TitleContainer,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'

export default function Home() {
  return (
    <Container>
      <ContainerHeader>
        <Navigation />
        <Header />
      </ContainerHeader>
      <ContainerInfo>
        <TitleContainer>Information</TitleContainer>
        <ContainerCardInfo>
          <InfoCard />
          <InfoCard />
        </ContainerCardInfo>
        <p>Read more</p>
      </ContainerInfo>
    </Container>
  )
}
