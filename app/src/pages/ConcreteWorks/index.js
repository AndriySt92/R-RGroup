import React from 'react'
import { Accordion, Gallery, Title, TopSlider, WorkSteps, WorksLists } from '../../components'
import {
  accordionData,
  galaryImages,
  slideImages,
  worksListsData,
} from '../../contants/concreteWorks'

const ConcreteWorks = () => {
  return (
    <div className="concrete_works">
      <div className="container">
        <Title
          classes="page_title"
          title="Монолітні роботи: фундамент, перекриття, бетонні сходи"
        />
        <TopSlider slideImages={slideImages} />
        <WorkSteps />
        <Gallery images={galaryImages} />
        <Accordion accordionData={accordionData} />
        <WorksLists worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default ConcreteWorks
