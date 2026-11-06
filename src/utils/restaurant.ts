import { MenuItem } from '../data/restaurantData';

export interface OrderEnquiryInput {
  name: string;
  phone: string;
  items: string;
  deliveryArea: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Formats a numeric price into Nigerian Naira currency format (e.g. ₦2,500)
 */
export function formatNaira(amount: number): string {
  if (isNaN(amount) || amount < 0) return '₦0';
  return `₦${amount.toLocaleString('en-NG')}`;
}

/**
 * Filters menu items by category and optional search term
 */
export function filterMenuItems(
  items: MenuItem[],
  category: string,
  searchQuery: string = ''
): MenuItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query) ||
      (item.badge && item.badge.toLowerCase().includes(query))
    );
  });
}

/**
 * Validates the order enquiry form
 */
export function validateOrderEnquiry(data: OrderEnquiryInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  // Nigerian phone check: standard 11 digits (e.g. 09020151066 or +234...)
  const cleanPhone = (data.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanPhone) {
    errors.phone = 'Phone number is required for order confirmation.';
  } else if (!/^(?:\+234|0)[789][01]\d{8}$/.test(cleanPhone) && cleanPhone.length < 10) {
    errors.phone = 'Please enter a valid phone number (e.g. 0902 015 1066).';
  }

  if (!data.items || data.items.trim().length < 3) {
    errors.items = 'Please specify what you would like to order.';
  }

  if (!data.deliveryArea || data.deliveryArea.trim().length === 0) {
    errors.deliveryArea = 'Please select your delivery area or pickup preference.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Generates formatted text for sending via WhatsApp or SMS
 */
export function createWhatsAppOrderText(data: OrderEnquiryInput): string {
  const cleanName = data.name.trim();
  const cleanPhone = data.phone.trim();
  const cleanItems = data.items.trim();
  const cleanArea = data.deliveryArea.trim();
  const notes = data.message ? `\nSpecial Instructions: ${data.message.trim()}` : '';

  return `Hello Hommix Unique Fast Food! I would like to place an order:%0A%0A*Name:* ${encodeURIComponent(cleanName)}%0A*Phone:* ${encodeURIComponent(cleanPhone)}%0A*Order:* ${encodeURIComponent(cleanItems)}%0A*Delivery / Pickup:* ${encodeURIComponent(cleanArea)}${notes ? encodeURIComponent(notes) : ''}`;
}
