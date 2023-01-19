import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__by">&copy; Ломакова А.С. 2022</p>
      <div className="footer__links">
        <a className="footer__link" href="tel:+79215883019">+7 (931) 706-16-09</a>
        <a className="footer__link" href="https://www.youtube.com/@abaksha">YouTube</a>
        <a className="footer__link" href="https://vk.com/abakshaa">VK</a>
      </div>
    </footer>
  );
}

export default Footer;