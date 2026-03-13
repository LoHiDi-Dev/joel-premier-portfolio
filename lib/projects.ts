export interface CaseStudySection {
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  hideCategory?: boolean;
  role: string;
  description: string;
  summary: string;
  outcome?: string;
  image: string;
  imageAlt: string;
  emphasis: "primary" | "secondary";
  context: CaseStudySection;
  challenge: CaseStudySection;
  myRole: CaseStudySection;
  approach: CaseStudySection;
  keyDesignDecisions: CaseStudySection;
  outcomes: CaseStudySection;
  reflection: CaseStudySection;
}

// Figma design asset URLs (from JP-I-Portfolio-UX-PILOT, node 9:1112)
const IMAGES = {
  ultaBeauty:
    "https://www.figma.com/api/mcp/asset/efefe37d-6f53-4d6d-af7d-7c2ffc136735",
  cvsAetna:
    "https://www.figma.com/api/mcp/asset/45b896b9-0d65-4338-9605-a5869094bcc7",
  tractorSupply:
    "https://www.figma.com/api/mcp/asset/26ab01dc-ae7e-4267-8fee-39ef828d9426",
  americanAirlines:
    "https://www.figma.com/api/mcp/asset/f79a1d5a-a38e-4d92-a193-74c2b8eb708f",
  medivite:
    "https://www.figma.com/api/mcp/asset/43e70474-bb35-498f-879e-8ecf2358c593",
  stJude:
    "https://www.figma.com/api/mcp/asset/032a5f14-5016-43e8-a400-dde92adc93de",
  renoTx:
    "https://www.figma.com/api/mcp/asset/db2a842f-5672-485d-932d-00f7ff07f945",
};

export const PRIMARY_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ulta-beauty",
    title: "Ulta Beauty",
    category: "E-Commerce & Shopping Optimization",
    hideCategory: true,
    role: "Senior Product Designer",
    description:
      "Designed the end-to-end shopping journey across\ndiscovery, product detail, cart, checkout,\nand personalized recommendations.",
    summary:
      "Designed key moments across Ulta's browse-to-buy journey, balancing merchandising, loyalty, and purchase confidence across responsive commerce surfaces.",
    outcome:
      "Improved continuity across key shopping flows, helping users find products faster\nand move to purchase with more confidence.",
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
      "Designed Medicare plan comparison and enrollment experiences that improved clarity and helped members make more confident decisions.",
    summary:
      "Focused on simplifying a regulated healthcare journey where clarity, accessibility, and trust directly affected decision-making.",
    outcome:
      "Reduced friction across a complex, regulated journey and clarified\nkey steps in plan selection and enrollment.",
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
    title: "Tractor Supply Co",
    category: "E-Commerce UX Audit & Design Systems",
    role: "User Experience Designer",
    description:
      "Led audit-informed UX improvements across web and mobile, while helping evolve Adobe XD templates into a unified Figma design system.",
    summary:
      "Used research-backed heuristics and systems thinking to improve core shopping flows while helping modernize shared design foundations.",
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
    title: "American Airlines",
    category: "Travel Journey Architecture",
    role: "Senior Information Architect",
    description:
      "Defined information architecture across end-to-end travel journeys for web, mobile, and kiosk experiences.",
    summary:
      "Structured a complex travel ecosystem so customers could move through booking and trip-management tasks with less confusion.",
    outcome:
      "Clarified multi-channel travel flows and improved consistency across key traveler moments.",
    image: IMAGES.americanAirlines,
    imageAlt: "American Airlines aircraft on tarmac",
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

