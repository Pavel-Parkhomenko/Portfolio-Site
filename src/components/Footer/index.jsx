import React from 'react'
import { HashLink } from 'react-router-hash-link'
import {
  Container, FooterItem,
  FooterText, ToTopButton,
} from './styled'

export default function Footer() {
  return (
    <Container>
      <div>
        <FooterItem svg="vk" href="https://vk.com/pashaparkhomenko1" />
        <FooterItem
          svg="linkedin"
          href="https://www.linkedin.com/in/pavel-parkhomenko-bb9810232/"
        />
        <FooterItem svg="git" href="https://github.com/Pavel-Parkhomenko" />
        <FooterItem svg="telegram" href="https://t.me/pasha_235" />
      </div>
      <FooterText>Copyright @2022 All rights reserved</FooterText>
      <HashLink smooth to="#top"><ToTopButton /></HashLink>
    </Container>
  )
}
