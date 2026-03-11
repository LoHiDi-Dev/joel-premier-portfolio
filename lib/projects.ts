export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  description: string;
  outcome?: string;
  image: string;
  imageAlt: string;
}

export interface PersonalProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// Figma asset URLs - replace with local paths for production longevity
const IMAGES = {
  ultaBeauty:
    "https://www.figma.com/api/mcp/asset/2ff42803-f98f-4c11-ab29-2e752121efe5",
  cvsAetna:
    "https://www.figma.com/api/mcp/asset/992294c6-054a-4c49-bc39-8a4a890f2f3d",
  tractorSupply:
    "https://www.figma.com/api/mcp/asset/41822b78-6225-4844-9dcb-47704ddbba93",
  americanAirlines:
    "https://www.figma.com/api/mcp/asset/54817338-20aa-4c30-83d6-2d8c5ff89718",
  medivite:
    "https://www.figma.com/api/mcp/asset/41822b78-6225-4844-9dcb-47704ddbba93",
  stJude:
    "https://www.figma.com/api/mcp/asset/9f060320-046b-4178-bf66-2e16b9d44a46",
  renoTx:
    "https://www.figma.com/api/mcp/asset/0e7a51d0-fe36-42ba-b1d6-f61395075308",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "ulta-beauty",
    title: "Ulta Beauty",
    category: "E-Commerce & Loyalty Experience",
    role: "Senior Product Designer",
    description:
      "Led end-to-end product design across Ulta's web and responsive shopping journey, from search and product discovery to cart, checkout, and recommendations.",
    outcome:
      "Reduced friction by 22% and increased conversions by 17% across the browse-to-buy experience.",
    image: IMAGES.ultaBeauty,
    imageAlt: "Ulta Beauty e-commerce experience featuring makeup products",
  },
  {
    slug: "cvs-aetna",
    title: "CVS Health / Aetna",
    category: "Medicare Experience",
    role: "Senior Product Designer",
    description:
      "Designed accessible Medicare plan comparison and enrollment experiences, improving clarity, usability, and decision-making across a highly regulated digital journey.",
    outcome:
      "Reduced friction by 22% and increased conversions by 17% across the browse-to-buy experience.",
    image: IMAGES.cvsAetna,
    imageAlt: "CVS Health Aetna Medicare Extra Benefits Card",
  },
];

export const ADDITIONAL_PROJECTS: Project[] = [
  {
    slug: "tractor-supply",
    title: "Tractor Supply Co",
    category: "Audit-Driven UX Improvements",
    role: "User Experience Designer",
    description:
      "Applied NN/g audit findings to improve commerce usability across web and mobile, while supporting the migration of design system components from Adobe XD to Figma.",
    image: IMAGES.tractorSupply,
    imageAlt: "Tractor Supply Co store exterior",
  },
  {
    slug: "american-airlines",
    title: "American Airlines",
    category: "Travel Journey Architecture",
    role: "Senior Information Architect",
    description:
      "Defined information architecture for complex travel flows across aa.com, mobile, and airport kiosks, improving clarity across booking and post-booking experiences.",
    image: IMAGES.americanAirlines,
    imageAlt: "American Airlines aircraft on tarmac",
  },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    slug: "medivite",
    title: "MediVite - Digital Health Platform",
    description:
      "Digital health platform focused on clearer care access, modern patient journeys, and connected healthcare services.",
    image: IMAGES.medivite,
    imageAlt: "MediVite digital health platform",
  },
  {
    slug: "st-jude-navigation",
    title: "St. Jude - Navigation Study",
    description:
      "Information architecture and navigation exploration aimed at simplifying complex nonprofit pathways.",
    image: IMAGES.stJude,
    imageAlt: "St. Jude Children's Research Hospital building",
  },
  {
    slug: "reno-tx",
    title: "Reno, TX - Civic Website Redesign",
    description:
      "Civic website redesign focused on service clarity, resident access, and stronger connection with the city.",
    image: IMAGES.renoTx,
    imageAlt: "Welcome to Reno, Texas sign",
  },
];

export type ProjectWithMeta = Project | (PersonalProject & { category?: string; role?: string; outcome?: string });

const PROJECT_MAP: Record<string, ProjectWithMeta> = {};
FEATURED_PROJECTS.forEach((p) => (PROJECT_MAP[p.slug] = p));
ADDITIONAL_PROJECTS.forEach((p) => (PROJECT_MAP[p.slug] = p));
PERSONAL_PROJECTS.forEach((p) => (PROJECT_MAP[p.slug] = { ...p, category: "", role: "" }));

export function getProjectBySlug(slug: string): ProjectWithMeta | undefined {
  return PROJECT_MAP[slug];
}

export const APPROACH_ITEMS = [
  {
    title: "Product Strategy",
    description: "Connecting user needs to business goals and product decisions.",
  },
  {
    title: "Design Systems",
    description: "Building scalable foundations for consistency, speed, and reuse.",
  },
  {
    title: "Accessibility",
    description: "Designing inclusive experiences that support clarity and compliance.",
  },
  {
    title: "Responsive Design",
    description: "Creating cohesive experiences across desktop, tablet, and mobile.",
  },
  {
    title: "Journey Mapping",
    description: "Structuring complex flows into clearer end-to-end journeys.",
  },
  {
    title: "Cross-Functional Delivery",
    description: "Partnering with product, engineering, and content to deliver with clarity.",
  },
];
