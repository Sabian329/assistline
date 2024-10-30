import "./App.css";
import AboutUs from "./components/AboutUs";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import PricingSection from "./components/PricingSection";
import Faq from "./components/Faq";
import group from "./assets/bc.svg";
import BlurFade from "./components/ui/blur-fade";
import { useProgress } from "./hooks/useProgress";
import AboutUs2 from "./components/AboutUs2";

function App() {
  const { progress, setProgress, updatedSteps, setTier, tier } = useProgress();

  return (
    <div
      className="absolute top-0 left-0 right-0 min-h-screen bg-cover bg-center lg:bg-cover"
      style={{ backgroundImage: `url(${group})` }}
    >
      <BlurFade delay={0.5} inView>
        <h2 className="pt-6 text-5xl tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-700 bg-clip-text text-transparent sm:text-3xl">
          ASSIST<strong className="font-thin">LINE.</strong>
        </h2>
      </BlurFade>
      <MainPage />
      <AboutUs />
      <PricingSection setTier={setTier} setProgress={setProgress} />
      <EmailSection
        tier={tier}
        updatedSteps={updatedSteps}
        setProgress={setProgress}
        progress={progress}
      />
      <Faq id="faq" />
      <Footer />
    </div>
  );
}

export default App;
