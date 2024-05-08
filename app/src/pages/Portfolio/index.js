import React, { useRef, useState} from 'react'
import { ProjectPlan, Projects, Title, Pagination, Container } from '../../components'
import { projects } from '../../contants/portfolio'
import { planItems } from '../../contants/projectDevelopment'

const Portfolio = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  const [currentProjects, setCurrentProjects] = useState([])
  const projectsWrap = useRef()

  return (
    <div ref={projectsWrap} className="portfolio">
      <Container>
        <Title classes="page_title" title="Готові проекти будинків" />
        <Projects projects={currentProjects} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setCurrentItems={setCurrentProjects} items={projects} itemsWrap={projectsWrap} />
        <ProjectPlan title="Склад проекту приватного будинку:" planItems={planItems} />
      </Container>
    </div>
  )
}

export default Portfolio
