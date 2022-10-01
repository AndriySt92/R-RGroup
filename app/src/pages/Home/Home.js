import React, { useEffect, useState } from 'react'
import './home.scss'
import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
  homeSlider6,
  homeTopSlider1,
  homeTopSlider2,
  orderImg1,
  orderImg2,
  orderImg3,
  workOrder1,
  workOrder2,
  workOrder3,
  workOrder4,
  workOrder5,
  workOrder6,
} from '../../assets'
import { AutoplaySlider } from '../../components/AutoplaySlider/AutoplaySlider'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { getRandomProjects } from '../../utils/getRandomProjects'
import { Loader } from '../../components/Loader/Loader'
import { Projects } from '../../components/Projects/Projects'
import Slider from 'react-slick'

const faqData = [
  {
    id: 'One',
    question: 'Чому краще розробити проект, ніж використовувати типовий?',
    answer:
      'При розробці проекту для максимальної функціональності враховуються багато факторів: розташування будинку на ділянці, додаткові споруди (гараж, лазня і т.д.), освітленість сонцем житлових і нежитлових кімнат протягом дня, кількість мешканців, спосіб життя, захоплення і т.д.',
  },
  {
    id: 'Two',
    question: 'З чого краще будувати будинок?',
    answer:
      'На це питання відповісти однозначно складно, тому що технологій і матеріалів будівництва дуже багато. На вибір впливають такі чинники як: бюджет, призначення будинку (приміський або для постійного проживання), кліматичні умови, зовнішній вигляд і т.д. У більшості випадків в нашому регіоні використовують цеглу, керамоблок і піно / газоблок.',
  },
  {
    id: 'Three',
    question: 'Які гарантії ви даєте по закінченню будівництва?',
    answer:
      "На всі будівельно-монтажні роботи ми даємо гарантію 5 років, що є невід'ємною умовою договору. Також у нас є тех.підтримка під час експлуатації будинку.",
  },
  {
    id: 'Four',
    question: 'Як я можу проконтролювати якість робіт?',
    answer:
      'Контролю якості робіт ми приділяємо велику увагу. Крім виконроба, який має вищу будівельну освіту, контроль виконує інспектор технагляду. На всіх етапах будівництва ми виробляємо фото і відео фіксацію прихованих робіт, що дозволяє клієнту бути впевненим в якості робіт. Так само Ви можете запросити стороннього експерта або інженера для контролю якості робіт.',
  },
  {
    id: 'Fifth',
    question: 'Наскільки у вас професійні будівельники?',
    answer:
      'В нашій команді працюють тільки професійні будівельники з великим досвідом роботи: бетонники, муляри, покрівельники, електрики, сантехніки, будівельники.',
  },
  {
    id: 'Six',
    question: 'Хто займається закупівлею будматеріалів?',
    answer:
      'Закупівлею будматеріалів, доставкою, розвантаженням і т.д займаємося ми. Попередньо узгоджуємо зразки з Вами. Ви можете закуповувати матеріал самі.',
  },
  {
    id: 'Seven',
    question: 'Чи не буде ціна рости в процесі будівництва?',
    answer:
      'Вартість робіт і матеріалів суворо фіксується в детальному кошторисі та прописується в договорі. Кошторисний розрахунок проводиться відповідно до проекту.',
  },
]

const orderTypeData = {
  mainTitle: 'Типи замовлень будівництва будинків у нас',
  ordersTypeList: [
    {
      title: 'Економне',
      subtitle: '«Коробка»',
      imgSrc: orderImg1,
      works: ['Фундамент', 'Стіни та перегородки', 'Покрівля', 'Віконні та дверні блоки'],
      isTrend: false,
    },
    {
      title: 'Топове',
      subtitle: '«Все під ключ»',
      imgSrc: orderImg2,
      works: [
        'Фундамент',
        'Стіни та перегородки',
        'Покрівля',
        'Віконні та дверні блоки',
        'Стяжка підлоги',
        'Штукатурка та шпаклівка',
        'Опалення та водопровід',
        'Електромонтажні роботи',
        'Проклейка шпалер',
        'Фарбування стін та стель',
        'Укладання плитки',
        'Ламінат та плінтуса',
        'Міжкімнатні двері',
        'Електрофурнітура та сантехніка',
      ],
      isTrend: true,
    },
    {
      title: 'Базове',
      subtitle: '«Під чистову обробку»',
      imgSrc: orderImg3,
      works: [
        'Фундамент',
        'Стіни та перегородки',
        'Покрівля',
        'Віконні та дверні блоки',
        'Стяжка підлоги',
        'Штукатурка та шпаклівка',
        'Опалення та водопровід',
        'Електромонтажні роботи',
      ],
      isTrend: false,
    },
  ],
}

const autoplaySliderData = [
  { imgSrc: homeSlider1, title: 'Керамоблок 2НФ' },
  { imgSrc: homeSlider2, title: 'Керамзітні блоки' },
  { imgSrc: homeSlider3, title: 'Карказ' },
  { imgSrc: homeSlider4, title: 'Цегла' },
  { imgSrc: homeSlider5, title: 'Газоблок' },
  { imgSrc: homeSlider6, title: 'Опалубка' },
]

const workOrderImages = [workOrder1, workOrder2, workOrder3, workOrder4, workOrder5, workOrder6]

export const Home = () => {
  const [projects, setProjects] = useState([])

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    touchMove: false,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
  }

  useEffect(() => {
    if (projects.length === 4) {
      return
    }
    setProjects(getRandomProjects(4))
  }, [])

  if (!projects.length === 4) {
    return <Loader />
  }

  return (
    <div className="home">
      <div className='top_autoplay_slider'>
        <Slider {...settings}>
          <div>
            <img src={homeTopSlider1} className="d-block w-100" alt="..." />
          </div>
          <div>
            <img src={homeTopSlider2} className="d-block w-100" alt="..." />
          </div>
        </Slider>
      </div>
      <div className="container">
        <div className="page_title home_title">
          <div className="row">
            <div className="col-12 order_type">
              <h2>Будівництво під ключ</h2>
              <p className="lead">Будуємо будинки і навіть більше.</p>
            </div>
          </div>
        </div>
        <OrderTypeSection title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <Projects
          title="Оберіть проект будинку"
          subtitle="Безкоштовно під ключ"
          projects={projects}
          withButton
        />
        <AutoplaySlider autoplaySliderData={autoplaySliderData} />
        <FaqSection faqData={faqData} />
        <section className="work_order">
          <div className="row">
            <div className="col-12  work_order_title">
              <h3>Як ми працюємо:</h3>
              <p className="mb-5">
                Щоб скористатися послугами компанії <b>«R&Rgroup»</b>, вам необхідно зв'язатися з
                нами за номером <b>+380 (96) 112-112-6</b> або <b>+380 (67) 112-112-6</b>. Ми
                узгодимо час, для зустрічі з вами і виїзду нашого фахівця на об'єкт. На підставі
                отриманих відомостей і переданих нам копій будівельних креслень (та іншої
                будівельної документації) проводиться фінансовий розрахунок будівельних робіт. Після
                цього починається процес узгодження умов і підписання договору. Уклавши договір, ми
                приступаємо до будівництва об'єкта. Завершальним етапом наших взаємин є підписання
                остаточного акту виконаних робіт після приймання побудованого об'єкта.
              </p>
            </div>
          </div>
          <div className="row work_order_items text-center">
            {workOrderImages.map((img) => (
              <div key={img} className="work_order_item col-sm-6 col-md-4 col-lg-2 mb-4">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
