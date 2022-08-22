import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerExtraWorks, ContainerHeader,
  ContainerInfo, ContainerNav, ContainerTechnologies, ContainerWorks, IconTheme, TitleContainer,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import Footer from '../../components/Footer'
import Hexagon from '../../components/Hexagon'
import WorksList from '../../components/WorksList'
import { infoTitle, technologiesTitle, worksTitle } from '../../mocks'
import WorksListExtra from '../../components/WorksListExtra'

export default function Home({ changeTheme, icon }) {
  return (
    <Container>
      <ContainerNav>
        <IconTheme
          icon={icon}
          onClick={changeTheme}
        />
        <Navigation />
      </ContainerNav>
      <ContainerHeader id="home">
        <Header />
      </ContainerHeader>
      <ContainerInfo id="info">
        <TitleContainer>{ infoTitle }</TitleContainer>
        <InfoCard />
      </ContainerInfo>
      <ContainerTechnologies>
        <TitleContainer>
          { technologiesTitle }
        </TitleContainer>
        <Hexagon />
      </ContainerTechnologies>
      <ContainerWorks id="works">
        <TitleContainer>{ worksTitle }</TitleContainer>
        <WorksList />
      </ContainerWorks>
      <ContainerExtraWorks>
        <WorksListExtra />
      </ContainerExtraWorks>
      <Footer id="contact" />
    </Container>
  )
}
