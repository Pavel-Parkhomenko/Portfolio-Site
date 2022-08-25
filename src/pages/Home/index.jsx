import React, { useState } from 'react'
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
  const [isActive, setIsActive] = useState(false)
  const handleBurger = () => {
    setIsActive(!isActive)
  }
  return (
    <Container>
      <ContainerNav>
        <IconTheme
          icon={icon}
          onClick={changeTheme}
        />
        <Navigation isActive={isActive} handleBurger={handleBurger} />
      </ContainerNav>
      <ContainerHeader id="home" isActive={isActive}>
        <Header />
      </ContainerHeader>
      <ContainerInfo id="info">
        <TitleContainer>{ infoTitle }</TitleContainer>
        <InfoCard />
      </ContainerInfo>
      <ContainerTechnologies id="technologies">
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
      <div id="contact">
        <Footer />
      </div>
    </Container>
  )
}
