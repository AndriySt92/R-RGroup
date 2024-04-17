import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { ListItem } from '../'

export const List = ({ items, onClick }) => {
  
  return (
    <section className="list mt-5">
      <div className="row">
        <div className="col-12">
          {items.map(({ linkTo, title, imgSrc, desc, urlTitle }) =>
            !onClick && linkTo ? (
              <Link to={linkTo} key={title} className="list_item-wrapper">
                <ListItem key={title} title={title} desc={desc} imgSrc={imgSrc} />
              </Link>
            ) : (
              <div key={title} className="list_item-wrapper" onClick={() => onClick(urlTitle)}>
                <ListItem key={title} title={title} desc={desc} imgSrc={imgSrc} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
