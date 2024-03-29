import styled, { keyframes } from 'styled-components'
import family from '../../assets/img/family.png'
import university from '../../assets/img/university.png'
import programmer from '../../assets/img/programmer4.png'
import goals from '../../assets/svg/goals.svg'
import thoughts from '../../assets/svg/thoughts.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 -5px;
  
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
      case 'goals': return goals
      case 'thoughts': return thoughts
      default: return programmer
    }
  }});
  background-size: cover;
  width: 75px;
  height: 75px;
`

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 5px;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 25%;
  min-height: 210px;
  box-shadow: 4px 4px 8px 0 rgba(187, 225, 250, 0.25);
  border-radius: 4px;
  padding: 20px 20px 10px 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.bgColor.primary};
  color: ${({ theme }) => theme.textColor.primary};

  @media (max-width: 568px) {
    width: auto;
    padding: 20px 15px 10px 15px;
  }

  :hover {
    transition: 0.5s;
    box-shadow: 0 4px 20px ${({ theme }) => theme.bgColor.dark};
  }
`

export const Title = styled.span`
  margin: 25px 0 15px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;;
`

export const Summary = styled.div`
  font-style: normal;
  font-size: 14px;
  color: gray;
`
