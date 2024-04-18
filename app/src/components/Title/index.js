import React from 'react'
import './style.scss'

export const Title = ({ classes = '', title, subtitle }) => {
  return (
    <div className={`${classes} row mb-4`}>
      <div className="col-12">
        <h3>{title}</h3>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </div>
  )
}
