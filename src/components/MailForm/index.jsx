import React, { useRef, useState } from 'react'
import {
  Form, Input,
  FormImage,
  InputsContainer,
  TextArea, BtnContainer,
} from './styled'

import mailImg from '../../assets/img/mail.png'
import Button from '../Button'

export default function MailForm() {
  const [form, setForm] = useState({})
  const [mailLink, setMailLink] = useState('')
  const ref = useRef()

  function handleSubject(event) {
    setForm({ ...form, subject: event.target.value || '' })
  }

  function handelBody(event) {
    setForm({ ...form, body: event.target.value || '' })
  }

  const handleClick = (event) => {
    setMailLink(`
      mailto:pawelparhomenko@gmail.com?subject=${form.subject || 'Тема'}&body=${form.body || 'Тело письма'}
    `)
  }

  return (
    <Form>
      <FormImage>
        <img src={mailImg} alt="mail-img" />
      </FormImage>
      <InputsContainer>
        <Input onChange={(event) => handleSubject(event)} type="text" placeholder="Subject" />
        <TextArea onChange={(event) => handelBody(event)} type="text" placeholder="Body" />
        <a ref={ref} href={mailLink}>
          <Button handleClick={(event) => handleClick(event)}>
            Send mail
          </Button>
        </a>
      </InputsContainer>
    </Form>
  )
}
