import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { MenuSection } from './components/MenuSection';
import { BakerySection } from './components/BakerySection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { DeliverySection } from './components/DeliverySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleSelectItemForOrder = (itemName: string) => {
    setSelectedMenuItem(itemName);
  };

  const handleOrderForEvents = () => {
    setSelectedMenuItem('Bakery & Event Catering (Custom Cake & Fresh Bread)');
  };

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-slate-800 flex flex-col font-sans selection:bg-[#c62828] selection:text-white">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Info Strip */}
        <QuickInfoStrip />

        {/* 4. Menu Section */}
        <MenuSection onSelectItemForOrder={handleSelectItemForOrder} />

        {/* 5. Bakery & Confectionery Section */}
        <BakerySection onOrderForEvents={handleOrderForEvents} />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Gallery Section with Lightbox */}
        <GallerySection />

        {/* 8. Reviews Section */}
        <ReviewsSection />

        {/* 9. Delivery Section */}
        <DeliverySection />

        {/* 10. Visit Us & Order Enquiry Form */}
        <ContactSection prefilledItem={selectedMenuItem} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Call to Order Button (Mobile only) */}
      <FloatingCallButton />
    </div>
  );
}
