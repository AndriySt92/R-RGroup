import React from 'react'
import { Table, Title } from '../'

export const WorksLists = ({ worksListsData, title }) => {
  return (
    <section className="works_lists" style={{ marginBottom: '0px' }}>
      <div className="container">
        <Title classes='text-center' title={`${title ? title : 'Список робіт які ми виконуємо:'}`} />
        <div className="row">
          {worksListsData.map((item) => (
            <Table key={item.title} list={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
