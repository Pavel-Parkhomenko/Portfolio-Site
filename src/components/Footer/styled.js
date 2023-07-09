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
  border-top: 30px solid ${({ theme }) => theme.bgColor.secondary};
`

export const ToTopButton = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${arrowTop});
  background-repeat: no-repeat;
  background-size: 40px;
  background-position-x: 50%;
  background-position-y: 50%;
  position: absolute;
  right: 10px;
  top: -10px;
  border-radius: 50%;
  padding: 2px;
  background-color: #21243D;
  border: 3px solid ${({ theme }) => theme.bgColor.secondary};
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
    transition: 0.3s;
    box-shadow: 0 0 4px ${({ theme }) => theme.bgColor.dark};
  }
`

export const FooterText = styled.span`
  color: gray;
  margin-top: 30px;
`

export const InfoGit = styled.div`
  display: inline-block;

  & > img {
    display: block;
    margin-top: -10px;
  }
`

export const TextInfoGit = styled.p`
  padding: 5px 5px;
  margin: -1px 5% 0 5%;
  color: gray;
  border: 1px solid ${({ theme }) => theme.bgColor.secondary};
  text-wrap: normal;
  border-radius: 10px;
`
