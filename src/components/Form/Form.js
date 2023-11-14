import React, {Suspense, useState, useRef} from "react";
import "./Form.css";
import Preloader from '../Preloader/Preloader';
import iconWA from "../../images/WA.png";
import iconTg from "../../images/Telegram.png";

function Form(props) {
  const formRef = useRef(null)
  const {closePopup, isButtonCloseVisible, onSendForm, visibleAnswerForm, visibleForm} = props;
  const [loading, setLoading] = useState(false);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwG2YKxMZ46R1ZqFlgSWuTA1aDSamH8A-e9WJPsOQblrZlrJ0pxYPrEU1xKofkwuTu8/exec"

 const onSubmit = (e) =>{
  e.preventDefault();
  setLoading(true);
  const FormNew = new FormData(formRef.current);
  FormNew.append('Form', 'questions');

  fetch(scriptUrl, {
    method: 'POST',
    body: new FormData(formRef.current),

}).then(res => {
      visibleAnswerForm();
      setLoading(false);
      e.target.reset();
    })
    .catch(err => console.log(err))
}


  return (
    <Suspense fallback={<Preloader/>}>
      <div className="form" id="questions">
        <p className={`form__answer-good form__answer-good_${onSendForm && 'visible'}`}>Ваша заявка отправлена, я свяжусть с вами в ближайшее время!</p>
        <button className={`form__close form__close_${isButtonCloseVisible && 'visible'}`} onClick={closePopup}></button>
        <div className={`form__container form__container_${visibleForm && 'visible'}`}>
          <h3 className="form__title">Оставьте свой номер и я свяжусь с вами в ближайшее время</h3>
          <form className="form__inputs" onSubmit={onSubmit} encType="text/plain" name="form" ref={formRef}>
            <div className="form__two-inputs">
              <div className="form__block-input">
                <label htmlFor="tel"></label>
                <input
                  type="tel"
                  className="form__input form__input_type_phone"
                  name="Телефон"
                  placeholder="телефон"
                  id="tel"
                  required
                  ></input>
              </div>
              <div className="form__block-input">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  className="form__input form__input_type_name"
                  name="Имя"
                  placeholder="имя"
                  id="name"></input>
              </div>
            </div>
            <label htmlFor="description"></label>
            <textarea
              type="text"
              className="form__input form__input_type_description"
              name="Описание"
              placeholder="что нужно снять?"
              id="description"></textarea>
            <button className="form__btn" type="submit" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
        </form>
          <div className="form__contacts">
              <div className="form__line"></div>
              <div className="form__or">или</div>
              <div className="form__line"></div>
          </div>
          <div className="form__link">
            <p className="form__text">Напишите мне в:</p>
            <a className="form__icon" href="https://wa.me/79215883019" target="_blank" rel="noreferrer"><img className="form__icon" src={iconWA} alt="иконка WhatsApp"></img></a>
            <a className="form__icon" href="http://t.me/abaksha" target="_blank" rel="noreferrer"><img className="form__icon" src={iconTg} alt="иконка Telegram"></img></a>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Form;