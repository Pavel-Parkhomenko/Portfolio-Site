import React, { useState } from 'react'

import {
  Container, ContainerExtraWorks, TitleContainer,
} from './styled'
import Footer from '../../components/Footer'
import {
  fgmprojects, fullstackProjects, apiProjects,
} from '../../mocks'
import WorksListExtra from '../../components/WorksListExtra'

export default function Projects({ changeTheme, icon }) {
  const [isActive, setIsActive] = useState(false)
  const handleBurger = () => {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <ContainerExtraWorks bg="secondary">
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