export const SECONDARY_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "medivite",
    title: "MediVite",
    category: "Digital Health Platform Exploration",
    role: "Independent Product Design Exploration",
    description:
      "Designed a digital health platform focused on care access, provider discovery, and clearer patient journeys.",
    summary:
      "A self-directed exploration focused on making healthcare access feel more coordinated, understandable, and responsive to patient needs.",
    outcome:
      "Created a clearer concept for connected care access, service discovery, and patient guidance.",
    image: IMAGES.medivite,
    imageAlt: "MediVite digital health platform",
    emphasis: "secondary",
    context: {
      paragraphs: [
        "MediVite explored how a modern health platform could better connect care discovery, service access, and ongoing patient support in one coherent experience.",
        "The concept was grounded in a familiar healthcare problem: people often need clearer pathways, better orientation, and less fragmentation when trying to find or manage care.",
      ],
    },
    challenge: {
      paragraphs: [
        "Healthcare platforms can easily become fragmented, with disconnected entry points and unclear next steps for users trying to complete essential tasks.",
        "The challenge was to create a calmer, more unified experience without losing the flexibility needed for different patient goals and contexts.",
      ],
    },
    myRole: {
      paragraphs: [
        "This was a self-directed product design exploration where I defined the experience direction, interaction approach, and responsive design system considerations.",
      ],
      bullets: [
        "Owned concept framing, flows, UI direction, and responsive behavior.",
        "Explored how service discovery and access pathways could feel more connected.",
        "Used the project to examine how healthcare experiences could balance clarity, warmth, and utility.",
      ],
    },
    approach: {
      bullets: [
        "Framed the core patient tasks the platform needed to support.",
        "Mapped how users might move between discovery, selection, and follow-through moments.",
        "Explored a visual system that felt modern and reassuring without becoming overly decorative.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Kept navigation and action hierarchy simple so care-related decisions felt easier to progress through.",
        "Used modular patterns that could scale across different health services and content types.",
        "Balanced friendliness with clarity so the interface still felt dependable for important tasks.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The concept demonstrated how a more connected healthcare experience could improve orientation and reduce friction across patient tasks.",
        "It also served as a useful exercise in translating systems thinking into a cleaner, more approachable digital health interface.",
      ],
    },
    reflection: {
      paragraphs: [
        "What made this exploration valuable was the opportunity to think beyond isolated screens and focus on how a service ecosystem should feel when it is working well for patients.",
      ],
    },
  },
  {
    slug: "st-jude-navigation-study",
    title: "St. Jude - Navigation Exploration",
    category: "Information Architecture Exploration",
    role: "Independent Navigation Study",
    description:
      "Explored nonprofit navigation patterns and simpler supporter pathways to improve findability.",
    summary:
      "A focused navigation and information architecture study aimed at reducing friction across a mission-driven site with multiple audiences and needs.",
    outcome:
      "Produced a navigation direction centered on audience clarity, findability, and stronger pathway definition.",
    image: IMAGES.stJude,
    imageAlt: "St. Jude Children's Research Hospital building",
    emphasis: "secondary",
    context: {
      paragraphs: [
        "Nonprofit organizations often serve multiple audiences at once, each arriving with different needs, urgency levels, and emotional context.",
        "This exploration focused on how a navigation system could better support families, donors, and supporters without making the site feel crowded or difficult to understand.",
      ],
    },
    challenge: {
      paragraphs: [
        "The main challenge was balancing breadth with clarity. A site can contain all the right content and still feel hard to use if the pathways do not reflect how people actually orient themselves.",
        "The navigation needed to reduce cognitive load while still supporting varied, meaningful journeys.",
      ],
    },
    myRole: {
      paragraphs: [
        "This was an independent study focused on information architecture, labeling, and navigation patterns for a complex nonprofit experience.",
      ],
      bullets: [
        "Examined audience needs and likely entry points.",
        "Explored clearer structural groupings and navigation pathways.",
        "Focused on orientation, findability, and emotional clarity in the browsing experience.",
      ],
    },
    approach: {
      bullets: [
        "Looked at how multiple user groups might interpret the same site structure differently.",
        "Tested ways to simplify top-level navigation without flattening important distinctions.",
        "Used hierarchy and labeling decisions to reduce ambiguity in high-value paths.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Structured navigation around user intent rather than organizational complexity.",
        "Clarified labels so sections felt more predictable before users clicked.",
        "Protected the most emotionally important pathways by making them easier to locate quickly.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The study produced a more focused navigation direction with stronger audience clarity and improved findability.",
        "It highlighted how better IA decisions can reduce friction without requiring a visually heavy redesign.",
      ],
    },
    reflection: {
      paragraphs: [
        "This work reinforced that navigation design is often a content and decision-making problem before it becomes a UI problem.",
      ],
    },
  },
  {
    slug: "reno-tx-civic-website-redesign",
    title: "Reno, TX - Civic Website Redesign",
    category: "Civic Service Experience",
    role: "Independent Civic UX Exploration",
    description:
      "Reframed a municipal website around service clarity, key resident tasks, and easier access to local information.",
    summary:
      "A civic website exploration focused on helping residents complete everyday tasks with less searching and more confidence.",
    outcome:
      "Framed a more service-oriented civic experience centered on resident tasks and easier information access.",
    image: IMAGES.renoTx,
    imageAlt: "Welcome to Reno, Texas sign",
    emphasis: "secondary",
    context: {
      paragraphs: [
        "Municipal websites are everyday service tools. Residents often arrive with practical questions, time-sensitive tasks, or a need for straightforward public information.",
        "This redesign exploration focused on how a civic experience could feel clearer, more useful, and more respectful of resident time.",
      ],
    },
    challenge: {
      paragraphs: [
        "The challenge was making local government information easier to act on. Civic websites often reflect internal structure rather than the way residents think about tasks.",
        "The redesign needed to improve clarity and service access while maintaining trust and simplicity.",
      ],
    },
    myRole: {
      paragraphs: [
        "This was a self-directed civic UX exploration where I shaped the information structure, service pathways, and interface direction.",
      ],
      bullets: [
        "Reframed the experience around resident needs and common civic tasks.",
        "Explored clearer pathways for service information and city updates.",
        "Applied a restrained visual approach to keep utility and trust at the center.",
      ],
    },
    approach: {
      bullets: [
        "Identified the resident tasks most likely to drive visits and repeat usage.",
        "Organized information around services, actions, and local updates instead of internal departments alone.",
        "Explored a cleaner responsive structure that could support both quick answers and deeper browsing.",
      ],
    },
    keyDesignDecisions: {
      bullets: [
        "Shifted emphasis from institutional structure to task clarity so residents could find what they needed faster.",
        "Used plain, scannable hierarchy to support trust and readability.",
        "Kept the interface restrained so public-service information stayed central.",
      ],
    },
    outcomes: {
      paragraphs: [
        "The concept demonstrated how a more service-oriented structure could improve resident access and overall usability.",
        "It also showed how civic design can feel more modern without becoming visually noisy or harder to maintain.",
      ],
    },
    reflection: {
      paragraphs: [
        "This project underscored how much civic UX depends on prioritization and structure. Good public-facing design often means removing friction, not adding flourish.",
      ],
    },
  },
];

