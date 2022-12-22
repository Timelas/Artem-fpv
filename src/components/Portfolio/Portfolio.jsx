import React from "react";
import "./Portfolio.css";
import {initialCards} from '../../utils/const';

function Portfolio(props) {
  const {onOpenVideo} = props;

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">Примеры</h2>
      <div className="portfolio__work">
        {initialCards.map(card => (
          <button className="portfolio__video"
          style={{background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${card.place})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"}}
          onClick={() => onOpenVideo(card)}
          key={card.id}>
            <p className="portfolio-video__title">{card.text}</p>
          </button>
        ))}
      </div>
      {/* <button className="portfolio__arrow">ЕЩЁ</button> */}
    </section>
  );
}

export default Portfolio;