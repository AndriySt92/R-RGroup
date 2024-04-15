import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { servicesItems } from '../../contants/services'
import { Title } from '../../components'

const Services = () => {
  return (
    <div className="services mb-5">
      <div className="container">
        <Title classes="page_title" title='Будівельні послуги' />
        <section className="servises_list my-5">
          <div className="row">
            <div className="col-12">
              {servicesItems.map((item) => {
                return (
                  <Link to={item.linkTo} key={item.title}>
                    <div className="servises_item row">
                        <div className="col-sm-12 col-md-7 col-lg-4">
                          <div className="servises_item_img">
                            <img src={item.imgSrc} />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-8">
                          <div className="servises_item_title">
                            <h4>{item.title}</h4>
                          </div>
                        </div>
                      </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services