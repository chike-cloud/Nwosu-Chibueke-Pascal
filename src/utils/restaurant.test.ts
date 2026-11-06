import test from 'node:test';
import assert from 'node:assert/strict';
import { formatNaira, filterMenuItems, validateOrderEnquiry } from './restaurant';
import { MenuItem } from '../data/restaurantData';

test('formatNaira formats positive numbers with Naira symbol and commas', () => {
  assert.equal(formatNaira(2800), '₦2,800');
  assert.equal(formatNaira(400), '₦400');
  assert.equal(formatNaira(12000), '₦12,000');
  assert.equal(formatNaira(0), '₦0');
  assert.equal(formatNaira(-50), '₦0');
});

test('filterMenuItems filters by category accurately', () => {
  const dummyItems: MenuItem[] = [
    { id: '1', name: 'Melon Soup', category: 'soups', categoryLabel: 'Soups', price: 2000, description: 'Delicious melon' },
    { id: '2', name: 'Jollof Rice', category: 'grill', categoryLabel: 'Grill', price: 2800, description: 'Smoky party rice' },
    { id: '3', name: 'Fresh Bread', category: 'bakery', categoryLabel: 'Bakery', price: 1200, description: 'Warm bread loaf' }
  ];

  const soups = filterMenuItems(dummyItems, 'soups');
  assert.equal(soups.length, 1);
  assert.equal(soups[0].name, 'Melon Soup');

  const all = filterMenuItems(dummyItems, 'all');
  assert.equal(all.length, 3);
});

test('filterMenuItems filters by search query', () => {
  const dummyItems: MenuItem[] = [
    { id: '1', name: 'Melon Soup', category: 'soups', categoryLabel: 'Soups', price: 2000, description: 'Delicious melon' },
    { id: '2', name: 'Cow Meat Pepper Soup', category: 'grill', categoryLabel: 'Grill', price: 2500, description: 'Hot spicy broth' },
    { id: '3', name: 'Fresh Bread', category: 'bakery', categoryLabel: 'Bakery', price: 1200, description: 'Warm bread loaf' }
  ];

  const searchSoup = filterMenuItems(dummyItems, 'all', 'pepper');
  assert.equal(searchSoup.length, 1);
  assert.equal(searchSoup[0].id, '2');
});

test('validateOrderEnquiry validates required fields and Nigerian phone numbers', () => {
  // Empty data
  const invalid = validateOrderEnquiry({
    name: '',
    phone: '',
    items: '',
    deliveryArea: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.items);
  assert.ok(invalid.errors.deliveryArea);

  // Valid data
  const valid = validateOrderEnquiry({
    name: 'Rita Nwosu',
    phone: '09020151066',
    items: '2 packs of Jollof rice and 1 Egusi soup with Yellow Garri',
    deliveryArea: 'Uromi Township'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
