export interface ProductSpec {
  thickness?: string;
  width?: string;
  length?: string;
  finish?: string;
  color?: string;
  installationType?: string;
  warranty?: string;
  material?: string;
  waterproof?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  collection?: string;
  images: string[];
  description: string;
  longDescription?: string;
  specs: ProductSpec;
  price?: number;
  priceUnit?: string;
  requestPricing?: boolean;
  available: boolean;
  featured: boolean;
  tags?: string[];
}

export const products: Product[] = [
  // ── Engineered Hardwood ──────────────────────────
  {
    id: "eh-001",
    name: "European Oak Natural",
    slug: "european-oak-natural",
    category: "engineered-hardwood",
    collection: "Heritage Collection",
    images: ["/images/products/engineered-hardwood.png"],
    description:
      "A timeless European oak with a natural matte finish. Wire-brushed texture reveals elegant grain patterns.",
    longDescription:
      "Our European Oak Natural combines Old World craftsmanship with modern engineering. Each plank features a 4mm European white oak wear layer bonded to a dimensionally stable multi-ply birch core. The wire-brushed surface enhances the natural grain while providing subtle texture underfoot. Finished with 9 coats of aluminum oxide-reinforced UV-cured lacquer for lasting beauty.",
    specs: {
      thickness: '5/8" (15mm)',
      width: '7-1/2" (190mm)',
      length: 'Random lengths up to 86"',
      finish: "Wire-brushed, UV Lacquer",
      color: "Natural Oak",
      installationType: "Glue-down, Float, Nail-down",
      warranty: "Lifetime structural, 25-year finish",
    },
    price: 8.99,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["oak", "wide-plank", "wire-brushed"],
  },
  {
    id: "eh-002",
    name: "French Oak Smokehouse",
    slug: "french-oak-smokehouse",
    category: "engineered-hardwood",
    collection: "Artisan Collection",
    images: ["/images/products/solid-hardwood.png"],
    description:
      "Rich smoky tones with hand-scraped edges give this French oak an authentic reclaimed look.",
    longDescription:
      "The French Oak Smokehouse is crafted using a proprietary smoking process that produces deep, rich color throughout the wear layer — not just on the surface. Hand-scraped edges and natural character marks give each plank a unique, reclaimed appearance. The 6mm French oak wear layer allows for multiple refinishing cycles.",
    specs: {
      thickness: '3/4" (19mm)',
      width: '8" (203mm)',
      length: 'Random lengths up to 72"',
      finish: "Hand-scraped, Oil finish",
      color: "Smoky Brown",
      installationType: "Glue-down, Nail-down",
      warranty: "Lifetime structural, 20-year finish",
    },
    price: 12.49,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["oak", "wide-plank", "hand-scraped"],
  },
  {
    id: "eh-003",
    name: "White Oak Herringbone",
    slug: "white-oak-herringbone",
    category: "engineered-hardwood",
    collection: "Designer Collection",
    images: ["/images/products/engineered-hardwood.png"],
    description:
      "Classic herringbone pattern in premium white oak. Adds elegance and architectural interest to any room.",
    specs: {
      thickness: '1/2" (12mm)',
      width: '4" (100mm)',
      length: '24" (610mm)',
      finish: "Smooth, UV Lacquer",
      color: "Light Natural",
      installationType: "Glue-down",
      warranty: "Lifetime structural, 25-year finish",
    },
    price: 11.99,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["oak", "herringbone", "designer"],
  },
  {
    id: "eh-004",
    name: "Maple Honey Blonde",
    slug: "maple-honey-blonde",
    category: "engineered-hardwood",
    collection: "Classic Collection",
    images: ["/images/products/laminate.png"],
    description:
      "Warm honey tones in Canadian maple with a smooth satin finish. A versatile choice for contemporary spaces.",
    specs: {
      thickness: '1/2" (12mm)',
      width: '5" (127mm)',
      length: 'Random lengths up to 48"',
      finish: "Smooth, Satin Lacquer",
      color: "Honey Blonde",
      installationType: "Float, Glue-down",
      warranty: "30-year structural, 20-year finish",
    },
    price: 7.49,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["maple", "smooth"],
  },

  // ── Solid Hardwood ───────────────────────────────
  {
    id: "sh-001",
    name: "Red Oak Select",
    slug: "red-oak-select",
    category: "solid-hardwood",
    collection: "Signature Collection",
    images: ["/images/products/solid-hardwood.png"],
    description:
      "Premium select-grade red oak with minimal knots and consistent grain. The gold standard of hardwood flooring.",
    longDescription:
      "Our Red Oak Select is sourced from sustainably managed North American forests. Each plank is kiln-dried to optimal moisture content and precision-milled with tongue-and-groove edges for a tight, seamless fit. The clear satin finish enhances the natural warmth of red oak while providing excellent protection against daily wear.",
    specs: {
      thickness: '3/4" (19mm)',
      width: '3-1/4" (83mm)',
      finish: "Smooth, Satin Polyurethane",
      color: "Natural Red Oak",
      installationType: "Nail-down, Staple",
      warranty: "Lifetime structural",
    },
    price: 6.99,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["oak", "classic"],
  },
  {
    id: "sh-002",
    name: "Walnut Premium Wide Plank",
    slug: "walnut-premium-wide-plank",
    category: "solid-hardwood",
    collection: "Premium Collection",
    images: ["/images/products/solid-hardwood.png"],
    description:
      "Rich American walnut in wide plank format. Deep chocolate tones and stunning grain create a luxurious atmosphere.",
    specs: {
      thickness: '3/4" (19mm)',
      width: '5" (127mm)',
      finish: "Smooth, Semi-gloss Polyurethane",
      color: "Dark Chocolate",
      installationType: "Nail-down",
      warranty: "Lifetime structural",
    },
    price: 14.99,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["walnut", "wide-plank", "premium"],
  },
  {
    id: "sh-003",
    name: "Hickory Rustic",
    slug: "hickory-rustic",
    category: "solid-hardwood",
    collection: "Rustic Collection",
    images: ["/images/products/engineered-hardwood.png"],
    description:
      "Character-grade hickory with dramatic grain variation and natural knots. Extremely hard and durable.",
    specs: {
      thickness: '3/4" (19mm)',
      width: '5" (127mm)',
      finish: "Hand-scraped, Matte Polyurethane",
      color: "Multi-tonal Natural",
      installationType: "Nail-down",
      warranty: "Lifetime structural",
    },
    price: 9.49,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["hickory", "rustic", "hand-scraped"],
  },

  // ── Vinyl ────────────────────────────────────────
  {
    id: "v-001",
    name: "Waterproof Oak LVP",
    slug: "waterproof-oak-lvp",
    category: "vinyl",
    collection: "AquaGuard Collection",
    images: ["/images/products/vinyl.png"],
    description:
      "100% waterproof luxury vinyl plank with realistic oak visuals and attached cork backing for comfort.",
    longDescription:
      "Our Waterproof Oak LVP features advanced SPC (stone polymer composite) core technology for superior dent resistance and dimensional stability. The high-definition photographic layer reproduces natural oak grain with stunning realism, while the attached cork underlayment provides sound absorption and thermal insulation.",
    specs: {
      thickness: '6.5mm + 1.5mm cork backing',
      width: '7" (178mm)',
      length: '48" (1220mm)',
      finish: "Embossed in Register (EIR)",
      color: "Warm Oak",
      installationType: "Click-lock floating",
      warranty: "Lifetime residential, 10-year commercial",
      waterproof: true,
    },
    price: 4.49,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["waterproof", "oak", "lvp"],
  },
  {
    id: "v-002",
    name: "Stone Gray LVT",
    slug: "stone-gray-lvt",
    category: "vinyl",
    collection: "Modern Collection",
    images: ["/images/products/vinyl.png"],
    description:
      "Contemporary stone-look luxury vinyl tile. Waterproof and scratch-resistant for high-traffic areas.",
    specs: {
      thickness: "5mm + 1mm IXPE backing",
      width: '12" x 24" tile format',
      finish: "Textured stone surface",
      color: "Cool Gray",
      installationType: "Click-lock floating",
      warranty: "Lifetime residential",
      waterproof: true,
    },
    price: 3.99,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["waterproof", "stone-look", "lvt"],
  },

  // ── Laminate ─────────────────────────────────────
  {
    id: "l-001",
    name: "Nordic Maple Laminate",
    slug: "nordic-maple-laminate",
    category: "laminate",
    collection: "Scandinavia Collection",
    images: ["/images/products/laminate.png"],
    description:
      "Light Scandinavian-inspired maple laminate with AC5 commercial-grade wear layer. Water-resistant for worry-free living.",
    specs: {
      thickness: "12mm",
      width: '7.5" (190mm)',
      length: '54" (1380mm)',
      finish: "Embossed wood grain",
      color: "Light Maple",
      installationType: "Click-lock floating",
      warranty: "25-year residential",
    },
    price: 2.99,
    priceUnit: "sq ft",
    available: true,
    featured: true,
    tags: ["maple", "light", "water-resistant"],
  },
  {
    id: "l-002",
    name: "Midnight Walnut Laminate",
    slug: "midnight-walnut-laminate",
    category: "laminate",
    collection: "Urban Collection",
    images: ["/images/products/solid-hardwood.png"],
    description:
      "Deep walnut tones in a durable laminate format. AC4 wear rating with embossed texture for realistic feel.",
    specs: {
      thickness: "10mm",
      width: '8" (203mm)',
      length: '48" (1220mm)',
      finish: "Deep embossed",
      color: "Dark Walnut",
      installationType: "Click-lock floating",
      warranty: "20-year residential",
    },
    price: 2.49,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["walnut", "dark", "budget-friendly"],
  },

  // ── Cleaning Supplies ────────────────────────────
  {
    id: "cs-001",
    name: "Hardwood Floor Cleaner",
    slug: "hardwood-floor-cleaner",
    category: "cleaning-supplies",
    images: ["/images/products/engineered-hardwood.png"],
    description:
      "pH-neutral hardwood floor cleaner that safely removes dirt and grime without damaging finish. Ready to use.",
    specs: {
      material: "32 oz spray bottle",
    },
    price: 12.99,
    priceUnit: "bottle",
    available: true,
    featured: false,
    tags: ["cleaner", "hardwood"],
  },
  {
    id: "cs-002",
    name: "Microfiber Mop System",
    slug: "microfiber-mop-system",
    category: "cleaning-supplies",
    images: ["/images/products/laminate.png"],
    description:
      "Professional microfiber mop designed for hardwood and laminate floors. Includes 2 washable pads.",
    specs: {
      material: "Stainless steel handle, microfiber pads",
    },
    price: 39.99,
    priceUnit: "kit",
    available: true,
    featured: false,
    tags: ["mop", "microfiber"],
  },

  // ── Repair Kits ──────────────────────────────────
  {
    id: "rk-001",
    name: "Scratch Repair Kit",
    slug: "scratch-repair-kit",
    category: "repair-kits",
    images: ["/images/products/solid-hardwood.png"],
    description:
      "Professional scratch repair kit with color-matched fillers for hardwood floors. Covers light to medium scratches.",
    specs: {
      material: "Includes 6 color sticks, leveling tool, cloth",
    },
    price: 24.99,
    priceUnit: "kit",
    available: true,
    featured: false,
    tags: ["repair", "scratch"],
  },

  // ── Accessories ──────────────────────────────────
  {
    id: "a-001",
    name: "T-Molding Transition Strip",
    slug: "t-molding-transition-strip",
    category: "accessories",
    images: ["/images/products/laminate.png"],
    description:
      "Solid hardwood T-molding for smooth transitions between rooms. Available in multiple wood species and finishes.",
    specs: {
      thickness: '1/2"',
      width: '2"',
      length: '78"',
      material: "Solid hardwood",
    },
    price: 29.99,
    priceUnit: "piece",
    available: true,
    featured: false,
    tags: ["transition", "molding"],
  },
  {
    id: "a-002",
    name: "Premium Cork Underlayment",
    slug: "premium-cork-underlayment",
    category: "accessories",
    images: ["/images/products/vinyl.png"],
    description:
      "6mm premium cork underlayment roll for sound reduction and thermal insulation. Ideal under floating floors.",
    specs: {
      thickness: "6mm",
      width: '4\' roll',
      length: "25' roll (100 sq ft)",
      material: "Natural cork",
    },
    price: 1.29,
    priceUnit: "sq ft",
    available: true,
    featured: false,
    tags: ["underlayment", "cork"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
