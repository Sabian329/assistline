import "./App.css";
import AboutUs from "./components/AboutUs";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import PricingSection from "./components/PricingSection";
import Faq from "./components/Faq";
import group from "./assets/bc.svg";

function App() {
  return (
    <div
      className="absolute top-0 left-0 right-0 min-h-screen bg-cover bg-center lg:bg-cover"
      style={{ backgroundImage: `url(${group})` }}
    >
      <MainPage id="main" />
      <AboutUs id="about-us" />
      <PricingSection id="pricing" />
      <EmailSection id="email-section" />
      <Faq id="faq" />
      <Footer />
    </div>
  );
}

export default App;
