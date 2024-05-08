import React from 'react'
import './style.scss'
import { eye } from '../../assets'
import { WorkSteps, Gallery, Title, Button, Container } from '../../components'
import {
  complexWorksItems,
  freeWorksItems,
  garanteeItems,
  pavingWorksGallery,
  popularOrdersItems,
} from '../../contants/pavingWorks'

const PavingWorks = () => {
  return (
    <div className="paving_works">
      <Container>
        <Title classes="page_title" title="Укладання бруківки" />
        <section className="paving_works_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img_wrap">
                  <img
                    src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-top-min_areuhh.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="order_works">
                  {complexWorksItems.map((title, index) => (
                    <>
                      <div
                        key={title}
                        className={`order_btn ${index === 0 ? 'bg_none' : ''}`}
                        data-bs-target="#exampleModal"
                        data-bs-toggle="modal">
                        <h6>{title}</h6>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <WorkSteps />
        <section className="pricing">
          <Title title="Прайс на укладання бруківки:" />
          <div className="row">
            <div className="col-md-6 pricing-left mb-4">
              <div className="mt-4">
                <img
                  src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/paving-works-pricing-min_hfcnz7.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 pricing-right">
              <div>
                <h4>Ми гарантуємо:</h4>
                <ul>
                  {garanteeItems.map((item) => (
                    <li key={item}>- {item};</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="get_free">
          <Title title="Отримай безкоштовно:" />
          <div className="row get_free_items">
            {freeWorksItems.map(({ imgSrc, title }) => (
              <div key={title} className="col-lg-4">
                <div className="get_free_item">
                  <img src={imgSrc} alt="" />
                  <span>{title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="popular_orders">
          <Title title="Популярні замовлення:" />
          <div className="popular_orders_items">
            {popularOrdersItems.map((order) => (
              <div key={order.title} className="popular_orders_item mb-4">
                <div className="orders_item_inner">
                  <h5>{order.title}</h5>
                  <div className="img_wrap mb-2 mt-2">
                    <img src={order.img} alt="" />
                  </div>
                  <Button
                    classes="h5"
                    content="Замовити"
                    dataTarget="#exampleModal"
                    dataToggle="modal"
                    fullWidth
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="catalog">
          <Title title="Прайс на укладання бруківки:" />
          <div className="row">
            <div className="col-md-6 catalog_left">
              <div>
                <img
                  src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/catalog-img-min_qzocfa.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 catalog_right">
              <div>
                <p>
                  Каталог має величезний вибір форм і кольорів тротуарної плитки ТМ Золотий Мандарин
                  дає можливість розробити і реалізувати самий хитромудрий дизайн, що задовольнить
                  вимоги вишуканих ландшафтних дизайнерів і замовників зі смаком.
                </p>
                <a className="load_btn catalog_btn">
                  <div>
                    <img src={eye} alt="" /> <span>PDF</span>
                  </div>
                  <span>Дивитись каталог</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Gallery images={pavingWorksGallery} />
      </Container>
    </div>
  )
}

export default PavingWorks
