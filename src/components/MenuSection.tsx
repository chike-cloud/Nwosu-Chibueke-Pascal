import React, { useState, useMemo } from 'react';
import { Phone, Search, Utensils, AlertCircle, PlusCircle, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, RESTAURANT_DATA } from '../data/restaurantData';
import { formatNaira, filterMenuItems } from '../utils/restaurant';

interface MenuSectionProps {
  onSelectItemForOrder?: (itemName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItemForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return filterMenuItems(MENU_ITEMS, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  const handleQuickAdd = (item: MenuItem) => {
    if (onSelectItemForOrder) {
      onSelectItemForOrder(item.name);
    }
    setAddedItemNotification(item.name);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 2500);

    // Smooth scroll down to contact / order enquiry section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#fbf8f2] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-[#c62828] uppercase tracking-wider mb-2 block">
            Authentic Flavours & Warm Bakes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Our Homely & Pocket-Friendly Menu
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From our rich Esan Obolo soup and melon stew to freshly rolled cassava santana, piping-hot jollof rice, and bakery treats.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs (Segmented Control) */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none flex items-center gap-1.5 p-1 bg-amber-100/70 rounded-2xl border border-amber-200">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-150 ${
                activeCategory === 'all'
                  ? 'bg-white text-[#c62828] shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              All Items
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-150 ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#c62828] shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search egusi, jollof, bread..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-amber-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c62828] focus:border-transparent placeholder:text-slate-400"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Added Notification Toast */}
        {addedItemNotification && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center justify-between animate-fade-in">
            <span className="flex items-center gap-2 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              Added “{addedItemNotification}” to your order form below.
            </span>
            <a href="#contact" className="underline font-semibold hover:text-emerald-950">
              Complete Order &rarr;
            </a>
          </div>
        )}

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-amber-300">
            <Utensils className="w-10 h-10 text-amber-500 mx-auto mb-3 opacity-60" />
            <p className="font-semibold text-slate-800 text-base mb-1">No dishes found matching your query</p>
            <p className="text-xs text-slate-500 mb-4">Try searching for something else like "jollof", "soup", or "bread".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#c62828] underline hover:text-[#991b1b]"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  {/* Item Image (if provided) */}
                  {item.image ? (
                    <div className="relative h-48 w-full overflow-hidden bg-amber-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#c62828] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                          {item.badge}
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white font-mono font-bold text-sm px-2.5 py-1 rounded-lg">
                        {formatNaira(item.price)}
                      </span>
                    </div>
                  ) : (
                    <div className="p-5 pb-0 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block mb-1">
                          {item.categoryLabel}
                        </span>
                        {item.badge && (
                          <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded mb-2">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-bold text-base text-[#c62828] tabular-nums shrink-0">
                        {formatNaira(item.price)}
                      </span>
                    </div>
                  )}

                  {/* Item Details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#c62828] transition-colors">
                        {item.name}
                      </h3>
                      {item.image && (
                        <span className="text-[10px] font-medium text-slate-400 shrink-0 mt-1">
                          {item.categoryLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-amber-50/70 pt-3">
                  <a
                    href={RESTAURANT_DATA.telLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#c62828] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c62828]" />
                    <span>Call to Order</span>
                  </a>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95"
                    title={`Select ${item.name} for inquiry form`}
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-[#c62828]" />
                    <span>Select Item</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer / Note */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> Menu items and prices may vary slightly based on market availability. Call to confirm today's fresh special!
            </span>
          </div>
          <a
            href={RESTAURANT_DATA.telLink}
            className="text-xs font-bold text-[#c62828] hover:text-[#991b1b] underline whitespace-nowrap"
          >
            Call {RESTAURANT_DATA.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
