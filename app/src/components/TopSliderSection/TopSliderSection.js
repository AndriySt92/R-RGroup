import React from 'react'
import Slider from 'react-slick'
import { Form } from '../Form/Form'
import './topSliderSection.scss'

export const TopSliderSection = ({ slideImages }) => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    touchMove: false,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
  }

  return (
    <section className="top_slider">
      <div className="row">
        <div className="col-md-6">
          <div className="top_slider_block">
            <Slider {...settings}>
              {slideImages.map((img) => (
                <div key={img}>
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <Form title={'ПО ТЕЛЕФОНУ ШВИДШЕ!'} subtitle={'ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ СПЕЦІАЛІСТА'} />
        </div>
      </div>
    </section>
  )
}
