import styled from 'styled-components'
import family from '../../assets/img/family.png'
import university from '../../assets/img/university.png'
import programmer from '../../assets/img/programmer4.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Picture = styled.div`
  background-image: url(${(props) => {
    switch (props.img) {
      case 'family': return family
      case 'university': return university
      case 'programmer': return programmer
      default: return programmer
    }
  }});
  background-size: cover;
  //background-color: green;
  width: 50px;
  height: 50px;
`

export const Card = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  background: #ffff;
  box-shadow: 0 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;
`
