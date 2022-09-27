import React, { useEffect, useState } from 'react'
import './project.scss'
import { Gallery } from '../../components/Gallery/Gallery'
import { ProjectItem } from '../../components/ProjectItem/ProjectItem'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../Portfolio/Portfolio'
import { Loader } from '../../components/Loader/Loader'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { Projects } from '../../components/Projects/Projects'

export const Project = () => {
  const [project, setProject] = useState({})
  const [offerProjects, setOfferProjects] = useState([])
  const navigate = useNavigate()
  const { name } = useParams()

  useEffect(() => {
    if (offerProjects.length === 2) {
      return
    } else {
      setOfferProjects(getRandomProjects(2))
    }
  }, [])

  useEffect(() => {
    const project = projects.filter((project) => project.name == name)
    setProject(project[0])
  }, [name])

  const handleClick = (name) => {
    navigate(`/project/${name}`)
  }

  if (!project.name || !offerProjects.length === 2) {
    return <Loader />
  }

  return (
    <div className="project">
      <div className="container">
        <div className="page_title project_title">
          <div className="row">
            <div className="col-12">
              <h2>Проект будинку {project.name}</h2>
            </div>
          </div>
        </div>
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
                images={project.images}
                group={`${project.name}`}
                title="Фасади:"
                imgHeight150
              />
            </section>
            <section className="project_left_plans">
              <Gallery
                images={project.planImages}
                group={`${project.name}`}
                title="Плани:"
                imgHeight150
              />
            </section>
            <section className="project_structure">
              <div className="row">
                <div className="col-12">
                  <h3>У ціну проету входить:</h3>
                  <ul className="ml-4">
                    {[
                      'генеральний план (розробляється індивідуально під ваш ділянку, входить увартість проекту);',
                      'плани поверхів;',
                      'фасади;',
                      'розрізи;',
                      'візуалізація;',
                      'план покрівлі, розкладка і візуалізація крокiв;',
                      'план фундаментів, їх армування, розрізи;',
                      'готові плани поверхів;',
                      'план перекриття (плити, балки, моноліт);',
                      'підрахунок основних матеріалів і робіт.',
                    ].map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="project_right col-xl-3 col-lg-12">
            <div className="project_right_img d-none d-xl-block">
              <img className="img-fluid" src={project.mainImg} alt="" />
            </div>
            <div className="project_right_info d-none d-xl-block">
              <div className="mt-2">
                <span>Площа: </span>
                <b>
                  {project.houseArea}м<sup>2</sup>
                </b>
              </div>
              <div className="mb-2 mt-2">
                <span>
                  Ціна проекту: <b>124 тис. грн.</b>
                </span>
              </div>
              <button
                className="right_info_btn btn btn-primary"
                data-bs-target="#exampleModal"
                data-bs-toggle="modal">
                Замовити проект
              </button>
            </div>
            <div className="project_right_offer mt-5 d-none d-xl-block">
              <h5 className='mb-2'>Інші проекти:</h5>
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
      </div>
    </div>
  )
}
