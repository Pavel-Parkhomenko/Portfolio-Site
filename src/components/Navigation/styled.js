import styled, { css, keyframes } from 'styled-components'
import { NavHashLink } from 'react-router-hash-link'

export const LinkStyled = styled(NavHashLink)`
  color: ${({ theme }) => theme.textColor.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > svg {
    margin-left: 10px;
    font-size: 18px;
  }
  :hover {
    transition: 0.2s color ease-in;
    text-decoration: underline;
    color: ${({ theme }) => theme.textColor.secondary};
  }

  @media (min-width: 568px) {
    & > svg {
      margin: 0 20px 0 5px;
      font-size: 18px;
    }
  }
`

const fromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const MenuContainer = styled.div`
  @media (max-width: 568px) {
    ${(props) => (props.active ? css`
      width: 150px;
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: ${({ theme }) => theme.bgColor.secondary};
      color: ${({ theme }) => theme.textColor.primary};
      padding-right: 5%;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      & {
        animation: ${fromRight} 0.5s;
      }
    ` : css`
      display: none;
    `)};
  }
`

export const MenuIntoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;

  @media (max-width: 568px) {
    ${(props) => (props.active ? css`
      margin-top: 150px;
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;
      height: 50vh;
    ` : css`
      display: none;
    `)};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Burger = styled.div`
  width: 35px;
  height: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  @media (min-width: 568px) {
    display: none;
  }

  & > div, div:before, div:after {
    width: 100%;
    position: absolute;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bgColor.dark};
  }
  
  & > div {
    top: 10px;
  }

  & > div:before {
   content: "";
   top: -10px;
   transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  & > div:after {
   content: "";
   bottom: -10px;
   transition: bottom 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  ${(props) => (props.active ? css`
    & > div:before {
      content: "";
      top: 0;
      transform: rotate(-225deg);
      transition: top 300ms, transform 500ms 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    & > div:after {
      content: "";
      bottom: 0;
      transform: rotate(225deg);
      transition: bottom 300ms, transform 500ms 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    & > div {
      background: rgba(255, 255, 255, 0);
    }
  ` : '')}
`
