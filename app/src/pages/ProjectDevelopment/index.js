import React, { useEffect, useState } from 'react'
import './style.scss'
import { Projects, Loader, TopSlider, Title, ProjectPlan, Container } from '../../components'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { slideImages, planItems } from '../../contants/projectDevelopment'

const ProjectDevelopment = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    if (projects.length === 4) {
      return
    }
    setProjects(getRandomProjects(4))
  }, [])

  if (!projects.length === 4) {
    return <Loader />
  }

  return (
    <div className="project_development">
      <Container>
        <Title classes="page_title" title='Розробка проектів' />
        <TopSlider slideImages={slideImages} />
        <Projects title="Готові проекти будинків" projects={projects} withButton />{' '}
        <ProjectPlan title='Склад проекту приватного будинку:' planItems={planItems}/>
      </Container>
    </div>
  )
}

export default ProjectDevelopment
