import React from "react";
import "./Header.css";
import videoDesctop from "../../images/video-desctop.mp4";
import arrow from "../../images/arrow.svg";

function Header() {
  return (
    <header className="header">
      <video autoPlay loop muted className="header__video-desctop">
          <source src={videoDesctop} type="video/mp4"></source>
      </video>
      <div className="header__content">
        <h1 className="header__title">FPV аэросъёмка</h1>
        <p className="header__text">Живые и динамичные кадры, Вам точно понравится</p>
      </div>
      <a href="#portfolio"><div className="arrow"></div></a>
    </header>
  );
}

export default Header;