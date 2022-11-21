import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Layout } from './components/Layout/Layout'
import { ScrollToTop } from './hoc/ScrollToTop/ScrollToTop'
import { NotFound } from './pages/NotFound/NotFound'
import { Loader } from './components/Loader/Loader'

const RepairWork = React.lazy(() => import('./pages/RepairWork/RepairWork'))
const FacadeWorks = React.lazy(() => import('./pages/FacadeWorks/FacadeWorks'))
const PlasterWorks = React.lazy(() => import('./pages/PlasterWorks/PlasterWorks'))
const RoofingWorks = React.lazy(() => import('./pages/RoofingWorks/RoofingWorks'))
const ProjectDevelopment = React.lazy(() => import('./pages/ProjectDevelopment/ProjectDevelopment'))
const ConcreteWorks = React.lazy(() => import('./pages/ConcreteWorks/ConcreteWorks'))
const PavingWorks = React.lazy(() => import('./pages/PavingWorks/PavingWorks'))
const DecorativePlaster = React.lazy(() => import('./pages/DecorativePlaster/DecorativePlaster'))
const Portfolio = React.lazy(() => import('./pages/Portfolio/Portfolio'))
const Project = React.lazy(() => import('./pages/Project/Project'))
const Tips = React.lazy(() => import('./pages/Tips/Tips'))
const Tip = React.lazy(() => import('./pages/Tip/Tip'))
const Contacts = React.lazy(() => import('./pages/Contacts/Contacts'))
const Services = React.lazy(() => import('./pages/Services/Services'))

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Contacts />
                </React.Suspense>
              }
            />
            <Route
              path="services"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Services />
                </React.Suspense>
              }
            />
            <Route
              path="repairWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <RepairWork />
                </React.Suspense>
              }
            />
            <Route
              path="facadeWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <FacadeWorks />
                </React.Suspense>
              }
            />
            <Route
              path="plasterWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <PlasterWorks />
                </React.Suspense>
              }
            />
            <Route
              path="roofingWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <RoofingWorks />
                </React.Suspense>
              }
            />
            <Route
              path="projectDevelopment"
              element={
                <React.Suspense fallback={<Loader />}>
                  <ProjectDevelopment />
                </React.Suspense>
              }
            />
            <Route
              path="concreteWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <ConcreteWorks />
                </React.Suspense>
              }
            />
            <Route
              path="pavingWorks"
              element={
                <React.Suspense fallback={<Loader />}>
                  <PavingWorks />
                </React.Suspense>
              }
            />
            <Route
              path="decorativePlaster"
              element={
                <React.Suspense fallback={<Loader />}>
                  <DecorativePlaster />
                </React.Suspense>
              }
            />
            <Route
              path="portfolio"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Portfolio />
                </React.Suspense>
              }
            />
            <Route
              path="tips"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Tips />
                </React.Suspense>
              }
            />
            <Route
              path="tip/:urlTitle"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Tip />
                </React.Suspense>
              }
            />
            <Route
              path="project/:name"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Project />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  )
}

export default App
