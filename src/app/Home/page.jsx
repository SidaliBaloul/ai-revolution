import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import AiTypes from "../Components/AiTypes";
import AiBenefits from "../Components/AiBenefits";

export default function MyHome() {
  return (
    <div>
      <Navbar />

      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
