import React from 'react'
import './pavingWorks.scss'
import {
  download,
  eye,
  tools,
  estimate,
  phone,
} from '../../assets'
import { WorkStepsSection } from '../../components/WorkStepsSection/WorkStepsSection'
import { Gallery } from '../../components/Gallery/Gallery'

const popularOrdersItems = [
  { title: 'Укладання Граніту "Колота Шашка"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/popular-orders-1-min_bgdeyf.jpg" },
  { title: 'Укладання ФЕМ "Старе місто"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/popular-orders-2-min_ki6gfq.jpg" },
  { title: 'Укладання ФЕМ "Креатив"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/popular-orders-3-min_ez1jv8.jpg" },
  { title: 'Укладання ФЕМ "Ромб"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/popular-orders-4-min_jzpruh.jpg" },
  { title: 'Укладання ФЕМ "Паркет"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/popular-orders-5-min_s8wd23.jpg" },
  { title: 'Укладання ФЕМ "Венеція"', img: "https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/popular-orders-6-min_lqzgir.jpg" },
]

const pavingWorksGallery = [
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-1-min_iidcil.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-2-min_jipwig.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-3-min_oryrq0.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-4-min_e3q4aa.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670065277/RRGroup/images/pavingWorks/paving-works-5_utvdb9.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064774/RRGroup/images/pavingWorks/paving-works-6-min_fdsig9.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-7-min_tm0qsd.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-8-min_euuani.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-9-min_cqm0te.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-10-min_cgxokh.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-11-min_vwmjtj.jpg",
  "https://res.cloudinary.com/drcptrml4/image/upload/v1670064773/RRGroup/images/pavingWorks/paving-works-12-min_fcoxad.jpg",
]

const PavingWorks = () => {
  return (
    <div className="paving_works">
      <div className="container">
        <div className="page_title">
          <div className="row">
            <div className="col-12">
              <h2>Укладання бруківки</h2>
            </div>
          </div>
        </div>
        <section className="paving_works_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img_wrap">
                  <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/paving-works-top-min_areuhh.jpg" alt="" className="img-fluid w-100" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="order_works">
                  <div
                    className="order_btn bg_none"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal">
                    <h6>Замовити комплекс робіт</h6>
                  </div>
                  <div className="order_btn" data-bs-target="#exampleModal" data-bs-toggle="modal">
                    <h6>Підготовка основи</h6>
                  </div>
                  <div className="order_btn" data-bs-target="#exampleModal" data-bs-toggle="modal">
                    <h6>Виставлення бордюрів</h6>
                  </div>
                  <div className="order_btn" data-bs-target="#exampleModal" data-bs-toggle="modal">
                    <h6>Укладання плитки</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WorkStepsSection />
        <section className="pricing">
          <div className="row">
            <div className="col-12">
              <h3>Прайс на укладання бруківки:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pricing-left">
              <div className="mt-4">
                <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064771/RRGroup/images/pavingWorks/paving-works-pricing-min_hfcnz7.jpg" alt="" />
              </div>
              <a className="load_btn">
                <img src={download} alt="" />
                <span>Завантажити прайс</span>
              </a>
            </div>
            <div className="col-md-6 pricing-right">
              <div>
                <h4>Ми гарантуємо:</h4>
                <ul>
                  <li>- Швидкий розрахунок за вашим ескізом;</li>
                  <li>- Безкоштовну адаптацію проєкту на підставі замірів;</li>
                  <li>- Оплату за фактом виконаної роботи, поетапно;</li>
                  <li>- Високу кваліфікацію і культуру виконання робіт;</li>
                  <li>- Ми робимо роботу під ключ на 100%;</li>
                  <li>- В нас краща ціна на ринку регіону</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="get_free">
          <div className="row">
            <div className="col-12">
              <h3>Отримай безкоштовно:</h3>
            </div>
          </div>
          <div className="row get_free_items">
            <div className="col-lg-4">
              <div className="get_free_item">
                <img src={tools} alt="" />
                <span>Виїзд спеціаліста на об’єкт для замірів</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="get_free_item">
                <img src={estimate} alt="" />
                <span>Складання кошторису на роботу та матеріали</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="get_free_item">
                <img src={phone} alt="" />
                <span>Консультація з підбору плитки та матеріалів</span>
              </div>
            </div>
          </div>
        </section>
        <section className="popular_orders">
          <div className="row">
            <div className="col-12">
              <h3>Популярні замовлення:</h3>
            </div>
          </div>
          <div className="popular_orders_items">
            {popularOrdersItems.map((order) => (
              <div key={order.title} className="popular_orders_item mb-4">
                <div className="orders_item_inner">
                  <h5>{order.title}</h5>
                  <div className="img_wrap mb-2 mt-2">
                    <img src={order.img} alt="" />
                  </div>
                  <button data-bs-target="#exampleModal" data-bs-toggle="modal">
                    Замовити
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="catalog">
          <div className="row">
            <div className="col-12 mb-3">
              <h3>Прайс на укладання бруківки:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 catalog_left">
              <div>
                <img src="https://res.cloudinary.com/drcptrml4/image/upload/v1670064772/RRGroup/images/pavingWorks/catalog-img-min_qzocfa.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 catalog_right">
              <div>
                <p>
                  Каталог має величезний вибір форм і кольорів тротуарної плитки ТМ Золотий Мандарин
                  дає можливість розробити і реалізувати самий хитромудрий дизайн, що задовольнить
                  вимоги вишуканих ландшафтних дизайнерів і замовників зі смаком.
                </p>
                <a className="load_btn catalog_btn">
                  <div>
                    <img src={eye} alt="" /> <span>PDF</span>
                  </div>
                  <span>Дивитись каталог</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Gallery images={pavingWorksGallery} />
      </div>
    </div>
  )
}

export default PavingWorks
