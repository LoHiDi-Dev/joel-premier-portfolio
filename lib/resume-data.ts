/** Resume page content. Source of truth: public/Joel_Premier_Senior_Product_Designer_Resume.pdf */

export const RESUME_PDF_URL = "/Joel_Premier_Senior_Product_Designer_Resume.pdf";
export const RESUME_DOWNLOAD_NAME = "Joel_Premier_Resume.pdf";

export const IDENTITY = {
  name: "Joel Stefano Premier",
  role: "Senior Product Designer",
  positioning:
    "Senior Product Designer | SaaS, B2B/B2C, Mobile Products, AI & Design Systems",
  location: "Dallas, TX",
  phone: "+1 (214) 243-4649",
  email: "jojo.s.1er@gmail.com",
  portfolio: "https://joel-premier-portfolio.vercel.app",
} as const;

export const PROFESSIONAL_SUMMARY_HEADLINE =
  IDENTITY.positioning;

export const PROFESSIONAL_SUMMARY_PARAGRAPHS = [
  "Senior Product Designer with 10+ years of experience designing mobile, responsive web, SaaS, B2B, and B2C products across commerce, healthcare, travel, and operational platforms. Strong in discovery, information architecture, interaction design, design systems, accessibility, and analytics, with a practical record of turning ambiguous journeys into clear, shippable product experiences in close partnership with product and engineering. Integrates AI-assisted design, rapid prototyping, and design-to-code workflows to accelerate exploration, validation, and engineering collaboration.",
] as const;

