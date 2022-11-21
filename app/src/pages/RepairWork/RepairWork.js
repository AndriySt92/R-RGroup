import React from 'react'
import {
  materials,
  repairImg1,
  repairImg2,
  repairImg3,
  repairImg4,
  repairImg5,
  repairImg6,
  repairImg7,
  repairImg8,
  repairImg9,
  repairImg10,
  repairImg11,
  repairImg12,
  repairWorksSlide1,
  repairWorksSlide2,
} from '../../assets'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkOrderSection } from '../../components/WorkOrderSection/WorkOrderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'

const worksListsData = [
  {
    title: 'Підлога',
    works: [
      'Стяжка підлоги',
      'Укладання плитки(з підрізкою та затиркою швів)',
      'Укладання ламінату',
      'Монтаж плінтуса',
      'Монтаж плінтуса з плитки',
    ],
  },
  {
    title: 'Стіни',
    works: [
      'Стіни комплексно: грунтування, армування, шпаклювання',
      'Вирізання та штукатурка шторб',
      'Оздоблення стін спрей-фактурою та фарбування',
      'Підготовка стін під фарбування',
      'Фарбування стін',
      'Виготовлення та фарбування укосів вікон',
      'Монтаж перфорованого кутника',
      'Укоси вхідних дверей',
      'Укладання плитки(з підрізкою та затиркою швів)',
      'Монтаж міжкімнатних дверей(комплексно)',
      'Монтаж підвіконня',
      'Короб гіпсокартонний для каналізації',
    ],
  },
  {
    title: 'Стеля',
    works: [
      'Стеля комплексно: шліфування, шпаклювання, фарбування',
      'Поклейка та фарбування багета',
      'Укладання ламінату',
      'Монтаж плінтуса',
    ],
  },
  {
    title: 'Електромонтажні роботи',
    works: [
      'Електроточка з монтажем коробки та підключення',
      'Монтаж розеток, вимикачів',
      'Монтаж світильників',
    ],
  },
  {
    title: 'Сантехнічні роботи',
    works: [
      'Розведення точок сантехніки',
      'Монтаж радіатора отоплення',
      'Фарбування газової труби',
      'Монтаж лючка ревізії',
      'Монтаж ванни',
      'Монтаж унітаза',
      'Мотаж рушникосушарки',
    ],
  },
  {
    title: 'Підсобні роботи',
    works: [
      'Закупка та доставка буд матеріалів',
      'Занесення буд матеріалів',
      'Винесення будівельного сміття',
      'Миття вікон',
      'Прибирання приміщень',
    ],
  },
]

const orderTypeData = {
  mainTitle: 'Типи замовлень ремонтних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'косметичний ремонт',
      works: [
        'Видалення Cтарих Шпалер',
        'Поклейка Нових Шпалер',
        'Установка/заміна Сантехніки',
        'Заміна/укладання Підлоги',
        'Заміна Розеток',
        'Утеплення Вікон/дверей',
        'Карнізи, Плінтуси',
      ],
      isTrend: false,
    },
    {
      title: 'Під ключ',
      subtitle: 'дизайнерський ремонт',
      works: [
        'Унікальний Дизайн-проект',
        'Авторський Нагляд',
        'Монтаж Демонтаж',
        'Електромонтажні Роботи',
        'Розводка Комунікацій',
        'Чорнові Роботи',
        'Монтаж Підлоги',
        'Чистова Обробка Стін',
        'Інсталяційні Системи',
        'Прибирання Приміщення',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'капітальний ремонт',
      works: [
        'Монтаж Демонтаж',
        'Електромонтажні Роботи',
        'Розводка комунікацій',
        'Підбір Матеріалів',
        'Чорнові Роботи',
        'Монтаж Підлоги/Плитки',
        'Чистова Обробка Стін',
        'Установка Сантехніки',
        'Прибирання Приміщення',
      ],
      isTrend: false,
    },
  ],
}

const faqData = [
  {
    id: 'One',
    question: 'Чи укладається офіційний договір?',
    answer:
      'Звичайно. Ми працюємо за офіційним договором і беремо на себе повну відповідальність за виконані роботи. Ми дорожимо своєю репутацією і намагаємося зробити все від нас залежне, щоб угода була максимально прозорою і безпечною для Вас.',
  },
  {
    id: 'Two',
    question: 'Які терміни виконання ремонту?',
    answer:
      'Це залежить від виду ремонту і складності дизайн-проекту. Косметичний ремонт може бути виконаний всього за 20-30 днів, дизайнерський - за 2-3 місяці.',
  },
  {
    id: 'Three',
    question: 'Як швидко ви можете приступити до виконання ремонту?',
    answer:
      'Як тільки підпишемо договір. Ми не вітаємо затримки, в тому числі і на початковому етапі співпраці. Приступаємо до роботи на протязі 2-3 днів.',
  },
  {
    id: 'Four',
    question: 'Кваліфіковані у вас співробітники?',
    answer:
      'Наші співробітники - професіонали своєї справи. Багато хто працює в своїй галузі 15 років і більше, за плечима у них по кілька десятків реалізованих проектів.',
  },
  {
    id: 'Fifth',
    question: 'Я можу бути впевнений(а), що не буде ніяких доплат в процесі ремонту?',
    answer:
      'Перед початком співпраці ми складаємо зрозумілу і прозорий кошторис, в якому відразу намагаємося врахувати всі можливі витрати. Звичайно, бувають винятки, коли замовник приймає рішення змінити щось по ходу робіт. Але, як правило, несподіваних сюрпризів у вигляді екстра платежів не виникає.',
  },
]

const galleryImages = [
  repairImg1,
  repairImg2,
  repairImg3,
  repairImg4,
  repairImg5,
  repairImg6,
  repairImg7,
  repairImg8,
  repairImg9,
  repairImg10,
  repairImg11,
  repairImg12,
]

const slideImages = [repairWorksSlide1, repairWorksSlide2]


const RepairWork = () => {
  return (
    <div className="repair_work">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12 order_type">
              <h2>Ремонтні роботи</h2>
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
        <section className="materials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Види робіт:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src={materials} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </section>
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default RepairWork