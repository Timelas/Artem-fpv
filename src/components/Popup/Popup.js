import React from "react";
import Form from "../Form/Form";
import "./Popup.css";

function Popup(props) {
  const {isOpen, onClosePopup} = props;

  return (
    <section className={`popup popup_${isOpen && 'open'}`} onClick={e => (e.currentTarget === e.target) && onClosePopup()}>
      <Form closePopup={onClosePopup} isButtonCloseVisible={true} className="popup__form"></Form>
    </section>
  );
}

export default Popup;