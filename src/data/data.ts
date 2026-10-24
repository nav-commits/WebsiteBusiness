export type ServiceOffer = {
  category: "audit" | "package" | "care";
  title: string;
  tagline: string;
  price: string;
  features: string[];
  outcome?: string;
  clientProvides?: string[];
  timeline?: string;
  bestFor?: string;
  notIdealFor?: string;
  note?: string;
};

export const services: ServiceOffer[] = [
  // ================= 60-MINUTE WEBSITE AUDIT =================
  {
    category: "audit",
    title: "60-Minute Website Audit & Strategy Session",
    tagline: "A live review with Nav and three priorities you can act on",
    price: "$100 CAD — 60 Minutes With Nav",
    features: [
      "Your business goals, audience, and main website concern",
      "Homepage and one key service page — clarity, credibility, and calls to action",
      "Mobile navigation and the inquiry or booking journey",
      "Basic on-page SEO and page-speed checks",
      "Your three highest-priority improvements and next steps",
      "Questions and a recap you can take notes from",
    ],
    note:
      "For GTA service businesses with an existing website. Share your URL and main goal before the session. Leave with three prioritized recommendations discussed live; no obligation to purchase further services. This is a focused review, not a full technical, security, or accessibility audit. Implementation and a written report are not included. Appointments are subject to availability; if you do not have a website yet, we can use the hour to plan your key pages and inquiry journey.",
  },

  // ================= WEBSITE PACKAGES =================

  {
    category: "package",
    title: "Website Essentials",
    tagline: "A credible foundation for a growing business",
    price: "$1,200 CAD",
    features: [
      "Up to 5 pages (Home, About, Services, Contact + 1 additional page)",
      "Mobile-friendly responsive design",
      "Professional custom layout tailored to your business",
      "Contact form setup",
      "On-page SEO: page titles, descriptions, and heading structure",
      "Image optimization and page-speed checks on agreed pages",
      "Google Analytics setup",
      "Google Search Console connection",
      "Links to your existing social profiles",
      "Launch checks: navigation, forms, and mobile/desktop layouts",
      "Basic usability checks: keyboard navigation, labels, and headings",
      "2 rounds of revisions",
    ],
    clientProvides: [
      "Business information",
      "Website content",
      "Images & branding",
    ],
    timeline: "Typically 4–6 weeks from the agreed start date, once content is ready",
    outcome:
      "A polished, mobile-ready website that makes your business easier to trust and contact.",
    bestFor:
      "Newer service businesses that need a professional online presence and a clear inquiry path.",
    notIdealFor:
      "Businesses that need multiple service-area pages, advanced lead funnels, or custom integrations.",
  },

  {
    category: "package",
    title: "Lead Generation Website (Most Popular)",
    tagline: "Conversion-focused website built for more leads",
    price: "$2,200–$3,000 CAD",
    features: [
      "Everything in Website Essentials",
      "Up to 10 pages total, including any landing page",
      "Conversion-focused page structure",
      "Customer journey planning",
      "Service-page structure and on-page SEO foundations",
      "Lead-focused calls-to-action",
      "One existing booking-tool integration or one custom inquiry form",
      "Tracking for agreed inquiry and booking actions",
      "Review of up to 3 competitor websites",
      "One landing page for ads or promotions within the page allowance",
      "Conversion refinements to the agreed pages before launch",
      "3 rounds of revisions",
    ],
    timeline: "Typically 6–8 weeks from the agreed start date, once content is ready",
    outcome:
      "A website that helps qualified visitors understand your services and move toward an inquiry or booking.",
    bestFor:
      "Law firms and high-trust service businesses that depend on qualified calls, bookings, or consultations.",
    notIdealFor:
      "Businesses looking for a basic brochure site with minimal strategy or content structure.",
  },

  {
    category: "package",
    title: "Custom Growth Website",
    tagline: "Custom website built for growth",
    price: "$4,000+ CAD",
    features: [
      "Everything in Lead Generation Website",
      "Up to 15 pages",
      "Fully custom website design",
      "Integrations defined in your project scope",
      "Booking workflows scoped to your requirements",
      "Landing pages within the agreed page allowance",
      "Tracking events and reporting setup defined in your proposal",
      "SEO strategy recommendations",
      "Performance optimization",
      "Scheduled project check-ins",
      "Project milestones agreed before work begins",
      "4 rounds of revisions",
    ],
    timeline: "Estimated after discovery; start date and milestones confirmed in the proposal",
    bestFor:
      "Established businesses needing a larger website with clearly scoped integrations.",
    outcome:
      "A scalable website platform for multiple services, campaigns, locations, and advanced customer journeys.",
    notIdealFor:
      "Early-stage businesses that only need a small informational website.",
    note:
      "Starting price depends on complexity. Bespoke software, integrations, migration work, and third-party subscriptions are itemized in your proposal.",
  },

  // ================= CARE PLANS =================

  {
    category: "care",
    title: "Basic Care Plan",
    tagline: "Routine website maintenance and small updates",
    price: "$49/month",
    features: [
      "Up to 30 minutes of website care per month in total",
      "Backup arrangements for your website platform",
      "Platform-appropriate update and security-status checks",
      "Applicable routine software or plugin updates within the allowance",
      "Minor content changes",
      "Website health checks",
    ],
    note:
      "The allowance covers maintenance, checks, and small edits together. Tasks are prioritized within that time; larger fixes are quoted separately. Backup coverage and frequency depend on your platform and are confirmed before the plan starts.",
  },

  {
    category: "care",
    title: "Growth Care Plan",
    tagline: "Most Popular",
    price: "$149/month",
    features: [
      "Up to 1 hour of website care and improvements per month in total",
      "Basic Care task types included within this allowance",
      "A prioritized monthly task list",
      "Small content, usability, or on-page SEO improvements",
      "Brief analytics review when tracking data is available",
      "Maintenance, review, and improvement work share the same hour",
    ],
    bestFor:
      "Businesses that want their website to continue improving after launch.",
    note:
      "Choose priorities each month; every type of improvement is not performed every month. This is website care, not a full ongoing SEO or advertising service. Extra work is quoted separately.",
  },

  {
    category: "care",
    title: "Scale Care Plan",
    tagline: "Website support for a broader scope",
    price: "$250+/month",
    features: [
      "From 2 hours of website care and improvements per month in total",
      "Growth Care task types included within this allowance",
      "A scheduled monthly review of website priorities",
      "Updates to existing campaign or service pages",
      "Scoped usability and inquiry-flow improvements",
      "Strategy calls count toward the monthly allowance",
    ],
    note:
      "The $250 starting plan includes 2 hours total, not additional hours on top of the other plans. Larger allowances are quoted separately. New landing pages, integrations, advertising spend, and campaign management are not included in the starting plan.",
  },
];
