import React from 'react'
import {
  Burger, Container,
  LinkStyled, MenuContainer,
} from './styled'

export default function Navigation({ isActive, handleBurger }) {
  return (
    <Container>
      <Burger active={isActive} onClick={handleBurger}>
        <span />
      </Burger>
      <MenuContainer active={isActive}>
        <LinkStyled href="#home">Home</LinkStyled>
        <LinkStyled href="#info">Info</LinkStyled>
        <LinkStyled href="#technologies">Technologies</LinkStyled>
        <LinkStyled href="#works">Works</LinkStyled>
        <LinkStyled href="#contact">Contact</LinkStyled>
      </MenuContainer>
    </Container>
  )
}
