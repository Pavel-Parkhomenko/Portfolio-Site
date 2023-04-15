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
  AvatarContainer, BigCircleAvatar,
  ImgAvatar,
} from './styled'
import doc from '../../assets/Parkhomenko_Pavel_CV_Frontend.pdf'
import avatar2 from '../../assets/img/avatar2.png'

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
        <BigCircleAvatar>
          <Avatar />
          <ImgAvatar />
        </BigCircleAvatar>
      </AvatarContainer>
    </Container>
  )
}
