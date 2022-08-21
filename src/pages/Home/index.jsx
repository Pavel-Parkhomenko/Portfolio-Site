import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerHeader,
  ContainerInfo, ContainerTechnologies, ContainerWorks, TitleContainer,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import { dataWorks } from '../../mocks/index'
import WorkCard from '../../components/WorkCard'
import Footer from '../../components/Footer'
import Hexagon from '../../components/Hexagon'

export default function Home() {
  return (
    <Container>
      <ContainerHeader id="home">
        <Navigation />
        <Header />
      </ContainerHeader>
      <ContainerInfo id="info">
        <TitleContainer>Brief information about me</TitleContainer>
        <InfoCard />
      </ContainerInfo>
      <ContainerTechnologies>
        <TitleContainer>
          Technologies that I am interested in. I know them and am actively studying them
        </TitleContainer>
        <Hexagon />
      </ContainerTechnologies>
      <ContainerWorks id="works">
        <TitleContainer>My Works</TitleContainer>
        { dataWorks.slice(0, 3).map(({
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
        <details>
          <summary style={{ marginBottom: '10px' }}>Show more</summary>
          { dataWorks.slice(3).map(({
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
        </details>
      </ContainerWorks>
      <Footer id="contact" />
    </Container>
  )
}
