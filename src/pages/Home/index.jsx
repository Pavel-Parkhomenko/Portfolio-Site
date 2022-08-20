import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerHeader,
  ContainerInfo, ContainerWorks, TitleContainer,
} from './styled'
import Navigation from '../../components/Navigation'
import InfoCard from '../../components/InfoCard'
import { dataWorks } from '../../mocks/index'
import WorkCard from '../../components/WorkCard'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <Container>
      <ContainerHeader>
        <Navigation />
        <Header />
      </ContainerHeader>
      <ContainerInfo>
        <TitleContainer>Information</TitleContainer>
        <InfoCard />
      </ContainerInfo>
      <ContainerWorks>
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
      <Footer />
    </Container>
  )
}
