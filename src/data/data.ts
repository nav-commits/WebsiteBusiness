import {
  Calendar,
  FileText,
  Clipboard,
  Code,
  PenTool,
  CheckCircle,
 
  Shield,
} from "lucide-react";
import type { ComponentType } from "react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: ComponentType;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description: "Discuss goals, website needs, style, timeline, and budget.",
    icon: Calendar,
  },
  {
    title: "Proposal & Contract",
    description: "Clear scope, deliverables, timeline, pricing. Deposit invoiced.",
    icon: FileText,
  },
  {
    title: "Content Collection",
    description: "Gather branding, text, images, and hosting/domain info.",
    icon: Clipboard,
  },
  {
    title: "Design Phase",
    description: "Choose from 3–4 templates, customize colors, fonts, layout. 2 revisions included.",
    icon: PenTool,
  },
  {
    title: "Development Phase",
    description: "Build pages, forms, booking/eCommerce; test responsiveness and speed.",
    icon: Code,
  },
  {
    title: "Review & Launch",
    description: "Apply final revisions, provide admin access, connect domain + SSL, optional Google submission.",
    icon: CheckCircle,
  },
  {
    title: "Ongoing Support",
    description: "Optional care plans for updates, maintenance, SEO, and content.",
    icon: Shield,
  },
];
// ---------- TECH LOGOS ----------
export interface TechLogo {
  src: string;
  alt: string;
}

export const techLogos: TechLogo[] = [
  { src: "/Svgs/wordpress.svg", alt: "WordPress" },
  { src: "/Svgs/wix.svg", alt: "Wix" },
  { src: "/Svgs/react.svg", alt: "React" },
  { src: "/Svgs/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/Svgs/googleanalytics.svg", alt: "Google" },
  { src: "/Svgs/Webflow.svg", alt: "Webflow" },
  { src: "/Svgs/html.svg", alt: "Html" },
  { src: "/Svgs/css3.svg", alt: "css" },
  { src: "/Svgs/seo.svg", alt: "seo" },
];

// ---------- PORTFOLIO PROJECTS ----------
export interface PortfolioProject {
  img: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  type: "website" | "logo";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    img: "/Images/security-camera.png",
    alt: "CMT Security Services",
    title: "CMT Security Services",
    description:
      "Committed to protecting your business and community with innovative security solutions. Specializing in event, residential, and commercial security.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/accounting.png",
    alt: "Ajay Kalha Tax Services",
    title: "Ajay Kalha Tax Services",
    description:
      "Comprehensive accounting services including bookkeeping and financial reporting to help businesses make informed decisions.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images//Psychotherapy.png",
    alt: "The Healing Hive",
    title: "The Healing Hive",
    description:
      "Compassionate virtual therapy services across Canada focused on anxiety, trauma, and life transitions.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/realestate.png",
    alt: "PSR Law",
    title: "PSR Law",
    description:
      "Ontario-based real estate law firm delivering transparent, client-first legal services.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/storage.png",
    alt: "Container Storage Solutions",
    title: "Container Storage Solutions",
    description:
      "Secure 24/7 monitored container and trailer storage in the GTA for freight and trucking companies.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/vik.jpg",
    alt: "Vik Ghankas Law Group",
    title: "Vik Ghankas Law Group",
    description:
      "Family law firm serving the Lower Mainland with direct lawyer-to-client communication.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/MarkatImage.png",
    alt: "MARKAT Group Inc.",
    title: "MARKAT Group Inc.",
    description:
      "Toronto-based advisory firm helping SMBs scale, manage risk, and lead with confidence.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/gtc.png",
    alt: "GTA LEC",
    title: "GTA LEC",
    description:
      "Professional electrical contracting and consulting services across the GTA. Specializing in residential, commercial, and industrial electrical solutions.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/analystics.png",
    alt: "VA Analytics Consulting",
    title: "VA Analytics Consulting",
    description:
      "Helps businesses leverage data to make smarter decisions through analysis, visualization, and actionable reporting.",
    link: "/portfolio",
    type: "website",
  },
  {
    img: "/Images/Van-black.png",
    alt: "Van Logo - Black Variant",
    title: "Van Brand Logo (Black Variant)",
    description:
      "One of the two logo variants created for VA Analytics Consulting.",
    link: "/portfolio",
    type: "logo",
  },
  {
    img: "/Images/van-org.png",
    alt: "Van Logo - White Variant",
    title: "Van Brand Logo (White Variant)",
    description:
      "Second logo variant created for VA Analytics Consulting as an alternate option for different backgrounds.",
    link: "/portfolio",
    type: "logo",
  },
  {
    img: "/Images/genpathwayx.png",
    alt: "GenPathwayX",
    title: "GenPathwayX",
    description:
      "Precision-driven genomics and preventive health company transforming advanced genetic science into actionable, real-world insight.",
    link: "/portfolio",
    type: "website",
  },
];

