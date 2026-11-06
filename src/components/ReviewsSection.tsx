import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_DATA } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#faf6ef] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Overview Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-amber-200/70">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c62828] uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What People Are Saying
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real feedback from locals in Uromi and visitors from Ekpoma.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-amber-200 shrink-0">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-amber-100">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tabular-nums">
                {RESTAURANT_DATA.rating}
              </span>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-200 text-amber-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">
                83 Verified Reviews
              </div>
              <div className="text-[11px] text-slate-500">
                Google Business Profile
              </div>
              <a
                href={RESTAURANT_DATA.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#c62828] hover:text-[#991b1b]"
              >
                <span>Read more on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md border border-amber-100 relative min-h-[260px] flex flex-col justify-between">
            <Quote className="w-12 h-12 text-amber-200 absolute top-6 right-6 pointer-events-none" />

            <div>
              {/* Star rating for this review */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-display text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed mb-6 italic">
                “{currentReview.quote}”
              </p>
            </div>

            {/* Author info & controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-amber-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-[#c62828] font-display font-bold flex items-center justify-center">
                  {currentReview.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{currentReview.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500">
                    {currentReview.location} · {currentReview.date}
                  </div>
                </div>
              </div>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c62828]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'w-6 bg-[#c62828]' : 'w-2 bg-amber-200'
                      }`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c62828]"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Read more reviews CTA */}
        <div className="mt-10 text-center">
          <a
            href={RESTAURANT_DATA.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-slate-800 border border-amber-300 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <span>Read all 83 Google reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
