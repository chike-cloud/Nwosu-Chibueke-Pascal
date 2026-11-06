import React from 'react';
import { Bike, Phone, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const DeliverySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#fffdfa] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#c62828] to-[#991b1b] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-200 border border-white/20 mb-4">
              <Bike className="w-4 h-4 text-amber-300" />
              <span>Prompt Doorstep Delivery Service</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
              We Deliver in Uromi and Ekpoma
            </h2>

            <p className="text-base sm:text-xl text-amber-100 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Hungry at home, working at the office, or studying in the AAU hostel? Call to place your order and have hot, authentic local food and fresh bakes brought straight to your doorstep.
            </p>

            {/* Delivery Areas Pill / Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/25">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Uromi: Afuda, Township, Market & Mission Rd</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/25">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Ekpoma: AAU Campus & Surrounding Environs</span>
              </div>
            </div>

            {/* Large Click-to-Call Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={RESTAURANT_DATA.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 px-8 py-4 rounded-2xl font-display font-extrabold text-lg sm:text-xl shadow-lg hover:shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-6 h-6 text-[#c62828]" />
                <span>Call to Place Order: {RESTAURANT_DATA.phone}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all"
              >
                <span>Fill Order Form</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            {/* Fast dispatch steps */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-black/20 p-4 rounded-2xl border border-white/10">
                <div className="text-amber-300 font-display font-bold text-lg mb-1">1. Call or Send Request</div>
                <p className="text-xs text-white/80">Tell us what you would like to eat and provide your specific delivery location.</p>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/10">
                <div className="text-amber-300 font-display font-bold text-lg mb-1">2. Freshly Cooked & Packed</div>
                <p className="text-xs text-white/80">Our chefs package your meal piping hot in neat, spill-free food containers.</p>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/10">
                <div className="text-amber-300 font-display font-bold text-lg mb-1">3. Speedy Rider Dispatch</div>
                <p className="text-xs text-white/80">Our dispatch rider brings your order hot to your gate with payment on delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
