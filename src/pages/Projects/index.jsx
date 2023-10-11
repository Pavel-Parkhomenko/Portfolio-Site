import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container, ContainerExtraWorks,
  TitleContainer,
  ContainerIcon,
  ToHomeText,
} from './styled'
import Footer from '../../components/Footer'
import {
  fgmprojects, fullstackProjects, apiProjects,
} from '../../mocks'
import WorksListExtra from '../../components/WorksListExtra'
import toHome from '../../assets/svg/arrowHome2.svg'

export default function Projects({ changeTheme, icon }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <Container>
      <ContainerExtraWorks bg="secondary">
        <ContainerIcon onClick={() => handleClick()}>
          <img src={toHome} alt="to home" />
        </ContainerIcon>
        <TitleContainer>Figma layout projects</TitleContainer>
        <WorksListExtra
          projects={fgmprojects}
          desc=""
          stackColor="primary"
        />
      </ContainerExtraWorks>
      <ContainerExtraWorks bg="primary">
        <TitleContainer>Fullstack projects</TitleContainer>
        <WorksListExtra
          projects={fullstackProjects}
          desc=""
          stackColor="secondary"
        />
      </ContainerExtraWorks>
      <ContainerExtraWorks bg="secondary">
        <TitleContainer>Projects using API</TitleContainer>
        <WorksListExtra
          projects={apiProjects}
          desc=""
          stackColor="primary"
        />
      </ContainerExtraWorks>
      <div id="contact">
        <Footer />
      </div>
    </Container>
  )
}
