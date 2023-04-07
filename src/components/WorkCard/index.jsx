import React from 'react'
import {
  Container, ImgStyled,
  StackItem, TextContainer, Title,
  Summary, LinkToGH, ContainerStackItem,
  TitleAndIcon, IconsContainer, LinksContainer,
} from './styled'
import mobile from '../../assets/svg/mobile.svg'
import desktop from '../../assets/svg/desktop.svg'
import tablet from '../../assets/svg/tablet.svg'
import gh from '../../assets/img/gh20.png'
import deploy from '../../assets/img/deploy20.png'

const src = {
  mobile, desktop, tablet,
}

export default function WorkCard({
  title,
  stack,
  summary,
  linkGH,
  extraCard,
  devices,
}) {
  return (
    <Container>
      <ImgStyled img={title} />
      <TextContainer>
        <TitleAndIcon>
          <Title>{title}</Title>
          <IconsContainer>
            {devices.map((item) => (
              <img
                key={item}
                src={src[item.toLowerCase()]}
                alt={item}
              />
            ))}
          </IconsContainer>
        </TitleAndIcon>
        <ContainerStackItem>
          {stack.map((item) => (
            <StackItem extraCard={extraCard} key={item}>{item}</StackItem>
          ))}
        </ContainerStackItem>
        <Summary>{summary}</Summary>
        <LinksContainer>
          <div>
            <img src={gh} alt="test" />
            <LinkToGH href={linkGH}>Code</LinkToGH>
          </div>
          <div>
            <img src={deploy} alt="test" />
            <LinkToGH href={linkGH}>Deploy</LinkToGH>
          </div>
        </LinksContainer>
      </TextContainer>
    </Container>
  )
}
