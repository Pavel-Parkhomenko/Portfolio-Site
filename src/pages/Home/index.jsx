import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerExtraWorks, ContainerHeader,
  ContainerInfo, ContainerNav, ContainerTechnologies,
  ContainerWorks, IconTheme, TitleContainer,
  ContainerTags,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import Footer from '../../components/Footer'
import Hexagon from '../../components/Hexagon'
import WorksList from '../../components/WorksList'
import {
  infoTitle, technologiesTitle,
  worksTitle, tagsTitle,
} from '../../mocks'
import WorksListExtra from '../../components/WorksListExtra'
import Tags from '../../components/Tags'

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
        <Navigation active={isActive} handleBurger={handleBurger} />
      </ContainerNav>
      <ContainerHeader id="home" active={isActive}>
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
      <ContainerTags>
        <TitleContainer>{ tagsTitle }</TitleContainer>
        <Tags />
        <span>Has it stopped? </span>
        <span>Push to the center faster</span>
      </ContainerTags>
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
