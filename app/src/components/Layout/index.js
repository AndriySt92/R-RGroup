import React from 'react'
import './style.scss'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../'


export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
