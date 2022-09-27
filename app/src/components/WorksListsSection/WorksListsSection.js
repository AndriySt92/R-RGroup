import React from 'react'
import { Table } from '../Table/Table'

export const WorksListsSection = ({worksLists}) => {
  return (
    <section className="works_lists" style={{marginBottom: '0px'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Список робіт які ми виконуємо:</h3>
        </div>
      </div>
      <div className="row">
        {worksLists.map((item) => (
          <Table list={item} />
        ))}
      </div>
    </div>
  </section>
  )
}
