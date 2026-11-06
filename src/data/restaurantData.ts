export interface MenuItem {
  id: string;
  name: string;
  category: 'soups' | 'grill' | 'snacks' | 'bakery' | 'desserts';
  categoryLabel: string;
  price: number;
  description: string;
  image?: string;
  isPopular?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const RESTAURANT_DATA = {
  name: "Hommix Unique Fast Food",
  shortName: "Hommix",
  tagline: "Good food. Fair prices. Always open.",
  subheading: "Breakfast, lunch, dinner, and fresh bakes. Dine in, take away, or get it delivered. Open 24 hours.",
  phone: "0902 015 1066",
  phoneRaw: "+2349020151066",
  telLink: "tel:09020151066",
  address: "Afuda Rd, Uromi 311115, Edo State, Nigeria",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Hommix+Unique+Fast+Food+Afuda+Rd+Uromi+Edo+State",
  googleReviewsUrl: "https://www.google.com/search?q=Hommix+Unique+Fast+Food+Uromi+reviews",
  rating: 4.1,
  reviewCount: 83,
  hours: "Open 24 Hours",
  deliveryAreas: [
    "Uromi Township (Afuda Rd, Market Area, Mission Rd, Palace Way)",
    "Ekpoma (AAU Campus, Irrua Junction, Eguare & Environs)"
  ],
  features: [
    {
      id: "dine-in",
      title: "Dine-In",
      description: "Generous indoor dining & cool outdoor seating for family and friends.",
      icon: "UtensilsCrossed"
    },
    {
      id: "drive-through",
      title: "Drive-Through & Pick-Up",
      description: "Fast parking and express counter service for travellers on the go.",
      icon: "Car"
    },
    {
      id: "delivery",
      title: "Fast Delivery",
      description: "Direct dispatch across Uromi township and Ekpoma AAU areas.",
      icon: "Bike"
    },
    {
      id: "takeaway",
      title: "Hygienic Takeaway",
      description: "Neatly sealed, piping-hot packs ensuring your food stays fresh.",
      icon: "PackageCheck"
    }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'soups', label: 'Soups & Swallows' },
  { id: 'grill', label: 'Fried & Grilled' },
  { id: 'snacks', label: 'Snacks & Sides' },
  { id: 'bakery', label: 'Bakery Specials' },
  { id: 'desserts', label: 'Desserts & Drinks' }
] as const;

export type MenuCategoryId = typeof MENU_CATEGORIES[number]['id'];

export const MENU_ITEMS: MenuItem[] = [
  // Soups & Swallows
  {
    id: "obolo-soup",
    name: "Special Esan Obolo Soup",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 2200,
    description: "Authentic Esan native draw soup slow-simmered with stockfish, dry fish, crayfish, and local herbs.",
    badge: "Esan Special",
    isPopular: true
  },
  {
    id: "egusi-soup",
    name: "Melon Soup (Egusi) with Assorted Meat",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 2000,
    description: "Rich melon seed soup prepared with bitter leaf, ugwu greens, and savory cuts of beef and cow skin.",
    image: "/assets/aistudio/unnamed_781967b8.jpg",
    badge: "House Favorite",
    isPopular: true
  },
  {
    id: "cassava-santana",
    name: "Cassava Santana (Fresh Fufu)",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 400,
    description: "Soft, smooth steamed cassava rolls, freshly prepared daily and wrapped hot.",
    image: "/assets/aistudio/unnamed_910678e8.jpg",
    isPopular: true
  },
  {
    id: "yellow-garri-eba",
    name: "Yellow Garri (Hot Eba)",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 400,
    description: "Hand-turned golden yellow garri with rich texture, perfect for our hot native soups.",
    image: "/assets/aistudio/unnamed_011960e4.jpg",
    isPopular: true
  },
  {
    id: "ogbono-soup",
    name: "Ogbono Draw Soup",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 2000,
    description: "Richly seasoned wild mango seed draw soup packed with assorted meats, kpomo, and dry fish."
  },
  {
    id: "pounded-yam",
    name: "Hot Pounded Yam",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 600,
    description: "Steaming, elastic pounded yam roll made from fresh local yams."
  },
  {
    id: "semovita",
    name: "Semovita / Wheat Swallow",
    category: "soups",
    categoryLabel: "Soups & Swallows",
    price: 500,
    description: "Silky smooth swallow prepared firm and warm to order."
  },

  // Fried & Grilled
  {
    id: "jollof-chicken",
    name: "Party Jollof Rice with Fried Chicken",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 2800,
    description: "Signature Nigerian smoky jollof rice paired with seasoned, succulent deep-fried chicken quarters.",
    image: "/assets/aistudio/unnamed_60672338.jpg",
    badge: "Best Seller",
    isPopular: true
  },
  {
    id: "cow-meat-peppersoup",
    name: "Cow Meat Pepper Soup",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 2500,
    description: "Aromatic spicy broth with tender cuts of cow meat, tripe, and traditional digestive peppers.",
    image: "/assets/aistudio/unnamed_e4ab5671.jpg",
    badge: "Spicy & Hot",
    isPopular: true
  },
  {
    id: "fried-fish-onions",
    name: "Spicy Fried Fish with Raw Onion Rings",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 2200,
    description: "Crispy fried whole fish steaks tossed in pepper glaze and garnished with fresh purple onions.",
    image: "/assets/aistudio/unnamed_6a0cef71.jpg",
    isPopular: true
  },
  {
    id: "cow-head-special",
    name: "Cow Head & Shaki Pepper Soup",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 2600,
    description: "Comforting piping-hot broth loaded with rich cow head chunks, tendon, and shaki.",
    image: "/assets/aistudio/unnamed_21abbea0.jpg"
  },
  {
    id: "fried-meat-plate",
    name: "Seasoned Fried Beef & Offals",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 1800,
    description: "Deep-marinated chunks of fried beef, liver, and kpomo seasoned with fresh peppers."
  },
  {
    id: "fried-rice",
    name: "Special Vegetable Fried Rice",
    category: "grill",
    categoryLabel: "Fried & Grilled",
    price: 2800,
    description: "Wok-style savoury rice cooked in chicken stock with carrots, peas, sweet corn, and chicken."
  },

  // Snacks & Sides
  {
    id: "hommix-meat-pie",
    name: "Hommix Golden Meat Pie",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 800,
    description: "Flaky, buttery pastry filled with well-spiced minced beef, soft potatoes, and carrots.",
    isPopular: true
  },
  {
    id: "chicken-pie",
    name: "Golden Chicken Pie",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 900,
    description: "Rich crust enveloping tender shredded chicken breasts in savoury white sauce."
  },
  {
    id: "sausage-roll",
    name: "Hommix Sausage Roll",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 600,
    description: "Puff pastry roll baked with juicy seasoned beef sausage."
  },
  {
    id: "scotch-egg",
    name: "Hommix Scotch Egg",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 700,
    description: "Whole hard-boiled egg wrapped in spiced minced meat with crispy breadcrumb crust."
  },
  {
    id: "fried-plantain",
    name: "Sweet Fried Plantain (Dodo)",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 600,
    description: "Ripe, golden fried plantain cuts — sweet, soft, and caramelized."
  },
  {
    id: "moi-moi",
    name: "Steamed Moi Moi Elewe",
    category: "snacks",
    categoryLabel: "Snacks & Sides",
    price: 700,
    description: "Rich steamed bean pudding flavoured with fish, egg, and fresh sweet peppers."
  },

  // Bakery Specials
  {
    id: "hommix-family-bread",
    name: "Hommix Signature Fresh Bread",
    category: "bakery",
    categoryLabel: "Bakery Specials",
    price: 1200,
    description: "Piping-hot soft loaf baked in-house multiple times daily. Pillowy crumb with sweet crust.",
    badge: "Fresh From Oven",
    isPopular: true
  },
  {
    id: "butter-coconut-bread",
    name: "Rich Coconut Butter Bread",
    category: "bakery",
    categoryLabel: "Bakery Specials",
    price: 1500,
    description: "Fluffy artisan loaf enriched with pure cream butter and toasted coconut flakes."
  },
  {
    id: "doughnuts-box",
    name: "Jam & Sugar Glazed Doughnuts (Pack of 3)",
    category: "bakery",
    categoryLabel: "Bakery Specials",
    price: 1000,
    description: "Soft yeasted doughnuts filled with fruit jam and dusted with fine sugar."
  },
  {
    id: "celebration-cake",
    name: "Celebration & Birthday Cakes (Pre-Order)",
    category: "bakery",
    categoryLabel: "Bakery Specials",
    price: 12000,
    description: "Custom whipped cream or fondant cakes for weddings, anniversaries, and birthdays in Uromi.",
    badge: "Event Order"
  },

  // Desserts & Drinks
  {
    id: "ice-cream-bowl",
    name: "Soft Serve & Scoop Ice Cream",
    category: "desserts",
    categoryLabel: "Desserts & Drinks",
    price: 1000,
    description: "Chilled rich scoops of vanilla, strawberry, or chocolate served in a cup or waffle cone.",
    badge: "Kids & Youth Favorite",
    isPopular: true
  },
  {
    id: "chilled-zobo",
    name: "Homely Chilled Zobo with Pineapple",
    category: "desserts",
    categoryLabel: "Desserts & Drinks",
    price: 500,
    description: "Refreshing cold brewed hibiscus drink infused with spicy ginger, cloves, and natural pineapple juice."
  },
  {
    id: "tiger-nut-milk",
    name: "Cold Tiger Nut Milk (Kunu Aya)",
    category: "desserts",
    categoryLabel: "Desserts & Drinks",
    price: 700,
    description: "Rich natural tiger nut, coconut, and date blend served icy cold."
  },
  {
    id: "malt-drink",
    name: "Chilled Malt Drink (Maltina / Malta Guinness)",
    category: "desserts",
    categoryLabel: "Desserts & Drinks",
    price: 600,
    description: "Rich nourishing malt drink served cold from our chillers."
  },
  {
    id: "soft-drinks",
    name: "Canned Soft Drinks & Pure Water",
    category: "desserts",
    categoryLabel: "Desserts & Drinks",
    price: 500,
    description: "Choice of Coca-Cola, Fanta, Sprite, or chilled bottled table water."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "A homely and pocket-friendly place for breakfast, lunch, and dinner. The yellow eba and egusi soup hit the spot every single time, and the price is unbelievable for the portion!",
    author: "Osasere E.",
    location: "Uromi Resident & Local Guide",
    rating: 5,
    date: "Verified Google Review"
  },
  {
    id: "t2",
    quote: "Tasty food and great value. We ordered cow meat pepper soup and jollof rice at midnight after a long drive down from Benin. Fast service, hot food, and friendly staff even at 1 AM!",
    author: "Kenneth I.",
    location: "Ekpoma Visitor",
    rating: 4.5,
    date: "Verified Google Review"
  },
  {
    id: "t3",
    quote: "Lovely bread and plenty of seating. Their bakery bread is always soft, fresh from the oven, and sweet. There is enough outdoor space to relax with friends without any hassle.",
    author: "Blessing A.",
    location: "Afuda Road Regular",
    rating: 4.5,
    date: "Verified Google Review"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Nigerian Jollof Rice & Fried Chicken",
    category: "Mains & Grills",
    image: "/assets/aistudio/unnamed_60672338.jpg",
    caption: "Piping-hot smoky jollof rice prepared in traditional cast pans with well-seasoned chicken."
  },
  {
    id: "g2",
    title: "Rich Egusi Soup with Assorted Cuts",
    category: "Soups & Swallows",
    image: "/assets/aistudio/unnamed_781967b8.jpg",
    caption: "Freshly cooked melon soup loaded with beef, cow skin, and spicy palm oil stew."
  },
  {
    id: "g3",
    title: "Spicy Fried Fish with Sliced Onions",
    category: "Mains & Grills",
    image: "/assets/aistudio/unnamed_6a0cef71.jpg",
    caption: "Golden-crisped whole fish cuts tossed in savoury hot sauce with sweet red onions."
  },
  {
    id: "g4",
    title: "Fresh Cassava Santana & Yellow Eba",
    category: "Soups & Swallows",
    image: "/assets/aistudio/unnamed_910678e8.jpg",
    caption: "Neatly wrapped rolls of cassava fufu and yellow garri eba kept hot at our display counter."
  },
  {
    id: "g5",
    title: "Cow Meat & Offal Pepper Soup Broth",
    category: "Pepper Soup Special",
    image: "/assets/aistudio/unnamed_e4ab5671.jpg",
    caption: "Tender cow meat and intestines simmering in our fragrant native spice pepper soup."
  },
  {
    id: "g6",
    title: "Traditional Cow Head Delicacy",
    category: "Pepper Soup Special",
    image: "/assets/aistudio/unnamed_21abbea0.jpg",
    caption: "Tender cooked cow head cuts served in authentic seasoned broth."
  },
  {
    id: "g7",
    title: "Hommix Unique Fast Food Signboard",
    category: "Our Restaurant",
    image: "/assets/aistudio/unnamed_9ceb5232.jpg",
    caption: "Afuda Road, Uromi — Eat & Take Away, Bakery, Bar, and 24-hour delivery."
  }
];
