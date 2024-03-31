import React from 'react'
import { Element } from 'react-scroll';
import 'components/Landing/AboutUs/index.scss'
import ShashlikMaster from "assets/images/About/Shashlik_master.webp"
import AboutProduct from "assets/images/About/About_meat.webp"
import ThermalBox from "assets/images/About/Thermal Box.webp"
import AboutPrice from 'assets/images/About/Affordable_price.webp'
import AboutUsItem from 'components/UI/AboutUsItem'

const aboutItems = [
    {
      header: "В нашому шашлику лише {добірне} м’ясо",
      text: "Ми використовуємо лише {фермерське м'ясо}, ретельно відібране у перевірених постачальників. Ми співпрацюємо з фермами, які дбають про своїх тварин і годують їх якісними кормами. Завдяки цьому в нас {завжди є свіжі, ідеальні для наших страв продукти}, що робить наш приготований на мангалі шашлик смачним, соковитим та ароматним.",
      imageSrc: AboutProduct
    },
    {
      header: "{Перший смак} – завжди найкращий!",
      text: "Для нас важливо, щоб клієнт відчував початковий смак наших страв, як в закладі, саме тому ми використовуємо {термобокси} для упаковки готових замовлень. Завдяки термоізоляції {страви не втрачають своїх смакових якостей}, а також {залишатимуться гарячими} якнайдовше.",
      imageSrc: ThermalBox
    },
    {
        header: "Ми віримо, що {смачна їжа} має бути {доступна кожному}!",
        text: "Ми завжди хотіли, щоб смак наших страв могла оцінити, якомога більша кількість людей, завдяки прямим поставкам продуктів з ферми, без посередників, окрім найсвіжіших та найякісніших, наші продукти також мають демократичну ціну, а отже нам вдалось досягти мінімальної ціни за якісні та смачні страви.",
        imageSrc:AboutPrice
    }
  ];

function AboutUs() {
    return (
      <Element name="about-us" className='about-us'>
        <h1>
          <span style={{ borderBottom: '3px solid #a63d40' }}>ПР</span>О НАС
        </h1>
        <div className="about-us__content">
          <div className='about-us__grid-container'>
            <div className='about-us__text'>
                <span><span className='highlighted-span'>Шашлик Мастер</span>– це не просто доставка їжі. Це команда, яка щиро любить свою справу і знає, як зробити ваш день смачнішим! Вже понад 5 років ми готуємо для вас страви, вкладаючи в них душу та досконало відточуючи рецепти. За цей час ми перепробували безліч маринадів, і, нарешті, знайшли ідеальні поєднання спецій та інгредієнтів, які роблять наше м'ясо неймовірно соковитим, ароматним та апетитним.</span>
            </div>
            <div className='about-us__main-picture-container'>
                <img src={ShashlikMaster} alt="about-us__product-image" />
            </div>
          </div>
          {aboutItems.map((item, index) => (
            <AboutUsItem
              index={index}
              header={item.header}
              text={item.text}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </Element>
    );
  }
  
  export default AboutUs;