import React from 'react'
import {
  Container, ImgStyled,
  StackItem, TextContainer, Title,
  Summary, LinkToGH, ContainerStackItem,
} from './styled'

export default function WorkCard({
  title,
  stack,
  summary,
  linkGH,
  extraCard,
}) {
  return (
    <Container>
      <ImgStyled img={title} />
      <TextContainer>
        <Title>{ title }</Title>
        <ContainerStackItem>
          {stack.map((item) => (
            <StackItem extraCard={extraCard} key={item}>{item}</StackItem>
          ))}
        </ContainerStackItem>
        <Summary>{ summary }</Summary>
        <LinkToGH href={linkGH}>View on the git hub</LinkToGH>
      </TextContainer>
    </Container>
  )
}
