import React from "react";
import Form from "../Form/Form";
import "./Popup.css";

function Popup(props) {
  const {isOpen} = props;

  return (
    <section className={`popup popup_${isOpen && 'open'}`}>
      <Form></Form>
    </section>
  );
}

export default Popup;