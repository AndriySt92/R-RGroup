import React, { useEffect, useState } from 'react'
import { lengthValidation, phoneValidation } from '../../utils/formValidation'
import './style.scss'

export const Form = ({ title, subtitle, withTextarea, textareaPlaceholder, setIsError, setIsSuccess }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [isDirty, setIsDirty] = useState({ name: false, phone: false, message: false })
  const [formError, setFormError] = useState({ name: '', phone: '', message: '' })
  const [isFormError, setIsFormError] = useState(false)

  useEffect(() => {
    if (formError.name || formError.phone || formError.message) {
      setIsFormError(true)
    } else {
      setIsFormError(false)
    }
  }, [formError.name, formError.phone, formError.message])

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    switch (e.target.name) {
      case 'name':
        const lengthValidationMessage = lengthValidation(2, 64, e.target.value)

        if (lengthValidationMessage) {
          setFormError({ ...formError, name: lengthValidationMessage })
        } else {
          setFormError({ ...formError, name: '' })
        }
        break
      case 'phone':
        const isPhoneValid = phoneValidation(e.target.value)

        if (isPhoneValid) {
          setFormError({ ...formError, phone: 'Будь ласка, введіть коректний номер телефону!' })
        } else {
          setFormError({ ...formError, phone: '' })
        }
        break
      case 'message':
        const validationMessage = lengthValidation(0, 200, e.target.value)

        if (validationMessage) {
          setFormError({ ...formError, message: validationMessage })
        } else {
          setFormError({ ...formError, message: '' })
        }
        break
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setIsDirty({ ...isDirty, [e.target.name]: true })
        break
      case 'phone':
        setIsDirty({ ...isDirty, [e.target.name]: true })
        break
      case 'message':
        setIsDirty({ ...isDirty, [e.target.name]: true })
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.phone.length === 0) {
      setFormError({ ...formError, phone: 'Будь ласка, введіть Ваш номер телефону!' })
      return
    }

    fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'success') {
          setIsSuccess(true)
          setFormData({ name: '', phone: '', message: '' })
          setTimeout(() => {
            setIsSuccess(false)
          }, 7000);
        } else {
          setIsError(true)
          setTimeout(() => {
            setIsError(false)
          }, 7000);
        }
      })
  }

  return (
    <form className="form text-center mt-3 mb-md-0" onSubmit={handleSubmit}>
      <h5 className="mb-2">{title}</h5>
      <span className="mb-3 mb-lg-4 ">{subtitle}</span>
      <div className="input-group input-group-lg mt-3 mb-2">
        <input
          value={formData.name}
          onChange={changeHandler}
          onBlur={blurHandler}
          name="name"
          type="text"
          className={`form-control input-group-lg ${
            formError.name && isDirty.name ? 'is-invalid' : ''
          }`}
          placeholder="Ваше ім'я"
          aria-describedby="inputGroup-sizing-lg"
          required
        />
        {isDirty.name && formError.name && <div className="invalid-feedback">{formError.name}</div>}
      </div>
      <div className="input-group input-group-lg mb-3 mb-lg-4 ">
        <input
          value={formData.phone}
          onChange={changeHandler}
          onBlur={blurHandler}
          name="phone"
          className={`form-control input-group-lg ${
            formError.phone && isDirty.phone ? 'is-invalid' : ''
          }`}
          placeholder="Ваш номер телефону"
          aria-describedby="inputGroup-sizing-lg"
          required
        />
        {isDirty.phone && formError.phone && (
          <div className="invalid-feedback">{formError.phone}</div>
        )}
      </div>
      {withTextarea && (
        <div className="mb-3">
          <textarea
            value={formData.message}
            onChange={changeHandler}
            onBlur={blurHandler}
            name="message"
            className={`form-control input-group-lg ${
              formError.message && isDirty.message ? 'is-invalid' : ''
            }`}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={textareaPlaceholder}></textarea>
          {isDirty.message && formError.message && (
            <div className="invalid-feedback">{formError.message}</div>
          )}
        </div>
      )}
      <button
        onClick={handleSubmit}
        disabled={isFormError}
        type="submit"
        className="btn btn-lg w-100 mb-3 mb-lg-4"
        id="inputGroup-sizing-lg">
        Відправити
      </button>
    </form>
  )
}
