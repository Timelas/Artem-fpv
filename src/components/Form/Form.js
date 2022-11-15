import React from "react";
import "./Form.css";
import iconWA from "../../images/WA.png";
import iconTelegram from "../../images/Telegram.png";

function Form(props) {
  const {closePopup, isButtonCloseVisible} = props;

  return (
      <div className="form">
        <button className={`form__close form__close_${isButtonCloseVisible && 'visible'}`} onClick={closePopup}></button>
        <h3 className="form__title">Оставьте свои контакты и я свяжусь с вами в ближайшее время</h3>
        <form action="" className="form__inputs" method="get" >
          <div className="form__two-inputs">
          <input type="tel" htmlFor="phone" className="form__input form__input_type_phone" required name="phone" id="phone" placeholder="телефон" ></input>
          <span className="form__input-error phone-input-error"></span>
          <input type="text" htmlFor="name" className="form__input form__input_type_name" required name="name" id="name" placeholder="имя"></input>
          <span className="form__input-error name-input-error"></span>
          </div>
          <textarea type="text" className="form__input form__input_type_description"  name="description" id="description"  placeholder="описание съёмки"></textarea>
          <span className="form__input-error description-input-error"></span>
          <button className="form__btn" type="submit">Отправить</button>
      </form>
        <div className="form__contacts">
            <div className="form__line"></div>
            <div className="form__or">или</div>
            <div className="form__line"></div>
        </div>
        <div className="form__link">
          <p className="form__text">Напишите мне в:</p>
          <img className="form__icon" src={iconWA}></img>
          <img className="form__icon" src={iconTelegram}></img>
        </div>
      </div>
  );
}

export default Form;