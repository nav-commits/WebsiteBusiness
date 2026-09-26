const DEFAULT_IMAGE = "https://navwebdesign.com/Images/torontotower-optimized.jpg";

export const LAST_SIGNIFICANT_UPDATE = "2026-09-26";

export const seoRoutes = [
  {
    path: "/",
    title: "Toronto Web Design for Service Businesses | Nav Dhamrait",
    description:
      "Toronto web designer creating conversion-focused websites for lawyers, contractors, consultants, healthcare providers, and service businesses across the GTA.",
    label: "Home",
    type: "home",
  },
  {
    path: "/about",
    title: "Freelance Web Designer Toronto | About Nav Dhamrait",
    description:
      "Meet Nav Dhamrait, a freelance Toronto web designer creating conversion-focused websites for lawyers, contractors, consultants, healthcare providers, and service businesses.",
    label: "About Nav",
    type: "about",
  },
  {
    path: "/services",
    title: "Toronto Web Design Services & Pricing | Nav Web Design",
    description:
      "Explore transparent Toronto web design services and pricing for lawyers, contractors, consultants, healthcare providers, and established service businesses.",
    label: "Services & Pricing",
    type: "service",
  },
  {
    path: "/portfolio",
    title: "Toronto Web Design Portfolio | Nav Web Design",
    description:
      "Explore Toronto web design work for lawyers, contractors, healthcare providers, consultants, and established service businesses.",
    label: "Portfolio",
    type: "portfolio",
  },
  {
    path: "/testimonials",
    title: "Google Reviews | Nav Web Design Toronto",
    description:
      "Read verified Google reviews for Nav Web Design and see what Toronto and GTA businesses say about working directly with freelance web designer Nav Dhamrait.",
    label: "Google Reviews",
    type: "reviews",
  },
  {
    path: "/blog",
    title: "Toronto Web Design & SEO Insights | Nav Web Design",
    description:
      "Practical web design, local SEO, and website conversion insights for Toronto and GTA service businesses from freelance web designer Nav Dhamrait.",
    label: "Insights",
    type: "blog",
  },
  {
    path: "/contact",
    title: "Contact a Toronto Web Designer | Free Strategy Call",
    description:
      "Book a free website strategy consultation with Toronto web designer Nav Dhamrait for a new website, redesign, or conversion-focused web design project.",
    label: "Contact",
    type: "contact",
  },
  {
    path: "/faq",
    title: "Web Design Pricing, Process & Timeline FAQ | Toronto",
    description:
      "Get answers about Toronto web design pricing, project timelines, SEO foundations, website ownership, revisions, and working directly with Nav Dhamrait.",
    label: "Frequently Asked Questions",
    type: "faq",
  },
  {
    path: "/industries",
    title: "Web Design for Toronto Service Businesses | Industries",
    description:
      "Industry-focused Toronto web design for law firms, contractors, healthcare providers, consultants, and other service businesses across the GTA.",
    label: "Industries",
    type: "industries",
  },
  {
    path: "/industries/lawyers",
    title: "Law Firm Web Design Toronto | Nav Web Design",
    description:
      "Toronto law firm web design focused on trust, clear practice-area pages, local SEO foundations, and qualified consultation inquiries.",
    label: "Law Firm Web Design",
    type: "industry",
    serviceType: "Law firm website design",
  },
  {
    path: "/industries/contractors",
    title: "Contractor Website Design Toronto | Nav Web Design",
    description:
      "Toronto contractor website design with project galleries, service-area pages, local SEO foundations, and quote-focused conversion paths.",
    label: "Contractor Website Design",
    type: "industry",
    serviceType: "Contractor website design",
  },
  {
    path: "/industries/healthcare",
    title: "Healthcare Website Design Toronto | Nav Web Design",
    description:
      "Healthcare website design for Toronto and GTA clinics, practitioners, and services with accessible content and booking-focused patient journeys.",
    label: "Healthcare Website Design",
    type: "industry",
    serviceType: "Healthcare and clinic website design",
  },
  {
    path: "/industries/consultants",
    title: "Consultant Website Design Toronto | Nav Web Design",
    description:
      "Toronto consultant website design focused on clear positioning, authority, service architecture, and qualified consultation inquiries.",
    label: "Consultant Website Design",
    type: "industry",
    serviceType: "Consultant and professional-services website design",
  },
  {
    path: "/blog/how-a-professional-website-helps-local-businesses-get-more-clients",
    title: "How a Professional Website Helps Local Businesses Get More Clients | Nav Web Design",
    description:
      "Learn how professional website design builds trust, improves local visibility, and turns more visitors into inquiries for service businesses.",
    label: "How a Professional Website Helps Local Businesses Get Clients",
    type: "article",
    datePublished: "2026-01-08",
  },
  {
    path: "/blog/what-every-small-business-website-needs-in-2026",
    title: "What Every Small Business Website Needs in 2026 | Nav Web Design",
    description:
      "A practical guide to mobile design, speed, SEO, calls to action, security, and content every small business website needs in 2026.",
    label: "What Every Small Business Website Needs in 2026",
    type: "article",
    datePublished: "2026-01-08",
  },
  ...[
    ["mars-law", "Mars Law", "A Toronto law firm website case study focused on clear practice areas, lawyer profiles, and consultation inquiries."],
    ["axis-health-centre", "Axis Health Centre", "A healthcare website design case study covering multiple clinical services, treatment education, and appointment-focused journeys."],
    ["psr-law", "PSR Law", "A real estate law website case study built around professional trust, clear services, and consultation requests."],
    ["genpathwayx", "GenPathwayX", "A genomics website case study that turns complex preventive-health services into clear paths for consumers and clinic partners."],
    ["markat-group-inc", "Markat Group", "A consulting website case study organizing five advisory disciplines into a clear, credible consultation journey."],
    ["vik-ghankas-law-group", "Vik Ghankas Law Group", "A family law website case study focused on direct lawyer communication, trust, and consultation requests."],
    ["container-storage-solutions", "Container Storage Solutions", "A contractor and commercial-services website case study built around security, service clarity, and quote requests."],
    ["gta-lec", "GTA LEC", "A GTA electrical contractor website case study focused on service clarity, local credibility, and inquiry generation."],
    ["restore-health", "Restore Health", "A virtual healthcare website case study designed around patient education, physician referrals, and specialist consultations."],
    ["the-healing-hive", "The Healing Hive", "A psychotherapy website case study using clear, reassuring content to build trust and support session bookings."],
    ["ajay-kalha-tax-services", "Ajay Kalha Tax Services", "An accounting website case study that presents tax and bookkeeping services clearly and guides new client inquiries."],
  ].map(([slug, name, description]) => ({
    path: `/portfolio/${slug}`,
    title: `${name} | Toronto Web Design Case Study`,
    description,
    label: `${name} Case Study`,
    type: "case-study",
    image: DEFAULT_IMAGE,
  })),
];

export const defaultSocialImage = DEFAULT_IMAGE;
