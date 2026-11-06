import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
  }, [selectedItemIndex]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
  }, [selectedItemIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handlePrev, handleNext]);

  const activeItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#fffdfa] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c62828] uppercase tracking-wider mb-2">
            <ImageIcon className="w-4 h-4 text-[#c62828]" />
            <span>Real Food, Real Moments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Photo Gallery & Daily Specialties
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Take a look inside our kitchen and counters. From sizzling jollof rice and rich egusi to steaming swallows and crispy fried fish.
          </p>
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`View photo of ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-black/50 backdrop-blur-md text-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Click on any photo to expand into high-resolution view.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && selectedItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close photo lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & Counter */}
            <div className="w-full text-center mt-4 px-4 text-white">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white/70">
                  {selectedItemIndex + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
