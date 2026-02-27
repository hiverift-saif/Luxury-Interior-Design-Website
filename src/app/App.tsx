import { useEffect } from 'react'; // 1. useEffect import karein
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // 2. useLocation import karein
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Home from '@/app/pages/Home';
import About from '@/app/pages/About';
import Services from '@/app/pages/Services';
import Projects from '@/app/pages/Projects';
import DesignProcess from '@/app/pages/DesignProcess';
import Testimonials from '@/app/pages/Testimonials';
import Contact from '@/app/pages/Contact';
import AlibdaFullPortfolio from './components/ui/AlibdaPortfolio.js';
import { FaWhatsapp } from 'react-icons/fa';
import TurnkeyService from './pages/TurnkeyService';
import CommercialService from './pages/CommercialService';
import LuxuryService from './pages/LuxuryService';
import ResidentialService from './pages/ResidentialService';

// === SCROLL TO TOP COMPONENT ===
// Yeh component har naye page par scroll ko (0,0) par le jayega
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Isse scroll smoothly slide hokar upar jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

  return null;
}
export default function App() {
  return (
    <Router>
      {/* ScrollToTop ko Router ke andar aur baki components se upar rakhein */}
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/process" element={<DesignProcess />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AlibdaFullPortfolio" element={<AlibdaFullPortfolio />} />
            
            {/* Fixed Paths */}
            <Route path="/services/turnkey-solutions" element={<TurnkeyService />} />
            <Route path="/services/commercial-spaces" element={<CommercialService />} />
            <Route path="/services/luxury-villas" element={<LuxuryService />} />
            <Route path="/services/residential-interiors" element={<ResidentialService />} />
          </Routes>
        </main>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919810139851"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 bottom-6 z-50 bg-green-500 hover:bg-green-600
                     text-white p-4 rounded-full shadow-xl transition-all duration-300"
        >
          <FaWhatsapp size={22} />
        </a>

        <Footer />
      </div>
    </Router>
  );
}