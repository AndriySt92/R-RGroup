import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { accordionData, galleryImages, orderTypeData, slideImages, worksListsData } from '../../contants/repairWorks'

const RepairWork = () => {
  return (
    <div className="repair_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12 order_type">
              <h2>Ремонтні роботи</h2>
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
        <section className="materials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Види робіт:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670422609/RRGroup/images/repairWorks/materials-min_be2gf2.png" alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </section>
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default RepairWork