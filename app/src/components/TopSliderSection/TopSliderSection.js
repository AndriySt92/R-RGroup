import React from 'react'
import { Form } from '../Form/Form'
import './topSliderSection.scss'

export const TopSliderSection = ({animationSlide}) => {
  return (
    <section className="top_slider">
      <div className="row">
        <div className="col-md-6">
          <div className="top_slider_block" style={{animation: `${animationSlide} 15s infinite`}}></div>
        </div>
        <div className="col-md-6 px-5">
          <Form title={'ПО ТЕЛЕФОНУ ШВИДШЕ!'} subtitle={'ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ СПЕЦІАЛІСТА'} />
        </div>
      </div>
    </section>
  )
}
