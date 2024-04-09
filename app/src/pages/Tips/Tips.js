import React from 'react'
import './tips.scss'
import { useNavigate } from 'react-router-dom'
import { tips } from '../../contants/tips'

const Tips = () => {
  let navigate = useNavigate()

  const handleClick = (urlTitle) => {
    navigate(`/tip/${urlTitle}`)
  }
  return (
    <div className="tips">
      <div className="container">
        <div className="page_title tips_title">
          <div className="row">
            <div className="col-12">
              <h2>Поради по будівництву</h2>
            </div>
          </div>
        </div>
        <section className="tips">
          <div className="row">
            <div className="col-12 tips_items">
              {tips.map((item) => {
                return (
                  <div
                    className="tips_item row text-md-start text-center"
                    key={item.id}
                    onClick={() => handleClick(item.urlTitle)}>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                      <div className="tips_item_img mx-auto ms-md-0">
                        <img src={item.imgSrc} />
                      </div>
                    </div>
                    <div className="col-xl-8  col-lg-7 col-md-6">
                      <div className="tips_item_title">
                        <h4 className="mb-lg-3 mb-sm-2">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tips
