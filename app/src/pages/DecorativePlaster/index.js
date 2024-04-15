import React from 'react'
import {
  Accordion,
  OrderType,
  Gallery,
  TopSlider,
  WorksLists,
  WorkOrder,
  Title,
} from '../../components'
import {
  accordionData,
  galleryImages,
  orderTypeData,
  slideImages,
  worksListsData,
} from '../../contants/decorativePlaster'

const DecorativePlaster = () => {
  return (
    <div className="decorative_plaster">
      <div className="container">
        <Title classes="page_title" title="Декоративна штукатурка" />
        <TopSlider slideImages={slideImages} />
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <WorkOrder />
        <Gallery images={galleryImages} />
        <Accordion accordionData={accordionData} />
        <WorksLists worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default DecorativePlaster
