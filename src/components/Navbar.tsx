import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Bakery', href: '#bakery' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-amber-50/95 backdrop-blur-md shadow-md border-b border-amber-200/60'
          : 'bg-[#faf6ef]/90 backdrop-blur-sm border-b border-amber-100'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-[#c62828] text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>Open 24 Hours</span>
        </span>
        <span className="hidden sm:inline text-amber-200">·</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>Afuda Rd, Uromi, Edo State</span>
        </span>
        <span className="text-amber-200">·</span>
        <a
          href={RESTAURANT_DATA.telLink}
          className="hover:underline flex items-center gap-1 text-amber-200 hover:text-white"
        >
          <Phone className="w-3 h-3" />
          <span>{RESTAURANT_DATA.phone}</span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c62828] rounded-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[#c62828] flex items-center justify-center text-white font-bold text-xl shadow-sm">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#1e293b]">
                Hommix<span className="text-[#c62828]">.</span>
              </span>
              <span className="text-[10px] sm:text-xs text-amber-800 font-semibold uppercase tracking-wider -mt-1">
                Unique Fast Food & Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#c62828] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c62828] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Call to Order Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_DATA.telLink}
              className="inline-flex items-center gap-2 bg-[#c62828] hover:bg-[#991b1b] text-white px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Call Hommix Fast Food to Order"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span className="whitespace-nowrap">Call to Order</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#c62828] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-[#c62828]"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#fffdfa] border-b border-amber-200 px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-100/70 hover:text-[#c62828] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-amber-100 flex flex-col gap-3">
            <div className="text-xs text-slate-600 flex items-center justify-between">
              <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                Open 24/7 in Uromi
              </span>
              <span>Afuda Rd, Uromi</span>
            </div>
            <a
              href={RESTAURANT_DATA.telLink}
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#c62828] hover:bg-[#991b1b] text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call to Order: {RESTAURANT_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
