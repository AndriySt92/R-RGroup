import React from 'react'
import './style.scss'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import { Title } from '../'

export const Gallery = ({ images, title, imgHeight150}) => {

  return (
    <section className="gallery">
      <Title title={`${title ? title : 'Фото робіт:'}`} />
      <div className="row">
        <LightgalleryProvider>
          {images.map((image, index) => {
            return (
              <div key={index} className={`img_gallery_wrap col-xl-3 col-lg-4 col-md-6 col-12 ${imgHeight150 ? 'h-150' : ''}`}>
                <LightgalleryItem group='group' src={image}>
                  <img src={image} />
                </LightgalleryItem>
              </div>
            )
          })}
        </LightgalleryProvider>
      </div>
    </section>
  )
}
