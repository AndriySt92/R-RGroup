import React from 'react'
import {
  Accordion,
  OrderType,
  Gallery,
  TopSlider,
  WorkOrder,
  WorksLists,
  Title,
  Container,
} from '../../components'
import {
  accordionData,
  galleryImages,
  orderTypeData,
  slideImages,
  worksListsData,
} from '../../contants/facadeWorks'

const FacadeWorks = () => {
  return (
    <div className="facade_work">
      <Container>
        <Title classes="page_title" title="Фасадні роботи" />
        <TopSlider slideImages={slideImages} />
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <WorkOrder />
        <Gallery images={galleryImages} />
        <Accordion accordionData={accordionData} />
        <WorksLists worksListsData={worksListsData} />
      </Container>
    </div>
  )
}

export default FacadeWorks
