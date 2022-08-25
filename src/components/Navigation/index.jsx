import React from 'react'
import {
  Burger, Container,
  LinkStyled, MenuContainer,
} from './styled'

export default function Navigation({ active, handleBurger }) {
  return (
    <Container>
      <Burger active={active} onClick={handleBurger}>
        <span />
      </Burger>
      <MenuContainer active={active}>
        <LinkStyled smooth to="#home">Home</LinkStyled>
        <LinkStyled smooth to="#info">Info</LinkStyled>
        <LinkStyled smooth to="#technologies">Technologies</LinkStyled>
        <LinkStyled smooth to="#works">Works</LinkStyled>
        <LinkStyled smooth to="#contact">Contact</LinkStyled>
      </MenuContainer>
    </Container>
  )
}
