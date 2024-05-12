import React from 'react'
import './style.scss'
import { Container, Title, WorksLists } from '../../components'
import { worksListsData as repairWorksData } from '../../contants/repairWorks'
import { worksListsData as plasterWorksData } from '../../contants/plasterWorks'
import { worksListsData as facadeWorksData } from '../../contants/facadeWorks'
import { worksListsData as concreteWorksData } from '../../contants/concreteWorks'
import { worksListsData as decorativePlasterData } from '../../contants/decorativePlaster'
import { worksListsData as roofingWorksData } from '../../contants/roofingWorks'
import { worksListsData as projectDevelopmentData } from '../../contants/projectDevelopment'

const Prices = () => {
  return (
    <div className="prices">
      <Container>
        <Title classes="page_title" title="Ціни на будівництво" />
        <WorksLists worksListsData={repairWorksData} title="Ремонтні роботи" />
        <WorksLists worksListsData={plasterWorksData} title="Штукатурні роботи" />
        <WorksLists worksListsData={facadeWorksData} title="Фасадні роботи" />
        <WorksLists worksListsData={concreteWorksData} title="Монолітні роботи: фундамент, перекриття, бетонні сходи" />
        <WorksLists worksListsData={decorativePlasterData} title="Декоративна штукатурка" />
        <WorksLists worksListsData={roofingWorksData} title="Покрівельні роботи" />
        <WorksLists worksListsData={projectDevelopmentData} title="Розробка проектів" />
      </Container>
    </div>
  )
}

export default Prices
