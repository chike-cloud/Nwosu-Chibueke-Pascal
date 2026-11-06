import React from 'react';
import { UtensilsCrossed, Car, Bike, PackageCheck } from 'lucide-react';

export const QuickInfoStrip: React.FC = () => {
  const cards = [
    {
      title: "Dine-In",
      subtitle: "Comfort & Ample Space",
      description: "Air-conditioned indoor hall and cool outdoor seating area for family and friends.",
      icon: UtensilsCrossed,
      accent: "text-[#c62828] bg-red-50 border-red-100"
    },
    {
      title: "Drive-Through / Pick-Up",
      subtitle: "Quick Counter Grab",
      description: "Convenient parking and rapid service for travellers on the Afuda Road route.",
      icon: Car,
      accent: "text-amber-700 bg-amber-50 border-amber-100"
    },
    {
      title: "Delivery",
      subtitle: "Uromi & Ekpoma",
      description: "Fast rider dispatch direct to your home, office, hostel, or AAU campus environs.",
      icon: Bike,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100"
    },
    {
      title: "Takeaway",
      subtitle: "Fresh & Heat-Sealed",
      description: "Hygienically packaged warm meals and bakery boxes ready in minutes.",
      icon: PackageCheck,
      accent: "text-[#c62828] bg-rose-50 border-rose-100"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all border border-amber-100/80 flex flex-col justify-between group hover:-translate-y-1 duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.accent} transition-transform group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Service
                  </span>
                </div>
                <h2 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#c62828] transition-colors">
                  {card.title}
                </h2>
                <p className="text-xs font-semibold text-amber-800 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
