import React from "react";
import Form from "../Form/Form";
import "./Popup.css";

function Popup(props) {
  const {isOpen, onClosePopup} = props;

  return (
    <section className={`popup popup_${isOpen && 'open'}`}>
      <Form closePopup={onClosePopup} isButtonCloseVisible={true}></Form>
    </section>
  );
}

export default Popup;