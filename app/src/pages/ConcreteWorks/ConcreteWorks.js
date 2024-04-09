import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { accordionData, galaryImages, slideImages, worksListsData } from '../../contants/concreteWorks'

const ConcreteWorks = () => {
  return (
    <div className="concrete_works">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Монолітні роботи: фундамент, перекриття, бетонні сходи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <WorkStepsSection />
        <Gallery images={galaryImages} />
        <FaqSection faqData={accordionData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default ConcreteWorks
