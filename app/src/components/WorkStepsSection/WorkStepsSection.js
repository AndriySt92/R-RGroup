import React from 'react'
import './workStepsSection.scss'
import { trophy, phone2, consultation } from '../../assets'

export const WorkStepsSection = () => {
  return (
    <section className="work_steps text-center">
      <div className="row">
        <div className="col-12">
          <h3 className='text-center'>Лише 3 кроки до здійснення плану</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="work_steps_items">
            <div className="work_steps_item">
              <div>
                <img src={phone2} alt="" />
              </div>
              <p>Ваша заявка або дзвінок</p>
            </div>
            <div className="work_steps_item">
              <div>
                <img src={consultation} alt="" />
              </div>
              <p>Консультація спеціаліста</p>
            </div>
            <div className="work_steps_item">
              <div>
                <img src={trophy} alt="" />
              </div>
              <p>Виконуємо роботу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
