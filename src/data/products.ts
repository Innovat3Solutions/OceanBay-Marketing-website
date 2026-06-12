export type ProductSpec = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  model: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  sku: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
  includes: string[];
  specs: ProductSpec[];
  compatibility: string[];
  manufacturerUrl: string;
};

export const CATALOG_URL = 'https://online.fliphtml5.com/dwiaq/Catalogo_2026/';

export const categories = [
  { id: 'hydraulic-kits', name: 'Hydraulic Steering Kits', image: '/products/gf150brt.jpg' },
  { id: 'helm-pumps', name: 'Helm Pumps', image: '/products/gm2-mra01-t.jpg' },
  { id: 'steering-wheels', name: 'Steering Wheels', image: '/products/vcr35.jpg' },
  { id: 'cylinders', name: 'Cylinders', image: '/products/gf300hd.jpg' },
  { id: 'hoses-fittings', name: 'Hoses & Fittings', image: '/products/gf90bt.jpg' },
  { id: 'accessories', name: 'Accessories', image: '/products/gf350hd.jpg' },
];

export const products: Product[] = [
  {
    id: 'gf90bt',
    name: 'GF90BT Hydraulic Steering System, up to 80 hp',
    model: 'GF90BT',
    category: 'Hydraulic Steering Kits',
    image: '/products/gf90bt.jpg',
    rating: 4.8,
    reviews: 64,
    sku: 'OBM-GF90BT',
    description:
      'Complete Mavi Mare hydraulic steering system, packaged in a box, for outboard engines up to 80 hp. Ships ready to install. The dependable choice for small center consoles, skiffs, and bay boats.',
    includes: [
      'GM3-MRA helm pump',
      'MC90B universal compact cylinder (frontal mounting, bull horn type)',
      'Chrome-plated brass fittings (1× GTN7X10916ORB + 1× AC10/T916)',
      'Fast-connection filler tube kit (Art. X.372)',
      '1 liter Mavi Mare H-AP51 hydraulic oil',
      'Two 5 m hoses, SAE 100 R7 1/4″, fittings pressed on one end'
    ],
    specs: [
      { label: 'Max Engine Power', value: 'Up to 80 hp' },
      { label: 'Turns (lock-to-lock)', value: '4.9' },
      { label: 'Helm Pump', value: 'GM3-MRA' },
      { label: 'Cylinder', value: 'MC90B (frontal mounting, bull horn type)' },
      { label: 'Hoses', value: '2 × 5 m, SAE 100 R7 1/4″ (5/16″ available)' },
      { label: 'Hydraulic Oil', value: '1 liter (Art. H-AP51)' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Use kit X.342 for Yamaha / Tohatsu 40, 50, 60, 70 hp engines',
      '5/16″ hose recommended for high-performance installations'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gf90bt-up-to-80hp/'
  },
  {
    id: 'gf150brt',
    name: 'GF150BRT Hydraulic Steering System, up to 150 hp',
    model: 'GF150BRT',
    category: 'Hydraulic Steering Kits',
    image: '/products/gf150brt.jpg',
    rating: 4.9,
    reviews: 102,
    sku: 'OBM-GF150BRT',
    isBestseller: true,
    description:
      'Mid-range Mavi Mare hydraulic steering kit engineered for outboards up to 150 hp. Balanced bull-horn cylinder design and 6-meter hoses give you flexible install routing on mid-size center consoles and performance fishing boats.',
    includes: [
      'GM0-MRA helm pump',
      'MC150BR cylinder (frontal mounting, balanced bull horn type)',
      'Chrome-plated brass fittings (1× GTN7X10916ORB kit + 1× AC10/T916 kit)',
      'Fast-connection filler tube kit (Art. X.372)',
      '2 liters Mavi Mare H-AP51 hydraulic oil',
      'Two 6 m hoses, SAE 100 R7 1/4″, fittings pressed on one end'
    ],
    specs: [
      { label: 'Max Engine Power', value: 'Up to 150 hp' },
      { label: 'Turns (lock-to-lock)', value: '4.9' },
      { label: 'Helm Pump', value: 'GM0-MRA' },
      { label: 'Cylinder', value: 'MC150BR (balanced bull horn, frontal mounting)' },
      { label: 'Hoses', value: '2 × 6 m, SAE 100 R7 1/4″ (5/16″ available)' },
      { label: 'Hydraulic Oil', value: '2 liters (Art. H-AP51)' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Use kit X.342 for Yamaha / Tohatsu 40, 50, 60, 70 hp and Honda 115 / 130 hp (discontinued)',
      'Also compatible with Mercury Optimax 90 / 115 hp',
      'Hoses available pre-fitted on both ends on request'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gf150brt/'
  },
  {
    id: 'gf300hd',
    name: 'GF300HD Reinforced Hydraulic Steering, up to 300 hp',
    model: 'GF300HD',
    category: 'Hydraulic Steering Kits',
    image: '/products/gf300hd.jpg',
    rating: 4.9,
    reviews: 41,
    sku: 'OBM-GF300HD',
    isBestseller: true,
    description:
      'Heavy-duty reinforced Mavi Mare steering system built for outboards up to 300 hp, or twin 300 hp counter-rotating setups (600 hp combined). The HD cylinder and 5/16″ hoses handle the loads of high-horsepower installs.',
    includes: [
      'GM2-MRA01 helm pump with standard square bezel kit (Art. X.343)',
      'MC300HD heavy-duty cylinder (frontal mounting, balanced bullhorn type)',
      'Chrome-plated brass fittings (1× GTN7X10916ORB kit + 1× AC38/T916 kit)',
      'Fast-connection filler tube kit',
      '2 liters Mavi Mare H-AP51 hydraulic oil',
      'Two 7.5 m hoses, SAE 100 R7 5/16″, fittings pressed on one end'
    ],
    specs: [
      { label: 'Max Engine Power', value: 'Up to 300 hp (single) or 2 × 300 hp counter-rotating' },
      { label: 'Turns (lock-to-lock)', value: '5.2' },
      { label: 'Helm Pump', value: 'GM2-MRA01 (with X.343 bezel)' },
      { label: 'Cylinder', value: 'MC300HD (heavy duty, balanced bullhorn)' },
      { label: 'Hoses', value: '2 × 7.5 m, SAE 100 R7 5/16″' },
      { label: 'Hydraulic Oil', value: '2 liters (Art. H-AP51)' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Use kit X.393 for Suzuki 150A / 175A / 200A engines',
      'Not intended for racing boats',
      'Hoses available fully fitted on both ends on request'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gf300hd/'
  },
  {
    id: 'gf300bhd',
    name: 'GF300BHD Evolution Hydraulic Steering, up to 300 hp',
    model: 'GF300BHD',
    category: 'Hydraulic Steering Kits',
    image: '/products/gf300hd.jpg',
    rating: 5.0,
    reviews: 12,
    sku: 'OBM-GF300BHD',
    isNew: true,
    description:
      'Reinforced Mavi Mare "Evolution" steering system with the patented fixed-hose cylinder, built for outboards up to 300 hp or twin 300 hp counter-rotating setups (600 hp combined). Performance steering with simplified installation thanks to the integrated fixed hoses on the balanced bullhorn cylinder.',
    includes: [
      'GM2-MRA01 helm pump with standard square bezel kit',
      'MC300BHD heavy-duty cylinder (frontal mounting, balanced bullhorn, fixed hoses)',
      'Chrome-plated brass fittings (2 kits included)',
      'Fast-connection filler tube kit',
      '2 liters Mavi Mare H-AP51 hydraulic oil',
      'Two 7.5 m hoses, SAE 100 R7 5/16″, fittings pressed on one end'
    ],
    specs: [
      { label: 'Max Engine Power', value: 'Up to 300 hp (single) or 2 × 300 hp counter-rotating' },
      { label: 'Turns (lock-to-lock)', value: '5' },
      { label: 'Helm Pump', value: 'GM2-MRA01 (with square bezel kit)' },
      { label: 'Cylinder', value: 'MC300BHD (heavy duty, balanced bullhorn, patented fixed-hose Evolution)' },
      { label: 'Hoses', value: '2 × 7.5 m, SAE 100 R7 5/16″' },
      { label: 'Hydraulic Oil', value: '2 liters (Art. H-AP51)' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Optional frontal hose connection kit (X.344) for limited-clearance installations',
      'Use kit X.393 for Suzuki 150A / 175A / 200A engines',
      'Not intended for racing boats'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gf300bhd-evolution-up-to-300-hp/'
  },
  {
    id: 'gf350hd',
    name: 'GF350HD Reinforced Hydraulic Steering, up to 350 hp',
    model: 'GF350HD',
    category: 'Hydraulic Steering Kits',
    image: '/products/gf350hd.jpg',
    rating: 5.0,
    reviews: 28,
    sku: 'OBM-GF350HD',
    isNew: true,
    description:
      'Top-tier Mavi Mare reinforced steering kit rated for outboards up to 350 hp, or twin 350 hp counter-rotating engines (700 hp combined). Designed for offshore center consoles and high-performance vessels where steering precision is non-negotiable.',
    includes: [
      'GM2-MRA01 helm pump with standard square bezel kit (Art. X.343)',
      'MC350HD heavy-duty cylinder (frontal mounting, balanced bullhorn type)',
      'Chrome-plated brass fittings (1× GTN7X10916ORB kit + 1× AC38/T916 kit)',
      '2 liters Mavi Mare H-AP51 hydraulic oil',
      'Two 7.5 m hoses, SAE 100 R7 5/16″, fittings pressed on one end'
    ],
    specs: [
      { label: 'Max Engine Power', value: 'Up to 350 hp (single) or 2 × 350 hp counter-rotating' },
      { label: 'Turns (lock-to-lock)', value: '5.2' },
      { label: 'Helm Pump', value: 'GM2-MRA01 (with X.343 bezel)' },
      { label: 'Cylinder', value: 'MC350HD (heavy duty, frontal mounting)' },
      { label: 'Hoses', value: '2 × 7.5 m, SAE 100 R7 5/16″' },
      { label: 'Hydraulic Oil', value: '2 liters (Art. H-AP51)' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Use kit X.394 for Suzuki 150A / 175A / 200A engines',
      'Not intended for racing boats',
      'Hoses available with both ends pre-fitted on request'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gf350hd-reinforced-steering-up-to-350-hp/'
  },
  {
    id: 'gm2-mra01-t',
    name: 'GM2-MRA01-T Tilt Steering Helm Pump',
    model: 'GM2-MRA01-T',
    category: 'Helm Pumps',
    image: '/products/gm2-mra01-t.jpg',
    rating: 4.9,
    reviews: 36,
    sku: 'OBM-GM2-MRA01-T',
    isNew: true,
    description:
      'Compact tilt-adjustable helm pump with built-in lock valve and over-pressure valve. Stainless steel AISI 316 shaft and cast iron rotor for long service life. Five locking positions across a 50° tilt range deliver an ergonomic helm setup for long days underway.',
    includes: [
      'GM2-MRA01-T helm pump body',
      'Built-in lock valve',
      'Built-in over-pressure valve',
      'Stainless steel AISI 316 shaft',
      'Cast iron rotor'
    ],
    specs: [
      { label: 'Displacement', value: '27 cm³' },
      { label: 'Pistons', value: '7' },
      { label: 'Max Pressure', value: '70 bar' },
      { label: 'Max Wheel Diameter', value: '406 mm (16″)' },
      { label: 'Tilt Range', value: '50° with 5 locking positions' },
      { label: 'Weight', value: '5.5 kg' },
      { label: 'Shaft', value: 'Stainless steel AISI 316' },
      { label: 'Rotor', value: 'Cast iron' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Available in four displacements: 27, 32, 39, 43 cm³ (MRA01 / MRA03 / MRA04 / MRA05)',
      'Pairs with Mavi Mare MC-series cylinders'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-gm2-mra01-t-tilt-steering-helm-pump/'
  },
  {
    id: 'vcr35',
    name: 'V.CR35 Carbon-Fiber Steering Wheel',
    model: 'V.CR35',
    category: 'Steering Wheels',
    image: '/products/vcr35.jpg',
    rating: 4.8,
    reviews: 19,
    sku: 'OBM-VCR35',
    description:
      'Lightweight 350 mm steering wheel with carbon-fiber handgrip and aluminum spokes. The finishing detail that pulls a custom helm together. At home on sport fishers and performance center consoles.',
    includes: [
      'V.CR35 steering wheel (Ø 350 mm)',
      'Carbon-fiber handgrip',
      'Aluminum spokes'
    ],
    specs: [
      { label: 'Diameter', value: '350 mm' },
      { label: 'Handgrip', value: 'Carbon fiber' },
      { label: 'Spokes', value: 'Aluminum' },
      { label: 'Manufacturer', value: 'MaviMare & Mancini SRL, Italy' }
    ],
    compatibility: [
      'Compatible with Mavi Mare GM-series helm pumps (Ø 406 mm max wheel)',
      'Stainless / polyurethane variants available: V.RA35, V.RB35, V.RC35, V.RD35'
    ],
    manufacturerUrl: 'https://www.mavimare.com/en/product/art-vcr35/'
  }
];
