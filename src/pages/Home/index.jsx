import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerCardInfo, ContainerHeader,
  ContainerInfo, ContainerWorks, TitleContainer,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import { worksData } from '../../mocks/index'
import WorkCard from '../../components/WorkCard'

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
      <ContainerWorks>
        <TitleContainer>My Works</TitleContainer>
        { worksData.slice(0, 3).map(({
          id, title, stack, img, summary, linkGH,
        }) => (
          <WorkCard
            key={id}
            title={title}
            img={img}
            linkGH={linkGH}
            stack={stack}
            summary={summary}
          />
        )) }
      </ContainerWorks>
    </Container>
  )
}
