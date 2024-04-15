import React from 'react'
import {
  Accordion,
  OrderType,
  Gallery,
  TopSlider,
  WorkSteps,
  WorksLists,
  Title,
} from '../../components'
import {
  accordionData,
  galleryImages,
  orderTypeData,
  slideImages,
  worksListsData,
} from '../../contants/plasterWorks'

const PlasterWorks = () => {
  return (
    <div className="plaster_work">
      <div className="container">
        <Title classes="page_title" title="Штукатурні роботи" />
        <TopSlider slideImages={slideImages} />
        <WorkSteps />
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <Gallery images={galleryImages} />
        <Accordion accordionData={accordionData} />
        <WorksLists worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default PlasterWorks
