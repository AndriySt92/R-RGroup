import React from 'react'
import './workOrderSection.scss'
import {
    workOrder,
  } from '../../assets'

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
            <img src={workOrder} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
