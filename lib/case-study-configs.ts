/**
 * Case study page content configs. Uses Ulta as the design reference.
 * Each project maps to a CaseStudyPageConfig for the shared template.
 */

import type { CaseStudy } from "./projects";
import type {
  CardGridItem,
  CaseStudyPageConfig,
  EvidenceChapter,
  ScreenshotConfig,
} from "@/components/case-study/types";

const ULTA_ASSETS = {
  homepageBefore: "/ulta/00-ulta-homepage-before.png",
  homepageAfter: "/ulta/00-ulta-homepage-after.png",
  navigationBefore: "/ulta/1-ulta-shop-navigation-before.png",
  navigationAfter: "/ulta/1-ulta-shop-navigation-after.png",
  shopPageBefore: "/ulta/2-ulta-shoppage-before.png",
  shopPageAfter: "/ulta/2-ulta-shoppage-after.png",
  loginBefore: "/ulta/3-ulta-login-before.png",
  loginAfter: "/ulta/3-ulta-login-after.png",
} as const;

const CVS_ASSETS = {
  entryBefore: "/cvs/entry-before.png",
  entryAfter: "/cvs/entry-after.png",
  planDetailMobile: "/cvs/plan-detail-mobile.png",
  planComparisonDesktop: "/cvs/plan-comparison-desktop-cropped.png",
  stickyCompare: "/cvs/sticky-compare-cropped.png",
  enrollmentReview: "/cvs/enrollment-review.png",
} as const;

const TSC_ASSETS = {
  webPlpBefore: "/tsc/01-web-plp_before.png",
  webPlpAfter: "/tsc/01-web-plp_after.png",
  webPdpBefore: "/tsc/02-web-pdp_before.png",
  webPdpAfter: "/tsc/02-web-pdp_after.png",
  mobilePdpBefore: "/tsc/03-mobile-pdp_before.png",
  mobilePdpAfter: "/tsc/03-mobile-pdp_after.png",
  auditWebPlp: "/tsc/audit-web_plp.png",
  auditWebPdp: "/tsc/audit_web-pdp.png",
  auditMobileWeb: "/tsc/audit-mobile_web.png",
  auditMobileApp: "/tsc/audit-mobile_app.png",
} as const;

const AA_ASSETS = {
  admiralsClub: "/aa/aa-admirals-club-current.png",
  airsideWebExistingVsNew: "/aa/aa-airside-web-existing-vs-new.png",
  airsideWebDetail: "/aa/aa-airside-web-detail.png",
  airsideMobileConcepts: "/aa/aa-airside-mobile-concepts.png",
  airsideAppConcept: "/aa/aa-airside-app-concept.png",
  accountOwnershipLocalization: "/aa/aa-account-ownership-localization.png",
  reviewPayWireframes: "/aa/aa-review-pay-wireframes.png",
} as const;

