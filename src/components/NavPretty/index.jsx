import React, { useState } from 'react'
import { Container } from './styled.js'
import { Navigate, Link } from 'react-router-dom'

export default function NavPretty() {

  const [toMoreProjs, setToMoreProjs] = useState(null)
  function handleClick() {
    setToMoreProjs(true)
  }

  if(toMoreProjs) {
    return <Navigate to="/projs" replace={true} />
  }

  return (
    <Container onClick={handleClick}>
      <svg viewbox="0 0 500 500" preserveAspectRatio='xMinYMin meet'>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" 
                          values="1 0 0 0 0  
                                  0 1 0 0 0  
                                  1 0 1 0 0  
                                  0 0 0 15 -8" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
        <g filter="url(#goo)" >
          <text x="50%" y="50%" >More Projects</text>
          <text x="50%" y="50%" >Click Here</text>
        </g>
      </svg>
    </Container>
  )
}
