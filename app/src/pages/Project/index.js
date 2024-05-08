import React, { useEffect, useState } from 'react'
import './style.scss'
import { Gallery, Projects, ProjectItem, Loader, Title, ProjectPlan, Button, Container } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../../contants/portfolio'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { planItems } from '../../contants/projectDevelopment'

const Project = () => {
  const [project, setProject] = useState({})
  const [offerProjects, setOfferProjects] = useState([])
  const navigate = useNavigate()
  const { name } = useParams()

  useEffect(() => {
    setOfferProjects(getRandomProjects(2))
  }, [])

  useEffect(() => {
    const project = projects.filter((project) => project.name == name)
    setProject(project[0])
    setOfferProjects(getRandomProjects(2))
  }, [name])

  const handleClick = (name) => {
    navigate(`/project/${name}`)
  }

  if (!project.name || !offerProjects.length) {
    return <Loader />
  }

  return (
    <div className="project">
      <Container>
        <Title classes="page_title" title={`Проект будинку ${project.name}`} />
        <div className="row">
          <div className="project_left col-xl-9 col-lg-12">
            <div className="project_left_img mb-3">
              <img className="img-fluid" src={project.mainImg} alt="" />
            </div>
            <div className="d-block d-md-none">
              <span className="mb-3">
                Площа:{' '}
                <b>
                  {project.houseArea}м<sup>2</sup>
                </b>
              </span>
              {project.garageArea && (
                <span className="mt-2 mb-2 d-block d-md-none">
                  Площа гаража:{' '}
                  <b>
                    {project.garageArea}м<sup>2</sup>
                  </b>
                </span>
              )}
            </div>
            <p className="project_left_desc">{project.desc}</p>
            <section className="project_left_photos">
              <Gallery
                key={`${project.name}_facades`}
                images={project.images}
                title="Фасади:"
                imgHeight150
              />
            </section>
            <section className="project_left_plans">
              <Gallery
                key={`${project.name}_plans`}
                images={project.planImages}
                title="Плани:"
                imgHeight150
              />
            </section>
            <ProjectPlan title="У ціну проету входить:" planItems={planItems} />
          </div>
          <div className="project_right col-xl-3 col-lg-12">
            <div className="project_right_img d-none d-xl-block">
              <img className="img-fluid" src={project.mainImg} alt="" />
            </div>
            <div className="project_right_info d-none d-xl-block">
              <div className="mt-2 mb-2">
                <span>Проект будинку: </span>
                <b>
                  {project.name}
                </b>
              </div>
              <div className="mt-2 mb-2">
                <span>Площа: </span>
                <b>
                  {project.houseArea}м<sup>2</sup>
                </b>
              </div>
              {project.garageArea && <div className="mt-2 mb-2">
                <span>Площа гаража: </span>
                <b>
                  {project.garageArea}м<sup>2</sup>
                </b>
              </div>}
              <Button
                    classes="h5"
                    content="Замовити проект"
                    dataTarget="#exampleModal"
                    dataToggle="modal"
                    fullWidth
                  />
            </div>
            <div className="project_right_offer mt-5 d-none d-xl-block">
              <h5 className="mb-2">Інші проекти:</h5>
              <div className="row">
                <ProjectItem
                  houseArea={offerProjects[0].houseArea}
                  mainImg={offerProjects[0].mainImg}
                  name={offerProjects[0].name}
                  onClick={() => handleClick(offerProjects[0].name)}
                />
              </div>
              <hr className="mb-4" />
              <div className="row">
                <ProjectItem
                  houseArea={offerProjects[1].houseArea}
                  mainImg={offerProjects[1].mainImg}
                  name={offerProjects[1].name}
                  onClick={() => handleClick(offerProjects[1].name)}
                />
              </div>
            </div>
            <div className="offer_project d-block d-xl-none">
              <h3 className="mb-4">Iнші проекти:</h3>
              <Projects projects={offerProjects} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Project
