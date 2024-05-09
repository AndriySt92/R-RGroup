import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ScrollToTop } from './hoc/ScrollToTop/ScrollToTop'
import { routes } from './routes'

function App() {
  let element = useRoutes(routes)

  return (
    <div className="App">
      <ScrollToTop>{element}</ScrollToTop>
    </div>
  )
}

export default App
