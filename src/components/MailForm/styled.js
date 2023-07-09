import styled from 'styled-components'

const commonStyles = `
  border: 1px solid ${({ theme }) => theme.bgColor.secondary};
  font-size: 12px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`

export const Form = styled.form`
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
  ${commonStyles}
`

export const FormImage = styled.div`
  width: 47%;
  height: 400px;
  display: flex;
  align-items: center;
  
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
    top: 0;
    justify-content: center;
    opacity: 0.9;
  }
`

export const TextArea = styled.textarea`
  height: 100px;
  resize: none;
  width: 100%;
  margin-bottom: 30px;
  ${commonStyles}
`

export const ButtonEmail = styled.button`
  margin-top: 30px;
  width: 100%;
`
