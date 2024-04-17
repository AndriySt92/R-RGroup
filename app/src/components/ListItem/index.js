import React from 'react'

export const ListItem = ({imgSrc, desc, title}) => {
  return (
    <div className="list_item row">
      <div className="p-0 col-sm-12 col-md-7 col-lg-4">
        <div className="list_item-img">
          <img src={imgSrc} />
        </div>
      </div>
      <div className="col-sm-12 col-md-5 col-lg-8">
        <div className="list_item-title">
          <h4>{title}</h4>
          {desc && <p className='mt-2'>{desc}</p>}
        </div>
      </div>
    </div>
  )
}
