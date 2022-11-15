import React from "react";
import "./ButtonFix.css";

function ButtonFix(props) {
  const {onOpenPopup, isButtonVisible} = props;

  return (
    <button className={`button-fix button-fix_${isButtonVisible && 'visible'}`} onClick={onOpenPopup}>ЗАКАЗАТЬ СЪЁМКУ</button>
  );
}

export default ButtonFix;