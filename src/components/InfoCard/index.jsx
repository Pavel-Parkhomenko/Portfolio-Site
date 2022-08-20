import React from 'react'
import { Card, Container, Picture } from './styled'

export default function InfoCard() {
  return (
    <Container>
      <Card>
        <Picture img="family" />
      </Card>
      <Card>
        <Picture img="university" />
      </Card>
      <Card>
        <Picture img="programmer" />
      </Card>
    </Container>
  )
}
