import React from 'react'
import { Accordion, OrderType, Gallery, TopSlider, WorkOrder, WorksLists, Title } from '../../components'
import {
  accordionData,
  galleryImages,
  orderTypeData,
  slideImages,
  worksListsData,
} from '../../contants/repairWorks'

const RepairWork = () => {
  return (
    <div className="repair_work">
      <div className="container">
        <Title classes="page_title" title='Ремонтні роботи' />
        <TopSlider slideImages={slideImages} />
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <WorkOrder />
        <Gallery images={galleryImages} />
        <Accordion accordionData={accordionData} />
        <section className="materials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Види робіт:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img
                  src="https://res.cloudinary.com/drcptrml4/image/upload/v1670422609/RRGroup/images/repairWorks/materials-min_be2gf2.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </section>
        <WorksLists worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default RepairWork
