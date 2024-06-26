import React, { useState } from 'react'
import './style.scss'
import { Form, Alert } from '../'

export const Modal = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="text-center">
              <h3 className="modal-title mb-3" id="exampleModalLabel">
                ЗАМОВТЕ ДЗВІНОК
              </h3>
              <h6>І отримайте відповіді на Ваші питання!</h6>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isError && <Alert type="error" />}
            {isSuccess && <Alert type="success" />}
            <Form
              withTextarea
              textareaPlaceholder="Що Вас цікавить?"
              setIsSuccess={setIsSuccess}
              setIsError={setIsError}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
