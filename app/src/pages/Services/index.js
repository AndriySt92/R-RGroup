import React from 'react'
import { servicesItems } from '../../contants/menu'
import { Container, Title, List } from '../../components'

const Services = () => {
  return (
    <div className="services mb-5">
      <Container>
        <Title classes="page_title" title="Будівельні послуги" />
        <List items={servicesItems} />
      </Container>
    </div>
  )
}

export default Services
