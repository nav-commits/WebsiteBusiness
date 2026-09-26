export type IndustryPageData = {
  slug: string;
  shortName: string;
  label: string;
  seoTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  metaDescription: string;
  challenges: Array<{ title: string; description: string }>;
  priorities: string[];
  projects: Array<{ title: string; slug: string; context: string }>;
  packageName: string;
  packagePrice: string;
  packageReason: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const industryPages: IndustryPageData[] = [
  {
    slug: "lawyers",
    shortName: "Law firms",
    label: "Web Design for Toronto Lawyers",
    seoTitle: "Law Firm Web Design Toronto | Nav Web Design",
    eyebrow: "Legal website design",
    title: "Law Firm Websites Built to Earn Trust Before the First Call",
    description:
      "Strategic websites for Toronto and GTA law firms that need to explain their practice areas clearly, establish credibility, and turn high-intent visitors into consultation requests.",
    metaDescription:
      "Toronto law firm web design focused on trust, clear practice-area pages, local SEO, and qualified consultation inquiries.",
    challenges: [
      {
        title: "Trust must happen quickly",
        description:
          "Prospective clients often compare several firms at once. Credentials, experience, and the next step must be immediately clear.",
      },
      {
        title: "Practice areas can feel overwhelming",
        description:
          "A deliberate page structure helps visitors recognize their legal issue and reach the right service without digging.",
      },
      {
        title: "Every inquiry is not equally valuable",
        description:
          "Focused calls to action and intake questions help guide better-fit prospects toward a consultation.",
      },
    ],
    priorities: [
      "Clear practice-area and lawyer profile pages",
      "Consultation-focused conversion paths",
      "Local SEO foundations for Toronto and GTA searches",
      "Mobile-first phone and inquiry experiences",
      "Professional trust signals without generic legal templates",
    ],
    projects: [
      {
        title: "PSR Law",
        slug: "psr-law",
        context: "Real estate law website with clear consultation pathways.",
      },
      {
        title: "Mars Law",
        slug: "mars-law",
        context: "Multi-practice firm structure supported by individual lawyer profiles.",
      },
      {
        title: "Vik Ghankas Law Group",
        slug: "vik-ghankas-law-group",
        context: "Focused family-law positioning built around direct communication.",
      },
    ],
    packageName: "Lead Generation Website",
    packagePrice: "$2,200–$3,000 CAD",
    packageReason:
      "Most firms need multiple practice-area pages, trust-focused content, local SEO foundations, and a deliberate consultation journey.",
    faqs: [
      {
        question: "Can you organize multiple legal practice areas?",
        answer:
          "Yes. The page structure is planned around how prospective clients identify their issue, compare expertise, and decide to contact the firm.",
      },
      {
        question: "Can the website support consultation requests?",
        answer:
          "Yes. I can connect a booking tool or build an inquiry flow that collects the information your firm needs before responding.",
      },
      {
        question: "Do you guarantee Google rankings?",
        answer:
          "No credible designer can guarantee a ranking. I build strong technical and on-page SEO foundations and recommend the next steps needed for ongoing local visibility.",
      },
    ],
  },
  {
    slug: "contractors",
    shortName: "Contractors",
    label: "Web Design for Toronto Contractors",
    seoTitle: "Contractor Website Design Toronto | Nav Web Design",
    eyebrow: "Contractor website design",
    title: "Contractor Websites Built to Turn Local Searches Into Quote Requests",
    description:
      "Conversion-focused websites for contractors and home-service businesses across Toronto and the GTA—designed to showcase workmanship, service areas, and a clear reason to request a quote.",
    metaDescription:
      "Toronto contractor web design with project galleries, service-area pages, local SEO foundations, and quote-focused conversion paths.",
    challenges: [
      {
        title: "Homeowners need visual proof",
        description:
          "Project photography, reviews, and clear service details matter more than broad promises about quality.",
      },
      {
        title: "Mobile visitors want a fast answer",
        description:
          "Service areas, availability, phone access, and quote requests should be simple to find from any page.",
      },
      {
        title: "Local competition looks similar",
        description:
          "Specific services, real process details, and focused location content help distinguish the business from generic directories and templates.",
      },
    ],
    priorities: [
      "Service and service-area page structure",
      "Project gallery and review placement",
      "Mobile-friendly quote request flow",
      "Local SEO foundations for GTA communities",
      "Clear process, warranty, and credibility details",
    ],
    projects: [
      {
        title: "Container Storage Solutions",
        slug: "container-storage-solutions",
        context: "A commercial service website with a direct B2B quote pathway.",
      },
    ],
    packageName: "Lead Generation Website",
    packagePrice: "$2,200–$3,000 CAD",
    packageReason:
      "A contractor growth site usually needs dedicated services, proof of work, focused service-area content, and a streamlined quote journey.",
    faqs: [
      {
        question: "Can you build pages for different service areas?",
        answer:
          "Yes, when each page contains useful and genuinely local information. I avoid thin, duplicated city pages that add little value for visitors.",
      },
      {
        question: "Can I update project photos later?",
        answer:
          "Yes. The site can be structured so new projects, testimonials, and service updates can be added as the business grows.",
      },
      {
        question: "Can the form qualify quote requests?",
        answer:
          "Yes. We can ask for the service, project location, timeline, and a short description while keeping the form easy to complete on mobile.",
      },
    ],
  },
  {
    slug: "healthcare",
    shortName: "Healthcare",
    label: "Web Design for GTA Healthcare Providers",
    seoTitle: "Healthcare Website Design Toronto | Nav Web Design",
    eyebrow: "Healthcare website design",
    title: "Healthcare Websites That Make the Next Step Feel Clear and Reassuring",
    description:
      "Accessible, trust-focused websites for clinics, practitioners, and healthcare services that need to explain care options clearly and guide visitors toward the right booking or referral path.",
    metaDescription:
      "Healthcare website design for Toronto and GTA clinics, practitioners, and services with accessible content and booking-focused patient journeys.",
    challenges: [
      {
        title: "Visitors may already feel uncertain",
        description:
          "Plain language and a calm visual hierarchy help people understand services without adding unnecessary confusion or pressure.",
      },
      {
        title: "Different visitors need different pathways",
        description:
          "Patients, families, physicians, and clinic partners may each require a distinct route through the same website.",
      },
      {
        title: "Credibility must be easy to verify",
        description:
          "Credentials, approach, service details, and external trust profiles should be visible before asking someone to book.",
      },
    ],
    priorities: [
      "Accessible, plain-language service content",
      "Clear booking, referral, and contact pathways",
      "Practitioner credentials and trust signals",
      "Mobile performance and readable layouts",
      "Appropriate privacy-conscious inquiry design",
    ],
    projects: [
      {
        title: "Axis Health Centre",
        slug: "axis-health-centre",
        context: "Multi-service clinic architecture with treatment-specific pages.",
      },
      {
        title: "RestoreHealth",
        slug: "restore-health",
        context: "Virtual specialist-care pathways for patients and referring physicians.",
      },
      {
        title: "The Healing Hive",
        slug: "the-healing-hive",
        context: "A warm psychotherapy website shaped around safety and trust.",
      },
    ],
    packageName: "Lead Generation Website",
    packagePrice: "$2,200–$3,000 CAD",
    packageReason:
      "Healthcare organizations often need several services, distinct visitor journeys, strong credibility, and booking or referral integrations.",
    faqs: [
      {
        question: "Can you connect an existing booking platform?",
        answer:
          "Yes. I can integrate your current booking destination and design the surrounding journey so visitors understand what to choose before leaving the site.",
      },
      {
        question: "Do you write medical claims or clinical advice?",
        answer:
          "No. Clinical claims, credentials, and service information must come from your approved materials. I help organize and present that content clearly.",
      },
      {
        question: "Can the website serve patients and professional partners?",
        answer:
          "Yes. Separate pathways can be planned for patients, physicians, clinics, or other partners when each group has a different goal.",
      },
    ],
  },
  {
    slug: "consultants",
    shortName: "Consultants",
    label: "Web Design for Toronto Consultants",
    seoTitle: "Consultant Website Design Toronto | Nav Web Design",
    eyebrow: "Consulting website design",
    title: "Consulting Websites That Turn Complex Expertise Into a Clear Reason to Call",
    description:
      "Strategic websites for consultants and professional-service firms that need to explain sophisticated offers, demonstrate authority, and guide decision-makers toward a focused conversation.",
    metaDescription:
      "Toronto consultant website design focused on clear positioning, authority, service architecture, and qualified consultation inquiries.",
    challenges: [
      {
        title: "Expertise can be difficult to summarize",
        description:
          "Visitors need to understand the business problem you solve before they are ready to explore methodology or credentials.",
      },
      {
        title: "Generic language weakens differentiation",
        description:
          "Specific audiences, outcomes, and working models are more persuasive than broad claims about strategy and excellence.",
      },
      {
        title: "The sales cycle is built on confidence",
        description:
          "Case studies, thoughtful content, and a clear consultation process help prospects justify the next conversation.",
      },
    ],
    priorities: [
      "Clear positioning and service architecture",
      "Authority-building case studies and insights",
      "Decision-maker focused messaging",
      "Consultation and lead qualification paths",
      "A scalable foundation for future services and content",
    ],
    projects: [
      {
        title: "Markat Group",
        slug: "markat-group-inc",
        context: "Five advisory disciplines organized into a clear client journey.",
      },
      {
        title: "Ajay Kalha Tax Services",
        slug: "ajay-kalha-tax-services",
        context: "Complex tax and accounting topics presented in accessible language.",
      },
    ],
    packageName: "Lead Generation Website",
    packagePrice: "$2,200–$3,000 CAD",
    packageReason:
      "Consultants usually benefit from focused service pages, clear positioning, proof of expertise, and a conversion path designed around consultations.",
    faqs: [
      {
        question: "Can you help organize several consulting services?",
        answer:
          "Yes. I structure services around the problems buyers recognize, then connect related expertise without forcing visitors through an internal organizational chart.",
      },
      {
        question: "Can the site support articles and insights?",
        answer:
          "Yes. A scalable content structure can support articles, case studies, resources, and future service pages.",
      },
      {
        question: "Will the website sound like me?",
        answer:
          "That is the goal. I use your real experience, language, and working style as the foundation instead of filling the site with generic agency copy.",
      },
    ],
  },
];

export const industryPageBySlug = Object.fromEntries(
  industryPages.map((industry) => [industry.slug, industry])
) as Record<string, IndustryPageData>;