export function getAmericanAirlinesCaseStudyConfig(): CaseStudyPageConfig {
  return {
    heroMetaRow: [
      { label: "ROLE", value: "Senior Information Architect" },
      {
        label: "SCOPE",
        value:
          "Travel tools, airport-service content, mobile support,\naccount ownership, and payment flows",
      },
      {
        label: "FOCUS",
        value:
          "Information architecture, task flow,\nmobile utility, and cross-channel clarity",
      },
    ],
    heroSubtitle:
      "Structuring complex travel experiences across information architecture, mobile utility, and decision-heavy flows.",
    heroSupportingLine:
      "Selected work focused on making travel support, airport services, account ownership, and payment journeys easier to understand across web and mobile.",
    overview: {
      eyebrow: "OVERVIEW",
      title: "Designing structure across\na complex airline ecosystem.",
      editorialMeasure: true,
      paragraphs: [
        "At American Airlines, I worked on selected digital experiences where the core challenge was not simply designing screens, but organizing complex information and making high-stakes travel tasks easier to navigate.",
        "The work spanned airport-service content, Airside Mobile Passport, account ownership and localization flows, and review-and-pay experiences. Across each of these touchpoints, the goal was the same: improve clarity, reduce friction, and help travelers understand what they needed to do next.",
        "Rather than treating each page as an isolated artifact, the work required systems thinking — structuring content, grouping actions more clearly, and creating stronger pathways across web and mobile experiences.",
      ],
    },
    challenge: {
      eyebrow: "CHALLENGE",
      title: "Making high-stakes travel tasks easier to understand.",
      editorialMeasure: true,
      paragraphs: [
        "Travel experiences carry pressure that many digital products do not. Users may be dealing with time constraints, airport processes, language issues, account details, or final payment decisions — often all within the same journey.",
        "That meant the experience could not rely on users piecing things together on their own. Key flows needed clearer hierarchy, more useful grouping of information, and stronger guidance at moments where confusion could quickly erode confidence.",
        "The challenge was not visual simplification alone. It was information architecture: helping travelers orient, decide, and proceed through complex tasks with greater confidence.",
      ],
    },
    approach: {
      eyebrow: "APPROACH",
      title: "Using information architecture to bring order to the journey.",
      paragraphs: [
        "My role focused on making complex experiences easier to use by improving how information was structured and how tasks unfolded across the journey.",
      ],
      bullets: [
        "That included clarifying content hierarchy on service and support pages, improving entry points into airport-related tools, strengthening the relationship between informational content and mobile utility, organizing account and localization flows more clearly, and making payment steps easier to parse, trust, and complete.",
        "Across these efforts, the work balanced traveler needs with technical constraints, international considerations, and operational realities inside a large-scale airline platform.",
      ],
      image: {
        src: AA_ASSETS.airsideWebExistingVsNew,
        alt: "Low-fidelity wireframes comparing existing and proposed web structure for Airside Mobile Passport within the Mobile and app section.",
        caption:
          "Web IA explorations focused on clearer hierarchy, tab organization, and pathways into airport-support tools.",
        label: "Web structure exploration",
        aspectClass: "aspect-[1024/498]",
        captionNowrap: false,
        treatment: "support",
        badgeLabel: "WEB IA",
      },
    },
    evidenceSection: {
      eyebrow: "DESIGN EVOLUTION",
      title: "Key moments where structure and task flow improved the experience.",
    },
    evidenceChapters: [
      {
        label: "AIRSIDE MOBILE PASSPORT",
        title: "Connecting travel support across web and mobile.",
        paragraphs: [
          "The Airside Mobile Passport work focused on making an airport-support feature easier to find, easier to understand, and better aligned with mobile behavior.",
          "The experience needed clearer entry points from the broader American Airlines ecosystem, a more legible page structure, and a stronger connection between informational content and in-app utility. The wireframes explored a cleaner architecture for the page, more deliberate tab organization, and clearer pathways into the tool itself.",
          "This was not about adding more interface. It was about giving the feature a structure users could understand more quickly.",
        ],
        visuals: [
          mkScreenshot({
            src: AA_ASSETS.airsideWebExistingVsNew,
            alt: "Wireframe comparison of existing tabbed Mobile and app page structure versus a proposed layout with clearer content hierarchy.",
            caption:
              "Explorations compared the existing tabbed structure with approaches that clarified hierarchy and entry into the passport tool.",
            label: "Web structure comparison",
            badgeLabel: "WEB IA",
            treatment: "support",
          }),
          mkScreenshot({
            src: AA_ASSETS.airsideWebDetail,
            alt: "Detailed wireframe of the Airside Mobile Passport page showing breadcrumbs, hero, sub-navigation tabs, and instructional content blocks.",
            caption:
              "A tighter page model emphasized topic clarity, supporting copy, and explicit paths into the mobile utility.",
            label: "Page architecture detail",
            badgeLabel: "STRUCTURE",
            treatment: "support",
          }),
        ],
      },
      {
        label: "MOBILE UTILITY & APP EXPERIENCE",
        title: "Prioritizing fast access in time-sensitive moments.",
        paragraphs: [
          "The mobile concepts explored a more utility-first structure for travelers who needed quick access to flight tools, updates, and passport-related support in constrained airport contexts.",
          "Rather than treating mobile as a smaller version of desktop, the work focused on what information should surface first, how related actions should be grouped, and how users could move more efficiently through the experience on the go.",
          "The design direction emphasized faster orientation, simpler navigation, and stronger grouping of task-relevant tools.",
        ],
        visuals: [
          mkScreenshot({
            src: AA_ASSETS.airsideMobileConcepts,
            alt: "Three low-fidelity mobile wireframes showing flight context, Mobile Passport Control entry points, and grouped travel utilities.",
            caption:
              "Concepts tested contextual entry, utility-first navigation, and where passport support should live alongside other travel tools.",
            label: "Mobile utility concepts",
            badgeLabel: "MOBILE",
            treatment: "support",
          }),
          mkScreenshot({
            src: AA_ASSETS.airsideAppConcept,
            alt: "Additional mobile wireframe exploration for in-app travel tools and passport-related support in Lucidchart.",
            caption:
              "Further mobile explorations reinforced grouping of flight tasks and support actions for on-the-go use.",
            label: "In-app experience exploration",
            badgeLabel: "MOBILE",
            treatment: "support",
          }),
        ],
      },
      {
        label: "ACCOUNT OWNERSHIP & LOCALIZATION",
        title: "Designing clarity beyond the happy path.",
        paragraphs: [
          "Account-related experiences required careful attention to form structure, guidance, and interruption states — especially when ownership questions, language mismatch, or localization issues could disrupt the user’s path.",
          "The work focused on making forms easier to understand, clarifying the sequence of required information, and providing more explicit guidance when users encountered conditions the standard flow could not easily resolve.",
          "This was a good example of information architecture creating value in edge cases, not just ideal scenarios.",
        ],
        visuals: [
          mkScreenshot({
            src: AA_ASSETS.accountOwnershipLocalization,
            alt: "Side-by-side comparison of AAdvantage enrollment in English and Japanese with a modal explaining the form must be completed in English.",
            caption:
              "Localization constraints required clear interruption patterns so travelers understood how to proceed when language and system rules conflicted.",
            label: "Account & localization",
            badgeLabel: "EDGE CASE",
            treatment: "support",
          }),
        ],
      },
      {
        label: "REVIEW & PAY",
        title: "Making payment flows easier to parse and trust.",
        paragraphs: [
          "The Review & Pay work focused on the final stage of decision-making, where information structure directly affected confidence.",
          "These wireframes improved the visibility and grouping of payment options, clarified loading and redirect behavior, and made the handoff to alternative or international payment experiences easier to understand. The goal was to reduce ambiguity at the moment of commitment.",
          "In payment flows, clarity is not just usability. It is reassurance.",
        ],
        visuals: [
          mkScreenshot({
            src: AA_ASSETS.reviewPayWireframes,
            alt: "Three wireframes of the Review and pay flow showing buffering state, payment method selection, and redirect messaging before paying with Alipay.",
            caption:
              "States addressed option grouping, loading feedback, and explicit redirect guidance for international payment paths.",
            label: "Review & pay flow",
            badgeLabel: "PAYMENT",
            treatment: "support",
          }),
        ],
      },
      {
        label: "SERVICE INFORMATION",
        title: "Turning informational pages into usable travel support.",
        paragraphs: [
          "Pages such as Admirals Club needed to do more than present content. They needed to help travelers quickly understand benefits, eligibility, and the actions available to them.",
          "The design direction emphasized clearer hierarchy, stronger sectioning, and more scannable grouping so that informational pages functioned more like service tools than static reference content.",
          "This reflected the broader IA principle behind the work: support content should help users move forward, not just read.",
        ],
        visuals: [
          mkScreenshot({
            src: AA_ASSETS.admiralsClub,
            alt: "American Airlines Admirals Club service page with tabbed sub-navigation for amenities, membership, locations, and access, and scannable amenity sections.",
            caption:
              "Live service pages illustrated how structured hierarchy and grouped actions could make support content easier to scan and act on.",
            label: "Service information structure",
            badgeLabel: "SERVICE PAGE",
            treatment: "support",
          }),
        ],
      },
    ],
    designAreas: {
      eyebrow: "KEY DESIGN DECISIONS",
      title: "Key moments where hierarchy, utility, and guidance had to align.",
      numbered: true,
      items: [
        {
          title: "Travel support pages needed to behave like tools",
          description:
            "Informational content was structured to help users take action, not simply consume content.",
        },
        {
          title: "Mobile utility required a different hierarchy",
          description:
            "Airport and on-the-go experiences demanded faster access patterns and clearer prioritization.",
        },
        {
          title: "Edge cases needed explicit guidance",
          description:
            "Account ownership and localization issues required more support than standard happy-path flows.",
        },
        {
          title: "Payment flows needed reassurance at the point of commitment",
          description:
            "Users needed to understand what was happening, what came next, and whether they were still on the right path.",
        },
      ],
    },
    reflection: {
      eyebrow: "REFLECTION",
      title: "Designing clarity through structure, not just interface.",
      editorialMeasure: true,
      paragraphs: [
        "This work reinforced an important principle: in complex digital ecosystems, strong UX often comes less from visual reinvention and more from how clearly information, actions, and next steps are organized.",
        "At American Airlines, the value of the work came from helping complex travel experiences feel more navigable, more usable, and more trustworthy across support, account, and payment moments. It was a strong example of information architecture applied to real product problems — reducing ambiguity, improving task flow, and creating clearer paths through a high-stakes journey.",
      ],
    },
  };
}

