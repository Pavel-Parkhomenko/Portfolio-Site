import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled.a`
  color: black;
  text-decoration: none;
`

const fromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const toLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;

  @media (max-width: 568px) {
    display: none;
    
    ${(props) => (props.active ? css`
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      width: auto;
      justify-content: space-between;
      align-items: flex-end;
      height: 150px;
      & > a { animation: ${fromRight} 0.5s; }
  ` : css``)};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 30px;
  top: 30px;
`

export const Burger = styled.div`
  width: 35px;
  height: 30px;
  cursor: pointer;
  position: relative;
  
  @media (min-width: 568px) {
    display: none;
  }
  
  & > span, span:before, span:after {
    display: block;
    width: 100%;
    position: absolute;
    height: 5px;
    background: #333;
    border-radius: 5px;
  }
  
  & > span:before {
    content: "";
    top: -10px;
    transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  & > span {
    top: 10px;
  }
  
  & > span:after {
    content: "";
    bottom: -10px;
    transition: bottom 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  ${(props) => (props.active ? css`
    & > span:before {
      content: "";
      top: 0;
      transform: rotate(-225deg);
      transition: top 300ms, transform 500ms 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    & > span:after {
      content: "";
      bottom: 0;
      transform: rotate(225deg);
      transition: bottom 300ms, transform 500ms 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    & > span {
      //transform: rotate(-45deg);
      //transition: bottom 300ms, transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      background: rgba(255, 255, 255, 0);
    }
  ` : '')}
`
