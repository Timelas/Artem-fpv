import React, {Suspense} from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import "./Form.css";
import Preloader from '../Preloader/Preloader';
import iconWA from "../../images/WA.png";
import iconTg from "../../images/Telegram.png";

function Form(props) {
  // const form = document.forms.form;
  // const tel = form.elements.phone;
  const {closePopup, isButtonCloseVisible, onSendForm, visibleAnswerForm, visibleForm} = props;
  const { register, formState: { errors, isValid }, handleSubmit, clearErrors, reset } = useForm({
    defaultValues: {
      phone: '',
      name: '',
      description: ''
    },
    mode: "onBlur",
    criteriaMode: 'all',
  });

  function onSubmit(data) {
    axios.post('https://sheet.best/api/sheets/2a3d941b-6152-41ae-997c-ec67d31a9e8d', data)
    .then(response => {
      if (response.status === 200) {
        visibleAnswerForm();
      }
    })
  }

  // function add () {
  //   return tel.value="+7";
  // }


  return (
    <Suspense fallback={<Preloader/>}>
      <div className="form">
        <p className={`form__answer-good form__answer-good_${onSendForm && 'visible'}`}>Ваша заявка отправлена, я свяжусть с вами в ближайшее время!</p>
        <button className={`form__close form__close_${isButtonCloseVisible && 'visible'}`} onClick={() => {clearErrors(); closePopup(); reset()}}></button>
        <div className={`form__container form__container_${visibleForm && 'visible'}`}>
          <h3 className="form__title">Оставьте свой номер и я свяжусь с вами в ближайшее время</h3>
          <form className="form__inputs" onSubmit={handleSubmit(onSubmit)} action="mailto:alexandra.lomakova@yandex.ru" encType="text/plain" name="form">
            <div className="form__two-inputs">
              <div className="form__block-input">
                <label htmlFor="phone"></label>
                <input
                  type="tel"
                  // onClick={add}
                  {...register('phone', {
                    required: "Это поле обязательно, введите номер телефона",
                    pattern: {
                      value: /^[0-9+-]+$/,
                      message: "В это поле можно вводить только цифры",
                    },
                  }
                  )}
                  className="form__input form__input_type_phone"
                  name="phone"
                  placeholder="телефон"
                  id="tel"
                  ></input>
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => <p className="form__input-error">{message}</p>}
              />
              </div>
              <div className="form__block-input">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  {...register('name', {
                    minLength: 2,
                    maxLength: 14,
                  })}
                  className="form__input form__input_type_name"
                  name="name"
                  placeholder="имя"></input>
                  {errors.name && <p className="form__input-error"></p>}
              </div>
            </div>
            <label htmlFor="description"></label>
            <textarea
              type="text"
              {...register('description')}
              className="form__input form__input_type_description"
              name="description"
              placeholder="что нужно снять?"></textarea>
            <button className="form__btn" type="submit" disabled={!isValid} onClick="ym(91663099,'reachGoal','button_otpravit')">Отправить</button>
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