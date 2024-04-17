import React from 'react'
import './style.scss'

export const Button = ({
  fullWidth,
  classes = '',
  imgSrc,
  content,
  dataTarget = '',
  dataToggle = '',
  onClick = () => {},
}) => {
  
  return (
    <div
      className={`${fullWidth ? 'full_width' : ''} my_btn`}
      onClick={onClick}
      data-bs-target={dataTarget}
      data-bs-toggle={dataToggle}>
      {imgSrc && <img className="btn_icon" src={imgSrc} alt="" />}
      <h6 className={`${classes} mb-0`}>{content}</h6>
    </div>
  )
}