export function getUltaCaseStudyConfig(): CaseStudyPageConfig {
  const evidenceChapters: EvidenceChapter[] = [
    {
      label: "HOMEPAGE",
      title: "Creating a clearer homepage entry into shopping.",
      paragraphs: [
        "The homepage shifted from a crowded promotional surface to a clearer entry into shopping.",
        "Stronger merchandising hierarchy made it easier to scan, orient, and move into the journey.",
      ],
      visuals: [
        mkScreenshot({
          src: ULTA_ASSETS.homepageBefore,
          alt: "Ulta Beauty homepage before redesign showing a dense promotional layout with multiple competing merchandising areas.",
          caption:
            "Promotions, navigation, and hero messaging competed more heavily for attention.",
          label: "Before — Competing promotional signals",
          badgeLabel: "BEFORE",
          treatment: "before",
        }),
        mkScreenshot({
          src: ULTA_ASSETS.homepageAfter,
          alt: "Ulta Beauty homepage after redesign showing clearer merchandising hierarchy and more structured promotional organization.",
          caption:
            "A cleaner structure created clearer pathways into shopping and a more modern promotional rhythm.",
          label: "After — Clearer merchandising hierarchy",
          badgeLabel: "AFTER",
          treatment: "after",
        }),
      ],
    },
    {
      label: "NAVIGATION",
      title: "Creating clearer paths into shopping.",
      paragraphs: [
        "Navigation was simplified to reduce decision friction at the top of the journey.",
        "Clearer category entry points made it easier to move from intent into exploration.",
      ],
      visuals: [
        mkScreenshot({
          src: ULTA_ASSETS.navigationBefore,
          alt: "Ulta Beauty shop navigation before redesign showing a dense browse structure with many competing navigation options.",
          caption:
            "The earlier navigation placed more decision weight on users at the start of the journey.",
          label: "Before — Dense browse structure",
          badgeLabel: "BEFORE",
          treatment: "before",
        }),
        mkScreenshot({
          src: ULTA_ASSETS.navigationAfter,
          alt: "Ulta Beauty shop navigation after redesign showing cleaner category pathways and clearer browse entry points.",
          caption:
            "Clearer entry points and a more structured browse model made navigation easier to scan and act on.",
          label: "After — Cleaner category access",
          badgeLabel: "AFTER",
          treatment: "after",
        }),
      ],
    },
    {
      label: "CATEGORY DISCOVERY",
      title: "Making category entry easier to scan and act on.",
      paragraphs: [
        "Category entry was streamlined so subcategories were easier to scan and compare.",
        "A clearer structure helped customers move into the right part of the assortment faster.",
      ],
      visuals: [
        mkScreenshot({
          src: ULTA_ASSETS.shopPageBefore,
          alt: "Ulta Beauty category page before redesign showing a hero-led presentation with discovery competing with broader framing.",
          caption:
            "Discovery depended more on broader framing and less on direct entry points.",
          label: "Before — Discovery competed with presentation",
          badgeLabel: "BEFORE",
          treatment: "before",
        }),
        mkScreenshot({
          src: ULTA_ASSETS.shopPageAfter,
          alt: "Ulta Beauty category page after redesign showing more direct subcategory entry and clearer discovery pathways.",
          caption:
            "A more scannable structure helped customers reach the right subcategory faster.",
          label: "After — More direct category entry",
          badgeLabel: "AFTER",
          treatment: "after",
        }),
      ],
    },
    {
      label: "ACCOUNT & LOYALTY",
      title: "Clarifying sign-in and loyalty entry.",
      paragraphs: [
        "Account entry was clarified to feel more trustworthy and easier to act on.",
        "Sign-in, account creation, and loyalty value were organized so the next step felt immediately clear.",
      ],
      visuals: [
        mkScreenshot({
          src: ULTA_ASSETS.loginBefore,
          alt: "Ulta Beauty sign-in modal before redesign showing multiple competing account actions and benefit messages.",
          caption:
            "Sign-in, account creation, and benefit messaging competed within a more crowded modal flow.",
          label: "Before — Split attention across account actions",
          badgeLabel: "BEFORE",
          treatment: "before",
        }),
        mkScreenshot({
          src: ULTA_ASSETS.loginAfter,
          alt: "Ulta Beauty sign-in experience after redesign showing a more focused and trustworthy account access flow.",
          caption:
            "A more focused sign-in experience created stronger clarity, better trust, and a clearer path into loyalty.",
          label: "After — More focused account access",
          badgeLabel: "AFTER",
          treatment: "after",
        }),
      ],
    },
  ];

  return {
    heroMetaRow: [
      { label: "ROLE", value: "Senior Product Designer" },
      {
        label: "SCOPE",
        value: "Browse, Navigation,\nCategory Entry, Account & Loyalty",
      },
      {
        label: "FOCUS",
        value: "Clarity, continuity,\nand conversion support",
      },
    ],
    heroSupportingLine:
      "Designing a clearer browse-to-buy journey across\ndiscovery, navigation, and loyalty.",
    overview: {
      eyebrow: "OVERVIEW",
      title: "Designing a more coherent browse-to-buy journey for Ulta Beauty.",
      editorialMeasure: true,
      paragraphs: [
        "At Ulta, I designed across connected moments in the commerce experience — treating homepage, browse, category entry, and account access as parts of one journey rather than separate screens.",
        "My focus was to bring stronger hierarchy to merchandising, clearer paths into shopping, and smoother transitions between discovery and loyalty so customers could move through the experience with more confidence.",
        "The result was a clearer path into shopping, with less friction across discovery, browse, category entry, and account access.",
      ],
    },
    challenge: {
      eyebrow: "CHALLENGE",
      title: "Balancing merchandising complexity with customer clarity.",
      editorialMeasure: true,
      paragraphs: [
        "Ulta needed to support high-volume promotions, broad product discovery, and loyalty value without creating too much decision friction at key points in the journey.",
        "The challenge was not simply to modernize the interface, but to create stronger continuity across homepage, navigation, category entry, and account access so customers could keep moving with less friction and more confidence.",
      ],
    },
    approach: {
      eyebrow: "APPROACH",
      title: "Designing for continuity across the shopping journey.",
      paragraphs: [
        "Before refining individual screens, I looked at the shopping experience as a connected journey—reviewing how homepage, browse, category entry, and account access worked together to shape discovery, consideration, and purchase.",
      ],
      bullets: [
        "Audited key entry points and shopping moments to identify friction in hierarchy, navigation, and merchandising",
      ],
      image: {
        src: ULTA_ASSETS.navigationAfter,
        alt: "Ulta Beauty shop navigation showing connected pathways across browse and account entry.",
        caption:
          "Browse and account entry patterns were refined to feel more continuous across the journey.",
        label: "Connected pathways",
        aspectClass: "aspect-[1024/498]",
        captionNowrap: true,
      },
    },
    evidenceChapters,
    evidenceSection: {
      eyebrow: "DESIGN EVOLUTION",
      title: "Key moments that improved clarity across the shopping journey.",
    },
    designAreas: {
      eyebrow: "KEY DESIGN DECISIONS",
      title: "Key moments where hierarchy, trust, and task flow had to align.",
      items: [
        {
          title: "Homepage & Merchandising Hierarchy",
          description:
            "Reduced visual competition across promotional content so customers could scan priorities faster and enter shopping with more clarity.",
        },
        {
          title: "Navigation & Browse Pathways",
          description:
            "Simplified category access and browse structure so users could move from intent to exploration with less friction.",
        },
        {
          title: "Category Discovery",
          description:
            "Made subcategory entry points easier to scan and compare, helping customers orient quickly and move into the right part of the assortment.",
        },
        {
          title: "Account & Loyalty Entry",
          description:
            "Clarified sign-in, account creation, and loyalty value so account access felt more focused, trustworthy, and easier to act on.",
        },
      ],
      numbered: true,
    },
    reflection: {
      eyebrow: "REFLECTION",
      title: "Designing across the journey, not just the screens.",
      editorialMeasure: true,
      paragraphs: [
        "This work reinforced the value of thinking in systems. The strongest decisions came from treating homepage, navigation, category discovery, and account access as connected parts of one commerce experience rather than isolated touchpoints.",
        "It also underscored how easily merchandising can compete with clarity in high-volume retail environments. Better outcomes came from creating stronger hierarchy, clearer paths into action, and a more continuous sense of movement across the journey.",
      ],
    },
  };
}

