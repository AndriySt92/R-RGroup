import React from 'react'
import { Layout, Loader } from '../components'
import { Home, NotFound, Services } from '../pages'

const RepairWorks = React.lazy(() => import('../pages/RepairWork'))
const FacadeWorks = React.lazy(() => import('../pages/FacadeWorks'))
const PlasterWorks = React.lazy(() => import('../pages/PlasterWorks'))
const RoofingWorks = React.lazy(() => import('../pages/RoofingWorks'))
const ProjectDevelopment = React.lazy(() => import('../pages/ProjectDevelopment'))
const ConcreteWorks = React.lazy(() => import('../pages/ConcreteWorks'))
const PavingWorks = React.lazy(() => import('../pages/PavingWorks'))
const DecorativePlaster = React.lazy(() => import('../pages/DecorativePlaster'))
const Portfolio = React.lazy(() => import('../pages/Portfolio'))
const Project = React.lazy(() => import('../pages/Project'))
const Tips = React.lazy(() => import('../pages/Tips'))
const Tip = React.lazy(() => import('../pages/Tip'))
const Contacts = React.lazy(() => import('../pages/Contacts'))
const Prices = React.lazy(() => import('../pages/Prices'))

export let routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/repair-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <RepairWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/facade-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <FacadeWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/plaster-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <PlasterWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/roofing-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <RoofingWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/project-development',
        element: (
          <React.Suspense fallback={<Loader />}>
            <ProjectDevelopment />
          </React.Suspense>
        ),
      },
      {
        path: '/concrete-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <ConcreteWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/paving-works',
        element: (
          <React.Suspense fallback={<Loader />}>
            <PavingWorks />
          </React.Suspense>
        ),
      },
      {
        path: '/decorative-plaster',
        element: (
          <React.Suspense fallback={<Loader />}>
            <DecorativePlaster />
          </React.Suspense>
        ),
      },
      {
        path: '/portfolio',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Portfolio />
          </React.Suspense>
        ),
      },
      {
        path: '/project/:name',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Project />
          </React.Suspense>
        ),
      },
      {
        path: '/tips',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Tips />
          </React.Suspense>
        ),
      },
      {
        path: '/tips',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Tips />
          </React.Suspense>
        ),
      },
      {
        path: '/tip/:urlTitle',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Tip />
          </React.Suspense>
        ),
      },
      {
        path: '/contacts',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Contacts />
          </React.Suspense>
        ),
      },
      {
        path: '/prices',
        element: (
          <React.Suspense fallback={<Loader />}>
            <Prices />
          </React.Suspense>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]