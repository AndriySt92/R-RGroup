import React from 'react'
import { decPlaster1, decPlaster2, decPlaster3, decPlaster4, decPlaster5, decPlaster6, decPlaster7, decPlaster8, decPlaster9, decPlaster10, decPlaster11, decPlaster12, decPlaster13, decPlaster14, decPlaster15, decPlaster16, decPlasterSlide1, decPlasterSlide2, decPlasterSlide3, decPlasterSlide4 } from '../../assets'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'

const worksListsData = [
  {
    title: 'Види декоративної штукатурки',
    works: [
      'Марсельський віск',
      'Сахара',
      'Марморіно',
      'Отточенто',
      'Ефект цегли',
      'Ефект корозії',
      'Ефект бетону',
      'Ефект скали',
      'Інші авторські ефекти',
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
      subtitle: 'замовлення від 40 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Виготовлення Зразків',
        'Підготовка Cтін',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 90 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Виготовлення Зразків',
        'Підготовка Cтін',
        'Нанесення Штукатурки',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 280 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Виготовлення Зразків',
        'Підготовка Cтін',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
  ],
}

const faqData = [
  {
    id: 'One',
    question: 'Чи можна мити декоративне покриття?',
    answer:
      'Так. Всі декоративні покриття можна протирати вологою ганчіркою, протирати забруднення слабким мильним розчином. Покриті воском чи лаками покриття можна відмивати із зусиллям, тому що створюється додаткова захисна плівка.',
  },
  {
    id: 'Two',
    question: "Чи шкідлива для здоров'я декоративна штукатурка?",
    answer:
      'Ні. Матеріали зроблені з поліакрилатів та поліметакрілов, які розбавляються водою.При нанесенні вони не пахнуть і не виділяють шкідливих речовин, після висихання і повної полімеризації абсолютно безпечні. ',
  },
  {
    id: 'Three',
    question: "Чи можна наносити декоративну штукатурку в приміщеннях з підвищеною вологістю?",
    answer:
      'Так. Можна і в ванній, і на фасадах, і в сирих приміщеннях. За допомогою компонентів, що входять до складу штукатурок та захисних лаків, восків можна створити покриття, абсолютно захищене від води і зовнішніх суворих кліматичних умов.',
  },
  {
    id: 'Four',
    question: "Які підготовки стін потрібно проводити перед декоративною штукатуркою?",
    answer:
      'Все буде залежати від обраної фактури і матеріалу. Більш гладкі покриття, такі наприклад, як мокрий шовк, вимагають ретельної підготовки, фактурні ж, навпаки, дозволяють заощадити на фінішних шарах шпаклівки і закрити невеликі нерівності стіни, але не варто думати, що декоративна штукатурка рівняє стіни.',
  },
  {
    id: 'Firth',
    question: "Чи можна переробити та чи легко ремонтуються декоративні покриття?",
    answer:
      'Як відомо, в малярно-штукатурних роботах немає нічого неможливого, переробити та перефарбувати можна будь-які покриття, але із застосуванням мінімальних підготовчих заходів. До ремонту придатні всі покриття, правда штукатурки, вкриті воском або лаками, потребуватимуть додаткових зусиль.',
  },
]

const galleryImages = [decPlaster1, decPlaster2, decPlaster3, decPlaster4, decPlaster5, decPlaster6, decPlaster7, decPlaster8, decPlaster9, decPlaster10, decPlaster11, decPlaster12, decPlaster13, decPlaster14, decPlaster15, decPlaster16]

const slideImages = [decPlasterSlide1, decPlasterSlide2, decPlasterSlide3, decPlasterSlide4]


export const DecorativePlaster = () => {
  return (
    <div className="decorative_plaster">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Декоративна штукатурка</h2>
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
