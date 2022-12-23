import React from "react";
import "./FormBlock.css";
import Form from "../Form/Form";

function FormBlock() {
  return (
    <section className="form-block">
      <h2 className="form-block__title">Связь</h2>
      <div className="form-block__container">
        <Form isButtonCloseVisible={false}></Form>
      </div>
      {/* <div className="form-block__image"></div> */}
    </section>
  );
}

export default FormBlock;