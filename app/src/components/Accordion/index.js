import React from 'react'
import './style.scss'
import { Title } from '../Title'

export const Accordion = ({ accordionData }) => {
  return (
    <section className="accordion">
      <Title classes='text-left' title='Відповіді на популярні питання від клієнтів:' />
      <div className="row">
        <div className="col-12">
          <div className="accordion" id="accordionExample">
            {accordionData.map(({ id, question, answer }) => {
              return (
                <div className="accordion-item" key={id}>
                  <h2 className="accordion-header" id={`heading${id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded="true"
                      aria-controls={`collapse${id}`}>
                      {question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">{answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
