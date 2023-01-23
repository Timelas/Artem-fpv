import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Header.css";
import videoDesctop from "../../images/desctop.mp4";
import videoMobile from "../../images/mobile.mp4";
import posterDesctop from "../../images/start-desctop.webp";
import posterMobile from "../../images/start-mobile.webp";

function Header(props) {
  const resize = useMediaQuery('(min-width: 500px)');
  const {isArrowVisible} = props;

  return (
    <header className="header">
      {
        resize ? (
        <video autoPlay loop muted className="header__video" poster={posterDesctop}>
        <source src={videoDesctop} type="video/mp4"></source> </video>) : (
          <video autoPlay loop muted className="header__video" poster={posterMobile}>
          <source src={videoMobile} type="video/mp4"></source> </video>
        )
      }
      <div className="header__content">
        <h1 className="header__title">Аэросъемка на fpv дрон</h1>
        <p className="header__text">Живые и динамичные кадры, Вам точно понравится</p>
      </div>
      <a href="#portfolio"><div className={`arrow arrow_${isArrowVisible && 'visible'}`}></div></a>
    </header>
  );
}

export default Header;