// ---------- PROJECTS ----------
export interface Project {
  title: string;
  image: string;
  description: string;
  features: string[];
  technology?: string; 
  link: string;
}

export const projects: Project[] = [
  {
    title: "CMT Security Services",
    image: "/Images/security-camera.png",
    description: "Committed to protecting your business and community...",
    features: [
      "Comprehensive Security Solutions",
      "Trusted & Professional Team",
      "Client-Focused Approach",
      "24/7 Protection & Reliability",
    ],
    technology: "WordPress",
    link: "https://cmtsecured.ca/",
  },
  {
    title: "Ajay Kalha Tax Services",
    image: "/Images/accounting.png",
    description: "We provide comprehensive accounting services...",
    features: [
      "User-Friendly Navigation",
      "Informative Blog Section",
      "Client Testimonials",
      "Quick Contact & Consultation",
    ],
    technology: "WordPress",
    link: "https://aktax.org/",
  },
  {
    title: "The Healing Hive",
    image: "Images/Psychotherapy.png",
    description: "Providing compassionate therapy services...",
    features: [
      "Booking System",
      "Comprehensive Services Overview",
      "Meet the Therapist Section",
      "Secure & Confidential Contact",
    ],
    technology: "WordPress",
    link: "https://thehealinghive.net/",
  },
  {
    title: "PSR Law",
    image: "/Images/realestate.png",
    description: "A dedicated real estate law firm offering expert legal guidance...",
    features: [
      "Real Estate Legal Services",
      "Clear & Transparent Pricing",
      "Expert Guidance & Support",
      "Client-Focused Solutions",
    ],
    technology: "WordPress",
    link: "https://psrlaw.ca/",
  },
  {
    title: "Container Storage Solutions",
    image: "/Images/storage.png",
    description: "A leading storage terminal in the GTA...",
    features: [
      "24/7 Secure Storage",
      "Flexible Storage Solutions",
      "Client-First Approach",
      "Strategic Location in GTA",
    ],
    technology: "WordPress",
    link: "https://containerstorage.solutions",
  },
  {
    title: "Ghankas Law Group",
    image: "/Images/vik.jpg",
    description: "Family Law specialists based in the Tri-Cities...",
    features: [
      "Personalized Client Attention",
      "Expert Family Law Services",
      "Clear Communication & Transparency",
      "Trusted Local Legal Representation",
    ],
    technology: "WordPress",
    link: "https://ghankaslaw.com",
  },
  {
    title: "MARKAT Group Inc.",
    image: "/Images/MarkatImage.png",
    description: "Founded in Toronto, MARKAT is a boutique advisory & consulting firm...",
    features: [
      "Strategic Business Advisory",
      "Risk Management & Compliance",
      "Tailored Growth Strategies",
      "Support for SMBs Ready to Scale",
    ],
    technology: "Wix",
    link: "https://www.markatgroup.net/",
  },
  {
    title: "GTA LEC",
    image: "/Images/gtc.png",
    description:
      "Providing professional electrical contracting and consulting services across the Greater Toronto Area. GTA LEC specializes in residential, commercial, and industrial electrical solutions with a focus on safety and reliability.",
    features: [
      "Residential, Commercial & Industrial Services",
      "Safety & Compliance Focused",
      "Efficient Project Delivery",
      "Client-Centric Solutions",
    ],
    technology: "Wordpress",
    link: "https://gta-lec.ca/",
  },
  {
    title: "VA Analytics Consulting",
    image: "/Images/analystics.png",
    description:
      "VA Analytics Consulting helps businesses leverage data to make smarter decisions. From data analysis to visualization and reporting, they provide actionable insights that drive growth and efficiency.",
    features: [
      "Data-Driven Business Solutions",
      "Custom Reporting & Dashboards",
      "Insightful Analysis for Growth",
      "Actionable Recommendations",
    ],
    link: "https://vaanalyticsconsulting.com/",
  },
  // Two logo variants for VA Analytics Consulting
  {
    title: "Van Brand Logo (Black Variant)",
    image: "/Images/Van-black.png",
    description:
      "One of the two logo variants created for VA Analytics Consulting.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Client: VA Analytics Consulting",
    ],
    link: "https://vaanalyticsconsulting.com/",
  },
  {
    title: "Van Brand Logo (White Variant)",
    image: "/Images/van-org.png",
    description:
      "Second logo variant created for VA Analytics Consulting as an alternate option for different backgrounds.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Client: VA Analytics Consulting",
    ],
    link: "https://vaanalyticsconsulting.com/",
  },
  {
    title: "GenPathwayX",
    image: "/Images/genpathwayx.png",
    description:
      "GenPathwayX is a precision-driven genomics and preventive health company dedicated to transforming advanced genetic science into actionable, real-world insight. They empower clinics and healthcare providers with deeper clarity into human biology before disease manifests.",
    features: [
      "Clinically aligned DNA testing",
      "Data-driven actionable insights",
      "Integration with clinical and wellness workflows",
      "Scalable platform for clinics & partners",
    ],
    technology: "Wix",
    link: "https://www.genpathwayx.com/",
  },
  
];

