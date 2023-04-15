import React from 'react'
import {
  Card, Container,
  Picture, Summary, Title,
} from './styled'
import { info } from '../../mocks'

export default function InfoCard() {
  return (
    <Container>
      {info.map(({ title, summary, icon }) => (
        <Card key={title}>
          <Picture img={icon} />
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </Card>
      ))}
    </Container>
  )
}
