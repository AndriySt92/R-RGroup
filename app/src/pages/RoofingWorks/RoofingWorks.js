import React from 'react'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { OrderTypeSection } from '../../components/OrderTypeSection/OrderTypeSection'
import { Gallery } from '../../components/Gallery/Gallery'
import { TopSliderSection } from '../../components/TopSliderSection/TopSliderSection'
import { WorksListsSection } from '../../components/WorksListsSection/WorksListsSection'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'

const worksListsData = [
  {
    title: 'Монтаж покрівлі, робота',
    works: ['Металочерепиця', 'Забудова', 'Kомпозитна', "М'яка покрівля, (катепал)"],
  },
]

const orderTypeData = {
  mainTitle: 'Типи замовлень штукатурних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'замовлення від 100 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 190 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 450 м2',
      works: ['Консультація', 'Виїзд Спеціаліста', 'Утеплення', 'Гідроізоляція', 'Монтаж Покрівлі'],
      isTrend: false,
    },
  ],
}

const faqData = [
  {
    id: 'One',
    question: 'В яку пору року краще всього почати установлення покрівлі?',
    answer:
      'Більшість монтажних робіт виконується влітку, відповідно, на літо – це час роботи із завантаження проектів. Це може призвести до високої складності за погодженням вашого графіка з графіком підрядника з монтажу. Однак не існує жодних технічних обмежень на встановлення металевої покрівлі в будь-яку іншу пору року. Тому ви можете запланувати встановлення покрівлі на потрібний для вас час.',
  },
  {
    id: 'Two',
    question: 'Чи необхідно використовувати шар гідроізоляції?',
    answer: 'Компанія RRGroup завжди рекомендує використовувати шар гідроізоляції.',
  },
  {
    id: 'Three',
    question: 'Скільки часу зазвичай займає установка покрівлі?',
    answer:
      'Установка даху зазвичай займає від двох днів до декількох тижнів, в залежності від масштабу проекту.',
  },
]

const galleryImages = [
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-1-min_dgsgfb.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-2-min_c48jmm.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980952/RRGroup/images/roofingWorks/roofing-3-min_juxx6i.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980950/RRGroup/images/roofingWorks/roofing-4-min_efngfw.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-5-min_tefvx1.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980950/RRGroup/images/roofingWorks/roofing-6-min_ihjkqa.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980950/RRGroup/images/roofingWorks/roofing-7-min_axvcgr.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980950/RRGroup/images/roofingWorks/roofing-8-min_uweg8e.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980950/RRGroup/images/roofingWorks/roofing-9-min_digfyy.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-10-min_lohiib.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-11-min_mmrqzt.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-12-min_bmqofo.jpg",
]

const slideImages = ["https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-works-slide-2-min_e7jx01.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-works-slide-3-min_sdzuxu.jpg", "https://res.cloudinary.com/drcptrml4/image/upload/v1669980951/RRGroup/images/roofingWorks/roofing-works-slide-1-min_bynmyr.jpg"]


const RoofingWorks = () => {
  return (
    <div className="roofing_works">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Покрівельні роботи</h2>
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

export default RoofingWorks
