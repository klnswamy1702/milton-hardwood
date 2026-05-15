export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  location: string;
  flooringType: string;
  category: string;
  description: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  tags: string[];
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "p-001",
    title: "Modern Kitchen Renovation",
    slug: "modern-kitchen-renovation",
    location: "Milton, ON",
    flooringType: "Walnut Solid Hardwood",
    category: "Residential",
    description:
      "Complete kitchen floor renovation featuring premium walnut hardwood. The rich, dark tones complement the white cabinetry and marble countertops, creating a stunning contrast that elevates the entire space.",
    images: ["/images/portfolio/kitchen-remodel.png"],
    afterImage: "/images/portfolio/kitchen-remodel.png",
    tags: ["kitchen", "hardwood", "walnut", "residential"],
    featured: true,
  },
  {
    id: "p-002",
    title: "Open Concept Living Space",
    slug: "open-concept-living-space",
    location: "Oakville, ON",
    flooringType: "European Oak Engineered",
    category: "Residential",
    description:
      "A 1,800 sq ft open-concept living area transformed with wide-plank European oak. The natural finish brings warmth and continuity throughout the connected living, dining, and kitchen areas.",
    images: ["/images/hero/hero.png"],
    tags: ["living-room", "engineered", "oak", "residential"],
    featured: true,
  },
  {
    id: "p-003",
    title: "Boutique Retail Store",
    slug: "boutique-retail-store",
    location: "Burlington, ON",
    flooringType: "Hickory Rustic Hardwood",
    category: "Commercial",
    description:
      "A high-end boutique required flooring that could handle heavy foot traffic while maintaining a warm, inviting atmosphere. Hickory rustic hardwood delivered both durability and character.",
    images: ["/images/products/engineered-hardwood.png"],
    tags: ["commercial", "hardwood", "hickory", "retail"],
    featured: false,
  },
  {
    id: "p-004",
    title: "Basement Family Room",
    slug: "basement-family-room",
    location: "Milton, ON",
    flooringType: "Waterproof Vinyl LVP",
    category: "Residential",
    description:
      "A below-grade basement family room outfitted with waterproof luxury vinyl plank. The warm oak-look vinyl provides the beauty of hardwood with complete moisture protection.",
    images: ["/images/products/vinyl.png"],
    tags: ["basement", "vinyl", "waterproof", "residential"],
    featured: true,
  },
  {
    id: "p-005",
    title: "Master Bedroom Suite",
    slug: "master-bedroom-suite",
    location: "Georgetown, ON",
    flooringType: "Maple Engineered Hardwood",
    category: "Residential",
    description:
      "Serene master bedroom retreat with honey-toned maple engineered hardwood. The warm, light flooring creates a calming atmosphere perfect for relaxation.",
    images: ["/images/products/laminate.png"],
    tags: ["bedroom", "engineered", "maple", "residential"],
    featured: false,
  },
  {
    id: "p-006",
    title: "Professional Office Space",
    slug: "professional-office-space",
    location: "Mississauga, ON",
    flooringType: "Nordic Maple Laminate",
    category: "Commercial",
    description:
      "A 3,500 sq ft professional office installation featuring commercial-grade laminate flooring. The light Scandinavian aesthetic creates a modern, productive work environment.",
    images: ["/images/products/laminate.png"],
    tags: ["office", "laminate", "commercial", "maple"],
    featured: false,
  },
];

export function getPortfolioBySlug(
  slug: string
): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}
