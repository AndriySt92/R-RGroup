import React from 'react'
import './contacts.scss'
import { contacts } from '../../assets'

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Зв'язатися з Нами</h2>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-lg-6 my-4">
            <h3>Контакти:</h3>
            <p>
              <b>+380 (096) 112-112-6</b>
            </p>
            <p>
              <b>+380 (067) 112-112-6</b>
            </p>
            <p>Офіс: м.Городенка вулиця Івана Богуна 4a</p>
          </div>
          <div className="col-lg-6 ">
            <div className="contacts_map mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.033710773478!2d25.498736551615565!3d48.66659802204337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473147a0e4c21051%3A0x40f5eca871c3d452!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0JHQvtCz0YPQvdCwLCA0LCDQk9C-0YDQvtC00LXQvdC60LAsINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzgxMDA!5e0!3m2!1sru!2sua!4v1663339135662!5m2!1sru!2sua"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row">
          <div className="col-12">
            <img className="img-fluid my-4 my-sm-5" src={contacts} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
