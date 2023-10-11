import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import {
  Container, ContainerHeader,
  ContainerInfo, ContainerNav, ContainerTechnologies,
  ContainerWorks, IconTheme, TitleContainer,
  ContainerTags, ContainerMailForm,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import Footer from '../../components/Footer'
import Hexagon from '../../components/Hexagon'
import WorksList from '../../components/WorksList'
import NavPretty from '../../components/NavPretty'
import {
  infoTitle, technologiesTitle,
  worksTitle, tagsTitle,
  emailTitle,
} from '../../mocks'
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
      <ContainerTags>
        <NavPretty />
      </ContainerTags>
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