// ---------- WEBSITE PACKAGES ----------
export interface WebsitePackage {
  title: string;
  tagline: string;
  price: string;
  features: string[];
}

export const websitePackages: WebsitePackage[] = [
  {
    title: "Landing Page",
    tagline: "High-converting single-page design",
    price: "Starting at $500",
    features: [
      "Custom landing page designed to convert visitors into clients",
      "Mobile-first, fully responsive",
      "Call-to-action sections & lead capture forms",
      "Optional booking or lead capture integration",
      "SEO-friendly and fast-loading",
      "2 rounds of revisions (additional revisions $50 each)",
      "Delivered 3–5 days after content is provided",
    ],
  },
  {
    title: "Starter Website",
    tagline: "Perfect for small local businesses or personal brands",
    price: "Starting at $900",
    features: [
      "Up to 5 custom pages (Home, About, Services, Contact, Blog)",
      "Mobile-first, fully responsive",
      "SEO-ready foundation (metadata, sitemap, Google Search Console setup)",
      "Contact form integration",
      "2 rounds of layout/content revisions (extra $50 per page)",
      "Delivered within 1 week after content is provided",
      "Includes Foundation Care Plan (1-year maintenance, updates & backups)",
    ],
  },
  {
    title: "Growth Website",
    tagline: "Advanced solution for scaling businesses",
    price: "Starting at $1,500",
    features: [
      "Up to 10 custom pages",
      "Mobile-first, fully responsive design",
      "Booking system or eCommerce integration",
      "Basic SEO + speed optimization",
      "2 rounds of revisions (additional revisions $50 per page)",
      "Delivered 2–3 weeks after content is provided",
      "Includes Growth Care Plan (5 updates/year, advanced security, quarterly performance checks)",
    ],
  },
  {
    title: "Scale Website",
    tagline: "Custom solutions for businesses growing fast",
    price: "Starting at $2,200",
    features: [
      "Unlimited pages tailored to your business needs",
      "Mobile-first, fully responsive",
      "Booking + eCommerce + Courses integration",
      "Advanced SEO, speed, and security optimization",
      "2 rounds of revisions (additional revisions $50 per page)",
      "Delivered 3–5 weeks after content is provided",
      "Includes Scale Care Plan (monthly updates, blog posts, local SEO, analytics, conversion optimization)",
    ],
  },
];

// ---------- CARE PLANS ----------
export interface CarePlan {
  title: string;
  tagline: string;
  price: string;
  features: string[];
}

export const carePlans: CarePlan[] = [
  {
    title: "Foundation Care Plan",
    tagline: "Essential updates & security",
    price: "$150 / year",
    features: [
      "Annual platform, plugin, and integration updates",
      "Weekly backups for security",
      "Basic security monitoring",
      "Up to 2 small content updates per year (text, images, minor layout tweaks)",
    ],
  },
  {
    title: "Growth Care Plan",
    tagline: "Care + light content support",
    price: "$400 / year",
    features: [
      "All Foundation Care Plan features",
      "Up to 5 small content updates per year",
      "Advanced security monitoring",
      "Quarterly website performance checks",
    ],
  },
  {
    title: "Scale Care Plan",
    tagline: "Full marketing & website support",
    price: "$1,000 / year",
    features: [
      "All Growth Care Plan features",
      "Up to 12 content updates per year (text, images, minor layout tweaks, promotional updates)",
      "Monthly blog posts or promotional updates",
      "Local SEO & Google Business profile maintenance",
      "Conversion optimization support",
      "Monthly analytics & performance reports",
    ],
  },
];

