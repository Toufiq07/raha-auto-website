import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = ['fa', 'ur', 'ps'].includes(lng) ? 'rtl' : 'ltr';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-zoox-dark bg-zoox-mint selection:bg-zoox-forest selection:text-white">
      
      {/* Minimalist Navigation */}
      <header className="fixed w-full top-0 z-50 bg-zoox-mint/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Left: Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-black/5 rounded-full transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center: Centered Logo/Links */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide">
            <Link to="/auto-service" className="hover:opacity-60 transition">SERVICES</Link>
            <Link to="/" className="text-xl font-bold tracking-widest uppercase mx-8">
              RAHA AUTO
            </Link>
            <Link to="/cars" className="hover:opacity-60 transition">INVENTORY</Link>
            <Link to="/contact-us" className="hover:opacity-60 transition">SUPPORT</Link>
          </nav>

          {/* Right: Lang Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:opacity-60 transition p-2">
                <Globe size={20} />
                <span className="uppercase text-xs font-bold tracking-wider">{i18n.language}</span>
              </button>
              {/* Language Dropdown */}
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden">
                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">English</button>
                <button onClick={() => changeLanguage('bn')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Bangla</button>
                <button onClick={() => changeLanguage('fa')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Persian</button>
                <button onClick={() => changeLanguage('hi')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Hindi</button>
                <button onClick={() => changeLanguage('ur')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Urdu</button>
                <button onClick={() => changeLanguage('ps')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Pashto</button>
                <button onClick={() => changeLanguage('ta')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Tamil</button>
              </div>
            </div>
            
            <Link to="/book" className="bg-zoox-dark text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-black transition">
              Book a Service
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Dark Footer */}
      <footer className="bg-black text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-2xl font-bold tracking-widest mb-6 uppercase">RAHA AUTO</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Honest service, transparent pricing, and a team that treats every car like their own. Scarborough's trusted auto shop since 2019. [cite: 469, 470]
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-gray-500">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/auto-service" className="hover:text-zoox-mint transition">Oil Change</Link></li>
              <li><Link to="/auto-service" className="hover:text-zoox-mint transition">Tire Service</Link></li>
              <li><Link to="/auto-service" className="hover:text-zoox-mint transition">Battery</Link></li>
              <li><Link to="/auto-service" className="hover:text-zoox-mint transition">Brakes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/contact-us" className="hover:text-zoox-mint transition">About Us</Link></li>
              <li><Link to="/cars" className="hover:text-zoox-mint transition">Inventory</Link></li>
              <li><Link to="/franchising" className="hover:text-zoox-mint transition">Franchising</Link></li>
              <li><Link to="/sell-my-car" className="hover:text-zoox-mint transition">Sell My Car</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-gray-500">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>+1 (416) 750-0505 [cite: 489]</li>
              <li>+1 (647) 780-2485 [cite: 490]</li>
              <li>info@rahaauto.com [cite: 491]</li>
              <li>773 Warden Ave. Unit 11<br/>Scarborough, ON M1L 4C2 [cite: 492, 493]</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-24 pt-8 border-t border-white/10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright 2026 Raha Auto. All rights reserved. [cite: 125, 498]</p>
          <div className="space-x-6 mt-4 md:mt-0 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;