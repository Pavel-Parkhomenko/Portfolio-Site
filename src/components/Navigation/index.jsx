import React from 'react'
import { AiOutlineHome, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { GrStackOverflow } from 'react-icons/gr'
import {
  Burger, Container,
  LinkStyled, MenuContainer, MenuIntoContainer,
} from './styled'

export default function Navigation({ active, handleBurger }) {
  return (
    <Container>
      <Burger active={active} onClick={handleBurger}>
        <div />
      </Burger>
      <MenuContainer active={active}>
        <MenuIntoContainer active={active}>
          <LinkStyled smooth to="#home">
            Home
            <AiOutlineHome />
          </LinkStyled>
          <LinkStyled smooth to="#info">
            Info
            <BsInfoCircle />
          </LinkStyled>
          <LinkStyled smooth to="#technologies">
            Stack
            <GrStackOverflow />
          </LinkStyled>
          <LinkStyled smooth to="#works">
            Works
            <AiOutlineProject />
          </LinkStyled>
          <LinkStyled smooth to="#contact">
            Contact
            <AiOutlineContacts />
          </LinkStyled>
        </MenuIntoContainer>
      </MenuContainer>
    </Container>
  )
}
