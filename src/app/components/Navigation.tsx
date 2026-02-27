import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo2 from '../../assets/second_logo.png';
import logo from '../../assets/logo.jpeg';
import logo3 from '../../assets/pinakin.png';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Design Process', path: '/process' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ Logos Array
  const logos = [logo, logo2 , logo3];

  // ✅ Current logo index
  const [logoIndex, setLogoIndex] = useState(0);

  // ✅ Auto change logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
{/* ✅ Logo Section (Fixed Width to stop nav shifting) */}
<div className="relative z-50 flex items-center">
  <Link to="/" className="group block">
    
    {/* ✅ Fixed Logo Wrapper */}
    <div className="w-[140px] md:w-[180px] h-14 md:h-20 flex items-center justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={logoIndex}
          src={logos[logoIndex]}
          alt="Alibda Interiors"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="
            h-full w-full object-contain
            transition-transform duration-300 ease-in-out
            group-hover:scale-110 origin-left
          "
        />
      </AnimatePresence>
    </div>
  </Link>
</div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors ${
                  location.pathname === link.path
                    ? 'text-gray-500'
                    : ' hover:text-[#c5a572]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c5a572]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#c5a572] text-white rounded-md hover:bg-[#b39563] transition-colors shadow-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 ${
                    location.pathname === link.path
                      ? 'text-[#1a4d2e]'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-6 py-2.5 bg-[#c5a572] text-white rounded-md text-center"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
