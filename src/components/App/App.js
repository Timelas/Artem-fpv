import './App.css';
import Header from "../Header/Header";
import ButtonFix from "../ButtonFix/ButtonFix";
import Portfolio from "../Portfolio/Portfolio";
import Information from "../Information/Information";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonFix />
      <Portfolio />
      <Information />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
