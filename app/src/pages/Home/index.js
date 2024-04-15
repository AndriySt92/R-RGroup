import React, { useEffect, useState } from 'react'
import './style.scss'
import { AutoplaySlider, Accordion, OrderType, Loader, Projects, Title } from '../../components'
import { getRandomProjects } from '../../utils/getRandomProjects'
import Slider from 'react-slick'
import {
  accordionData,
  autoplaySliderData,
  orderTypeData,
  workOrderImages,
  settingsSlider as settings,
} from '../../contants/home'

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(getRandomProjects(4))
  }, [])

  if (!projects.length) {
    return <Loader />
  }

  return (
    <div className="home">
      <div className="top_autoplay_slider">
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/drcptrml4/image/upload/v1670420599/RRGroup/images/home/home-slider-1-min_ba9mwr.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drcptrml4/image/upload/v1670420761/RRGroup/images/home/home-slider-2-min_xdccgy.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </Slider>
      </div>
      <div className="container">
        <Title
          classes="page_title home_title"
          title="Будівництво під ключ"
          subtitle="Будуємо будинки та навіть більше."
        />
        <OrderType title={orderTypeData.mainTitle} content={orderTypeData.ordersTypeList} />
        <Projects
          title="Оберіть проект будинку"
          subtitle="Безкоштовно під ключ"
          projects={projects}
          withButton
        />
        <AutoplaySlider autoplaySliderData={autoplaySliderData} />
        <Accordion accordionData={accordionData} />
        <section className="work_order">
          <div className="row">
            <div className="col-12  work_order_title">
              <h3 className="mb-4">Як ми працюємо:</h3>
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

export default Home
