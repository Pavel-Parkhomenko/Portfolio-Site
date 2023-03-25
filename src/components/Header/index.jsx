import React, { useRef } from 'react'
import TextTyper from 'text-type-animation-effect-react'
import {
  headerSubTitle,
  headerTitle,
  buttonText,
  svgText,
} from '../../mocks'
import {
  Title, SubTitle,
  Container, Avatar, Button, TextContainer,
  AvatarContainer,
} from './styled'
import doc from '../../assets/Parkhomenko_Pavel_CV_Frontend.pdf'

export default function Header() {
  const ref = useRef()
  const handleClick = () => {
    ref.current.click()
  }
  return (
    <Container>
      <TextContainer>
        <Title>{ headerTitle }</Title>
        <SubTitle>
          <TextTyper text={headerSubTitle} interval={10} />
        </SubTitle>
        <Button onClick={handleClick}>
          <a ref={ref} href={doc} download="">{ buttonText }</a>
        </Button>
      </TextContainer>
      <AvatarContainer>
        <svg viewBox="-126 -126 252 252" xmlns="http://www.w3.org/2000/svg">
          <path id="path" d="M-125 0a125 125 0 10250 0 125 125 0 10-250 0" fill="none" />

          <text y="40">
            <textPath href="#path" startOffset="20">
              {svgText}
            </textPath>
          </text>
        </svg>
        <Avatar />
      </AvatarContainer>
    </Container>
  )
}
