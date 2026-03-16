/** Resume page content. Update with your real experience, skills, and education. */

export const RESUME_PDF_URL = "/Joel_Premier_Senior_Product_Designer_Resume.pdf";
export const RESUME_DOWNLOAD_NAME = "Joel_Premier_Resume.pdf";

export const IDENTITY = {
  name: "Joel Stefano Premier",
  role: "Senior Product Designer",
  positioning: "UX Strategy, Product Design, Design Systems, Accessibility",
  location: "Irving, TX",
  phone: "+1 214 243 4649",
  email: "jojo.s.1er@gmail.com",
} as const;

export const PROFESSIONAL_SUMMARY_HEADLINE =
  "Designing for clarity across\ncomplex product ecosystems.";

export const PROFESSIONAL_SUMMARY_PARAGRAPHS = [
  "Senior product designer with experience across e-commerce, healthcare, and enterprise products. I focus on structure, usability, and delivery — turning complex problems into clear experiences through close collaboration with product and engineering.",
  "My work spans discovery, design systems, interaction design, and end-to-end journeys that improve how people move through products and how teams bring those experiences to market.",
] as const;

export const CORE_COMPETENCIES = [
  "UX Strategy",
  "Product Design",
  "Interaction Design",
  "Information Architecture",
  "Journey Mapping",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Accessibility (WCAG)",
  "User Research",
  "Behavioral Analytics",
] as const;

export const CORE_COMPETENCIES_FLAT = [
  "UX Strategy",
  "User Research",
  "Behavioral Analytics",
  "Journey Mapping",
  "Information Architecture",
  "Usability Testing",
  "End-to-End Product Design",
  "Interaction Design",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Accessibility (WCAG)",
  "Cross-Functional Delivery",
  "Engineering Partnership",
  "Responsive Design",
  "Web & Mobile",
] as const;

export const EXPERIENCE = [
  {
    company: "Jillamy, Inc.",
    title: "In-House Product Designer · Front-End Implementation Support",
    dates: "Nov 2025 – Present",
    location: "Mesquite, TX",
    bullets: [
      "Acting as sole Product Designer leading end-to-end design and delivery of JIM (Jillamy Inventory & Ops Portal) — a warehouse operations platform spanning inventory, receiving, picking, packing, and shipping workflows across multiple sites.",
      "Translated operational needs into UX requirements, user flows, edge cases, acceptance criteria, and error-reduction patterns driving measurable improvements in execution speed and process reliability.",
      "Extended design into front-end implementation (React, TypeScript, Tailwind, Vite) to close the gap between design intent and shipped product — delivering role-based UI, normalized SKU search, and audit-grade event logging.",
    ],
  },
  {
    company: "Ulta Beauty",
    title: "Senior Product Designer",
    dates: "Nov 2022 – Sep 2025",
    location: "Remote",
    bullets: [
      "Led end-to-end product design for Ulta's web and responsive e-commerce journey, owning core shopping experiences across search, PLP, PDP, cart, checkout, and product recommendation flows.",
      "Reworked information architecture and product discovery flows using research, analytics, and FullStory behavioral insights — reducing friction by 22% and contributing to a 17% increase in conversions.",
      "Redesigned key shopping interactions including navigation, filtering, sorting, add-to-cart, cart management, and checkout, grounded in behavioral data and A/B testing.",
      "Built and maintained scalable Figma design system patterns improving cross-team consistency and accelerating engineering handoff.",
    ],
  },
  {
    company: "Tractor Supply Company",
    title: "User Experience Designer",
    dates: "Aug 2021 – Oct 2022",
    location: "Remote",
    bullets: [
      "Translated a Nielsen Norman Group (NN/g) UX audit into a prioritized roadmap for web and mobile improvements, turning research-backed recommendations into actionable design work.",
      "Redesigned PDP, PLP, and cart experiences based on NN/g audit findings, applying usability and personalization improvements that strengthened the end-to-end shopping experience.",
      "Led migration of core design system components from Adobe XD to Figma, rebuilding buttons, toggles, tooltips, pagination, and reusable UI patterns.",
    ],
  },
  {
    company: "CVS Health / Aetna",
    title: "Senior UX Strategist — Medicare",
    dates: "Apr 2019 – Jul 2021",
    location: "Remote",
    bullets: [
      "Designed and improved the Shop, Buy, and Enroll experience for Medicare-eligible users (65+), simplifying plan comparison, selection, and enrollment for users with varying levels of digital confidence.",
      "Strengthened accessibility and usability through improvements to readability, content hierarchy, and interaction clarity — supporting WCAG compliance and alignment with HIPAA and Medicare requirements.",
      "Iteratively refined information architecture and enrollment flows, driving measurable improvements in plan selection completion rates across a highly regulated experience.",
    ],
  },
  {
    company: "American Airlines",
    title: "Senior Information Architect",
    dates: "Apr 2014 – Sep 2018",
    location: "Fort Worth, TX",
    bullets: [
      "Led information architecture across aa.com, mobile, and airport kiosks — defining user flows, wireframes, IA specifications, and interaction requirements for complex travel and booking journeys.",
      "Redesigned and documented Review & Pay and Finish booking steps, standardizing information hierarchy, state handling, and page structure to reduce traveler confusion across platforms.",
      "Led IA for Airside Mobile re-entry workflows and a GDPR request portal for European customers, translating compliance and localization requirements into clear, consistent user flows.",
    ],
  },
] as const;

export const SKILLS_GROUPS = [
  {
    label: "Design",
    items: ["Figma", "Sketch", "Miro"],
  },
  {
    label: "Research",
    items: ["Qualtrics", "FullStory", "Hotjar", "Mixpanel"],
  },
  {
    label: "Collaboration",
    items: ["Jira", "Confluence", "Notion"],
  },
  {
    label: "Development",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
] as const;

export const AI_WORKFLOW = ["Claude", "Figma AI", "UX Pilot", "Cursor"] as const;

/** Tools & Technology section — exact copy for Resume page. muted: true = "Working familiarity with" (secondary). */
export const TOOLS_AND_TECHNOLOGY = [
  {
    label: "Design",
    items: [
      "Figma",
      "FigJam",
      "Design Systems",
      "Interactive Prototyping",
      "Wireframing",
      "User Flows",
      "Accessibility Review",
      "UX Writing",
    ],
    muted: false,
  },
  {
    label: "Front-End",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    muted: false,
  },
  {
    label: "Delivery & Collaboration",
    items: [
      "GitHub",
      "Jira",
      "Confluence",
      "Design Tokens",
      "Component Handoff",
      "Responsive QA",
      "Front-End Implementation Support",
    ],
    muted: false,
  },
  {
    label: "Working familiarity with",
    items: ["Laravel", "Prisma ORM", "PostgreSQL", "Docker", "GitHub Actions"],
    muted: true,
  },
] as const;

export const EDUCATION = [
  {
    degree: "M.A. Design Management",
    institution: "Savannah College of Art and Design",
    dates: "",
    notes: ["Thesis Research", "Graduate Teaching Assistant"],
  },
  {
    degree: "B.A. Digital Recording Arts",
    institution: "New England Institute of Technology",
    dates: "",
    notes: [],
  },
  {
    degree: "A.S. Web and Multimedia Technology",
    institution: "New England Institute of Technology",
    dates: "",
    notes: [],
  },
] as const;
