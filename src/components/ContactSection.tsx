import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, Navigation, ExternalLink } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { validateOrderEnquiry, createWhatsAppOrderText, OrderEnquiryInput } from '../utils/restaurant';

interface ContactSectionProps {
  prefilledItem?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledItem }) => {
  const [formData, setFormData] = useState<OrderEnquiryInput>({
    name: '',
    phone: '',
    items: '',
    deliveryArea: 'Uromi Township (Afuda / Market / Mission Rd)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lastSubmission, setLastSubmission] = useState<OrderEnquiryInput | null>(null);

  useEffect(() => {
    if (prefilledItem) {
      setFormData((prev) => {
        const existing = prev.items.trim();
        const updated = existing ? `${existing}, ${prefilledItem}` : prefilledItem;
        return { ...prev, items: updated };
      });
    }
  }, [prefilledItem]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateOrderEnquiry(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Process submission
    setLastSubmission({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      items: '',
      deliveryArea: 'Uromi Township (Afuda / Market / Mission Rd)',
      message: ''
    });
    setErrors({});
  };

  const whatsAppUrl = lastSubmission
    ? `https://wa.me/2349020151066?text=${createWhatsAppOrderText(lastSubmission)}`
    : `https://wa.me/2349020151066`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf6ef] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#c62828] uppercase tracking-wider mb-2 block">
            Visit Us & Place Orders
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Find Us on Afuda Road, Uromi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Drop by for a warm dine-in experience, grab takeaway at the counter, or send us your food order enquiry right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact details & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-100 space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 pb-4 border-b border-amber-100">
                Restaurant & Bakery Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#c62828] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Our Location
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {RESTAURANT_DATA.address}
                  </p>
                  <a
                    href={RESTAURANT_DATA.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#c62828] hover:underline mt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Telephone (Call to Order)
                  </div>
                  <a
                    href={RESTAURANT_DATA.telLink}
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#c62828] transition-colors mt-0.5 block"
                  >
                    {RESTAURANT_DATA.phone}
                  </a>
                  <p className="text-xs text-slate-500">
                    Direct line for quick orders, bread reservations & enquiries.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Operating Hours
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 flex items-center gap-2">
                    <span>{RESTAURANT_DATA.hours}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      Open Now
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Monday to Sunday — Breakfast, lunch, dinner & night kitchen.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map / Navigation Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-100">
              <div className="p-4 bg-amber-50/60 border-b border-amber-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#c62828]" />
                  <span>Google Map View · Uromi, Edo State</span>
                </span>
                <a
                  href={RESTAURANT_DATA.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#c62828] hover:underline"
                >
                  Open Full Map
                </a>
              </div>
              <div className="relative w-full h-64 bg-slate-100">
                <iframe
                  title="Hommix Unique Fast Food Google Map Location"
                  src="https://maps.google.com/maps?q=Afuda+Rd,+Uromi,+Edo+State,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Order Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-amber-100">
              {isSubmitted && lastSubmission ? (
                /* Success Confirmation State */
                <div className="text-center py-6 sm:py-8 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Order Enquiry Received!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{lastSubmission.name}</strong>. We have logged your enquiry for <strong>{lastSubmission.items}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs sm:text-sm text-slate-800 space-y-1.5 max-w-md mx-auto">
                    <div><strong>Customer:</strong> {lastSubmission.name} ({lastSubmission.phone})</div>
                    <div><strong>Selected Items:</strong> {lastSubmission.items}</div>
                    <div><strong>Delivery Location / Pickup:</strong> {lastSubmission.deliveryArea}</div>
                    {lastSubmission.message && <div><strong>Notes:</strong> {lastSubmission.message}</div>}
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    For fastest kitchen preparation, send this summary directly via WhatsApp or give us a quick call:
                  </p>

                  {/* Fast Action Buttons in Success State */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={RESTAURANT_DATA.telLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c62828] hover:bg-[#991b1b] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>Call {RESTAURANT_DATA.phone}</span>
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-500 hover:text-slate-900 underline block mx-auto pt-4"
                  >
                    Send another order enquiry
                  </button>
                </div>
              ) : (
                /* The Enquiry Form */
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-100">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                        Order & Catering Enquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Send what you'd like to eat and we'll confirm your total and delivery time.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                          Full Name <span className="text-[#c62828]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rita Osagie"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.name
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/30'
                              : 'border-slate-200 focus:ring-[#c62828] focus:border-transparent'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                          Phone Number <span className="text-[#c62828]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0902 015 1066"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/30'
                              : 'border-slate-200 focus:ring-[#c62828] focus:border-transparent'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* What you'd like */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="items" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          What Would You Like to Order? <span className="text-[#c62828]">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          (Click dishes on the menu to add here)
                        </span>
                      </div>
                      <input
                        type="text"
                        id="items"
                        name="items"
                        value={formData.items}
                        onChange={handleChange}
                        placeholder="e.g. 2 Jollof Rice with Fried Chicken, 1 Egusi Soup with Yellow Garri"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.items
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/30'
                            : 'border-slate-200 focus:ring-[#c62828] focus:border-transparent'
                        }`}
                      />
                      {errors.items && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          {errors.items}
                        </p>
                      )}
                    </div>

                    {/* Delivery Area Selection */}
                    <div>
                      <label htmlFor="deliveryArea" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Delivery Zone or Pickup Preference <span className="text-[#c62828]">*</span>
                      </label>
                      <select
                        id="deliveryArea"
                        name="deliveryArea"
                        value={formData.deliveryArea}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c62828] bg-white text-slate-800"
                      >
                        <option value="Uromi Township (Afuda / Market / Mission Rd)">
                          Uromi Township (Afuda Road, Market, Mission Rd, Palace Way)
                        </option>
                        <option value="Uromi Environs (Amedokhian, Ebhoiyi, Utako)">
                          Uromi Environs (Amedokhian, Ebhoiyi, Utako, Arue)
                        </option>
                        <option value="Ekpoma (AAU Campus / Hostels)">
                          Ekpoma (AAU Campus, Student Hostels, Irrua Junction)
                        </option>
                        <option value="Dine-in Reservation / Pickup at Counter">
                          Dine-in / Pickup in Person at Afuda Road Counter
                        </option>
                        <option value="Event Catering / Bulk Bread Inquiry">
                          Bakery & Event Catering (Cakes, Party Bread, Large Trays)
                        </option>
                      </select>
                    </div>

                    {/* Special Instructions */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Delivery Address / Special Instructions (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. Near Big Heart Filling Station, Afuda Road. Extra pepper on the chicken please."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c62828] placeholder:text-slate-400"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#c62828] hover:bg-[#991b1b] text-white py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Order Enquiry</span>
                    </button>

                    <p className="text-[11px] text-center text-slate-500 pt-1">
                      Or call directly: <a href={RESTAURANT_DATA.telLink} className="font-bold text-[#c62828] hover:underline">{RESTAURANT_DATA.phone}</a>. Open 24/7.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
