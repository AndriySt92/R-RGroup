import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import './style.scss'
import { ProjectPlan, Projects, Title } from '../../components'
import { projects } from '../../contants/portfolio'
import { planItems } from '../../contants/projectDevelopment'

const Portfolio = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  const [currentProjects, setCurrentProjects] = useState([])
  const projectsWrap = useRef()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const currentPage = Number(searchParams.get('page') || sessionStorage.getItem('page'))

    if (currentPage) {
      setSearchParams({ page: currentPage })
    } else {
      setSearchParams({ page: 1 })
    }
  }, [])

  useEffect(() => {
    const currentPage = Number(searchParams.get('page'))
    setPageNumber(currentPage)
    sessionStorage.setItem('page', currentPage)
    setCurrentProjects(projects.slice((currentPage - 1) * pageSize, currentPage * pageSize))
  }, [searchParams.get('page')])

  const scrollToTop = () => {
    if (projectsWrap.current) {
      window.scrollTo(0, projectsWrap.current.offsetTop - 10)
    }
  }

  const handleClick = (pageNumber) => {
    setSearchParams({ page: pageNumber })
    scrollToTop()
  }

  const handleClickPrevPage = (e) => {
    e.preventDefault()
    setSearchParams({ page: pageNumber - 1 })
    scrollToTop()
  }

  const handleClickNextPage = (e) => {
    e.preventDefault()
    setSearchParams({ page: pageNumber + 1 })
    scrollToTop()
  }

  return (
    <div ref={projectsWrap} className="portfolio">
      <div className="container">
        <Title classes="page_title" title="Готові проекти будинків" />
        <Projects projects={currentProjects} />
        <div className="row">
          <div className="col-12 text-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination-md">
                <li
                  className={`page-item ${pageNumber === 1 ? 'disable' : ''}`}
                  onClick={handleClickPrevPage}>
                  <a className="page-link">Назад</a>
                </li>
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="page-item" onClick={() => handleClick(item)}>
                    <a className={`page-link ${pageNumber == item ? 'active' : ''}`}>{item}</a>
                  </li>
                ))}
                <li
                  className={`page-item ${pageNumber === 4 ? 'disable' : ''}`}
                  onClick={handleClickNextPage}>
                  <a className="page-link" href="">
                    Вперед
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ProjectPlan title="Склад проекту приватного будинку:" planItems={planItems} />
      </div>
    </div>
  )
}

export default Portfolio