// ---------- ADDITIONAL SERVICES ----------
export interface AdditionalService {
  title: string;
  price: string;
  description?: string;
  features: string[];
}

export const additionalServices: AdditionalService[] = [
  {
    title: "SEO Setup",
    price: "$300",
    description: "Complete on-page SEO to help your site rank and convert",
    features: [
      "Optimize page titles, meta descriptions, and headings",
      "Set up Google Search Console and Analytics",
      "Submit XML sitemap to Google",
      "Optimize images for SEO (alt text, file names, compression)",
      "Internal linking and URL structure review",
      "Basic keyword optimization for up to 5 main pages",
      "Ensure mobile-friendly and fast-loading pages",
    ],
  },
  {
    title: "Business Email Setup",
    price: "$100",
    features: [
      "Professional email setup with Google Workspace, Zoho, or similar",
      "Create custom domain-based email addresses (yourname@yourbusiness.com)",
      "Configure inboxes on multiple devices",
      "Set up basic security and spam protection",
      "Optional email migration from old accounts",
    ],
  },
  {
    title: "Logo Design",
    price: "$200",
    features: [
      "2 initial design concepts for your logo",
      "2 full revisions for the chosen concept (extra revisions $50 each)",
      "Delivery in vector (AI, SVG), PNG, and JPEG formats",
      "Optimized for website, social media, and print",
      "Brand colors and typography included",
    ],
  },
  {
    title: "Website Redesign / Fix",
    price: "Starting at $600",
    features: [
      "Refresh your existing website with modern design",
      "Improve page speed and Core Web Vitals",
      "Make your site fully mobile-friendly",
      "Fix broken links, forms, and layout issues",
      "Optional SEO and content optimization upgrades",
    ],
  },
];


// ---------- TESTIMONIALS ----------
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  logo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ajay Kalha",
    role: "Founder & Tax Consultant",
    content:
      "Nav created a beautiful, professional website that exceeded our expectations. Our traffic has increased, and the site runs flawlessly. Highly recommend his services!",
    rating: 5,
    logo: "/Images/ajay.png",
  },
  {
    name: "Simona",
    role: "Owner, The Healing Hive Psychotherapy",
    content:
      "Nav created a beautiful, professional website that truly represents my practice. The booking system is seamless, and clients find it easy to navigate. Highly recommend his work!",
    rating: 5,
    logo: "/Images/healing.png",
  },
  {
    name: "Harry Singh",
    role: "Owner, CMT Security Services",
    content:
      "Nav built a sleek, professional website that has significantly boosted my business. Clients can now easily find our services, and the site runs smoothly on all devices. Highly recommend his expertise!",
    rating: 5,
    logo: "/Images/security.png",
  },
  {
    name: "Prabhjot Rathore",
    role: "PSR Law",
    content:
      "Working with Nav has been phenomenal! He designed our website exactly how we wanted, and was always there to help whenever we had questions. Thank you for your amazing work, 5 stars!",
    rating: 5,
    logo: "/Images/psrlaw.png",
  },
  {
    name: "Sahib Walia",
    role: "Owner, Container Storage Solutions",
    content:
      "Nav completely transformed our website, taking it from outdated to professional. The new design is clean, mobile-friendly, and truly represents our brand. We’ve already seen an increase in leads and received positive feedback from clients. I’m beyond happy with the results and highly recommend Nav to any business looking to improve their online presence.",
    rating: 5,
    logo: "/Images/container.png",
  },
  {
    name: "Vik Ghankas",
    role: "Founder, Ghankas Law Group",
    content:
      "I just wanted to give a huge shoutout to my main man, Nav Dhamrait, for designing and developing my new Family Law website. He was extremely diligent and proactive throughout the entire process. I can’t recommend him enough to all my friends and family who are looking to have a website built. Thanks, Nav Dhamrait!",
    rating: 5,
    logo: "/Images/vik.png",
  },
];

// ---------- FAQ / QUESTIONS ----------
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How long does it take to complete a website?",
    answer:
      "Timeline varies by complexity. Starter websites: ~1 week, advanced sites: 3–4 weeks.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, annual maintenance includes updates, backups, and priority support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! All websites are fully responsive for seamless mobile experience.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, basic SEO is included; advanced SEO can be customized per project.",
  },
  {
    question: "Post-launch changes?",
    answer:
      "I provide support for updates. Major changes discussed separately.",
  },
];
