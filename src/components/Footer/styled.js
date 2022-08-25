import styled from 'styled-components'
import vkSVG from '../../assets/svg/vk.svg'
import linkedinSVG from '../../assets/svg/linkedin.svg'
import gitSVG from '../../assets/svg/github2.svg'
import telegramSVG from '../../assets/svg/telegram.svg'
import arrowTop from '../../assets/svg/arrow-top.svg'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #21243D;
  padding: 30px 0 30px 0;
`

export const ToTopButton = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${arrowTop});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 10px;
  top: -25px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor.secondary};
`

export const FooterItem = styled.a`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${(props) => {
    switch (props.svg) {
      case 'vk': return vkSVG
      case 'linkedin': return linkedinSVG
      case 'git': return gitSVG
      case 'telegram': return telegramSVG
      default: return vkSVG
    }
  }});
  
  :hover {
    box-shadow: 5px 5px 5px black;
  }
`

export const FooterText = styled.span`
  color: gray;
  margin-top: 30px;
`
