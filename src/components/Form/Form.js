import React from "react";
import "./Form.css";
import icon from "../../images/WA.png"

function Form() {
  return (
    <section className="form">
      <div className="form__block">
        <h3 className="form__title">Нужна съёмка?</h3>
        <form action="" className="form__inputs" method="get">
          <div className="form__two-inputs">
          <input type="number" className="form__input form__input_type_phone" required name="phone" id="nphoneame" placeholder="телефон"></input>
          <span className="form__input-error phone-input-error"></span>
          <input type="text" className="form__input form__input_type_name" required name="name" id="name" placeholder="имя"></input>
          <span className="form__input-error name-input-error"></span>
          </div>
          <textarea type="text" className="form__input form__input_type_description"  required name="description" id="description"  placeholder="описание съёмки"></textarea>
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
          <img className="form__icon" src={icon}></img>
        </div>
      </div>
    </section>
  );
}

export default Form;