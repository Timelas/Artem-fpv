import './App.css';
import React from 'react';
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import PopupVideo from "../PopupVideo/PopupVideo";
import ButtonFix from "../ButtonFix/ButtonFix";
import Portfolio from "../Portfolio/Portfolio";
import Information from "../Information/Information";
import FormBlock from "../FormBlock/FormBlock";
import Footer from "../Footer/Footer";

function App() {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [isOpenVideo, setIsOpenVideo] = React.useState(false);
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isformAnswer, setIsformAnswer] = React.useState(false);
  const [isformVisible, setIsformVisible] = React.useState(true);
  const [isArrowVisible, setIsArrowVisible] = React.useState(true);
  const [isCard, setIsCard] = React.useState([]);

  function handleOpenPopup () {
    setIsOpenPopup(true);
    setIsButtonVisible(false);
    setIsArrowVisible(false);
    setIsformVisible(true);
  }

  function handleOpenVideo (card) {
    setIsOpenVideo(true);
    setIsButtonVisible(false);
    setIsArrowVisible(false);
    setIsCard(card);
  }

  function handleClosePopup () {
    setIsOpenPopup(false);
    setIsButtonVisible(true);
    setIsArrowVisible(true);
  }

  function handleCloseVideo () {
    setIsOpenVideo(false);
    setIsButtonVisible(true);
    setIsArrowVisible(true);
    setIsCard([]);
  }

  function visibleAnswerForm () {
    setIsformAnswer(true);
    setIsformVisible(false);
  }

  return (
    <div className="App">
      <Header isArrowVisible={isArrowVisible}/>
      <ButtonFix
        isButtonVisible={isButtonVisible}
        onOpenPopup={handleOpenPopup} />
      <Portfolio
        onOpenVideo={handleOpenVideo} />
      <Information />
      <FormBlock
        visibleAnswerForm={visibleAnswerForm}
        visibleForm={isformVisible}
        onSendForm={isformAnswer} />
      <Footer />
      <Popup
        isOpen={isOpenPopup}
        visibleAnswerForm={visibleAnswerForm}
        onClosePopup={handleClosePopup}
        visibleForm={isformVisible}
        onSendForm={isformAnswer} />
      <PopupVideo
        isOpen={isOpenVideo}
        card={isCard}
        onCloseVideo={handleCloseVideo} />
    </div>
  );
}

export default App;
