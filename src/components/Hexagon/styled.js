import styled from 'styled-components'
import ph1 from '../../assets/stack/css.png'
import ph2 from '../../assets/stack/js.jpg'
import ph3 from '../../assets/stack/eslint2.jpg'
import ph4 from '../../assets/stack/ts.webp'
import ph5 from '../../assets/stack/sass.png'
import ph6 from '../../assets/stack/react.jpg'
import ph7 from '../../assets/stack/material.png'
import ph8 from '../../assets/stack/redux.jpg'
import ph9 from '../../assets/stack/styled-comp.jpg'
import ph10 from '../../assets/stack/toolkit.png'
import ph11 from '../../assets/stack/figma.jpg'
import ph12 from '../../assets/stack/git.jpg'
import ph13 from '../../assets/stack/mongodb.png'
import ph14 from '../../assets/stack/nodejs.png'
import ph15 from '../../assets/stack/antd.png'

export const Container = styled.div`
  text-align: center;
  padding-top: 30px;
`
// 28px
export const ContainerItem = styled.div`
  position: relative;
  overflow: hidden;
  transform: rotate(120deg);
  width: 122px;
  height: 150px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -28px;
  padding: 0;
  //transition: 0.5s ease-in-out;
  
  @media (max-width: 568px) {
    width: 68px;
    height: 96px;
  }
`

export const SpecialContainer = styled.div`
  @media (max-width: 568px) {
    display: none;
  //  & > :last-child {
  //    display: none;
  //  }
  //}
`

export const SlideFrom = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
  backface-visibility: hidden;
`

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  visibility: visible;
  transform: rotate(-60deg);
  background-image: url(${(props) => {
    switch (props.img) {
      case 'ph1': return ph1
      case 'ph2': return ph2
      case 'ph3': return ph3
      case 'ph4': return ph4
      case 'ph5': return ph5
      case 'ph6': return ph6
      case 'ph7': return ph7
      case 'ph8': return ph8
      case 'ph9': return ph9
      case 'ph10': return ph10
      case 'ph11': return ph11
      case 'ph12': return ph12
      case 'ph13': return ph13
      case 'ph14': return ph14
      case 'ph15': return ph15
      default: return ph1
    }
  }});
`
