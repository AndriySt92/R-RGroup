import React from 'react'
import { Accordion, OrderType, Gallery, TopSlider, WorkOrder, WorksLists, Title } from '../../components'
import {
  accordionData,
  galleryImages,
  orderTypeData,
  slideImages,
  worksListsData,
} from '../../contants/roofingWorks'

const RoofingWorks = () => {
  return (
    <div className="roofing_works">
      <div className="container">
        <Title classes="page_title" title='Покрівельні роботи' />
        <TopSlider slideImages={slideImages} />
        {/* <WorkSteps wor /> */}
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <Gallery images={galleryImages} />
        <Accordion accordionData={accordionData} />
        <WorksLists worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default RoofingWorks
