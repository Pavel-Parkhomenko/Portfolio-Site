import styled, { css, keyframes } from 'styled-components'

export const LinkStyled = styled.a`
  color: ${({ theme }) => theme.textColor.primary};
  text-decoration: none;
  :hover {
    transition: 0.2s color ease-in;
    text-decoration: underline;
    color: ${({ theme }) => theme.textColor.secondary};
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;

  @media (max-width: 568px) {
    ${(props) => (props.active ? css`
      position: absolute;
      top: 70px;
      right: 0;
      display: flex;
      flex-direction: column;
      width: auto;
      justify-content: space-evenly;
      align-items: flex-start;
      height: 500px;
      background-color: ${({ theme }) => theme.bgColor.primary};
      padding-right: 5%;
      & > a { animation: ${fromRight} 0.5s; }
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
  
  @media (min-width: 568px) {
    display: none;
  }
  
  & > span, span:before, span:after {
    display: block;
    width: 100%;
    position: absolute;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bgColor.dark};
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
      background: rgba(255, 255, 255, 0);
    }
  ` : '')}
`
