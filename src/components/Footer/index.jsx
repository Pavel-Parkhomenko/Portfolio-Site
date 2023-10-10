import React from 'react'
import { HashLink } from 'react-router-hash-link'
import {
  Container, FooterItem,
  FooterText, ToTopButton,
  InfoGit, TextInfoGit,
} from './styled'

import curveFooter from '../../assets/svg/curveFooterRed2.svg'

export default function Footer() {
  return (
    <Container>
      <div>
        <FooterItem svg="vk" href="https://vk.com/pashaparkhomenko1" />
        <FooterItem
          svg="linkedin"
          href="https://www.linkedin.com/in/pavel-parkhomenko-bb9810232/"
        />
        <InfoGit>
          <FooterItem svg="git" href="https://github.com/Pavel-Parkhomenko" />
          <img alt="test" src={curveFooter} />
        </InfoGit>
        <FooterItem svg="telegram" href="https://t.me/pasha_235" />
      </div>
      <TextInfoGit>Even more projects (maybe). You, if anything, come in 🏃‍♀️</TextInfoGit>
      <FooterText>Copyright @2022 All rights reserved</FooterText>
      <HashLink smooth to="#top"><ToTopButton /></HashLink>
    </Container>
  )
}
