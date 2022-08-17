import React from 'react'
import { Container, LinkStyled } from './styled'

export default function Navigation() {
  return (
    <Container>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/">Works</LinkStyled>
      <LinkStyled to="/">Info</LinkStyled>
      <LinkStyled to="/">Contact</LinkStyled>
    </Container>
  )
}
