import React from 'react'
import './style.scss'
import { eye } from '../../assets'
import { ProjectItem, Title } from '../'
import { useNavigate } from 'react-router-dom'
import { Button } from '../'

export const Projects = ({ title, subtitle, projects, withButton }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/portfolio')
  }

  return (
    <section className="projects">
      {title && <Title classes="text-center" title={title} subtitle={subtitle} />}
      <div className="row">
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            houseArea={project.houseArea}
            mainImg={project.mainImg}
            name={project.name}
          />
        ))}
      </div>
      {withButton && (
        <Button
          onClick={handleClick}
          classes="h6 fw-bold mb-0"
          content="Дивитись всі проекти"
          imgSrc={eye}
        />
      )}
    </section>
  )
}
