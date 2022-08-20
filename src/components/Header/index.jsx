import React from 'react'
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
  return (
    <Container>
      <TextContainer>
        <Title>{ headerTitle }</Title>
        <SubTitle>{ headerSubTitle }</SubTitle>
        <Button>
          <a href={doc} download="">{ buttonText }</a>
        </Button>
      </TextContainer>
      <Avatar />
    </Container>
  )
}
