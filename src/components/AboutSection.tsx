import React from 'react';
import { Heart, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#faf6ef] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-100">
              <img
                src="/assets/aistudio/unnamed_9ceb5232.jpg"
                alt="Hommix Unique Fast Food restaurant signboard on Afuda Road, Uromi"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-amber-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c62828] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c62828]" />
                  <span>Afuda Road, Uromi</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  Eat & Take Away · In-House Bakery · Outdoor Seating · 24-Hour Kitchen
                </p>
              </div>
            </div>

            {/* Accent badge floating on side */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#c62828] text-white p-4 rounded-2xl shadow-lg flex-col items-center justify-center border-2 border-white">
              <span className="font-display font-extrabold text-2xl">24/7</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200">Always Open</span>
            </div>
          </div>

          {/* Story Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c62828] uppercase tracking-wider mb-2">
              <Heart className="w-4 h-4 text-[#c62828]" />
              <span>Our Story & Hospitality</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 [text-wrap:balance]">
              A Homely Place for Good Food at Fair Prices
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                At <strong>Hommix Unique Fast Food</strong>, our philosophy is simple: everyone deserves a steaming, delicious, and truly satisfying meal without paying a fortune. Located conveniently on <strong>Afuda Road in Uromi, Edo State</strong>, we have grown into the go-to spot for locals, travellers, university students from nearby Ekpoma, and families.
              </p>
              <p>
                Whether you stop by in the early morning for hot fresh bread and tea, drop in for our famous cow meat pepper soup and yellow eba at lunchtime, or pick up smoky party jollof rice late at night, our kitchen never stops. We pride ourselves on generous portions, authentic native Esan seasoning, and warm Nigerian smiles.
              </p>
              <p>
                With comfortable indoor seating, enough breezy outdoor space to sit with friends and unwind, and express takeaway and delivery services, Hommix is truly your home away from home.
              </p>
            </div>

            {/* Value bullets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Always open 24 hours — day & night service",
                "Pocket-friendly prices for every pocket",
                "Spacious outdoor & indoor seating",
                "Freshly baked bread throughout the day",
                "Fast motorcycle delivery in Uromi & Ekpoma",
                "Authentic local soups & tender meats"
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#c62828] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Link */}
            <div className="mt-8 pt-6 border-t border-amber-200/70 flex flex-wrap items-center gap-4">
              <a
                href={RESTAURANT_DATA.telLink}
                className="inline-flex items-center gap-2 bg-[#c62828] hover:bg-[#991b1b] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all"
              >
                <span>Call Us: {RESTAURANT_DATA.phone}</span>
              </a>
              <a
                href={RESTAURANT_DATA.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#c62828] underline"
              >
                Find us on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
