export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-001",
    question: "What types of flooring do you carry?",
    answer:
      "We carry a wide selection of flooring products including engineered hardwood, solid hardwood, luxury vinyl plank (LVP), luxury vinyl tile (LVT), laminate, and related accessories. We also stock cleaning supplies, repair kits, and installation accessories. Visit our showroom or browse our product catalog to see our full range.",
    category: "Products",
  },
  {
    id: "faq-002",
    question: "Do you offer free estimates?",
    answer:
      "Yes! We offer complimentary in-home consultations where our flooring experts will measure your space, assess your subfloor, discuss your needs and budget, and provide a detailed written estimate — all at no cost or obligation.",
    category: "Services",
  },
  {
    id: "faq-003",
    question: "How long does flooring installation take?",
    answer:
      "Installation timelines vary based on the type of flooring and the size of the area. A typical room (200–300 sq ft) takes about 1 day. Larger projects or whole-home installations typically take 3–5 days. We'll provide a detailed timeline during your consultation.",
    category: "Installation",
  },
  {
    id: "faq-004",
    question: "What is the difference between solid and engineered hardwood?",
    answer:
      "Solid hardwood is milled from a single piece of wood and can be sanded and refinished many times. Engineered hardwood has a real wood top layer bonded to a plywood core, offering better stability in varying humidity and temperature conditions. Engineered hardwood can also be installed below grade (basements) and over radiant heat.",
    category: "Products",
  },
  {
    id: "faq-005",
    question: "Can hardwood floors be installed in basements?",
    answer:
      "Solid hardwood is generally not recommended for below-grade installations due to moisture concerns. However, engineered hardwood and luxury vinyl plank are excellent choices for basements. Our team will assess your basement's moisture levels and recommend the best option.",
    category: "Installation",
  },
  {
    id: "faq-006",
    question: "Do you offer a warranty on installation?",
    answer:
      "Yes, we provide a comprehensive warranty on all our installations. Our workmanship warranty covers the quality of the installation for the specified period. Product warranties vary by manufacturer and are outlined on each product's detail page.",
    category: "Warranty",
  },
  {
    id: "faq-007",
    question: "How do I maintain my hardwood floors?",
    answer:
      "Regular sweeping or vacuuming (with a hard-floor setting) removes grit that can scratch the finish. Damp mop with a pH-neutral hardwood floor cleaner as needed. Avoid excessive water, steam mops, and harsh chemicals. Place felt pads under furniture legs and use entry mats to trap dirt and moisture.",
    category: "Maintenance",
  },
  {
    id: "faq-008",
    question: "Can you match my existing floors?",
    answer:
      "In most cases, yes. Our experts can source matching or closely complementary wood species, stain colors, and plank widths. For refinishing projects, we can stain new and existing boards to create a seamless blend across your entire floor.",
    category: "Services",
  },
  {
    id: "faq-009",
    question: "Do you serve areas outside of Milton?",
    answer:
      "Absolutely! While we're based in Milton, we serve the entire Greater Toronto Area (GTA) including Oakville, Burlington, Georgetown, Mississauga, Brampton, Hamilton, and surrounding communities.",
    category: "General",
  },
  {
    id: "faq-010",
    question: "What should I do to prepare for installation?",
    answer:
      "Move all furniture and personal items from the rooms being floored. Remove existing baseboards if possible. Ensure the HVAC system has been running for at least 48 hours to acclimate the space. Our team will handle the rest including subfloor preparation and old flooring removal if needed.",
    category: "Installation",
  },
];
