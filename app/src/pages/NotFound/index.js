import React from 'react'
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="not_found">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Cторінку не знайдено</h2>
            <h1>404</h1>
            <span>
              Ви можете повернутися{' '}
              <button className="btn" onClick={goBack}>
                назад
              </button>{' '}
              або прейти на{' '}
              <button className="btn">
                <Link to="/">головну</Link>
              </button>{' '}
              сторінку{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