export function getCvsCaseStudyConfig(): CaseStudyPageConfig {
  return {
    heroTitle: "CVS Health",
    heroMetaRow: [
      { label: "ROLE", value: "Senior Product Designer" },
      {
        label: "SCOPE",
        value: "Plan Search, Comparison,\nEnrollment & Review",
      },
      {
        label: "FOCUS",
        value: "Clarity, trust,\nand accessibility",
      },
    ],
    heroSubtitle: "Medicare Plan Comparison & Enrollment",
    heroSupportingLine:
      "Simplifying a regulated healthcare journey through greater clarity,\ntrust, and accessibility.",
    overview: {
      eyebrow: "OVERVIEW",
      title: "Designing clearer Medicare plan shopping\nand enrollment.",
      editorialMeasure: true,
      paragraphs: [
        "Medicare plan selection required people to weigh premiums, deductibles, coverage, pharmacy fit, provider fit, and extra benefits in a regulated healthcare context where clarity and trust mattered.",
        "I simplified how plan information was structured across plan search, plan comparison, and plan review so members could understand tradeoffs faster and move toward enrollment with more confidence, including users with varying levels of digital comfort.",
        "The work spanned Medicare shopping entry, plan-detail clarity, comparison support, and enrollment readiness across responsive experiences.",
      ],
    },
    challenge: {
      eyebrow: "CHALLENGE",
      title: "Reducing decision friction in a high-stakes healthcare journey.",
      editorialMeasure: true,
      wideBodyMeasure: true,
      paragraphs: [
        "The challenge was not simply presenting more information. It was helping people navigate dense plan details, understand tradeoffs, and move toward enrollment without losing confidence or context.",
        "Because Medicare users often include older adults with varying levels of digital comfort, the experience also needed to support clear hierarchy, readable content, and trustworthy guidance at every step.",
        "That meant balancing regulated content, accessibility, trust, and progressive disclosure across plan search, plan details, provider and pharmacy information, and pre-enrollment review.",
      ],
    },
    approach: {
      eyebrow: "APPROACH",
      title: "Designing for clarity across the Medicare decision journey.",
      paragraphs: [
        "I looked at the Medicare experience through the lens of the people using it, focusing on decision pain points, information overload, and clarity for members with varying levels of digital comfort.",
      ],
      bullets: [
        "Treated plan search, comparison, and review as one connected journey, identifying where structure, hierarchy, and decision support mattered most.",
      ],
      image: {
        src: CVS_ASSETS.entryAfter,
        alt: "Aetna Medicare shopping entry showing clearer pathways into plan shopping.",
        caption:
          "Homepage Medicare pathways were restructured to create a clearer, more direct entry into plan search.",
        label: "Medicare shopping entry",
        aspectClass: "aspect-[1024/495]",
        captionNowrap: true,
      },
    },
    evidenceSection: {
      eyebrow: "DESIGN EVOLUTION",
      title: "Key moments that improved clarity across Medicare plan shopping.",
    },
    evidenceChapters: [
      {
        label: "ENTRY PATHWAYS",
        title: "Clarifying homepage pathways into Medicare plan search.",
        paragraphs: [
          "Earlier homepage pathways split Medicare actions across multiple navigation models, making plan search feel less direct.",
          "The redesign clarified where key Medicare actions lived and created a more direct path into shopping.",
        ],
        visuals: [
          mkScreenshot({
            src: CVS_ASSETS.entryBefore,
            alt: "Earlier Aetna Medicare navigation showing multiple fragmented entry points into plan shopping.",
            caption:
              "Earlier homepage pathways split Medicare actions across multiple entry points.",
            label: "Entry into shopping before redesign",
            badgeLabel: "BEFORE",
            treatment: "before",
          }),
          mkScreenshot({
            src: CVS_ASSETS.entryAfter,
            alt: "Updated Aetna Medicare navigation showing clearer entry into plan shopping.",
            caption:
              "Homepage pathways were restructured to create a clearer, more direct entry into plan search.",
            label: "Entry into shopping after redesign",
            badgeLabel: "AFTER",
            treatment: "after",
          }),
        ],
      },
      {
        label: "PLAN DETAIL STRUCTURE",
        title: "Structuring plan details for clearer comparison.",
        paragraphs: [
          "Plan details needed to support quick scanning across premium, deductible, provider, pharmacy, benefits, and drug coverage.",
          "The redesign brought these elements into a clearer hierarchy and more predictable scan pattern.",
        ],
        visuals: [
          mkScreenshot({
            src: CVS_ASSETS.planDetailMobile,
            alt: "Mobile Medicare plan detail card with structured cost, coverage, provider, pharmacy, and drug information.",
            caption:
              "Mobile plan detail patterns surfaced cost, coverage, and provider information in a clearer scan order.",
            label: "Mobile plan detail",
            badgeLabel: "MOBILE",
            treatment: "support",
          }),
          mkScreenshot({
            src: CVS_ASSETS.planComparisonDesktop,
            alt: "Cropped design-system view of reusable Medicare plan-card variants for desktop comparison.",
            caption:
              "Reusable desktop plan-card variants standardized comparison across plan states and decision moments.",
            label: "Desktop comparison system",
            badgeLabel: "DESKTOP SYSTEM",
            treatment: "support",
          }),
        ],
      },
      {
        label: "COMPARISON SUPPORT",
        title: "Supporting comparison without losing context.",
        paragraphs: [
          "Plan selection was rarely linear, so comparison support needed to remain available as members moved through the journey.",
          "A reusable compare component preserved decision context and made side-by-side evaluation easier to revisit.",
        ],
        visuals: [
          mkScreenshot({
            src: CVS_ASSETS.stickyCompare,
            alt: "Aetna sticky compare component showing reusable plan comparison support across Medicare shopping flows.",
            caption:
              "A reusable compare component helped preserve decision context across plan selection steps.",
            label: "Sticky compare pattern",
            badgeLabel: "COMPARE PATTERN",
            treatment: "support",
          }),
        ],
      },
      {
        label: "REVIEW BEFORE ENROLLMENT",
        title: "Carrying trust and clarity into review before enrollment.",
        paragraphs: [
          "Plan selection was only part of the journey.",
          "Review screens helped members confirm requirements, understand plan details, and move toward enrollment with more confidence.",
        ],
        visuals: [
          mkScreenshot({
            src: CVS_ASSETS.enrollmentReview,
            alt: "Aetna review-before-enrollment screen showing plan details, cost and coverage, and requirements checklist before starting the application.",
            caption:
              "Review screens helped members confirm requirements and plan details before enrollment.",
            label: "Review before enrollment",
            badgeLabel: "REVIEW BEFORE ENROLLMENT",
            treatment: "support",
          }),
        ],
      },
    ],
    designAreas: {
      eyebrow: "KEY DESIGN DECISIONS",
      title: "Key moments where hierarchy, trust, and task flow had to align.",
      items: [
        {
          title: "Clearer Medicare entry points",
          description:
            "Simplified Medicare wayfinding so members could move into plan shopping through more direct and understandable paths.",
        },
        {
          title: "Reusable plan-card hierarchy",
          description:
            "Structured premiums, deductibles, benefits, provider, pharmacy, and Rx details into a more predictable scan order across states and devices.",
        },
        {
          title: "Comparison support across steps",
          description:
            "Designed reusable comparison patterns so members could preserve decision context while evaluating multiple plan options.",
        },
        {
          title: "Trust before enrollment",
          description:
            "Extended clarity into review screens so members could confirm requirements and plan details before enrollment.",
        },
      ],
      numbered: true,
    },
    reflection: {
      eyebrow: "REFLECTION",
      title: "Designing for trust, not just transactions.",
      editorialMeasure: true,
      wideBodyMeasure: true,
      paragraphs: [
        "This work reinforced that healthcare plan shopping demands more than simplifying screens.\nIt requires helping people, including older members with varying levels of digital comfort, understand complex tradeoffs through clearer hierarchy, stronger structure, and more trustworthy interactions.",
        "The strongest outcomes came from treating search, comparison, and enrollment as one connected journey, while also strengthening the system behind the experience through more reusable and scalable design patterns.",
      ],
    },
  };
}

