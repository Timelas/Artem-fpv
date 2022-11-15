import React from "react";
import "./FormBlock.css";
import Form from "../Form/Form";

function FormBlock() {
  return (
    <section className="form-block">
      <Form isButtonCloseVisible={false}></Form>
    </section>
  );
}

export default FormBlock;