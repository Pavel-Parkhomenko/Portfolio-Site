import React from 'react'
import { projects } from '../../mocks'
import WorkCard from '../WorkCard'
import { Details, Summary } from './styled'

export default function WorksListExtra() {
  return (
    <Details>
      <Summary style={{ marginBottom: '10px' }}>Show more</Summary>
      { projects.slice(3).map(({
        id, title, stack,
        img, summary, linkGH, devices,
      }) => (
        <WorkCard
          key={id}
          title={title}
          img={img}
          linkGH={linkGH}
          stack={stack}
          summary={summary}
          extraCard="yes"
          devices={devices}
        />
      )) }
    </Details>
  )
}
