import './App.css';
import React from 'react';
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import ButtonFix from "../ButtonFix/ButtonFix";
import Portfolio from "../Portfolio/Portfolio";
import Information from "../Information/Information";
import FormBlock from "../FormBlock/FormBlock";
import Footer from "../Footer/Footer";

function App() {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isArrowVisible, setIsArrowVisible] = React.useState(true);

  function handleOpenPopup () {
    setIsOpenPopup(true);
    setIsButtonVisible(false);
    setIsArrowVisible(false);
  }

  function handleClosePopup () {
    setIsOpenPopup(false);
    setIsButtonVisible(true);
    setIsArrowVisible(true);
  }

  return (
    <div className="App">
      <Header isArrowVisible={isArrowVisible}/>
      <ButtonFix
        isButtonVisible={isButtonVisible}
        onOpenPopup={handleOpenPopup} />
      <Portfolio />
      <Information />
      <FormBlock />
      <Footer />
      <Popup
        isOpen={isOpenPopup}
        onClosePopup={handleClosePopup} />
    </div>
  );
}

export default App;
