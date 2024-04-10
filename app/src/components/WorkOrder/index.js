import React from 'react'
import './style.scss'
import { Title } from '../'


export const WorkOrder = () => {
  return (
    <section className="work_order">
      <div className="container">
        <Title title='Порядок роботи:' />
        <div className="row">
          <div className="col-sm-12">
            <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670070879/RRGroup/images/work-order-min_jyuv3n.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
