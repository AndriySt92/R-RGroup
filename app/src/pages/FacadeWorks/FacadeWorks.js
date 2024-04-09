import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { accordionData, galleryImages, orderTypeData, slideImages, worksListsData } from '../../contants/facadeWorks'

const FacadeWorks = () => {
  return (
    <div className="facade_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Фасадні роботи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <OrderTypeSection
          title={orderTypeData.mainTitle}
          content={orderTypeData.ordersTypeList}
        />
        <WorkOrderSection />
        <Gallery images={galleryImages} />
        <FaqSection faqData={accordionData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default FacadeWorks
