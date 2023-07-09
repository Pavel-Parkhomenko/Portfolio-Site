import React from 'react'
import { ButtonOverGrid, ButtonStyled } from './styled'

export default function Button({ handleClick, children }) {
  return (
    <ButtonOverGrid>
      <ButtonStyled onClick={handleClick}>
        {children}
      </ButtonStyled>
    </ButtonOverGrid>
  )
}
