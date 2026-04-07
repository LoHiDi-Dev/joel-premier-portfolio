export interface CaseStudySection {
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  hideCategory?: boolean;
  status?: "published" | "coming-soon";
  role: string;
  description: string;
  summary: string;
  outcome?: string;
  image: string;
  imageAlt: string;
  /** Optional hero `object-position` for Next/Image cover (e.g. service-page screenshots). */
  heroObjectPosition?: string;
  emphasis: "primary" | "secondary";
  context: CaseStudySection;
  challenge: CaseStudySection;
  myRole: CaseStudySection;
  approach: CaseStudySection;
  keyDesignDecisions: CaseStudySection;
  outcomes: CaseStudySection;
  reflection: CaseStudySection;
}

const IMAGES = {
  ultaBeauty: "/heroes/ulta-beauty.jpg",
  cvsAetna: "/heroes/cvs-health.jpg",
  tractorSupply: "/heroes/tractor-supply.jpg",
  americanAirlines: "/aa/aa-admirals-club-current.png",
};

export const PRIMARY_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ulta-beauty",
    title: "Ulta Beauty",
    category: "E-Commerce & Shopping Optimization",
    hideCategory: true,
    role: "Senior Product Designer",
    description:
      "Designed a more coherent browse-to-buy journey across discovery, navigation, category entry, and loyalty.",
    summary:
      "Designed key moments across Ulta's browse-to-buy journey, balancing merchandising, loyalty, and purchase confidence across responsive commerce surfaces.",
    outcome:
      "Improved continuity across key shopping flows, helping customers move with less friction and more confidence.",
    image: IMAGES.ultaBeauty,
    imageAlt: "Ulta Beauty e-commerce experience featuring makeup products",
    emphasis: "primary",
    context: {
      paragraphs: [
        "Ulta's digital experience had to support fast product discovery, rich merchandising, and loyalty-driven decision-making across a large catalog and a wide range of shopper intents.",
        "The work sat inside a commerce environment where small moments of friction could quickly add up across search, browsing, product detail, cart, checkout, and post-add-to-cart recommendations.",
      ],
    },
    challenge: {
      paragraphs: [
        "The challenge was not a single screen. It was the continuity of the full shopping journey. Promotional messaging, assortment density, and loyalty value all needed to feel clear without slowing customers down.",
        "That meant simplifying decision-making across responsive breakpoints while preserving the business needs that shaped merchandising, offers, and conversion paths.",
      ],
    },
    myRole: {
      paragraphs: [
        "As Senior Product Designer, I owned end-to-end design across key commerce moments and worked closely with product, engineering, content, and merchandising partners to align customer needs with business priorities.",
      ],
      bullets: [
        "Led experience design across discovery, product detail, cart, checkout, and recommendation moments.",
        "Helped translate commerce goals into clearer interaction patterns and more consistent responsive behavior.",
        "Worked cross-functionally to keep the journey coherent from entry point through purchase.",
      ],
    },
    approach: {
      bullets: [
        "Audited the browse-to-buy journey to identify where choice overload, competing messages, or weak hierarchy created friction.",
        "Mapped how information, actions, and loyalty incentives should appear across discovery, evaluation, and checkout.",
        "Refined reusable patterns so key moments felt more consistent across desktop and mobile.",
        "Partnered with engineering and product to balance speed of delivery with interaction quality and implementation realism.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Reduced competing emphasis so primary actions, price context, and loyalty value were easier to scan together.",
        "Simplified the relationship between merchandising content and task-focused shopping actions to keep momentum through the journey.",
        "Made responsive hierarchy more intentional so essential content stayed readable and actionable at smaller breakpoints.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The result was a more cohesive commerce experience that better supported discovery, comparison, and purchase confidence.",
        "The work helped reduce unnecessary friction across connected shopping moments rather than optimizing screens in isolation.",
      ],
    },
    reflection: {
      paragraphs: [
        "What made this work senior was the need to design across an interconnected system, not just a set of pages. The strongest decisions came from treating merchandising, loyalty, and purchase flow as one experience.",
        "It reinforced the importance of protecting clarity in high-volume commerce environments where business demands can easily overwhelm customer intent.",
      ],
    },
  },
  {
    slug: "cvs-health-aetna",
    title: "CVS Health",
    category: "Medicare Plan Comparison & Enrollment",
    hideCategory: true,
    role: "Senior Product Designer",
    description:
      "Designed clearer Medicare plan shopping and enrollment experiences across search, comparison, and plan review.",
    summary:
      "Simplifying a regulated healthcare journey through greater clarity, trust, and accessibility.",
    outcome:
      "Reduced friction in a complex, regulated journey and helped members make more confident decisions.",
    image: IMAGES.cvsAetna,
    imageAlt: "CVS Health Aetna Medicare Extra Benefits Card",
    emphasis: "primary",
    context: {
      paragraphs: [
        "The Medicare experience needed to support people making consequential healthcare decisions in a digital environment shaped by regulation, benefit complexity, and variable health literacy.",
        "For many users, comparing plans and understanding eligibility or coverage details was a high-stakes task that required clarity, accessibility, and trust at every step.",
      ],
    },
    challenge: {
      paragraphs: [
        "The core challenge was making dense plan information easier to compare without oversimplifying the detail people needed to make informed choices.",
        "This meant designing for older audiences, accessibility requirements, and tightly constrained content structures while still creating a guided and understandable experience.",
      ],
    },
    myRole: {
      paragraphs: [
        "As Senior Product Designer, I led design across comparison and enrollment flows, shaping how information was organized, prioritized, and experienced across the journey.",
      ],
      bullets: [
        "Owned UX design for plan comparison and enrollment moments.",
        "Worked with product, engineering, and content partners in a regulated environment.",
        "Applied accessibility and systems thinking to improve comprehension and decision support.",
      ],
    },
    approach: {
      bullets: [
        "Reviewed the end-to-end journey to surface where terminology, hierarchy, and task flow created confusion.",
        "Structured comparison patterns to make differences between plans easier to understand at a glance.",
        "Used accessible content and interaction patterns to better support readability, navigation, and confidence.",
        "Iterated with cross-functional partners to keep the experience compliant while improving usability.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Clarified the hierarchy of plan details so the most decision-critical information was easier to find first.",
        "Designed comparison views that reduced cognitive load without removing needed depth.",
        "Used simpler interaction patterns and content framing to make the enrollment path feel more guided and less intimidating.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The resulting experience made plan evaluation more understandable and better supported informed enrollment behavior.",
        "The work improved the overall feel of the journey by reducing ambiguity in a space where users needed reassurance as much as efficiency.",
      ],
    },
    reflection: {
      paragraphs: [
        "This project reinforced that accessibility and clarity are not finishing steps in healthcare design. They are foundational product decisions.",
        "The most valuable contribution was helping complex information feel more navigable without compromising accuracy or trust.",
      ],
    },
  },
  {
    slug: "tractor-supply-co",
    title: "Tractor Supply",
    category: "E-Commerce UX Audit & Design Systems",
    hideCategory: true,
    role: "User Experience Designer",
    description:
      "Led audit-informed UX improvements across web and mobile, while helping evolve Adobe XD templates into a unified Figma design system.",
    summary:
      "Clarifying core shopping flows across product discovery, evaluation, and purchase.",
    outcome:
      "Helped modernize core patterns and improve consistency across commerce touchpoints.",
    image: IMAGES.tractorSupply,
    imageAlt: "Tractor Supply Co store exterior",
    emphasis: "primary",
    context: {
      paragraphs: [
        "Tractor Supply's commerce experience served customers with practical, task-oriented shopping needs across a broad catalog and a mix of desktop and mobile behaviors.",
        "At the same time, the team was evolving how design work was created and shared, including a transition of system components from Adobe XD to Figma.",
      ],
    },
    challenge: {
      paragraphs: [
        "The work required improving the usability of existing commerce experiences while also helping stabilize the foundations the team used to design and scale them.",
        "That meant balancing near-term UX fixes with longer-term system consistency instead of treating them as separate tracks.",
      ],
    },
    myRole: {
      paragraphs: [
        "As User Experience Designer, I applied audit findings to commerce flows and supported the transition of shared design components into a more scalable Figma-based system.",
      ],
      bullets: [
        "Assessed experience gaps across web and mobile shopping moments.",
        "Helped prioritize practical usability improvements based on audit signals.",
        "Supported design system component migration from Adobe XD to Figma.",
      ],
    },
    approach: {
      bullets: [
        "Reviewed audit findings and translated them into concrete opportunities for clearer flows and interactions.",
        "Focused on usability improvements that could strengthen shopping tasks without requiring unnecessary redesign.",
        "Worked on shared component foundations so design decisions could be repeated more consistently over time.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Prioritized improvements that addressed recurring friction instead of isolated visual issues.",
        "Used system migration work to reinforce consistency, reuse, and delivery efficiency.",
        "Kept the work grounded in customer tasks so updates felt practical and measurable in day-to-day use.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The work strengthened commerce usability while also helping the team move toward a more maintainable design foundation.",
        "It created a clearer bridge between evaluative audit work and actual product improvements.",
      ],
    },
    reflection: {
      paragraphs: [
        "This project highlighted the value of pairing UX refinement with system stewardship. The design impact was stronger because the team was not only fixing issues, but improving how future work could be built.",
      ],
    },
  },
  {
    slug: "american-airlines",
    title: "American\u00A0Airlines",
    category: "Information Architecture & Travel Systems",
    hideCategory: true,
    role: "Senior Information Architect",
    description:
      "Selected IA and UX flow work across travel support, airport services, account ownership, and payment journeys on web and mobile.",
    summary:
      "Structuring complex travel experiences across information architecture, mobile utility, and decision-heavy flows.",
    outcome:
      "Improved clarity and task flow across support content, mobile utility, account edge cases, and review-and-pay moments.",
    image: IMAGES.americanAirlines,
    imageAlt:
      "American Airlines Admirals Club service page showing structured sub-navigation and scannable amenity sections",
    emphasis: "primary",
    context: {
      paragraphs: [
        "Air travel involves interconnected tasks before, during, and after booking, with customers moving across desktop, mobile, and airport touchpoints depending on context and urgency.",
        "American's digital ecosystem needed stronger structural clarity so people could understand where they were, what they could do next, and how to manage travel changes with less friction.",
      ],
    },
    challenge: {
      paragraphs: [
        "The challenge was architectural: aligning content, navigation, and task pathways across a large travel system where booking, post-booking, and service moments often intersected.",
        "Customers were not moving through a single linear flow, so the information architecture had to support multiple entry points and changing traveler intent.",
      ],
    },
    myRole: {
      paragraphs: [
        "As Senior Information Architect, I focused on how complex travel tasks were organized across channels and how the structure could better support orientation and task completion.",
      ],
      bullets: [
        "Defined information architecture for booking and post-booking experiences.",
        "Worked across web, mobile, and kiosk considerations.",
        "Partnered with cross-functional teams to clarify pathways, labels, and decision points within the travel journey.",
      ],
    },
    approach: {
      bullets: [
        "Mapped key traveler scenarios across planning, booking, and trip-management contexts.",
        "Evaluated where navigation and information models created ambiguity or forced unnecessary backtracking.",
        "Built clearer structures for related tasks so users could move across the ecosystem with better orientation.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Focused on task architecture rather than surface-level visual treatment, recognizing that clearer structure would unlock better end-to-end usability.",
        "Designed for multiple traveler entry points instead of assuming a single ideal flow.",
        "Reduced ambiguity in labels and pathways so customers could better predict where actions lived and what would happen next.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The work improved structural clarity across connected travel journeys and better supported wayfinding through a complex service ecosystem.",
        "It helped simplify how customers navigated between planning, booking, and managing their trips.",
      ],
    },
    reflection: {
      paragraphs: [
        "This project demonstrated the strategic value of information architecture in experience design. Often the most meaningful UX improvement is not a new interface, but a better underlying structure.",
      ],
    },
  },
];

