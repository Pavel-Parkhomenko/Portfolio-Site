import styled from 'styled-components'

export const ButtonOverGrid = styled.div`
  width: 184px;
  height: 60px;
  border: 2px solid #FF6464;
  position: relative;
  display: inline-block;
  border-radius: 5px;
`

export const ButtonStyled = styled.button`
  width: 200px;
  height: 50px;
  border-radius: inherit;
  position: absolute;
  left: -8px;
  top: 5px;
  background-color: inherit;
  border: inherit;
  color: ${({ theme }) => theme.textColor.primary};

  :hover {
    width: 204px;
    left: -10px;
  }

  & > a {
    color: ${({ theme }) => theme.textColor.primary};
    text-decoration: none;
  }
`
