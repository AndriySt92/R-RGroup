import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { accordionData, galleryImages, orderTypeData, slideImages, worksListsData } from '../../contants/plasterWorks'

const PlasterWorks = () => {
  return (
    <div className="plaster_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Штукатурні роботи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <WorkStepsSection />
        <OrderTypeSection
          title={orderTypeData.mainTitle}
          content={orderTypeData.ordersTypeList}
        />
        <Gallery images={galleryImages} />
        <FaqSection faqData={accordionData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default PlasterWorks
