import React, { useRef, useState } from 'react'
import {
  Form, Input,
  FormImage,
  InputsContainer,
  TextArea,
} from './styled'

import mailImg from '../../assets/img/mail.png'
import Button from '../Button'

export default function MailForm() {
  const [form, setForm] = useState({})
  const [mailLink, setMailLink] = useState('')
  const ref = useRef()
  function handleEmail(event) {
    setForm({ ...form, email: event.target.value })
  }

  function handleSubject(event) {
    setForm({ ...form, subject: event.target.value })
  }

  function handelBody(event) {
    setForm({ ...form, body: event.target.value })
  }

  const handleClick = (event) => {
    event.preventDefault()
    setMailLink(`
      mailto:pawelparhomenko@gmail.com?subject=${form.subject}&body=${form.body}
    `)
  }

  return (
    <Form>
      <FormImage>
        <img src={mailImg} alt="mail-img" />
      </FormImage>
      <InputsContainer>
        <Input
          onChange={(event) => handleEmail(event)}
          type="email"
          placeholder="pawelparhomenko@gmail.com"
          disabled
        />
        <Input onChange={(event) => handleSubject(event)} type="text" placeholder="Subject" />
        <TextArea onChange={(event) => handelBody(event)} type="text" placeholder="Body" />
        <Button handleClick={(event) => handleClick(event)}>
          <a ref={ref} href={mailLink}>Send mail</a>
        </Button>
      </InputsContainer>
    </Form>
  )
}
