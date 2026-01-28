import Navbar from "./components/Navbar";
import About from "./sections/About";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
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
    </>
  );
}

export default App;
