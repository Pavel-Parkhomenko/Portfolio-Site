import React from 'react'
import {
  ContainerItem, Slide,
  SlideFrom, Container, DesktopContainer, MobileContainer,
} from './styled'

export default function Hexagon() {
  return (
    <Container>
      <div>
        {Array(5).fill(null).map((item, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerItem key={ind}>
            <SlideFrom>
              <Slide img={`ph${ind + 1}`} />
            </SlideFrom>
          </ContainerItem>
        ))}
      </div>
      <DesktopContainer>
        {Array(4).fill(null).map((item, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerItem key={ind + 6}>
            <SlideFrom>
              <Slide img={`ph${ind + 6}`} />
            </SlideFrom>
          </ContainerItem>
        ))}
      </DesktopContainer>
      <MobileContainer>
        {Array(5).fill(null).map((item, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerItem key={ind + 6}>
            <SlideFrom>
              <Slide img={`ph${ind + 6}`} />
            </SlideFrom>
          </ContainerItem>
        ))}
      </MobileContainer>
      <div>
        {Array(5).fill(null).map((item, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerItem key={ind + 10}>
            <SlideFrom>
              <Slide img={`ph${ind + 10}`} />
            </SlideFrom>
          </ContainerItem>
        ))}
      </div>
    </Container>
  )
}
