import React, { useEffect } from 'react'
import './style.scss'
import { useSearchParams } from 'react-router-dom'
import { calcTotalPages } from '../../utils/calcNumberPages'

export const Pagination = ({
  pageNumber,
  setPageNumber,
  pageSize,
  setCurrentItems,
  items,
  itemsWrap,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  //set url search params of page number
  useEffect(() => {
    const currentPage = Number(sessionStorage.getItem('page'))

    if (currentPage) {
      setSearchParams({ page: currentPage })
    } else {
      setSearchParams({ page: 1 })
    }
  }, [])

  useEffect(() => {
    const currentPage = Number(searchParams.get('page'))
    setPageNumber(currentPage)
    //after reload website or moving on another link of the website, page number will be saved
    sessionStorage.setItem('page', currentPage)
    setCurrentItems(items.slice((currentPage - 1) * pageSize, currentPage * pageSize))
  }, [searchParams.get('page')])

  const scrollToTop = () => {
    if (itemsWrap.current) {
      window.scrollTo(0, itemsWrap.current.offsetTop - 10)
    }
  }

  const handleClickPageNumber = (pageNumber) => {
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
    <div className="row">
      <div className="col-12 text-center">
        <nav>
          <ul className="pagination pagination-md">
            <li
              className={`page-item ${pageNumber === 1 ? 'disable' : ''}`}
              onClick={handleClickPrevPage}>
              <a className="page-link">Назад</a>
            </li>
            {Array(calcTotalPages(items.length, pageSize))
              .fill()
              .map((v, i) => ++i)
              .map((item) => (
                <li key={item} className="page-item" onClick={() => handleClickPageNumber(item)}>
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
  )
}
