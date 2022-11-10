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
  const [isFormPopup, setIsFormPopup] = React.useState(false);
  const [isButtonVisible, setisButtonVisible] = React.useState(true);

  function handleOpenPopup () {
    setIsFormPopup(true);
    setisButtonVisible(false);
}

  return (
    <div className="App">
      <Header />
      <ButtonFix
        isVisible={isButtonVisible}
        onOpenPopup={handleOpenPopup}/>
      <Portfolio />
      <Information />
      <FormBlock />
      <Footer />
      <Popup
        isOpen={isFormPopup}/>
    </div>
  );
}

export default App;
