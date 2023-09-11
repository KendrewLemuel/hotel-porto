import "./App.css";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import Resid from "./components/Residencies/Resid";
import Started from "./components/Started/Started";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Company />
      <Resid />
      <Value />
      <Contact />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
