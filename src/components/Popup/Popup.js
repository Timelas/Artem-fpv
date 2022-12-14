import React from "react";
import Form from "../Form/Form";
import "./Popup.css";

function Popup(props) {
  const {isOpen, onClosePopup, onSendForm, visibleAnswerForm, visibleForm} = props;

  return (
    <section className={`popup popup_${isOpen && 'open'}`} tabIndex="0" onKeyDown={e => (e.key === "Escape") && onClosePopup()} onClick={e => (e.currentTarget === e.target) && onClosePopup()}>
      <Form closePopup={onClosePopup} isButtonCloseVisible={true} onSendForm={onSendForm} visibleAnswerForm={visibleAnswerForm} visibleForm={visibleForm} className="popup__form"></Form>
    </section>
  );
}

export default Popup;