export const CORE_COMPETENCIES = [
  {
    label: "Product Design",
    items: [
      "End-to-end product design",
      "product discovery",
      "UX strategy",
      "interaction design",
      "information architecture",
      "journey mapping",
      "wireframing",
      "prototyping",
      "usability testing",
      "cross-functional collaboration",
    ],
  },
  {
    label: "Mobile, SaaS & B2B",
    items: [
      "Mobile-first and responsive product design",
      "SaaS platforms",
      "enterprise workflows",
      "role-based experiences",
      "dashboards",
      "operational tools",
      "data-dense interfaces",
      "regulated workflows",
      "complex multi-step workflows",
    ],
  },
  {
    label: "Product Growth & Transactional UX",
    items: [
      "Onboarding",
      "activation",
      "search and discovery",
      "account management",
      "personalization",
      "recommendations",
      "transactional flows",
      "payments",
      "checkout",
      "loyalty",
      "funnel optimization",
      "experimentation",
      "A/B testing",
      "behavioral analytics",
    ],
  },
  {
    label: "Design Systems & Accessibility",
    items: [
      "Component libraries",
      "design tokens",
      "interaction standards",
      "pattern documentation",
      "WCAG 2.1/2.2",
    ],
  },
  {
    label: "Research & Analytics",
    items: [
      "User interviews",
      "usability testing",
      "research synthesis",
      "qualitative and quantitative insights",
      "FullStory",
      "Hotjar",
      "Mixpanel",
      "Qualtrics",
    ],
  },
  {
    label: "AI-Assisted Product Design",
    items: [
      "AI-assisted ideation and prototyping",
      "AI-enabled product workflows",
      "human-AI interaction patterns",
      "trust and transparency",
      "rapid experimentation",
      "design-to-code collaboration",
    ],
  },
  {
    label: "Tools & Technical Fluency",
    items: [
      "Figma",
      "FigJam",
      "Miro",
      "Jira",
      "Confluence",
      "Notion",
      "working fluency with HTML/CSS, React, TypeScript, Tailwind CSS, and front-end implementation concepts",
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Jillamy, Inc.",
    title: "Senior Product Designer (Contract)",
    dates: "Nov 2025 – Present",
    location: "Mesquite, TX",
    bullets: [
      "Lead product design for JIM (Jillamy Inventory Management), a B2B warehouse operations platform supporting receiving, inventory control, picking, packing, shipping, workforce coordination, and exception handling across multiple sites.",
      "Led discovery and workflow mapping with warehouse associates, supervisors, and operations leads to translate real operational tasks into clear, role-based product flows.",
      "Designed SKU search, task confirmation, exception handling, audit logs, and status visibility patterns to reduce ambiguity in high-volume workflows and support operational accountability, traceability, and consistent decision-making across the platform.",
      "Designed responsive and mobile-first operational workflows for associates working across warehouse environments, prioritizing speed, scannability, task completion, and usability in high-volume conditions.",
    ],
  },
  {
    company: "Ulta Beauty",
    title: "Senior Product Designer",
    dates: "Nov 2022 – Sep 2025",
    location: "Remote",
    bullets: [
      "Led product design across Ulta Beauty’s desktop, responsive web, and mobile shopping experiences, with emphasis on search, recommendations, loyalty/account, cart, checkout, and conversion-focused customer journeys.",
      "Used FullStory behavioral data, A/B testing, customer research, and merchandising insights to identify friction, optimize shopping flows, and contribute to a 17% conversion lift across redesigned experiences.",
      "Improved search, filtering, sorting, recommendations, add-to-cart, cart management, checkout, error states, and empty states to help customers move more efficiently from intent to purchase.",
      "Designed scalable Figma patterns for responsive and mobile commerce experiences, reducing one-off solutions and strengthening consistency across product, design, and engineering.",
      "Partnered with product, engineering, analytics, content, and merchandising teams to balance customer needs, commercial priorities, and measurable product outcomes.",
    ],
  },
  {
    company: "Tractor Supply Company",
    title: "User Experience Designer",
    dates: "Aug 2021 – Oct 2022",
    location: "Remote",
    bullets: [
      "Converted a Nielsen Norman Group UX audit into a prioritized roadmap for responsive web and mobile commerce improvements, with a focus on product discovery, PLP, PDP, navigation, and cart experiences.",
      "Redesigned PLP and PDP experiences to improve product findability, information hierarchy, comparison, filtering, merchandising clarity, and customer decision-making.",
      "Improved product discovery patterns across navigation, category browsing, search entry points, and product-detail content to reduce friction between exploration and purchase consideration.",
      "Led the migration of the design system from Adobe XD to Figma, rebuilding core components, interaction states, and reusable patterns to improve consistency and scalability.",
      "Partnered with product and engineering to translate UX audit findings into prioritized backlog items, design requirements, and shippable commerce improvements.",
    ],
  },
  {
    company: "CVS Health / Aetna",
    title: "Senior UX Strategist, Medicare",
    dates: "Mar 2019 – Jul 2021",
    location: "Remote",
    bullets: [
      "Designed complex, multi-step Shop, Buy, and Enroll experiences for Medicare-eligible users across responsive digital channels, simplifying plan comparison, selection, and enrollment for people with varying levels of digital confidence.",
      "Improved accessibility, readability, content hierarchy, and interaction clarity while supporting WCAG, HIPAA, and Medicare compliance requirements.",
      "Facilitated research synthesis, persona development, and journey mapping workshops with product, content, compliance, and engineering stakeholders to align user needs with regulatory and business requirements.",
      "Refined information architecture and enrollment flows through iterative design and validation, improving comprehension and reducing confusion in regulated healthcare decision-making.",
    ],
  },
  {
    company: "American Airlines",
    title: "Senior Information Architect",
    dates: "Apr 2014 – Dec 2018",
    location: "Fort Worth, TX",
    bullets: [
      "Led information architecture and interaction design across aa.com, mobile experiences, and airport kiosks, defining end-to-end flows, wireframes, and interaction requirements for booking, payment, check-in, and travel management journeys.",
      "Served as the Information Architect for the 2017 Basic Economy booking experience, structuring fare-selection flows, restriction messaging, and key travel information across the purchase journey, including the placement and hierarchy of boarding-group information on the boarding pass.",
      "Designed information architecture for customer baggage tracking and notification experiences, organizing baggage status, alerts, and next-step guidance across mobile and digital travel journeys.",
      "Redesigned Review & Pay and Finish Booking experiences to clarify purchase decisions and reduce friction, while translating complex operational, compliance, and localization requirements into consistent experiences across web, mobile, and kiosk channels.",
    ],
  },
] as const;

/** Tools tabs reuse finalized competency content rather than maintaining separate claims. */
export const TOOLS_AND_TECHNOLOGY = [
  { label: "Design", items: CORE_COMPETENCIES[0].items, muted: false },
  { label: "Research & Analytics", items: CORE_COMPETENCIES[4].items, muted: false },
  { label: "AI-Assisted Product Design", items: CORE_COMPETENCIES[5].items, muted: false },
  { label: "Tools & Technical Fluency", items: CORE_COMPETENCIES[6].items, muted: false },
] as const;

export const EDUCATION = [
  {
    degree: "M.A. Design Management",
    institution: "Savannah College of Art and Design",
    dates: "",
    notes: [] as const,
  },
  {
    degree: "B.A. Digital Arts",
    institution: "New England Institute of Technology",
    dates: "",
    notes: [] as const,
  },
  {
    degree: "A.S. Web and Multimedia Technology",
    institution: "New England Institute of Technology",
    dates: "",
    notes: [] as const,
  },
] as const;
