import React from 'react'
import {
  plaster1,
  plaster2,
  plaster3,
  plaster4,
  plaster5,
  plaster6,
  plaster7,
  plaster8,
  plasterWorksSlide1,
  plasterWorksSlide2,
  plasterWorksSlide3
} from '../../assets'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'

const worksListsData = [
  {
    title: 'Вид машиною штукатурки',
    works: [
      'Машинна штукатурка стін(робота)',
      'Машинна штукатурка стелі(робота)',
      'Гіпсова машинна штукатурка(робота)',
      'Машинна штукатурка укосів(робота)',
    ],
  },
]

const orderTypeData = {
  mainTitle: 'Типи замовлень штукатурних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'замовлення від 150 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 400 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 900 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
  ],
}

const faqData = [
  {
    id: 'One',
    question: 'Що необхідно для якісного виконання штукатурних робіт?',
    answer:
      'Щоб робота була виконана якісно, потрібна наявність певного набору інструментів, правильно підготовлені штукатурні розчини та дотримання техніки їх нанесення та обробки.',
  },
  {
    id: 'Two',
    question: 'Які існують склади розчинів?',
    answer:
      'Як правило, для внутрішньої штукатурки застосовується гіпсові і вапняні розчини. Цементні і теплоізоляційні розчини більше підходять для зовнішньої обробки, але в деяких випадках використовуються і для внутрішньої обробки.',
  },
  {
    id: 'Three',
    question: 'Коли застосовуються той чи інший розчин?',
    answer:
      'Вапняні та гіпсові розчини застосовуються, як правило, в приміщеннях з бетонними або цегляними стінами та перекриттями, де вологість повітря становить не більше 60%. Цементні і цементно-вапняні розчини служать для штукатурення приміщень з підвищеною вологістю, таких як ванні кімнати, підвальні приміщення і гаражі.',
  },
  {
    id: 'Four',
    question: 'Коли можна починати штукатурні роботи?',
    answer:
      'Їх починають після того як влаштовані перекриття, встановлені перегородки, коробки вікон і дверей, зведені каміни і печі в сухому приміщень при температурі повітря не нижче +5.',
  },
  {
    id: 'Fifth',
    question: 'Скільки потрібно часу для повного висихання штукатурки?',
    answer:
      'Залежно від товщини штукатурного шару, погодних умов і провітрюваності приміщення, в середньому від 5 до 20 днів.',
  },
  {
    id: 'Six',
    question: 'Чи можна виконувати штукатурку взимку?',
    answer:
      'Можна, в добре опалювальному приміщенні або за відсутність такого встановити повітряні обігрівачі, теплові гармати та підтримувати температуру від +5 до +15 градусів.',
  },
]

const galleryImages = [
  plaster1,
  plaster2,
  plaster3,
  plaster4,
  plaster5,
  plaster6,
  plaster7,
  plaster8,
]

const slideImages = [plasterWorksSlide1, plasterWorksSlide2, plasterWorksSlide3]

export const PlasterWorks = () => {
  return (
    <div className="plaster_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Штукатурні роботи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <WorkStepsSection />
        <OrderTypeSection
          title={orderTypeData.mainTitle}
          content={orderTypeData.ordersTypeList}
        />
        <Gallery images={galleryImages} />
        <FaqSection faqData={faqData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}
