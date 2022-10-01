import React from 'react'
import './autoplaySlider.scss'
import Slider from 'react-slick'

export const AutoplaySlider = ({ autoplaySliderData }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="autoplaySlider">
      <div className="row">
        <div className="col-12">
          <h3>Матеріали з яких ми будуємо:</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
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
