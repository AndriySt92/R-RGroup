import React from 'react'
import './style.scss'
import { trophy, phone2, consultation } from '../../assets'
import { Title } from '../'

export const WorkSteps = () => {
  return (
    <section className="work_steps text-center">
      <Title classes='text-center' title='Лише 3 кроки до здійснення плану'/>
      <div className="row">
        <div className="col-12">
          <div className="work_steps_items">
            {[
              { imgSrc: `${phone2}`, title: 'Ваша заявка або дзвінок' },
              { imgSrc: `${consultation}`, title: 'Консультація спеціаліста' },
              { imgSrc: `${trophy}`, title: 'Виконуємо роботу' },
            ].map(({ imgSrc, title }) => (
              <div key={title} className="work_steps_item">
                <div>
                  <img src={imgSrc} alt="" />
                </div>
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
