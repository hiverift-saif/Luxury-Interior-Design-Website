import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

import logo from '../../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Alibda Interiors" className="h-16 w-auto  " />
            <p className="text-gray-400 text-sm">
              Crafting luxury living spaces in Dubai with sophistication and elegance.
            </p>
          <div className="flex gap-4">
  <a 
    href="https://www.instagram.com/alibdainteriors/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#c5a572] transition-colors"
  >
    <Instagram size={20} />
  </a>

  <a 
    href="https://www.facebook.com/profile.php?id=61588371148854"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#c5a572] transition-colors"
  >
    <Facebook size={20} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-[#c5a572] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#c5a572] transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#c5a572] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#c5a572] transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Residential Interiors</li>
              <li className="text-gray-400">Luxury Villas & Penthouses</li>
              <li className="text-gray-400">Commercial Spaces</li>
              <li className="text-gray-400">Turnkey Solutions</li>
            </ul>
          </div>

    {/* Contact Info */}
<div>
  <h3 className="text-lg mb-4">Contact</h3>

  <ul className="space-y-3 text-sm">

    {/* Gurgaon Address */}
    <li className="flex items-start gap-3 text-gray-400">
      <MapPin size={18} className="mt-1 flex-shrink-0" />
      <span>
        657 Udyog Vihar <br />
        Phase 5 <br />
        Gurgaon, India
      </span>
    </li>
    {/* Phone */}
    <li className="flex items-center gap-3 text-gray-400">
      <Phone size={18} className="flex-shrink-0" />
      <span>+91 9810139851, +91 9810044642</span>
    </li>
    {/* Dubai Address */}
    <li className="flex items-start gap-3 text-gray-400">
      <MapPin size={18} className="mt-1 flex-shrink-0" />
      <span>
        Iris Bay - 2205 <br />
        Business Bay Dubai <br />
        Dubai, UAE
      </span>
    </li>

    <li className="flex items-center gap-3 text-gray-400">
      <Phone size={18} className="flex-shrink-0" />
      <span>+966 559786327, <br />
       +91 9650786351</span>
    </li>

    {/* Email */}
    <li className="flex items-center gap-3 text-gray-400">
      <Mail size={18} className="flex-shrink-0" />
      <span>info@alibdainteriors.com</span>
    </li>

  </ul>
</div>


          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Alibda Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
