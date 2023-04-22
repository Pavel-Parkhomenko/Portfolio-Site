import React from 'react'
import WorkCard from '../WorkCard'
import { Details, Summary } from './styled'

export default function WorksListExtra({ projects, desc, stackColor }) {
  return (
    <Details>
      <Summary className="not--animation">{ desc }</Summary>
      { projects.map(({
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
          stackColor={stackColor}
          devices={devices}
          deploy={deploy}
        />
      )) }
    </Details>
  )
}
