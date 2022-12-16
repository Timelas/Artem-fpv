import React from "react";
import "./Header.css";
import videoDesctop from "../../images/video-desctop.mp4";
import videoMobile from "../../images/video-mobile.mp4";
import posterDesctop from "../../images/start-desctop.jpg";
import posterMobile from "../../images/start-mobile.jpg";

function Header(props) {
  const sizeScreen = document.documentElement.clientWidth;
  const {isArrowVisible} = props;

  function screenSize () {
    switch (true) {
      case sizeScreen >= 500:
        return videoDesctop;
      default:
        return videoMobile;
    }
  }

  function screenSizePoster () {
    switch (true) {
      case sizeScreen >= 500:
        return posterDesctop;
      default:
        return posterMobile;
    }
  }

  return (
    <header className="header">
      <video autoPlay loop muted className="header__video" poster={screenSizePoster()}>
          <source src={screenSize()} type="video/mp4"></source>
      </video>
      <div className="header__content">
        <h1 className="header__title">FPV аэросъёмка</h1>
        <p className="header__text">Живые и динамичные кадры, Вам точно понравится</p>
      </div>
      <a href="#portfolio"><div className={`arrow arrow_${isArrowVisible && 'visible'}`}></div></a>
    </header>
  );
}

export default Header;