function mkScreenshot(input: ScreenshotConfig): ScreenshotConfig {
  return input;
}

export function getTractorSupplyCaseStudyConfig(): CaseStudyPageConfig {
  return {
    layoutVariant: "audit-led",
    heroMetaRow: [
      { label: "ROLE", value: "User Experience Designer" },
      {
        label: "SCOPE",
        value: "PLP, PDP,\nand Mobile Shopping",
      },
      {
        label: "FOCUS",
        value: "Browse clarity,\npurchase decisions, design systems",
      },
    ],
    heroEyebrow: "CASE STUDY",
    heroSupportingLine:
      "Clarifying browse-to-buy decisions across\nproduct listing, product detail, and mobile shopping.",
    overview: {
      eyebrow: "OVERVIEW",
      title: "Designing clearer product discovery\nand purchase decisions for TSC.",
      editorialMeasure: true,
      paragraphs: [
        "At Tractor Supply, I focused on the core commerce moments where purchase confidence mattered most — product lists, product pages, and mobile shopping experiences.",
        "Baymard's benchmark helped surface where browse-to-buy friction was most visible, from product discovery to purchase decisions. I used those findings as a starting point to translate the highest-friction issues into focused PLP and PDP redesigns across web and mobile.",
        "The result was a more structured path from discovery to purchase, with stronger hierarchy, clearer product evaluation, and better support for purchase decisions across devices.",
      ],
    },
    challenge: {
      eyebrow: "CHALLENGE",
      title: "Reducing decision friction across product discovery and purchase.",
      editorialMeasure: true,
      wideBodyMeasure: true,
      paragraphs: [
        "Tractor Supply needed to support broad product discovery, comparison, and purchase decisions without making shoppers work too hard at key points in the journey.",
        "The challenge was not simply modernizing the interface. It was reducing friction across product listing, product evaluation, and mobile decision-making so shoppers could compare options and move toward purchase with more confidence.",
      ],
    },
    approach: {
      eyebrow: "APPROACH",
      title: "Using benchmark insight to shape the redesign.",
      paragraphs: [
        "Baymard's benchmark surfaced where Tractor Supply's browse-to-buy experience was creating the most friction. I used those findings to focus the redesign on product lists, product pages, and mobile shopping.",
      ],
      bullets: [
        "Turned the most critical issues into clearer hierarchy, easier comparison, and stronger purchase flows.",
      ],
      image: {
        src: TSC_ASSETS.auditWebPlp,
        alt: "Baymard Institute Product Lists & Filtering area summary showing performance metrics for Tractor Supply Co.",
        caption:
          "Benchmark findings helped identify where browse, evaluation, and mobile decision-making needed clearer support.",
        label: "Product Lists & Filtering",
        aspectClass: "aspect-[1024/498]",
        captionNowrap: false,
        captionFullWidth: true,
        treatment: "support",
      },
      lightboxVisuals: [
        mkScreenshot({
          src: TSC_ASSETS.auditWebPlp,
          alt: "Baymard Institute Product Lists & Filtering area summary showing performance metrics for Tractor Supply Co.",
          caption: "Product Lists & Filtering",
          label: "Product Lists & Filtering",
        }),
        mkScreenshot({
          src: TSC_ASSETS.auditWebPdp,
          alt: "Baymard Institute Product Page area summary showing performance metrics for Tractor Supply Co.",
          caption: "Product Page",
          label: "Product Page",
        }),
        mkScreenshot({
          src: TSC_ASSETS.auditMobileWeb,
          alt: "Baymard Institute Key Findings Summarized (Mobile Web) for Tractor Supply Co.",
          caption: "Mobile Web",
          label: "Mobile Web",
        }),
        mkScreenshot({
          src: TSC_ASSETS.auditMobileApp,
          alt: "Baymard Institute Mobile App area summary for Tractor Supply Co.",
          caption: "Mobile App",
          label: "Mobile App",
        }),
      ],
    },
    evidenceSection: {
      eyebrow: "DESIGN EVOLUTION",
      title: "Key redesigns that improved clarity across browse and purchase.",
    },
    evidenceChapters: [
      {
        label: "WEB Product Listing Page",
        title: "Creating a clearer path through product discovery.",
        paragraphs: [
          "The product list needed to support faster scanning, easier comparison, and more confident filtering across a dense retail catalog.",
          "The redesign reduced visual competition, clarified product-card hierarchy, and created a lighter browsing experience.",
        ],
        visuals: [
          mkScreenshot({
            src: TSC_ASSETS.webPlpBefore,
            alt: "Tractor Supply product list page before redesign with heavier filtering and denser cards.",
            caption:
              "Filtering and product scanning competed too heavily for attention, making comparison feel denser and less direct.",
            label: "Before",
            badgeLabel: "BEFORE",
            treatment: "before",
          }),
          mkScreenshot({
            src: TSC_ASSETS.webPlpAfter,
            alt: "Tractor Supply product list page after redesign with lighter browsing and stronger hierarchy.",
            caption:
              "A lighter structure made discovery, comparison, and product hierarchy easier to follow.",
            label: "After",
            badgeLabel: "AFTER",
            treatment: "after",
          }),
        ],
      },
      {
        label: "WEB Product Detail Page",
        title: "Restructuring the product page around purchase decisions.",
        paragraphs: [
          "The product detail page needed to help shoppers evaluate options and move toward purchase without unnecessary friction.",
          "The redesign reorganized the page around key decisions, creating a clearer path to purchase.",
        ],
        visuals: [
          mkScreenshot({
            src: TSC_ASSETS.webPdpBefore,
            alt: "Tractor Supply product detail page before redesign showing sparse grouping and weaker decision support.",
            caption:
              "Sparser grouping, weaker decision support, and less clarity around package and purchase options.",
            label: "Before",
            badgeLabel: "BEFORE",
            treatment: "before",
          }),
          mkScreenshot({
            src: TSC_ASSETS.webPdpAfter,
            alt: "Tractor Supply product detail page after redesign with clearer hierarchy and stronger buy flow.",
            caption:
              "Clearer hierarchy, stronger purchase flow, and better visibility into package and purchase options.",
            label: "After",
            badgeLabel: "AFTER",
            treatment: "after",
          }),
        ],
      },
      {
        label: "MOBILE Product Detail Page",
        title: "Strengthening purchase clarity on mobile.",
        paragraphs: [
          "The mobile product page needed to support quick product understanding and purchase decisions within a tighter, more constrained viewport.",
          "The redesign surfaced key choices earlier, improved information grouping, and clarified the add-to-cart flow on mobile.",
        ],
        visuals: [
          mkScreenshot({
            src: TSC_ASSETS.mobilePdpBefore,
            alt: "Tractor Supply mobile product detail page before redesign with text-heavy flow.",
            caption:
              "Important decisions appeared later in the flow, weakening purchase momentum on mobile.",
            label: "Before",
            badgeLabel: "BEFORE",
            treatment: "before",
          }),
          mkScreenshot({
            src: TSC_ASSETS.mobilePdpAfter,
            alt: "Tractor Supply mobile product detail page after redesign with earlier decision support.",
            caption:
              "Earlier decision support and clearer structure created a stronger mobile purchase path.",
            label: "After",
            badgeLabel: "AFTER",
            treatment: "after",
          }),
        ],
      },
    ],
    designAreas: {
      eyebrow: "KEY DESIGN DECISIONS",
      title: "Key moments where audit insight, redesign, and validation came together.",
      items: [
        {
          title: "UX Audit as Design Input",
          description:
            "Used Baymard's benchmark to identify where browse-to-buy friction was most visible across product lists, product pages, and mobile experiences.",
        },
        {
          title: "Focused Redesign Response",
          description:
            "Translated those findings into targeted redesigns that improved hierarchy, comparison, purchase options, and decision flow across PLP, PDP, and mobile PDP.",
        },
        {
          title: "Validation Through Testing",
          description:
            "Tested revised concepts against the original pain points to assess whether the new patterns created clearer and more confident shopping decisions.",
        },
        {
          title: "Validation & Design Confidence",
          description:
            "Refined the work through validation feedback to better support user acceptance and create a stronger foundation for measuring design impact.",
        },
      ],
      numbered: true,
    },
    reflection: {
      eyebrow: "REFLECTION",
      title: "Designing for clarity, not just conversion.",
      editorialMeasure: true,
      wideBodyMeasure: true,
      paragraphs: [
        "This project reinforced that effective commerce design is not just about showcasing products.\nIt is about helping shoppers understand options, compare with confidence, and move toward purchase through clearer structure, stronger hierarchy, and more usable decision flows.",
        "The strongest outcomes came from treating PLP, PDP, and mobile shopping as one connected journey — using audit insight to focus the redesign, then validating whether the new patterns made purchase decisions clearer and easier to act on.",
      ],
    },
  };
}

