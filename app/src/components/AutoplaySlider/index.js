import React from 'react'
import './style.scss'
import Slider from 'react-slick'
import { sliderSettings } from '../../contants/autoplaySlider'
import { Title } from '../'

export const AutoplaySlider = ({ autoplaySliderData }) => {

  return (
    <section className="autoplaySlider">
      <Title title='Матеріали з яких ми будуємо:' />
      <div className="row">
        <div className="col-12">
          <Slider {...sliderSettings}>
            {autoplaySliderData.map((slide) => (
              <div key={slide.title} className="slick_slider_item">
                <img src={slide.imgSrc} alt="" />
                <h6>{slide.title}</h6>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
