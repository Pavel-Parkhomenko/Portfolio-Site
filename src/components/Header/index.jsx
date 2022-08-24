import React, { useRef } from 'react'
import {
  headerSubTitle,
  headerTitle,
  buttonText,
} from '../../mocks'
import {
  Title, SubTitle,
  Container, Avatar, Button, TextContainer,
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
        <SubTitle>{ headerSubTitle }</SubTitle>
        <Button onClick={handleClick}>
          <a ref={ref} href={doc} download="">{ buttonText }</a>
        </Button>
      </TextContainer>
      <Avatar />
    </Container>
  )
}