export function getCaseStudyPageConfig(project: CaseStudy): CaseStudyPageConfig {
  if (project.slug === "ulta-beauty") {
    return getUltaCaseStudyConfig();
  }

  if (project.slug === "cvs-health-aetna") {
    return getCvsCaseStudyConfig();
  }

  if (project.slug === "tractor-supply-co") {
    return getTractorSupplyCaseStudyConfig();
  }

  if (project.slug === "american-airlines") {
    return getAmericanAirlinesCaseStudyConfig();
  }

  const context = project.context;
  const challenge = project.challenge;
  const approach = project.approach;
  const keyDecisions = project.keyDesignDecisions;
  const outcomes = project.outcomes;
  const reflection = project.reflection;

  const overviewParagraphs = context.paragraphs?.length
    ? context.paragraphs
    : [project.description];

  const challengeParagraphs = challenge.paragraphs?.length
    ? challenge.paragraphs
    : ["This project required balancing user needs with business and technical constraints."];

  const hasApproachParagraphs = Boolean(approach.paragraphs?.length);
  const hasApproachBullets = Boolean(approach.bullets?.length);

  const approachParagraphs = hasApproachParagraphs
    ? approach.paragraphs!
    : hasApproachBullets
      ? [approach.bullets![0]]
      : [project.description];

  const approachBullets = hasApproachParagraphs
    ? approach.bullets
    : hasApproachBullets
      ? approach.bullets!.slice(1)
      : undefined;

  const designItems = toDesignItems(keyDecisions.bullets, outcomes.paragraphs, project);

  return {
    heroSupportingLine: project.summary,
    metaCards: [
      { label: "ROLE", value: project.role },
      { label: "FOCUS", value: project.description },
      { label: "OUTCOME", value: project.outcome ?? project.summary },
    ],
    overview: {
      eyebrow: "OVERVIEW",
      title: project.summary,
      paragraphs: overviewParagraphs,
    },
    challenge: {
      eyebrow: "CHALLENGE",
      title: "Balancing complexity with clarity.",
      paragraphs: challengeParagraphs,
    },
    approach: {
      eyebrow: "APPROACH",
      title: "Designing for continuity and clarity.",
      paragraphs: approachParagraphs,
      bullets: approachBullets,
    },
    designAreas: {
      eyebrow: "KEY DESIGN DECISIONS",
      title: "Decisions that shaped the experience.",
      items: designItems.slice(0, 4),
      numbered: true,
    },
    outcomes: {
      eyebrow: "OUTCOMES",
      title: "How the work improved the experience.",
      paragraphs: outcomes.paragraphs && outcomes.paragraphs.length > 0
        ? outcomes.paragraphs
        : [project.outcome ?? project.summary],
    },
    reflection: {
      eyebrow: "REFLECTION",
      title: "Designing across the journey.",
      paragraphs: reflection.paragraphs && reflection.paragraphs.length > 0
        ? reflection.paragraphs
        : [
            "This work reinforced the importance of designing for the full journey, not isolated screens.",
          ],
    },
  };
}

function toDesignItems(
  bullets: string[] | undefined,
  outcomeParagraphs: string[] | undefined,
  project: CaseStudy,
): CardGridItem[] {
  if (bullets && bullets.length > 0) {
    return bullets.map((bullet) => ({
      title:
        bullet.length > 60 ? `${bullet.slice(0, 57).trim()}...` : bullet,
      description: bullet,
    }));
  }

  if (outcomeParagraphs && outcomeParagraphs.length > 0) {
    return outcomeParagraphs.slice(0, 4).map((paragraph, index) => ({
      title: `Outcome ${index + 1}`,
      description: paragraph,
    }));
  }

  return [
    {
      title: "Key outcome",
      description: project.outcome ?? project.summary,
    },
  ];
}
