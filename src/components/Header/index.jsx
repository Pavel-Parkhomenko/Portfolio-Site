import React, { useRef } from 'react'
import TextTyper from 'text-type-animation-effect-react'
import {
  headerSubTitle,
  headerTitle,
  buttonText,
} from '../../mocks'
import {
  Title, SubTitle,
  Container, Avatar, TextContainer,
  AvatarContainer, BigCircleAvatar,
  ImgAvatar,
} from './styled'
import doc from '../../assets/Parkhomenko_Pavel_CV_Frontend.pdf'
import Button from '../Button'

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
          <TextTyper text={headerSubTitle} interval={20} />
        </SubTitle>
        <Button handleClick={handleClick}>
          { buttonText }
          <a ref={ref} href={doc} download="" style={{ display: 'none' }}>{ buttonText }</a>
        </Button>
      </TextContainer>
      <AvatarContainer>
        <Avatar />
        <ImgAvatar />
      </AvatarContainer>
    </Container>
  )
}
