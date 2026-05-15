export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "s-001",
    title: "Hardwood Floor Installation",
    slug: "hardwood-floor-installation",
    description:
      "Expert installation of solid and engineered hardwood flooring. Our certified installers ensure precision fitting with nail-down, glue-down, or floating installation methods tailored to your subfloor and lifestyle.",
    features: [
      "Subfloor assessment and preparation",
      "Moisture testing and vapor barrier installation",
      "Precision cutting and fitting",
      "Baseboard and trim installation",
      "Post-installation cleaning and inspection",
    ],
    icon: "hammer",
  },
  {
    id: "s-002",
    title: "Floor Refinishing",
    slug: "floor-refinishing",
    description:
      "Breathe new life into your existing hardwood floors. Our dustless sanding and refinishing process restores the original beauty of worn, scratched, or outdated floors with your choice of stain color and finish sheen.",
    features: [
      "Dustless sanding technology",
      "Custom stain color matching",
      "Multiple finish options (matte, satin, semi-gloss, high-gloss)",
      "Repair of damaged boards",
      "Eco-friendly water-based finishes available",
    ],
    icon: "sparkles",
  },
  {
    id: "s-003",
    title: "Vinyl & Laminate Installation",
    slug: "vinyl-laminate-installation",
    description:
      "Professional installation of luxury vinyl plank, luxury vinyl tile, and laminate flooring. Quick turnaround with minimal disruption to your daily life.",
    features: [
      "Level subfloor preparation",
      "Underlayment installation",
      "Click-lock and glue-down methods",
      "Transition strip and molding installation",
      "Waterproof options for wet areas",
    ],
    icon: "layers",
  },
  {
    id: "s-004",
    title: "Floor Repair",
    slug: "floor-repair",
    description:
      "From squeaky floors to water-damaged boards, our repair services address all types of flooring issues. We match existing floors seamlessly for an invisible repair.",
    features: [
      "Board replacement and patching",
      "Squeak elimination",
      "Water damage restoration",
      "Gap filling and board tightening",
      "Color matching to existing floors",
    ],
    icon: "wrench",
  },
  {
    id: "s-005",
    title: "Free In-Home Consultation",
    slug: "free-consultation",
    description:
      "Not sure where to start? Our flooring experts will visit your home, assess your space, discuss your needs and budget, and provide a detailed quote — all at no cost or obligation.",
    features: [
      "Room measurements",
      "Subfloor assessment",
      "Product recommendations",
      "Color and style guidance",
      "Detailed written estimate",
    ],
    icon: "clipboard",
  },
  {
    id: "s-006",
    title: "Commercial Flooring",
    slug: "commercial-flooring",
    description:
      "Durable, professional flooring solutions for offices, retail spaces, restaurants, and more. We work around your business schedule to minimize downtime.",
    features: [
      "After-hours and weekend installation",
      "Commercial-grade materials",
      "High-traffic rated products",
      "Project management and timeline planning",
      "Volume pricing available",
    ],
    icon: "building",
  },
];
