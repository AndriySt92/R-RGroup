import React from 'react'

export const ProjectPlan = ({ title, planItems }) => {
  return (
    <section className="project_plan">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">{title}</h3>
          <ul className="mb-4 ml-4">
            {planItems.map((item) => (
              <li key={item} className="p-1">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            У будь-який готовий проект можна внести зміни. Зміна кольорів фасадів, перегородок та
            інші дрібні зміни, які не впливають на несучі конструкції - безкоштовно. Зміни, що
            стосуються несучих конструкцій - за невелику доплату. При внесенні платних змін або
            індивідуальному проектуванні - аванс 30%.
          </p>
        </div>
      </div>
    </section>
  )
}
