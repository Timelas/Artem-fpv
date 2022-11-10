import React from "react";
import "./ButtonFix.css";

function ButtonFix(props) {
const {onOpenPopup, isVisible} = props;

  return (
    <button className={`button-fix button-fix_${isVisible && 'visible'}`} onClick={onOpenPopup}>ЗАКАЗАТЬ СЪЁМКУ</button>
  );
}

export default ButtonFix;