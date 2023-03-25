import React, { useRef, useEffect } from 'react'
import {
  Container,
} from './styled'
import './style.css'
import TagsCloud from './class'

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
        <li className="tag"><span className="wrap">HTML</span></li>
        <li className="tag"><span className="wrap">Pug</span></li>
        <li className="tag"><span className="wrap">CSS</span></li>
        <li className="tag"><span className="wrap">LESS</span></li>
        <li className="tag"><span className="wrap">PostCSS</span></li>
        <li className="tag"><span className="wrap">RSCSS</span></li>
        <li className="tag"><span className="wrap">SVG</span></li>
        <li className="tag"><span className="wrap">Javascript</span></li>
        <li className="tag"><span className="wrap">Gulp</span></li>
        <li className="tag"><span className="wrap">Webpack</span></li>
        <li className="tag"><span className="wrap">Canvas</span></li>
        <li className="tag"><span className="wrap">WebGL</span></li>
        <li className="tag"><span className="wrap">Three.js</span></li>
        <li className="tag"><span className="wrap">Anime.js</span></li>
        <li className="tag"><span className="wrap">Barba.js</span></li>
        <li className="tag"><span className="wrap">Git</span></li>
        <li className="tag"><span className="wrap">Linux</span></li>
        <li className="tag"><span className="wrap">Math</span></li>
        <li className="tag"><span className="wrap">WebGL</span></li>
        <li className="tag"><span className="wrap">Three.js</span></li>
        <li className="tag"><span className="wrap">Anime.js</span></li>
        <li className="tag"><span className="wrap">Barba.js</span></li>
        <li className="tag"><span className="wrap">Git</span></li>
        <li className="tag"><span className="wrap">Linux</span></li>
        <li className="tag"><span className="wrap">Math</span></li>
      </ul>
    </Container>
  )
}
