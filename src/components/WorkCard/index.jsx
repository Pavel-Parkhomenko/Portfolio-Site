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
import ghImg from '../../assets/img/gh20.png'
import deployImg from '../../assets/img/deploy20.png'

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
  deploy,
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
            <img src={ghImg} alt="code" />
            <LinkToGH href={linkGH}>Code</LinkToGH>
          </div>
          <div
            style={
              deploy ? { visibility: 'visible' } : { visibility: 'hidden' }
            }
          >
            <img src={deployImg} alt="deploy" />
            <LinkToGH href={linkGH}>Deploy</LinkToGH>
          </div>
        </LinksContainer>
      </TextContainer>
    </Container>
  )
}
