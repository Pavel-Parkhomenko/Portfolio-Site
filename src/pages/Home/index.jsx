import React from 'react'
import Header from '../../components/Header'
import {
  Container, ContainerHeader,
} from './styled'
import Navigation from '../../components/Navigation'

export default function Home() {
  return (
    <Container>
      <ContainerHeader>
        <Navigation />
        <Header />
      </ContainerHeader>
    </Container>
  )
}
