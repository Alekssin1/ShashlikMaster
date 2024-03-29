import React, { useState, useEffect, useRef } from 'react';
import "../../styles/Menu/Catalogue.scss";
import "../../styles/Pagination.scss"
import { ReactComponent as Shashlik } from '../../assets/images/Menu/shashlik.svg';
import { ReactComponent as LiuliaKebab } from '../../assets/images/Menu/liulia-kebab.svg';
import { ReactComponent as Vegetables } from '../../assets/images/Menu/vegetables.svg';
import { ReactComponent as Sauces } from '../../assets/images/Menu/sauce.svg';
import { ReactComponent as Sadge } from '../../assets/images/Menu/pot-on-fire.svg';
import { ReactComponent as Floury } from '../../assets/images/Menu/khachapuri.svg';
import { ReactComponent as Drinks } from '../../assets/images/Menu/cocktail.svg';
import { ReactComponent as Sets } from '../../assets/images/Menu/set.svg';
import Design from "../../assets/images/Recommendation/product2.webp"
import VegetablesImage from "../../assets/images/Recommendation/productr.webp"
import SetImage from "../../assets/images/Recommendation/set.webp"
import CatalogueCard from './CatalogueCard';
import ProductPagination from '../UI/ProductPagination';


const items = [
  { name: 'Шашлик', icon: Shashlik },
  { name: 'Люля-кебаб', icon: LiuliaKebab },
  { name: 'Овочі', icon: Vegetables },
  { name: 'Соуси', icon: Sauces },
  { name: 'Садж', icon: Sadge },
  { name: 'Борошняне', icon: Floury },
  { name: 'Напої', icon: Drinks },
  { name: 'Набори', icon: Sets },
];

const catalogueItemsPages = [
  [
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
    { image: Design, title: 'Шашлик з телятини 100г', weight: '100 грн/100 г', price: 100 },
  ],
  [
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
    { image: VegetablesImage, title: 'Овочевий сет 1600г', weight: '650 грн/1600 г', price: 650 },
  ],
  [
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
    { image: SetImage, title: 'Сет на 10-12 персон 4400г', weight: '2400 грн/4400 г', price: 2400 },
  ]
]

function Catalogue() {
  const [currentPage, setCurrentPage] = useState(0); 
  const [highlightedItem, setHighlightedItem] = React.useState(null);
  const [catalogueItems, setCatalogueItems] = useState([]);
  const catalogueSectionRef = useRef(null);

  useEffect(() => {
    setCatalogueItems(catalogueItemsPages[currentPage]);
    catalogueSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  return (
    <div className='catalogue'>
      <aside className="catalogue__menu">
      <ul className="menu__list">
          {items.map((item, index) => (
            <li
              className="menu__item"
              key={index}
              onMouseEnter={() => setHighlightedItem(index)}
              onMouseLeave={() => setHighlightedItem(null)}
            >
              <div className="menu__unit">
                {["Шашлик", "Люля-кебаб", "Набори"].includes(item.name) ? (
                <item.icon
                  className="unit__icon"
                  style={{ stroke: highlightedItem === index ? "#a63d40" : "#FFF", fill: 'transparent' }}
                />
                ) : (
                  <item.icon
                    className="unit__icon"
                    style={{ fill: highlightedItem === index ? "#a63d40" : "#FFF" }}
                  />
                )}
                <span className="unit__name item-route">
                  <span>{item.name}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <div className="catalogue__section" ref={catalogueSectionRef}>
        <h1>Рекомендовані</h1>
        <div className="section__cards-grid">
          {catalogueItemsPages[currentPage].map((item, index) => (
            <CatalogueCard
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
        <ProductPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={catalogueItemsPages.length}
        />
      </div>
    </div>
  );
}

export default Catalogue;