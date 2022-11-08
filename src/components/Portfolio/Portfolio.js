import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">ПРИМЕРЫ</h2>
      <div className="portfolio__work">
        <div className="portfolio__video">Съёмка моста</div>
        <div className="portfolio__video">Съёмка человека</div>
        <div className="portfolio__video">Съёмка машины</div>
        <div className="portfolio__video">Полет дрона над гнездом</div>
        <div className="portfolio__video">Съёмка авто</div>
        <div className="portfolio__video">Экстримальный прокат лыж</div>
      </div>
      <button className="portfolio__arrow">ЕЩЁ</button>
    </section>
  );
}

export default Portfolio;