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
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/">Works</LinkStyled>
        <LinkStyled to="/">Info</LinkStyled>
        <LinkStyled to="/">Contact</LinkStyled>
      </MenuContainer>
    </Container>
  )
}
