import React from 'react'
import { Table, Title } from '../'

export const WorksLists = ({ worksListsData }) => {
  return (
    <section className="works_lists" style={{ marginBottom: '0px' }}>
      <div className="container">
        <Title title='Список робіт які ми виконуємо:' />
        <div className="row">
          {worksListsData.map((item) => (
            <Table key={item.title} list={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
