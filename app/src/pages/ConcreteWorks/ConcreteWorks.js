import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'

const worksListsData = [
  {
    title: 'Монолітні роботи',
    works: [
      'Улаштування монолітного ж/б перекриття (бетонування+опалубка+армування)',
      'Улаштування бетонної підготовки (50мм)',
      'Улаштування фундаментної плити/підстави підстави стрічкового фундаменту (бетонування+опалубка+армування)',
      'Улаштування стін підвалу/стрічкового фундаменту (бетонування+опалубка+армування)',
      'Улаштування моналітних ж/б паль діаметром до 200 мм і глибиною до 2000мм (бетонування+опалубка+армування)',
      'Улаштування моналітних ж/б паль діаметром понад 200мм і глибиной понад 2000мм (бетонування+опалубка+армування)',
      'Улаштування фундаменту колон/ростверків (бетонування+опалубка+армування)',
      'Улаштування моналітної ж/б плити підлоги (бетонування+опалубка+армування) 100-150мм',
      'Улаштування моналітних ж/б сходів (бетонування+опалубка+армування)',
      'Улаштування моналітних ж/б колон (бетонування+опалубка+армування)',
      'Улаштування моналітних ж/б балок (бетонування+опалубка+армування)',
      'Улаштування монолітного фундаменту котеджу, огорожі і т. д. (Подвійна опалубка, бетон товщиною до 0,4 м)',
      'Пристрій монолітного фундаменту котеджу, огорожі і т. д. (Подвійна опалубка, бетон товщиною від 0,4 до 0,7 м)',
      'Установка монолітного бетонного фундаменту під колони, з установки опалубки до 3 м',
      'Улаштування монолітних фундаментних плоских плит з виготовленням арматурного каркасу та установки опалубки',
      'Улаштування дрібних монолітних залізобетонних ростверків та подушок фундаментів з укладанням і в\'їхав язкою арматури, складанням і розбиранням опалубки і приготування бетону вручну',
      'Улаштування стрічкових фундаментів і стін підвалів з бетонних блоків з приготуванням розчину і зборкою-розбиранням опалубки',
      'Улаштування стрічкового фундаменту: глибина закладення від 0,5 м під піщану подушку (підсипку)',
      'Пристрій монолітних майданчиків різного призначення (у їзні майданчики, вимощення, доріжки) товщина бетону до 0,2 м',
      'Бетонування монолітних чаш басейнів та невеликих купелей (товщина стінки від 0,2 до 0,4 м)',
      'Посилення фундаменту та інших будівельних конструкцій методом бетонної підливи',
      'Бетонування парканів (бетонування стовпчиків, цоколя)',
      'Щебенево-піщана підготовка',
      'Земляні роботи, розробка грунту',
    ],
  },
]

const faqData = [
  {
    id: 'One',
    question: 'Швидкість виконання робіт',
    answer:
      'Монолітна технологія дозволяє пришвидшити зведення будівель в 1.5-2 рази в порівнянні з іншими способами.',
  },
  {
    id: 'Two',
    question: 'Міцність і довговічність',
    answer:
      'Термін експлуатації більшості монолітних будівель перевищує півтора століття. Не дивно, що моноліт вибирається в якості основної технології при будівництві метрополітенів, зведенні космодромів, військових та інших стратегічних об\'єктів.Моноліти також мають підвищену сейсмостійкість, що дозволяє їм витримувати коливання земної кори з семибальною амплітудою.',
  },
  {
    id: 'Three',
    question: 'Відсутність швів та стиків',
    answer:
      'Мінімум будівельних швів зумовлює високий рівень міцності. Якщо під час експлуатації житла, наприклад, труба почне протікати, вода не потрапить в інші приміщення. Це зумовлено цілісністю конструкції. Монолітне житло має високий рівень теплоізоляції. Побутовий шум теж практично нечутний.',
  },
  {
    id: 'Four',
    question: 'Економія на внутрішній обробці приміщень',
    answer:
      'Поверхня монолітних стін є досить рівною (при застосуванні промислової опалубки), що дозволяє не витрачати час і гроші на їх професійне вирівнювання.',
  },
  {
    id: 'Fifth',
    question: 'Індивідуальний дизайн',
    answer:
      'Завдяки монолітній технології, будинок може мати індивідуальний дизайн. Все обмежується тільки сміливістю архітектурного задуму і базовими будівельними нормативами. Планування будинку може бути абсолютно вільним, оскільки функції несучих конструкцій при монолітній технології виконують зовнішні стіни, а всередині - колони, тому залишається широкий простір для дизайнерсько-інтер\'єрної творчості.',
  }
]

const galaryImages = ["https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-1-min_qvuqa2.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-2-min_dpltih.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980206/RRGroup/images/concreteWorks/concrete-3-min_f59ves.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-4-min_l4vogu.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-5-min_exbmls.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-6-min_dqx4qb.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-7-min_gv4juu.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980205/RRGroup/images/concreteWorks/concrete-8-min_ftdazm.jpg"]

const slideImages = ["https://res.cloudinary.com/drcptrml4/image/upload/v1669979975/RRGroup/images/concreteWorks/services-7-min_ygcqyy.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669979976/RRGroup/images/concreteWorks/tip-title-2-min_jhmumr.jpg"]


const ConcreteWorks = () => {
  return (
    <div className="concrete_works">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Монолітні роботи: фундамент, перекриття, бетонні сходи</h2>
            </div>
          </div>
        </div>
        <TopSliderSection slideImages={slideImages} />
        <WorkStepsSection />
        <Gallery images={galaryImages} />
        <FaqSection faqData={faqData} />
        <WorksListsSection worksListsData={worksListsData} />
      </div>
    </div>
  )
}

export default ConcreteWorks
