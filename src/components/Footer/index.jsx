import React from 'react'
import { Container, FooterItem, FooterText } from './styled'

export default function Footer() {
  return (
    <Container>
      <div>
        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />
      </div>
      <FooterText>Copyright @2022 All rights reserved</FooterText>
    </Container>
  )
}
