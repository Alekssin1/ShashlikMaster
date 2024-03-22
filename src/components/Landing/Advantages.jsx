import React from 'react'
import '../../styles/Advantages.scss'
import { ReactComponent as Skewer} from '../../assets/images/Advantages/skewer.svg';
import { ReactComponent as DeliveryTime} from '../../assets/images/Advantages/delivery-time.svg';
import { ReactComponent as Rating} from '../../assets/images/Advantages/rating.svg';
import { ReactComponent as GoodReview} from '../../assets/images/Advantages/good-review.svg';
import { ReactComponent as NewClient} from '../../assets/images/Advantages/New client.svg';
import AdvantageCard from '../UI/AdvantageCard';

import { ReactComponent as  ChilliPepperBG} from "../../assets/images/Advantages/chili-pepper.svg"
import { ReactComponent as ShashlikBG} from "../../assets/images/Advantages/shashlik.svg"
import { ReactComponent as RibsBG} from "../../assets/images/Advantages/ribs.svg"
import { ReactComponent as TomatoBG} from "../../assets/images/Advantages/tomato.svg"
import { ReactComponent as SteakBG} from "../../assets/images/Advantages/steak.svg"


function Advantages() {
  return (
    <div className='advantages'>
      <div className="advantages__content">
        <h1>Швидко, Доступно, Смачно.</h1>
        <div className='advantages__grid-container'>
          <AdvantageCard className="advantages__item"
            picture={<Skewer />}
            header="15"
            spanText="видів шашлику"
          />
          <AdvantageCard className="advantages__item"
            picture={<Rating />}
            header="4.4"
            spanText="середня оцінка за 400 відгуків"
          />
          <AdvantageCard className="advantages__item"
            picture={<NewClient />}
            header="96%"
            spanText="нових клієнтів стають постійними"
          />
          <AdvantageCard className="advantages__item"
            picture={<DeliveryTime />}
            header="60-120"
            spanText="хвилин займає доставка"
          />
          <AdvantageCard className="advantages__item"
            picture={<GoodReview />}
            header="250+"
            spanText="задоволених клієнтів"
          />
        </div>
        <ChilliPepperBG className="advantages__pepper" />
        <ShashlikBG className="advantages__shashlik" />
        <RibsBG className="advantages__ribs"/>
        <TomatoBG className= "advantages__tomato" />
        <SteakBG className= "advantages__steak" />
        </div>  
    </div>
  )
}

export default Advantages
