import React from 'react'
import {
  headerSubTitle,
  headerTitle,
  buttonText,
} from '../../mocks'
import {
  Title, SubTitle,
  Container, Avatar, Button, TextContainer,
} from './styled'

export default function Header() {
  return (
    <Container>
      <TextContainer>
        <Title>{ headerTitle }</Title>
        <SubTitle>{ headerSubTitle }</SubTitle>
        <Button>{ buttonText }</Button>
      </TextContainer>
      <Avatar />
    </Container>
  )
}
