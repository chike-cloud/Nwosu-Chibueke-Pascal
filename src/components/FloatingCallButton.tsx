import React from 'react';
import { Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const FloatingCallButton: React.FC = () => {
  return (
    <aside
      className="fixed bottom-5 right-5 z-40 md:hidden"
      aria-label="Quick contact"
    >
      <a
        href={RESTAURANT_DATA.telLink}
        className="flex items-center gap-2.5 bg-[#c62828] hover:bg-[#991b1b] text-white px-4 py-3 rounded-full font-bold text-xs shadow-2xl border-2 border-amber-300 transition-all active:scale-95 animate-bounce-subtle"
        aria-label="Call Hommix Fast Food to Order (0902 015 1066)"
      >
        <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 fill-slate-950" />
        </span>
        <span className="tracking-wide uppercase font-extrabold pr-1">
          Call to Order
        </span>
      </a>
    </aside>
  );
};
