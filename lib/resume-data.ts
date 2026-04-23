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
  "Senior Product Designer with 10+ years shaping high-stakes digital journeys across B2B SaaS, e-commerce, healthcare, and travel.\nI translate complex operations into clear, measurable, and accessible experiences that reduce friction, support conversion, and scale consistently.",
  "My practice spans discovery, information architecture, interaction design, and design systems. I partner with product, engineering, analytics, and compliance to turn ambiguity into structured, shippable work that improves customer journeys and team execution.",
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
  "End-to-End Product Design",
  "Information Architecture",
  "Interaction Design",
  "Design Systems",
  "Accessibility (WCAG)",
  "User Research",
  "Behavioral Analytics",
  "Journey Mapping",
  "Cross-Functional Delivery",
] as const;

export const EXPERIENCE = [
  {
    company: "Jillamy, Inc.",
    title: "In-House Product Designer · Front-End Implementation Support",
    dates: "Nov 2025 – Present",
    location: "Mesquite, TX",
    bullets: [
      "Sole Product Designer for JIM (Jillamy Inventory & Ops Portal), a B2B operator platform managing inventory, receiving, picking, packing, and shipping across multiple warehouse sites.",
      "Own end-to-end product design: user research with warehouse associates, supervisors, and operations leads; journey mapping across high-volume workflows; interaction design for role-based task completion; and usability validation against real operational scenarios.",
      "Designed error-reduction patterns, confirmation states, normalized SKU search, and audit-grade event logging that measurably reduced miscounts, mis-picks, and mis-ships in high-volume operational flows.",
      "Established the product's first design system and interaction standards, improving consistency, usability, and scalability across every operational module.",
    ],
  },
  {
    company: "Ulta Beauty",
    title: "Senior Product Designer",
    dates: "Nov 2022 – Sep 2025",
    location: "Remote",
    bullets: [
      "Led end-to-end product design for Ulta Beauty core shopping journey across web and responsive, owning search, PLP, PDP, cart, checkout, and product recommendation experiences serving millions of monthly shoppers.",
      "Reworked information architecture and product discovery flows using FullStory behavioral data, A/B testing, and customer research, contributing to a 17% lift in conversion on redesigned flows and materially reducing drop-off between discovery and cart.",
      "Redesigned high-traffic interactions (navigation, filtering, sorting, add-to-cart, cart management, checkout, error and empty states), standardizing patterns that helped shoppers’ complete tasks faster with fewer dead-ends.",
      "Built and maintained scalable Figma design system patterns for web and mobile, improving cross-team consistency, reducing one-off components, and accelerating engineering handoff.",
      "Partnered daily with product, engineering, analytics, content, and merchandising to translate business goals into measurable, shippable design work.",
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
      "Designed the Shop, Buy, and Enroll experience for Medicare-eligible users (65+), using usability testing to simplify plan comparison, selection, and enrollment across widely varying levels of digital confidence.",
      "Drove accessibility and comprehension improvements (readability, content hierarchy, interaction clarity) supporting WCAG compliance alongside HIPAA and Medicare regulatory requirements.",
      "Facilitated research synthesis, persona, and journey mapping workshops in Miro with product, content, and compliance stakeholders, building shared understanding across a highly regulated domain.",
      "Iteratively refined IA and enrollment flows, improving plan selection completion rates and user comprehension across one of the most regulated consumer experiences in U.S. healthcare.",
    ],
  },
  {
    company: "American Airlines",
    title: "Senior Information Architect",
    dates: "Apr 2014 – Dec 2018",
    location: "Fort Worth, TX",
    bullets: [
      "Led information architecture for aa.com, mobile, and airport kiosks, defining user flows, wireframes, and interaction requirements for high-stakes booking and travel journeys.",
      "Redesigned Review & Pay and Finish booking steps, and led IA for Airside Mobile re-entry workflows, GDPR request portal (EU customers), and WePay integration on aa.com China, translating compliance and localization requirements into consistent, user-friendly flows.",
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
