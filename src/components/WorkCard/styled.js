import styled from 'styled-components'
import todo from '../../assets/projects/todo-antd-desktop.png'
import drawing from '../../assets/projects/drawing.PNG'
import calculator from '../../assets/projects/calculator.PNG'
import toast from '../../assets/projects/toasts.PNG'
import weather from '../../assets/projects/weather.png'
import health from '../../assets/projects/your-health.png'
import defaultImg from '../../assets/projects/default-project.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-bottom: 25px;

  @media (max-width: 568px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ImgStyled = styled.div`
  width: 450px;
  height: 220px;
  background-image: url(${(props) => {
    switch (props.img) {
      case 'ANT ToDo': return todo
      case 'Drawing Machine': return drawing
      case 'Expression Calculator': return calculator
      case 'Toast Lib': return toast
      case 'Weather App': return weather
      case 'Your Health': return health
      default: return defaultImg
    }
  }});
  background-size: cover;
  border-radius: 6px;
  margin-right: 20px;
  transition: background-position 0.7s ease 0.2s;

  @media (max-width: 568px) {
    width: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  :hover {
    transition: background-position 0.7s ease 0.2s;
    background-position: 100%;
  }
`

export const Title = styled.h3`
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #21243D;
  margin: 0 0 5px 0;
`

export const ContainerStackItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`

export const StackItem = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  background-color: #21243D;
  color: white;
  margin-bottom: 5px;
  border-radius: 30px;
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  white-space: nowrap;

  :hover {
    background-color: #161936;
    color: #8f8e8e;
  }
`

export const Summary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
  margin: 20px 0 20px 0;
`

export const LinkToGH = styled.a`
  text-decoration: none;
  color: gray;
`
