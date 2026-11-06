import React from 'react';
import { Cake, Sparkles, Phone, CalendarCheck, ShieldCheck } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface BakerySectionProps {
  onOrderForEvents?: () => void;
}

export const BakerySection: React.FC<BakerySectionProps> = ({ onOrderForEvents }) => {
  const bakeryHighlights = [
    {
      title: "Signature Fresh Bread (Warm Daily Loaves)",
      desc: "Our beloved recipe: super-soft crumb, gentle sweetness, and golden crust baked fresh right here in Uromi several times a day.",
      variety: "Family Loaf & Butter Coconut Bread",
      badge: "Baked All Day"
    },
    {
      title: "Celebration & Event Cakes",
      desc: "Custom birthday, wedding, anniversary, and chieftaincy celebration cakes crafted with rich buttercream or fondant.",
      variety: "Red Velvet, Vanilla Bean, Rich Chocolate, Fruit",
      badge: "Pre-Order Available"
    },
    {
      title: "Golden Handheld Pastries & Confectionery",
      desc: "Crispy beef meat pies, seasoned chicken rolls, jam-filled doughnuts, and flaky sausage turnovers made from real butter pastry.",
      variety: "Meat Pies, Doughnuts, Scotch Eggs, Rolls",
      badge: "Fresh & Warm"
    }
  ];

  const handleEventOrder = () => {
    if (onOrderForEvents) {
      onOrderForEvents();
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bakery" className="py-16 sm:py-24 bg-[#fffdfa] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-[#d97706] to-[#b45309] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase text-amber-100 mb-4 border border-white/20">
                <Cake className="w-3.5 h-3.5 text-amber-300" />
                <span>Hommix In-House Bakery & Confectionery</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
                Fresh Bakes, Warm Bread & Celebration Cakes
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                There's nothing quite like the smell of fresh bread coming out of the oven! We bake daily in Uromi using quality flour and authentic ingredients. Need bread for your household, breakfast, or catering for a big ceremony? We have you covered.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleEventOrder}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-amber-50 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-[#c62828]" />
                  <span>Order for Events & Parties</span>
                </button>

                <a
                  href={RESTAURANT_DATA.telLink}
                  className="inline-flex items-center gap-2 bg-black/30 hover:bg-black/40 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Bakery Desk</span>
                </a>
              </div>
            </div>

            {/* Right Highlights Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {bakeryHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-amber-100">
                      {highlight.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-2">
                    {highlight.desc}
                  </p>
                  <div className="text-[11px] font-semibold text-amber-200">
                    Varieties: {highlight.variety}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Catering Reassurance Strip */}
          <div className="mt-10 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-xs text-amber-100">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Bulk bread supply for shops & hotels</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Custom cakes designed to your theme</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <CalendarCheck className="w-4 h-4 text-amber-300" />
              <span>Reliable delivery across Uromi & Ekpoma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
