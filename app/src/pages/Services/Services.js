import React from 'react'
import './services.scss'
import { Link } from 'react-router-dom'
import { servicesItems } from '../../contants/services'

const Services = () => {
  return (
    <div className="services mb-5">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Будівельні послуги</h2>
            </div>
          </div>
        </div>
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