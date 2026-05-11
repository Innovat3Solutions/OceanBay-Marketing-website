export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  sku: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
};

export const categories = [
  { id: 'engine-parts', name: 'Engine Parts', image: 'https://images.unsplash.com/photo-1542157585-ef20bfc24b43?q=80&w=2070&auto=format&fit=crop' },
  { id: 'navigation', name: 'Navigation Electronics', image: 'https://images.unsplash.com/photo-1615783309279-d264fcfbf989?q=80&w=2070&auto=format&fit=crop' },
  { id: 'docking', name: 'Docking Equipment', image: 'https://images.unsplash.com/photo-1582218491418-47eacdc6f4e3?q=80&w=2056&auto=format&fit=crop' },
  { id: 'hardware', name: 'Stainless Hardware', image: 'https://images.unsplash.com/photo-1517409278070-5f21cbd10696?q=80&w=2069&auto=format&fit=crop' },
  { id: 'safety', name: 'Safety Equipment', image: 'https://images.unsplash.com/photo-1596489816654-e67c87c7b80a?q=80&w=2070&auto=format&fit=crop' },
  { id: 'fishing', name: 'Fishing Accessories', image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Precision Stainless Steel Cleat - 8"',
    category: 'Stainless Hardware',
    price: 125.00,
    image: 'https://images.unsplash.com/photo-1559132142-ff59fec2d9df?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    reviews: 128,
    sku: 'CLEAT-SS-08',
    isBestseller: true,
    description: 'Marine-grade 316 stainless steel hollow base cleat. Designed for maximum strength and corrosion resistance in harsh saltwater environments.'
  },
  {
    id: 'p2',
    name: 'Nova Pro Navigation Display - 12"',
    category: 'Navigation Electronics',
    price: 2499.00,
    image: 'https://images.unsplash.com/photo-1662998637778-cd8c520db6af?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    reviews: 45,
    sku: 'NAV-NOVA-12',
    isNew: true,
    description: 'Ultra-bright display with multi-touch interface. Includes sonar integration, chart plotting, and radar capabilities in a low-profile premium glass housing.'
  },
  {
    id: 'p3',
    name: 'Offshore Survival Kit Pro',
    category: 'Safety Equipment',
    price: 349.50,
    image: 'https://images.unsplash.com/photo-1616110940562-f1d2830e7968?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0,
    reviews: 212,
    sku: 'SAFE-SURV-PRO',
    description: 'Comprehensive offshore survival kit housed in a waterproof, buoyant case. Meets all USCG requirements for vessels over 40 feet.'
  },
  {
    id: 'p4',
    name: 'Premium Three-Strand Dock Line - 5/8" x 25\'',
    category: 'Docking Equipment',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1582218491418-47eacdc6f4e3?q=80&w=2056&auto=format&fit=crop',
    rating: 4.7,
    reviews: 310,
    sku: 'DOCK-LN-5825',
    isBestseller: true,
    description: 'High-strength premium nylon dock line. Spliced eye on one end. Resists chafing, chemicals, and UV damage while maintaining flexibility.'
  },
  {
    id: 'p5',
    name: 'High-Torque Performance Starter',
    category: 'Engine Parts',
    price: 415.00,
    image: 'https://plus.unsplash.com/premium_photo-1661877478335-512c140c83d6?q=80&w=1932&auto=format&fit=crop',
    rating: 4.6,
    reviews: 84,
    sku: 'ENG-START-HT',
    description: 'Corrosion-resistant epoxy powder coated starter. Delivers increased torque for reliable starting in extreme marine conditions.'
  },
  {
    id: 'p6',
    name: 'Anodized Outrigger Base Set',
    category: 'Fishing Accessories',
    price: 1850.00,
    image: 'https://images.unsplash.com/photo-1610471927702-8a9d949fe52c?q=80&w=2072&auto=format&fit=crop',
    rating: 4.9,
    reviews: 37,
    sku: 'FISH-OUT-BASE',
    isNew: true,
    description: 'Precision machined anodized aluminum outrigger bases. Smooth operation and unmatched durability for serious offshore sport fishing.'
  }
];
