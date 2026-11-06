import React from 'react';
import { Phone, Navigation, Star, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/unnamed_60672338.jpg"
          alt="Hommix Unique Fast Food delicious smoky Nigerian Jollof rice with fried chicken"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered warm contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-[#c62828]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-white">
        {/* Subtle Trust & Status Markers */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 text-xs sm:text-sm font-medium">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Open 24 Hours</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span>4.1★ from 83 Google reviews</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 text-amber-200 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Afuda Rd, Uromi</span>
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-sm [text-wrap:balance]">
          Good Food, <span className="text-amber-400">Pocket-Friendly</span> Prices
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Breakfast, lunch, dinner, and fresh bakes. Dine in, take away, or get it delivered in Uromi & Ekpoma. Always open, 24 hours a day.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          <a
            href={RESTAURANT_DATA.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c62828] hover:bg-[#b71c1c] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-red-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-amber-300" />
            <span>Call to Order</span>
          </a>

          <a
            href={RESTAURANT_DATA.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:border-white/50"
          >
            <Navigation className="w-5 h-5 text-amber-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Micro reassurance notes */}
        <div className="mt-8 text-xs text-neutral-300 flex items-center justify-center gap-4">
          <span>Freshly Baked Bread</span>
          <span className="text-amber-400">·</span>
          <span>Hot Local Soups</span>
          <span className="text-amber-400">·</span>
          <span>Fast Delivery in Uromi & Ekpoma</span>
        </div>
      </div>
    </section>
  );
};
