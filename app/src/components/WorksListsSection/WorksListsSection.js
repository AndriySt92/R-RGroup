import React from 'react'
import { Table } from '../Table/Table'

export const WorksListsSection = ({worksListsData}) => {
  return (
    <section className="works_lists" style={{marginBottom: '0px'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Список робіт які ми виконуємо:</h3>
        </div>
      </div>
      <div className="row">
        {worksListsData.map((item) => (
          <Table key={item.title} list={item} />
        ))}
      </div>
    </div>
  </section>
  )
}