export const ALL_CASE_STUDIES: CaseStudy[] = [
  ...PRIMARY_CASE_STUDIES,
  ...SECONDARY_CASE_STUDIES,
];

export type Project = CaseStudy;
export type PersonalProject = CaseStudy;

export const FEATURED_PROJECTS: Project[] = PRIMARY_CASE_STUDIES.slice(0, 2);

export const ADDITIONAL_PROJECTS: Project[] = PRIMARY_CASE_STUDIES.slice(2);

export const PERSONAL_PROJECTS: PersonalProject[] = SECONDARY_CASE_STUDIES;

const PROJECT_MAP: Record<string, CaseStudy> = {};
ALL_CASE_STUDIES.forEach((project) => {
  PROJECT_MAP[project.slug] = project;
});

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return PROJECT_MAP[slug];
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const currentIndex = ALL_CASE_STUDIES.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return ALL_CASE_STUDIES[(currentIndex + 1) % ALL_CASE_STUDIES.length];
}

export const APPROACH_ITEMS = [
  {
    title: "Product Strategy",
    description:
      "Aligning user needs, business goals, and product priorities to support better decisions.",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable foundations that improve consistency, speed, and reuse across teams.",
  },
  {
    title: "Accessibility",
    description:
      "Designing inclusive experiences that improve\nclarity, usability, and compliance.",
  },
  {
    title: "Responsive Design",
    description:
      "Creating cohesive experiences across\ndesktop, tablet, and mobile.",
  },
  {
    title: "Journey Mapping",
    description:
      "Structuring complex flows into clearer\nend-to-end experiences.",
  },
  {
    title: "Cross-Functional Delivery",
    description:
      "Partnering with product, engineering, and content\nto deliver with clarity and momentum.",
  },
];
