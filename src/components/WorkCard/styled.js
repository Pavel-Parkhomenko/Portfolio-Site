import styled from 'styled-components'
import todo from '../../assets/projects/todo-antd-desktop.png'
import drawing from '../../assets/projects/drawing.PNG'
import calculator from '../../assets/projects/calculator.PNG'
import toast from '../../assets/projects/toasts.PNG'
import weather from '../../assets/projects/weather.png'
import health from '../../assets/projects/your-health.png'
import defaultImg from '../../assets/projects/default-project.jpg'
import postApp from '../../assets/projects/post-desktop-1.PNG'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 25px 0 25px 0;
  margin: 0;

  @media (max-width: 568px) {
    flex-direction: column;
  }
  
  :last-child {
    border-bottom: 0;
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
      case 'Post App': return postApp
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
  //line-height: 44px;
  margin: 0;
  color: ${({ theme }) => theme.textColor.primary};
  
  @media (max-width: 568px) {
    font-size: 24px;
  }
`

export const TitleAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const IconsContainer = styled.div`
  display: flex;
  height: 15px;
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
  background-color: ${({
    theme,
    extraCard,
  }) => (
    extraCard === 'yes' ? theme.bgColor.primary : theme.bgColor.secondary
  )};
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: 5px;
  border-radius: 30px;
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  white-space: nowrap;

  :hover {
    transition: 0.3s;
    box-shadow: 0 0 4px ${({ theme }) => theme.bgColor.dark};
  }
`

export const Summary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColor.primary};
  margin: 20px 0 20px 0;
`

export const LinkToGH = styled.a`
  text-decoration: none;
  color: gray;
  
  :hover {
    text-decoration: underline;
  }
`
