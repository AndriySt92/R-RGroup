import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'
import { accordionData, galleryImages, orderTypeData, slideImages, worksListsData } from '../../contants/decorativePlaster'

const DecorativePlaster = () => {
  return (
    <div className="decorative_plaster">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Декоративна штукатурка</h2>
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

export default DecorativePlaster
