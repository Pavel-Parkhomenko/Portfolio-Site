import styled from 'styled-components'

export const BtnContainer = styled.div`
  position: relative;
  img {
    height: 30px;
    position: absolute;
    top: -20px;
    z-index: 2;
  }
`

export const CatSvgImg = styled.img``

export const ButtonOverGrid = styled.div`
  width: 184px;
  height: 60px;
  border: 2px solid #FF6464;
  position: relative;
  display: inline-block;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor.secondary};
`

export const ButtonStyled = styled.button`
  width: 200px;
  height: 50px;
  border-radius: inherit;
  position: absolute;
  cursor: pointer;
  left: -8px;
  top: 5px;
  background-color: inherit;
  border: inherit;
  color: ${({ theme }) => theme.textColor.primary};
  background-color: ${({ theme }) => theme.bgColor.primary};

  :hover {
    width: 204px;
    left: -10px;
  }

  & > a {
    color: ${({ theme }) => theme.textColor.primary};
    text-decoration: none;
  }
`
