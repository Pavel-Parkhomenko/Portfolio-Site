import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`

export const Container = styled.div`
  position: absolute;
  right: 60px;
  top: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
`
