export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "engineered-hardwood",
    name: "Engineered Hardwood",
    slug: "engineered-hardwood",
    description:
      "Engineered hardwood combines a real wood veneer top layer with a multi-ply core for superior stability. Ideal for any room, including basements and over radiant heat systems.",
    image: "/images/products/engineered-hardwood.png",
    productCount: 8,
  },
  {
    id: "solid-hardwood",
    name: "Solid Hardwood",
    slug: "solid-hardwood",
    description:
      "Solid hardwood is milled from a single piece of timber, delivering timeless beauty and unmatched durability. Can be sanded and refinished multiple times over its lifetime.",
    image: "/images/products/solid-hardwood.png",
    productCount: 6,
  },
  {
    id: "vinyl",
    name: "Vinyl",
    slug: "vinyl",
    description:
      "Luxury vinyl plank (LVP) and luxury vinyl tile (LVT) offer waterproof performance with stunning wood and stone-look designs. Perfect for kitchens, bathrooms, and high-traffic areas.",
    image: "/images/products/vinyl.png",
    productCount: 5,
  },
  {
    id: "laminate",
    name: "Laminate",
    slug: "laminate",
    description:
      "Modern laminate flooring delivers realistic wood visuals with exceptional scratch and dent resistance. A budget-friendly option that doesn't compromise on style.",
    image: "/images/products/laminate.png",
    productCount: 4,
  },
  {
    id: "cleaning-supplies",
    name: "Cleaning Supplies",
    slug: "cleaning-supplies",
    description:
      "Professional-grade cleaning solutions formulated specifically for hardwood, vinyl, and laminate floors. Keep your floors looking their best for years to come.",
    image: "/images/products/engineered-hardwood.png",
    productCount: 3,
  },
  {
    id: "repair-kits",
    name: "Repair Kits",
    slug: "repair-kits",
    description:
      "Easy-to-use floor repair kits for scratches, dents, and minor damage. Restore your floors to their original beauty with professional-quality repair solutions.",
    image: "/images/products/solid-hardwood.png",
    productCount: 2,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description:
      "Complete your flooring project with our selection of moldings, transitions, underlayment, and installation accessories. Everything you need for a professional finish.",
    image: "/images/products/laminate.png",
    productCount: 4,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
