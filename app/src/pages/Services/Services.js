import React from 'react'
import './services.scss'
import { Link } from 'react-router-dom'

const servicesItems = [
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980993/RRGroup/images/services/repair-slide-1-min_sgw5er.jpg", title: 'Ремонтні роботи', linkTo: '/repairWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980993/RRGroup/images/services/plaster-works-slider-3-min_dx9z2f.jpg", title: 'Штукатурні роботи', linkTo: '/plasterWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980994/RRGroup/images/services/facade-slide-2-min_wq9jcz.jpg", title: 'Фасадні роботи', linkTo: '/facadeWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980994/RRGroup/images/services/services-7-min_csnl0m.jpg", title: 'Монолітні роботи', linkTo: '/concreteWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980994/RRGroup/images/services/dec-plaster-slide-4-min_v764tp.jpg", title: 'Декоративна штукатурка', linkTo: '/decorativePlaster' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980993/RRGroup/images/services/roofing-works-slide-1-min_eah1mq.jpg", title: 'Покрівельні роботи', linkTo: '/roofingWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980994/RRGroup/images/services/services-8-min_ppgh65.jpg", title: 'Укладання бруківки', linkTo: '/pavingWorks' },
  { imgSrc: "https://res.cloudinary.com/drcptrml4/image/upload/v1669980993/RRGroup/images/services/project-dev-slide-1-min_a0l8fe.jpg", title: 'Розробка проектів', linkTo: '/projectDevelopment' },
]

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