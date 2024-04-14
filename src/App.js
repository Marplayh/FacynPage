import Header from "./components/header/index";
import Carousel  from "./components/carousel/index";
import SocialMediaIcons from './components/socialmedias/index';
import Faq from "./components/faq";
import './index.css';
import Servicos from "./components/servicos";
import Planos from "./components/planos";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Servicos/>
      <Planos/>
      <Faq/>
      <SocialMediaIcons/>
      <Footer/>
    </div>
  );
}

export default App;
