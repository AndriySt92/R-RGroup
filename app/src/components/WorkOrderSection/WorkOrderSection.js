import React from 'react'
import './workOrderSection.scss'


export const WorkOrderSection = () => {
  return (
    <section className="work_order">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Порядок роботи:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670070879/RRGroup/images/work-order-min_jyuv3n.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
