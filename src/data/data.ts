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
  // ================= FREE STRATEGY CONSULTATION =================
  {
    category: "audit",
    title: "Free Website Strategy Consultation",
    tagline: "Get clarity on the best next step for your website",
    price: "Free — 30 Minute Discovery Call",
    features: [
      "Website conversion review",
      "SEO visibility check",
      "Your goals and current challenges",
      "The best-fit website approach",
      "High-level conversion opportunities",
      "Clear recommended next steps",
    ],
    note:
      "A focused, no-pressure conversation for GTA service businesses considering a new website or redesign.",
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
      "Basic on-page SEO",
      "Website speed optimization",
      "Google Analytics setup",
      "Google Search Console connection",
      "Social media integration",
      "Website launch testing",
      "2 rounds of revisions",
    ],
    clientProvides: [
      "Business information",
      "Website content",
      "Images & branding",
    ],
    timeline: "2–4 weeks",
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
      "Up to 10 pages",
      "Conversion-focused page structure",
      "Customer journey planning",
      "SEO-optimized service pages",
      "Lead-focused calls-to-action",
      "Booking system or advanced inquiry forms",
      "Advanced analytics tracking",
      "Competitor analysis",
      "Landing page for ads or promotions",
      "Additional conversion improvements",
      "3 rounds of revisions",
    ],
    timeline: "4–6 weeks",
    outcome:
      "A conversion-focused website structured to attract qualified visitors and move them toward an inquiry.",
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
      "Advanced integrations",
      "Custom booking systems",
      "Multiple landing pages",
      "Advanced tracking & reporting",
      "SEO strategy recommendations",
      "Performance optimization",
      "Priority support",
      "Faster turnaround",
      "4 rounds of revisions",
    ],
    bestFor:
      "Established businesses investing heavily in online growth and customer acquisition.",
    outcome:
      "A scalable website platform for multiple services, campaigns, locations, and advanced customer journeys.",
    notIdealFor:
      "Early-stage businesses that only need a small informational website.",
  },

  // ================= CARE PLANS =================

  {
    category: "care",
    title: "Basic Care Plan",
    tagline: "Keep your website secure and updated",
    price: "$49/month",
    features: [
      "Website updates",
      "Regular backups",
      "Security monitoring",
      "Software/plugin updates",
      "Minor content changes",
      "Website health checks",
    ],
    note:
      "Minor updates include small text or image changes. Larger changes are quoted separately.",
  },

  {
    category: "care",
    title: "Growth Care Plan",
    tagline: "Most Popular",
    price: "$149/month",
    features: [
      "Everything in Basic",
      "Monthly website improvements",
      "Performance optimization",
      "Conversion improvements",
      "SEO improvements",
      "Analytics review",
      "Recommendations to increase inquiries",
      "Ongoing website improvements",
    ],
    bestFor:
      "Businesses that want their website to continue improving after launch.",
  },

  {
    category: "care",
    title: "Scale Care Plan",
    tagline: "Complete growth support",
    price: "$250+/month",
    features: [
      "Everything in Growth",
      "Priority support",
      "Landing page creation",
      "Advanced website improvements",
      "Campaign support",
      "Ongoing conversion optimization",
      "Strategy calls",
      "Custom growth recommendations",
    ],
  },
];
