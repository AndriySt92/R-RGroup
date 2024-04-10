import React from 'react'
import './style.scss'
import { eye } from '../../assets'
import { ProjectItem, Title } from '../'
import { useNavigate } from 'react-router-dom'

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
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="projects_btn" onClick={handleClick}>
              <span className="btn_icon">
                <img src={eye} alt="" />
              </span>
              <div className="btn_content">
                <h6 className="mb-0 fw-bold">Дивитись всі проекти</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
