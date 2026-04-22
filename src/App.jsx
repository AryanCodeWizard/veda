import 'aos/dist/aos.css';

import AOS from 'aos';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Horoscope from './components/Horoscope';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_10%,rgba(15,118,110,0.13),transparent_30%),radial-gradient(circle_at_80%_85%,rgba(217,119,6,0.14),transparent_35%)]" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Horoscope />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;