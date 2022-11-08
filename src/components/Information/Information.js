import React from "react";
import "./Information.css";
import fpv1 from "../../images/dron1.jpg";

function Information() {
  return (
    <section className="information">
      {/* <h2 className="information__title">ИНФОРМАЦИЯ</h2> */}
      <div className="information__tyema">
        <p className="information__text">Меня зовут Артём. 3 года назад я увлекся FPV, год назад занялся коммерческими съемками.
        Для меня это не основной источник дохода, поэтому приоритетом в работе является креатив, создание такого материала,
        которым все останутся довольны.</p>
      </div>
      <div className="information__fpv">
      <img className="information__fpv-image" src={fpv1}></img>
        <div className="information__contain">
          <p className="information__text-fpv">Cinewhoop - коптер с защищенными пропеллерами, что позволяет летать близко к людям,
          а также внутри помещений. Создает более плавные и кинематографичные кадры, но уступает “классике” по скорости и
          маневренности.
          </p>
          <p className="information__text-fpv">FPV freestyle 5 - “классический” коптер для съемок. Быстрый и маневренный. Используется для съемок на улице.</p>
        </div>
      </div>
    </section>
  );
}

export default Information;