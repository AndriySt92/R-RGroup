import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <div className="footer_call text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Зв'язатися з менеджером</h2>
              <h4>
                Телефонуйте за номером телефону{' '}
                <a className="footer_number" href="tel:+380961121126" target="_parent">
                  +38 (096) 112 112 6
                </a>{' '}
                або{' '}
                <a className="footer_number" href="tel:+380671121126" target="_parent">
                  +38 (067) 112 112 6
                </a>{' '}
              </h4>
              <h2>
                Приймаємо дзвінки <b>з 9:00 до 17:00</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_menu p-3 bg-dark text-light">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="row">
              <div className="col-lg-3 mb-2 mb-xl-4  text-center text-lg-start">
                <span className="mt-1">R&Rgroup - будівельні послуги</span>
              </div>
              <div className="col-lg-9 mb-2 mb-xl-4 d-flex justify-content-md-center justify-content-lg-end">
                <ul className="nav footer_nav">
                  {[
                    { to: '/', name: 'Будинки під ключ' },
                    { to: '/services', name: 'Будівельні послуги' },
                    { to: '/price', name: 'Ціни послуги' },
                    { to: '/portfolio', name: 'Портфоліо' },
                    { to: '/contacts', name: 'Контакти' },
                    { to: '/tips', name: 'Поради' },
                  ].map(({ to, name }) => (
                    <li key={name}>
                      <Link to={to}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-2 mb-xl-4 text-center text-lg-start">
                <p className="mb-2 mb-xl-4">© Усі права захищено 2022&nbsp;</p>
                <p className="mb-0 mb-sm-2">
                  <a className="footer_number" href="tel:+380961121126">
                    +38(096) 112-112-6
                  </a>
                </p>
                <p>
                  <a className="footer_number" href="tel:+380671121126">
                    +38(067) 112-112-6
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
