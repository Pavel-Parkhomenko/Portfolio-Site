import styled from 'styled-components'
import vkSVG from '../../assets/svg/vk.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #21243D;
  padding: 30px 0 30px 0;
`
export const FooterItem = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  background-image: url(${vkSVG});
`

export const FooterText = styled.span`
  color: gray;
  margin-top: 30px;
`
