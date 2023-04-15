import React from 'react'
import { projects } from '../../mocks'
import WorkCard from '../WorkCard'
import { Details, Summary } from './styled'

export default function WorksListExtra() {
  return (
    <Details>
      <Summary className="not--animation">See even more projects</Summary>
      { projects.slice(3).map(({
        id, title, stack,
        img, summary, linkGH, devices, deploy,
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
          deploy={deploy}
        />
      )) }
    </Details>
  )
}
