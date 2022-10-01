import React from 'react'
import {
  facade1,
  facade2,
  facade3,
  facade4,
  facade5,
  facade6,
  facade7,
  facade8,
  facade9,
  facade10,
  facade11,
  facade12,
  facade13,
  facade14,
  facadeWorksSlide1,
  facadeWorksSlide2,
  facadeWorksSlide3,
} from '../../assets'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'

const worksListsData = [
  {
    title: 'Види фасадних робіт',
    works: [
      'Обклеювання стін пінопластом (50 мм.)',
      'Обклеювання стін пінопластом (100 мм.)',
      'Утеплення стін мінеральною ватою (50 мм)',
      'Обклеювання стін мінеральною ватою (80 мм.)',
      'Обклеювання стін мінеральною ватою (100 мм.)',
      'Виконання армуючого шару ( склосітка, 2 клейові шари )',
      'Облаштування відкосів з пінопласту',
      'Облаштування відкосів з мінеральної вати',
      'Декоративна штукатурка (короїд, камінчик)',
      'Фарбування стін',
      'Фарбування стін структурною фарбою',
      'Облаштування пілонів, фризів, колон',
    ],
  },
  {
    title: 'Сумарна ціна під ключ (ваш матеріал)',
    works: [
      'Фасад (мінвата 50 мм)',
      'Фасад (мінвата 80 мм)',
      'Фасад (мінвата 100 мм)',
      'Фасад (пінопласт 50 мм)',
      'Фасад (пінопласт 100 мм)',
    ],
  },
  {
    title: 'Сумарна ціна під ключ (наш матеріал)',
    works: [
      'Робота і матеріали фасада (50мм. Пінопласт-25 (економ), суміші і фарби MajsterPol)',
      'Робота і матеріали фасада (100мм. Пінопласт-25 (економ), суміші і фарби MajsterPol)',
      'Робота і матеріали фасада (50мм. Мінвата, суміші і фарби MajsterPol)',
      'Робота і матеріали фасада (100мм. Мінвата, суміші і фарби MajsterPol)',
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
    question: 'Чи можна наносити клейові і фінішні суміші без використання утеплювача?',
    answer:
      'Звичайно можна, якщо не проводиться утеплення будинку, а тільки штукатуриться фасад базовими клейовими сумішами і декоративною штукатуркою. Тобто, коли вирішується питання не в утепленні, а тільки в декоративній обробці фасаду.',
  },
  {
    id: 'Two',
    question: 'При якій температурі повітря можна монтувати фасад з тонким штукатурним шаром?',
    answer:
      'Рекомендується проводити роботи при середньодобовій температурі від +5 ° С до +30 ° С і швидкості вітру менше 10 м / с. При проведенні монтажних робіт взимку необхідно закрити будівельні ліси одним або двома шарами плівки по всьому периметру і встановити теплові гармати для підтримки позитивної температури не нижче +5 ° С.',
  },
]

const galleryImages = [
  facade1,
  facade2,
  facade3,
  facade4,
  facade5,
  facade6,
  facade7,
  facade8,
  facade9,
  facade10,
  facade11,
  facade12,
  facade13,
  facade14,
]

const slideImages = [facadeWorksSlide1, facadeWorksSlide2, facadeWorksSlide3]


export const FacadeWorks = () => {
  return (
    <div className="facade_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Фасадні роботи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <OrderTypeSection
          title={orderTypeData.mainTitle}
          content={orderTypeData.ordersTypeList}
        />
        <WorkOrderSection />
        <Gallery images={galleryImages} />
        <FaqSection faqData={faqData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}
