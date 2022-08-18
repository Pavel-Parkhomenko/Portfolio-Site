import React from 'react'
import {
  Container, ImgStyled,
  StackItem, TextContainer, Title,
  Summary, LinkToGH,
} from './styled'

export default function WorkCard({
  title,
  stack,
  img,
  summary,
  linkGH,
}) {
  return (
    <Container>
      <ImgStyled img={img} />
      <TextContainer>
        <Title>{ title }</Title>
        <div>
          {stack.map((item) => (
            <StackItem key={item}>{item}</StackItem>
          ))}
        </div>
        <Summary>{ summary }</Summary>
        <LinkToGH href={linkGH}>Notice in GH</LinkToGH>
      </TextContainer>
    </Container>
  )
}
