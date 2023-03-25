import React, { useRef, useEffect } from 'react'
import {
  Container,
} from './styled'
import './style.css'
import TagsCloud from './class'
import { tags } from '../../mocks'

export default function Tags() {
  const ref = useRef()

  useEffect(() => {
    const cloud = new TagsCloud(ref.current);
    function event() {
      const { width, top } = ref.current?.getBoundingClientRect()
      if(top < 1000 && top > 600 && cloud.isStart !== true){
        cloud.start()
        console.log('start')
      } else if(top < (-1) * width + (-100) && cloud.isStart !== false) {
        cloud.stop()
        console.log('stop')
      } else if(top > 1000 && cloud.isStart !== false) {
        cloud.stop()
        console.log('stop')
      }
    }
    function clickStart() {
      if(cloud.isStart !== true){
        cloud.start()
        console.log('start')
      }
    }
    window.addEventListener('scroll', event)
    ref.current?.addEventListener('click', clickStart)
    return () => {
      window.removeEventListener('scroll', event)
      ref.current?.removeEventListener('click', clickStart)
    }
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
