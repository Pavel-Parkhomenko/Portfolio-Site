import React from 'react'
import { projects } from '../../mocks'
import WorkCard from '../WorkCard'

export default function WorksList() {
  return (
    <>
      { projects.slice(0, 3).map(({
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
          devices={devices}
          deploy={deploy}
        />
      )) }
    </>
  )
}
