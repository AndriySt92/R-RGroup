import { React } from 'react'
import './style.scss'
import { Title } from '../'

export const OrderType = ({ title, content }) => {
  return (
    <section className="orderType">
      <Title classes='text-center' title={title} />
      <div className="row">
        {content.map((order, index) => {
          return (
            <div key={index} className="col-lg-4 col-md-12">
              {order.imgSrc && <img src={order.imgSrc} alt="" />}
              <div className="order_type_content mb-3 mb-lg-0">
                {order.isTrend && (
                  <div className="popular-label">
                    <div className="tag">
                      <span className="tag-text">тренд</span>
                    </div>
                  </div>
                )}
                <h3>{order.title}</h3>
                <p>{order.subtitle}</p>
                <ul>
                  {order.works.map((work) => {
                    return <li key={work}>{work}</li>
                  })}
                </ul>
                <div className="order_btn" data-bs-target="#exampleModal" data-bs-toggle="modal">
                  <h6>Замовити</h6>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
