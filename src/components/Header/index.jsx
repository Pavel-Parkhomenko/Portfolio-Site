import React from 'react'
import {
  headerSubTitle,
  headerTitle,
  buttonText,
} from '../../mocks'
import {
  Title, SubTitle,
  Container, Avatar, Button,
} from './styled'

export default function Header() {
  return (
    <Container>
      <div>
        <Title>{ headerTitle }</Title>
        <SubTitle>{ headerSubTitle }</SubTitle>
        <Button>{ buttonText }</Button>
      </div>
      <Avatar />
    </Container>
  )
}
