import React, { useRef } from 'react'
import './style.scss'
import { Link, NavLink } from 'react-router-dom'
import { logo, phoneGif } from '../../assets'
import { menuItems } from '../../contants/menu'

export const Menu = () => {
  const hamburgerButton = useRef()

  const handleClick = () => {
    if (hamburgerButton.current && window.innerWidth < 992) {
      hamburgerButton.current.click()
    }
  }

  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </NavLink>
          <div
            className="callback_button d-block d-lg-none"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal">
            <img src={phoneGif} alt="" />
            <span>Замовити дзвінок</span>
          </div>
          <button
            ref={hamburgerButton}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menuItems.map(({ linkTo, title, servicesItems }) => (
                <li key={title} className={`${servicesItems ? 'services_item' : ''} nav-item`}>
                  <NavLink
                    to={linkTo}
                    className={`${servicesItems ? 'dropdown-toggle' : ''} nav-link`}
                    aria-current="page"
                    onClick={handleClick}>
                    {title}
                  </NavLink>
                  {servicesItems && (
                    <ul className="dropdown_menu">
                      {servicesItems.map(({ linkTo, title }, index) => (
                        <li key={title} className={`dropdown_item dropdown_item_${index + 1}`}>
                          <Link to={linkTo}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div
              className="callback_button ms-auto d-lg-block d-none"
              data-bs-target="#exampleModal"
              data-bs-toggle="modal">
              <img src={phoneGif} alt="" />
              <span>Замовити дзвінок</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
