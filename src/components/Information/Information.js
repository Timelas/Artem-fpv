import React from "react";
import "./Information.css";
import tyema from "../../images/tyema.jpg";
import cinewhoop from "../../images/cinewhoop.jpg";
import freestyle from "../../images/freestyle.jpg";
import forPrice from "../../images/forPrice.jpg";

function Information() {
  return (
    <section className="information">
      <h2 className="information__title">Информация</h2>
      <div className="information__grid">
        <div className="information__area information__area_topic_about">
          <img className="information__image" alt="фотография Артёма" src={tyema}></img>
          <div className="information__container">
            <div className="information__overlay">
              <p className="information__text">Меня зовут Артём. Съёмка на FPV для меня - не основной источник дохода, поэтому приоритетом в работе является креатив, создание такого материала,
                которым все останутся довольны.</p>
            </div>
          </div>
        </div>
        <div className="information__area information__area_topic_freestyle">
          <img className="information__image" alt="фотография коптера freestyle" src={freestyle}></img>
          <div className="information__container">
            <div className="information__overlay">
              <p className="information__text">FPV freestyle 5 - “классический” коптер для съемок. Быстрый и маневренный. Используется для съёмок на улице.</p>
            </div>
          </div>
        </div>
        <div className="information__area information__area_topic_cinewhoop">
          <img className="information__image" alt="фотография коптера Cinewhoop" src={cinewhoop}></img>
          <div className="information__container">
            <div className="information__overlay">
              <p className="information__text">Cinewhoop - коптер с защищенными пропеллерами, что позволяет летать близко к людям,
              а также внутри помещений. Создает более плавные и кинематографичные кадры.</p>
            </div>
          </div>
        </div>
        <div className="information__area information__area_topic_price">
          <img className="information__image" alt="фотография техники" src={forPrice}></img>
          <div className="information__container">
            <div className="information__overlay">
              <p className="information__text">Стоимость услуг составляет 5000 рублей в час. Выезд в пределах КАД - бесплатно.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;