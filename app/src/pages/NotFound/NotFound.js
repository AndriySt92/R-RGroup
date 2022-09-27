import React from 'react'
import './notFound.scss'
import { Link, useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className='not_found'>
      <div className="row">
        <div className="col-12">
          <h2>Cторінку не знайдено</h2>
          <h1>404</h1>
          <span>Ви можете повернутися <button className='btn' onClick={goBack}>Назад</button> або прейти на головну сторінку <button className='btn'><Link to='/'>Головна</Link></button></span>
        </div>
      </div>
    </div>
  )
}
