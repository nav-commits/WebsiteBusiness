export type PortfolioDetailEnrichment = {
  industry: string;
  highlights: string[];
};

// Keyed by slugify(project.title). Supplementary detail for the case study
// page, written from what's actually live on each client's site — not part
// of the Sanity schema, so new portfolio projects just won't show this
// section until an entry is added here.
export const portfolioDetails: Record<string, PortfolioDetailEnrichment> = {
  "mars-law": {
    industry: "Legal Services",
    highlights: [
      "Full-service practice areas covering Real Estate, Criminal Defence, Civil Litigation, Personal Injury, Corporate & Administrative Law",
      "Individual lawyer profile pages to build trust before the first call",
      "Integrated consultation booking form that turns visitors directly into client inquiries",
    ],
  },
  "axis-health-centre": {
    industry: "Integrated Healthcare & Medical Aesthetics",
    highlights: [
      "Multi-service structure spanning chiropractic care, physiotherapy, advanced recovery technology, and medical aesthetics (Axis Glow Lab)",
      "Dedicated pages for individual treatments like shockwave therapy, TECAR, and spinal decompression",
      "Booking-first design built to convert visitors into scheduled appointments",
    ],
  },
  "psr-law": {
    industry: "Real Estate Law",
    highlights: [
      "Clear Practice Area navigation for prospective clients researching real estate legal services",
      "Free-consultation offer positioned prominently to drive inquiries",
      "Direct call and appointment-request pathways throughout the site",
    ],
  },
  genpathwayx: {
    industry: "Genomics & Preventive Health",
    highlights: [
      "Positions the company as a clinically-aligned, science-driven DNA testing provider for individuals, clinics, and healthcare partners",
      "Translates a technical, clinical offering into plain, accessible language for non-specialist visitors",
      "Built to serve both consumer visitors and institutional/clinic partners on the same site",
    ],
  },
  "markat-group-inc": {
    industry: "Business Advisory & Consulting",
    highlights: [
      "Service breakdown across Risk Management, AI Strategy, Scalability, Marketing Strategy, and Financial Analysis",
      "Industry-specific messaging tailored to the SMB verticals they serve",
      "Consultation booking CTA placed front and center for lead capture",
    ],
  },
  "vik-ghankas-law-group": {
    industry: "Family Law",
    highlights: [
      "Messaging built around their core differentiator — direct lawyer-to-client communication",
      "Focused single-practice-area structure for clear, uncluttered positioning",
      "Consultation booking flow for prospective clients across the Lower Mainland",
    ],
  },
  "container-storage-solutions": {
    industry: "Logistics & Commercial Storage",
    highlights: [
      "Clear breakdown of container and trailer storage services for freight brokers and trucking professionals",
      "24/7 security and facility features highlighted to build trust with commercial clients",
      "Quote-request flow designed for B2B lead generation",
    ],
  },
  "restore-health": {
    industry: "Virtual Specialist Healthcare",
    highlights: [
      "Positions RestoreHealth's faster virtual-referral pathway against the traditional long-wait hospital process",
      "Highlights PHIPA-compliant virtual visits and Ontario-wide access",
      "Physician-referral and direct consultation-request pathways built into the flow",
    ],
  },
  "the-healing-hive": {
    industry: "Virtual Psychotherapy",
    highlights: [
      "Warm, trust-building brand voice built around the therapist's own story and credentials",
      "Session booking linked directly to a Psychology Today profile for added credibility",
      "Site structure organized around three core values: Safe, Curious, Empowered",
    ],
  },
  "ajay-kalha-tax-services": {
    industry: "Accounting & Tax Services",
    highlights: [
      "Service breakdown across Personal Tax Filing, Corporate Tax Filing, and Accounting & Bookkeeping",
      "Dedicated pages that explain complex tax topics in simple, approachable language",
      "Direct contact CTA built for new client inquiries",
    ],
  },
};
