import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonial />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}

export default App;
