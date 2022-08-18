import styled from 'styled-components'
import test from '../../assets/projects/todo-antd-desktop.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-bottom: 25px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 63%;
  width: 100%;
`

export const ImgStyled = styled.div`
  width: 246px;
  height: 180px;
  background-image: url(${test});
  background-size: cover;
  border-radius: 6px;
  //background-color: green;
`

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #21243D;
`

export const StackItem = styled.div`
  font-style: italic;
  display: inline-block;
  text-align: center;
  width: auto;
  height: 25px;
  background-color: #21243D;
  color: white;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 30px;
  padding: 0 10px 0 10px;
`

export const Summary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`

export const LinkToGH = styled.a`
  text-decoration: none;
  color: gray;
`
