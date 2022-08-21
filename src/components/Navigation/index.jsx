import React, { useState } from 'react'
import {
  Burger, Container,
  LinkStyled, MenuContainer,
} from './styled'

export default function Navigation() {
  const [isActive, setIsActive] = useState(false)
  const handleBurger = () => {
    setIsActive(!isActive)
  }
  return (
    <Container>
      <Burger active={isActive} onClick={handleBurger}>
        <span />
      </Burger>
      <MenuContainer active={isActive}>
        <LinkStyled href="#home">Home</LinkStyled>
        <LinkStyled href="#info">Info</LinkStyled>
        <LinkStyled href="#works">Works</LinkStyled>
        <LinkStyled href="#contact">Contact</LinkStyled>
      </MenuContainer>
    </Container>
  )
}
