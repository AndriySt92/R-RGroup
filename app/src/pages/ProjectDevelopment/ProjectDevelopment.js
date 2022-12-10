import React, { useEffect, useState } from 'react'
import './projectDevelopment.scss'
import { Projects } from '../../components/Projects/Projects'
import { Loader } from '../../components/Loader/Loader'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'

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

  const slideImages = ["https://res.cloudinary.com/drcptrml4/image/upload/v1669980760/RRGroup/images/projectDev/project-dev-slide-1-min_jjayp2.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1668167143/RRGroup/images/projectDev/project-dev-slide-2_orgctg.webp"]

  return (
    <div className="project_development">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Розробка проектів</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <Projects title="Готові проекти будинків" projects={projects} withButton />{' '}
        <section className="projects_desc">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Склад проекту приватного будинку:</h3>
              <ul className="mb-4 ml-4">
                <li>
                  <span>
                    генеральний план (розробляється індивідуально під ваш ділянку, входить у
                    вартість проекту);
                  </span>
                </li>
                <li>
                  <span>плани поверхів;</span>
                </li>
                <li>
                  <span>фасади;</span>
                </li>
                <li>
                  <span>розрізи;</span>
                </li>
                <li>
                  <span>візуалізація;</span>
                </li>
                <li>
                  <span>план покрівлі, розкладка і візуалізація крокiв;</span>
                </li>
                <li>
                  <span>план фундаментів, їх армування, розрізи;</span>
                </li>
                <li>
                  <span>готові плани поверхів;</span>
                </li>
                <li>
                  <span>план перекриття (плити, балки, моноліт);</span>
                </li>
                <li>
                  <span>підрахунок основних матеріалів і робіт.</span>
                </li>
              </ul>
              <p>
                У будь-який готовий проект можна внести зміни. Зміна кольорів фасадів, перегородок
                та інші дрібні зміни, які не впливають на несучі конструкції - безкоштовно. Зміни,
                що стосуються несучих конструкцій - за невелику доплату. При внесенні платних змін
                або індивідуальному проектуванні - аванс 30%.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectDevelopment