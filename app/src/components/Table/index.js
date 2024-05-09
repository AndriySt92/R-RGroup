import React from 'react'
import './style.scss'

export const Table = ({ list }) => {
  return (
    <div className="table mb-3 mb-lg-4 mb-xl-5">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr className="col-12">
                <th scope="col-9">{list.title}</th>
                <th scope="col-3">Ціна</th>
              </tr>
            </thead>
            <tbody>
              {list.works.map((work, index) => {
                return (
                  <tr key={index}>
                    <td className="col-9 table__left-row" scope="row">
                      {work.workTitle}
                    </td>
                    <td className="col-3 table__right-row" scope="row">
                      від {work.price}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
