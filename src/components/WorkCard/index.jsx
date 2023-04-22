import React from 'react'
import { AiFillGithub, AiOutlineDeploymentUnit } from 'react-icons/ai'
import {
  Container, ImgStyled,
  StackItem, TextContainer, Title,
  Summary, LinkToGH, ContainerStackItem,
  TitleAndIcon, IconsContainer, LinksContainer,
} from './styled'
import mobile from '../../assets/svg/mobile.svg'
import desktop from '../../assets/svg/desktop.svg'
import tablet from '../../assets/svg/tablet.svg'

const src = {
  mobile, desktop, tablet,
}

export default function WorkCard({
  title,
  stack,
  summary,
  linkGH,
  stackColor,
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
            <StackItem stackColor={stackColor} key={item}>{item}</StackItem>
          ))}
        </ContainerStackItem>
        <Summary>{summary}</Summary>
        <LinksContainer>
          <div>
            <AiFillGithub style={{ fontSize: '18px' }} />
            <LinkToGH href={linkGH}>Code</LinkToGH>
          </div>
          <div
            style={
              deploy ? { visibility: 'visible' } : { visibility: 'hidden' }
            }
          >
            <AiOutlineDeploymentUnit style={{ fontSize: '18px' }} />
            <LinkToGH href={deploy}>Deploy</LinkToGH>
          </div>
        </LinksContainer>
      </TextContainer>
    </Container>
  )
}
