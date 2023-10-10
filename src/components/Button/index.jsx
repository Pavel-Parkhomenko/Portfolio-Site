import React, { useState } from 'react'
import {
  ButtonOverGrid, ButtonStyled, BtnContainer, CatSvgImg,
} from './styled'

import catDownSvg from '../../assets/svg/catDownSvg.svg'
import catUpSvg from '../../assets/svg/catUpSvg.svg'

export default function Button({ handleClick, children }) {
  const [catSvg, setCatSvg] = useState(false) // false = down, true = up

  const handleClickCatSvg = () => {
    setCatSvg(!catSvg)
  }

  return (
    <BtnContainer>
      <CatSvgImg onClick={handleClickCatSvg} src={catSvg ? catUpSvg : catDownSvg} alt="cat svg" />
      <ButtonOverGrid>
        <ButtonStyled onClick={handleClick}>
          {children}
        </ButtonStyled>
      </ButtonOverGrid>
    </BtnContainer>
  )
}
