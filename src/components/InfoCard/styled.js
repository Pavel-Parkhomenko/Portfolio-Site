import styled from 'styled-components'
import family from '../../assets/img/family.png'
import university from '../../assets/img/university.png'
import programmer from '../../assets/img/programmer4.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
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
  width: 50px;
  height: 50px;
`

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 210px;
  background: #ffff;
  box-shadow: 0 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;
  padding: 20px 15px 0 15px;
  margin-bottom: 10px;
  
  @media (max-width: 568px) {
    width: auto;
  }
`

export const Title = styled.span`
  margin: 25px 0 15px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #21243D;
`

export const Summary = styled.div`
  font-style: normal;
  font-size: 14px;
  color: gray;
`
