import React from 'react';
import { Phone, MapPin, Clock, Heart, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bakery & Cakes', href: '#bakery' },
    { label: 'About Us', href: '#about' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit & Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#c62828] flex items-center justify-center text-white font-bold text-xl shadow-sm">
                H
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                Hommix<span className="text-[#c62828]">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Homely, affordable fast food, local Nigerian cuisine, and fresh bakery located on Afuda Road, Uromi, Edo State.
            </p>
            <div className="text-xs font-semibold text-amber-400">
              “{RESTAURANT_DATA.tagline}”
            </div>

            {/* Social Icon Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hommix Fast Food on Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#c62828] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hommix Fast Food on Instagram"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#c62828] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2349020151066"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hommix Fast Food on WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact & Location
            </h4>
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#c62828] shrink-0 mt-0.5" />
              <span>{RESTAURANT_DATA.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={RESTAURANT_DATA.telLink} className="hover:text-amber-400 transition-colors font-bold">
                {RESTAURANT_DATA.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Open 24 Hours · Every Day of the Week</span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Delivery zones: Uromi Township & Ambrose Alli University (AAU) Ekpoma.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Hommix Unique Fast Food. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#c62828] fill-[#c62828]" />
            <span>for Uromi & Edo State</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