export const SECONDARY_CASE_STUDIES: CaseStudy[] = [];

export const ALL_CASE_STUDIES: CaseStudy[] = [...PRIMARY_CASE_STUDIES];

export type Project = CaseStudy;
export type PersonalProject = CaseStudy;

export const FEATURED_PROJECTS: Project[] = PRIMARY_CASE_STUDIES.slice(0, 2);

export const ADDITIONAL_PROJECTS: Project[] = PRIMARY_CASE_STUDIES.slice(2);

export const PERSONAL_PROJECTS: PersonalProject[] = [];

const PROJECT_MAP: Record<string, CaseStudy> = {};
ALL_CASE_STUDIES.forEach((project) => {
  PROJECT_MAP[project.slug] = project;
});

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return PROJECT_MAP[slug];
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const navigableCaseStudies = ALL_CASE_STUDIES.filter(
    (project) => project.status !== "coming-soon",
  );

  const currentIndex = navigableCaseStudies.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return navigableCaseStudies[(currentIndex + 1) % navigableCaseStudies.length];
}

export const APPROACH_ITEMS = [
  {
    title: "Product Strategy",
    description:
      "Aligning user needs, business goals, and product priorities to support clearer decisions.",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable foundations that improve consistency, speed, and reuse across teams.",
  },
  {
    title: "Accessibility",
    description:
      "Designing inclusive experiences that strengthen clarity, usability, and compliance.",
  },
  {
    title: "Responsive Design",
    description:
      "Creating cohesive experiences across desktop, tablet, and mobile.",
  },
  {
    title: "Journey Mapping",
    description:
      "Structuring complex flows into clearer end-to-end experiences.",
  },
  {
    title: "Cross-Functional Delivery",
    description:
      "Partnering with product, engineering, and content to deliver with clarity and momentum.",
  },
];
