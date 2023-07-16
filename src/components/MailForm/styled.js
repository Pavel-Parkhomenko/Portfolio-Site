import styled from 'styled-components'

const commonStyles = `
  font-size: 12px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const Input = styled.input`
  margin-bottom: 30px;
  height: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor.secondary};
  border: 1px solid ${({ theme }) => theme.bgColor.dark};
  ${commonStyles}
`

export const FormImage = styled.div`
  width: 47%;
  display: flex;
  align-items: center;
  position: relative;
  
  img {
    width: 100%;
  }

  @media (max-width: 568px){
    width: 100%;
    align-items: flex-start;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  align-items: center;

  @media (max-width: 568px){
    position: absolute;
    width: 80%;
    left: 10%;
    top: 50px;
    justify-content: center;
    opacity: 0.9;
  }
`

export const TextArea = styled.textarea`
  height: 100px;
  resize: none;
  width: 100%;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.bgColor.secondary};
  border: 1px solid ${({ theme }) => theme.bgColor.dark};
  ${commonStyles}
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor.primary};
`
