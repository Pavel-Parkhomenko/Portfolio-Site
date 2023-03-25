import React, { useRef, useEffect } from 'react'
import {
  Container,
} from './styled'
import './style.css'
import TagsCloud from './class'
import { tags } from '../../mocks'

export default function Tags() {
  const ref = useRef()
  function main() {
    const cloud = new TagsCloud(ref.current);
    cloud.start()
    console.log(ref.current)
  }

  useEffect(() => {
    main()
  }, [])

  return (
    <Container>
      <ul className="tags-cloud" ref={ref}>
        {tags.map(tag => <li className="tag" key={tag}>
            <span className="wrap">{tag}</span>
          </li>
        )}
      </ul>
    </Container>
  )
}
