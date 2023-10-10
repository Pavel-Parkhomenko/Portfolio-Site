import React, { useState } from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerExtraWorks, ContainerHeader,
  ContainerInfo, ContainerNav, ContainerTechnologies,
  ContainerWorks, IconTheme, TitleContainer,
  ContainerTags, ContainerMailForm,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import Footer from '../../components/Footer'
import Hexagon from '../../components/Hexagon'
import WorksList from '../../components/WorksList'
import {
  infoTitle, technologiesTitle,
  worksTitle, tagsTitle, fgmprojects,
  fullstackProjects, apiProjects, emailTitle,
} from '../../mocks'
import WorksListExtra from '../../components/WorksListExtra'
import Tags from '../../components/Tags'
import MailForm from '../../components/MailForm'

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
        <TitleContainer style={{ zIndex: '1' }}>{ infoTitle }</TitleContainer>
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
      </ContainerTags>
      <ContainerWorks id="works">
        <TitleContainer>{ worksTitle }</TitleContainer>
        <WorksList />
      </ContainerWorks>
      <ContainerExtraWorks bg="secondary">
        <WorksListExtra
          projects={fgmprojects}
          desc="Figma layout projects"
          stackColor="primary"
        />
      </ContainerExtraWorks>
      <ContainerExtraWorks bg="primary">
        <WorksListExtra
          projects={fullstackProjects}
          desc="Fullstack projects"
          stackColor="secondary"
        />
      </ContainerExtraWorks>
      <ContainerExtraWorks bg="secondary">
        <WorksListExtra
          projects={apiProjects}
          desc="Projects using API"
          stackColor="primary"
        />
      </ContainerExtraWorks>
      <ContainerMailForm>
        <TitleContainer>{ emailTitle }</TitleContainer>
        <MailForm />
      </ContainerMailForm>
      <div id="contact">
        <Footer />
      </div>
    </Container>
  )
}
