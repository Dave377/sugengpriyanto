import { Blocks, Compass, Layers3, PenTool, type LucideIcon } from "lucide-react"

export type Service = {
  number: string
  slug: string
  icon: LucideIcon
  title: string
  eyebrow: string
  description: string
  intro: string
  fit: string
  price: string
  priceNote: string
  timeline: string
  package: string
  tools: readonly string[]
  includes: readonly string[]
  deliverables: readonly (readonly [string, string])[]
  faq: readonly (readonly [string, string])[]
  process: readonly (readonly [string, string])[]
}


import {
  Globe2,
  Paintbrush,
  ShoppingBag,
  Store,
  Code2,
  RefreshCw,
  FileCode2,
  MousePointerClick,
} from "lucide-react";

export const services = [
  {
    number: "01",
    slug: "custom-framer-website-development",
    icon: Globe2,
    title: "Custom Framer website development",
    eyebrow: "Framer development",
    description:
      "A distinctive, high-performance website built to make your brand stand out and your business grow.",
    intro:
      "Your website should do more than look impressive. It should communicate your value, build trust, and turn visitors into customers. I design and develop fully custom Framer websites tailored to your brand, audience, and business goals. From thoughtful layouts and engaging interactions to responsive design and SEO foundations, every detail is crafted to deliver a seamless experience. You get a professional, easy-to-manage website that looks exceptional and works just as hard as you do.",
    fit:
      "Best for startups, SaaS companies, personal brands, creative agencies, and businesses looking for a unique online presence.",
    price: "From $1,000",
    priceNote:
      "Final pricing depends on page count, design complexity, animations, and integrations.",
    timeline: "2–4 weeks",
    package: "Custom Framer build",
    tools: ["Framer", "Figma", "Google Analytics"],
    includes: [
      "Custom website design",
      "Responsive development",
      "SEO & performance",
    ],
    deliverables: [
      [
        "Custom Framer website",
        "A fully designed and developed website tailored to your brand identity, business objectives, and audience.",
      ],
      [
        "Responsive layouts and interactions",
        "Carefully crafted layouts, transitions, and interactive elements that work beautifully across desktop, tablet, and mobile.",
      ],
      [
        "CMS and content management",
        "An intuitive content management setup that makes updating pages, articles, and other content simple.",
      ],
      [
        "SEO, performance, and launch",
        "Essential search optimization, performance improvements, domain configuration, and publishing support.",
      ],
    ],
    faq: [
      [
        "Do I need to provide a design?",
        "Not necessarily. I can design and develop your website from scratch or build from an existing Figma design.",
      ],
      [
        "Can I update the website myself?",
        "Yes. Framer makes it easy to update text, images, CMS content, and other website elements without coding.",
      ],
      [
        "Will my website be optimized for mobile and SEO?",
        "Yes. Every website includes responsive layouts, essential SEO configuration, and performance-conscious implementation.",
      ],
    ],
    process: [
      [
        "Discover",
        "Understand your brand, audience, goals, and the experience your website needs to deliver.",
      ],
      [
        "Design & build",
        "Create the visual direction and develop a polished Framer website with responsive layouts and thoughtful interactions.",
      ],
      [
        "Launch",
        "Test, refine, optimize, and publish your website with everything ready for visitors.",
      ],
    ],
  },
  {
    number: "02",
    slug: "framer-template-customization",
    icon: Paintbrush,
    title: "Framer template customization",
    eyebrow: "Framer customization",
    description:
      "Transform a Framer template into a polished, personalized website that feels entirely your own.",
    intro:
      "A great template is a starting point, not the finished product. If you have found a Framer template you love but need it to reflect your brand, I can help transform it into a professional website without the cost or timeline of a fully custom build. From typography, colors, and layouts to CMS content, animations, and responsive refinements, I customize the details that matter. The result is a website that feels intentional, distinctive, and ready to represent your business.",
    fit:
      "Best for founders, freelancers, small businesses, and startups that want to launch quickly using an existing Framer template.",
    price: "From $300",
    priceNote:
      "Pricing depends on template complexity, number of pages, and customization requirements. Template purchase is separate.",
    timeline: "3–7 days",
    package: "Template transformation",
    tools: ["Framer", "Figma", "Google Analytics"],
    includes: [
      "Brand customization",
      "Content integration",
      "Responsive refinements",
    ],
    deliverables: [
      [
        "Personalized template design",
        "Updated colors, typography, imagery, and visual details that bring the template in line with your brand.",
      ],
      [
        "Page and content customization",
        "Customized sections, layouts, navigation, and content based on your specific business needs.",
      ],
      [
        "Responsive and interaction improvements",
        "Refined mobile layouts, animations, and interactive details for a consistent experience across devices.",
      ],
      [
        "SEO setup and publishing",
        "Essential metadata, content checks, domain setup, and assistance getting your website live.",
      ],
    ],
    faq: [
      [
        "Do I need to purchase the Framer template?",
        "Yes. You can purchase your preferred template and share the project with me. I can also help you choose a suitable template.",
      ],
      [
        "Can you add new sections or pages?",
        "Absolutely. I can extend the template with additional pages, custom sections, CMS collections, and interactions.",
      ],
      [
        "Can you make the template look completely different?",
        "Yes. Depending on the scope, I can significantly customize the design while retaining the template's underlying structure.",
      ],
    ],
    process: [
      [
        "Review",
        "Evaluate your chosen template, brand assets, content, and customization goals.",
      ],
      [
        "Customize",
        "Adapt the template's visual style, layouts, content, and interactions to fit your business.",
      ],
      [
        "Publish",
        "Review responsiveness, resolve inconsistencies, and prepare the finished website for launch.",
      ],
    ],
  },
  {
    number: "03",
    slug: "framer-ecommerce-store-development",
    icon: ShoppingBag,
    title: "Framer e-commerce store development",
    eyebrow: "Framer e-commerce",
    description:
      "Create a beautiful shopping experience that turns your products into a brand customers remember.",
    intro:
      "Your online store should make discovering and purchasing products feel effortless. I build visually compelling e-commerce experiences with Framer, combining premium storefront design with a suitable commerce integration for products, carts, and checkout. From product showcases and responsive collections to conversion-focused product pages, every interaction is designed to build confidence and encourage purchases. You get a distinctive storefront that elevates your brand while keeping the shopping experience simple and intuitive.",
    fit:
      "Best for lifestyle brands, creators, digital product businesses, and boutique stores seeking a design-led shopping experience.",
    price: "From $1,500",
    priceNote:
      "Pricing depends on product count, commerce provider, integrations, and checkout requirements.",
    timeline: "3–5 weeks",
    package: "Framer commerce build",
    tools: ["Framer", "Shopify", "Figma"],
    includes: [
      "Custom storefront",
      "Product collections",
      "Commerce integration",
    ],
    deliverables: [
      [
        "Custom e-commerce storefront",
        "A distinctive Framer storefront designed to showcase your products and communicate your brand's value.",
      ],
      [
        "Product pages and collections",
        "Clear product presentations, collection layouts, and shopping journeys that help customers explore your catalog.",
      ],
      [
        "Cart and checkout integration",
        "Integration with a compatible commerce platform to support product data, cart behavior, and secure checkout.",
      ],
      [
        "Responsive optimization and launch",
        "Mobile-friendly shopping experiences, interaction testing, and support preparing your store for customers.",
      ],
    ],
    faq: [
      [
        "Does Framer support e-commerce?",
        "Framer can power the storefront experience when connected to a compatible e-commerce solution. The right integration depends on your product and checkout needs.",
      ],
      [
        "Can I manage products after launch?",
        "Yes. Product management is handled through the connected commerce platform, with the exact workflow depending on the integration.",
      ],
      [
        "Can you connect an existing Shopify store?",
        "Yes. I can explore a Framer storefront connected to Shopify, depending on your catalog, checkout, and integration requirements.",
      ],
    ],
    process: [
      [
        "Plan",
        "Understand your products, customers, brand positioning, and commerce requirements.",
      ],
      [
        "Design & integrate",
        "Build the Framer storefront and connect the selected commerce solution.",
      ],
      [
        "Test & launch",
        "Validate product displays, shopping flows, responsive behavior, and checkout before launch.",
      ],
    ],
  },
  {
    number: "04",
    slug: "high-converting-shopify-store-development",
    icon: Store,
    title: "High-converting Shopify store development",
    eyebrow: "Shopify development",
    description:
      "Build a conversion-focused Shopify store that makes shopping easier and gives your brand room to grow.",
    intro:
      "A successful Shopify store needs more than attractive product pages. It needs a shopping experience that builds trust, reduces friction, and helps customers make confident purchasing decisions. I develop custom Shopify storefronts with conversion-focused layouts, intuitive navigation, compelling product presentations, and mobile-first design. Whether you are launching a new brand or improving an existing store, the goal is to create a faster, clearer, and more persuasive shopping experience that supports sustainable growth.",
    fit:
      "Best for DTC brands, growing online retailers, product-based businesses, and existing Shopify stores ready for a redesign.",
    price: "From $1,500",
    priceNote:
      "Final pricing depends on theme requirements, product catalog, custom features, and integrations.",
    timeline: "3–6 weeks",
    package: "Conversion-focused Shopify build",
    tools: ["Shopify", "Liquid", "Figma"],
    includes: [
      "Custom Shopify storefront",
      "Conversion-focused UX",
      "Mobile optimization",
    ],
    deliverables: [
      [
        "Custom Shopify storefront",
        "A professional, brand-aligned store built with flexible sections and an intuitive shopping experience.",
      ],
      [
        "Conversion-focused product pages",
        "Product layouts with clear purchase actions, compelling information hierarchy, and trust-building elements.",
      ],
      [
        "Collections and shopping navigation",
        "Organized collections, filtering where appropriate, and navigation patterns that make products easier to discover.",
      ],
      [
        "Performance, integrations, and launch",
        "Theme optimization, supported app integrations, responsive testing, and assistance preparing your store for launch.",
      ],
    ],
    faq: [
      [
        "Can you redesign my existing Shopify store?",
        "Yes. I can improve your existing theme or build a new storefront while preserving your products and store data.",
      ],
      [
        "Will the store be optimized for conversions?",
        "Yes. I focus on clear navigation, persuasive product pages, mobile usability, and reducing unnecessary friction in the purchase journey.",
      ],
      [
        "Can you integrate Shopify apps?",
        "Yes. I can integrate compatible apps for reviews, email marketing, subscriptions, analytics, and other store functionality.",
      ],
    ],
    process: [
      [
        "Analyze",
        "Review your brand, products, target customers, and opportunities to improve the shopping experience.",
      ],
      [
        "Design & develop",
        "Build a conversion-focused Shopify storefront with responsive layouts and carefully structured product journeys.",
      ],
      [
        "Optimize & launch",
        "Test key shopping interactions, refine performance, and prepare your store for launch.",
      ],
    ],
  },
  {
    number: "05",
    slug: "full-stack-web-application-development",
    icon: Code2,
    title: "Full-stack web application development",
    eyebrow: "Next.js development",
    description:
      "Turn your product idea into a scalable, production-ready web application built for real users.",
    intro:
      "Building a digital product requires more than writing code. It takes thoughtful architecture, intuitive interfaces, and a clear understanding of what users actually need. I develop full-stack web applications with Next.js, from responsive frontend experiences to backend APIs, databases, authentication, and third-party integrations. Whether you are validating an MVP or building a more established SaaS product, I focus on creating reliable, maintainable software that solves meaningful problems and gives your business a strong foundation for growth.",
    fit:
      "Best for SaaS startups, founders building MVPs, internal business tools, dashboards, and custom web platforms.",
    price: "From $3,000",
    priceNote:
      "Projects are quoted based on feature complexity, integrations, architecture, and development scope.",
    timeline: "6–12+ weeks",
    package: "Full-stack product build",
    tools: ["Next.js", "TypeScript", "PostgreSQL"],
    includes: [
      "Frontend & backend",
      "Database & authentication",
      "Production deployment",
    ],
    deliverables: [
      [
        "Custom Next.js application",
        "A responsive, production-oriented application built around your product requirements and user workflows.",
      ],
      [
        "Backend APIs and database",
        "Structured application logic, database models, and API endpoints that support your product's core functionality.",
      ],
      [
        "Authentication and integrations",
        "Secure authentication flows, user roles where needed, and integrations with relevant third-party services.",
      ],
      [
        "Testing, deployment, and documentation",
        "Essential quality checks, production deployment configuration, and technical documentation for future maintenance.",
      ],
    ],
    faq: [
      [
        "Can you build an MVP from an idea?",
        "Yes. I can help define the essential features, structure the application, and build an MVP focused on validating your concept.",
      ],
      [
        "Do you handle both frontend and backend?",
        "Yes. I work across the application stack, including interfaces, APIs, databases, authentication, and deployment.",
      ],
      [
        "Can the application scale as my business grows?",
        "I design the architecture with maintainability and future growth in mind, while keeping early development appropriately focused.",
      ],
    ],
    process: [
      [
        "Scope & architect",
        "Clarify the product requirements, define the MVP or feature scope, and plan the technical architecture.",
      ],
      [
        "Design & develop",
        "Build the frontend, backend, database, and integrations through clear development milestones.",
      ],
      [
        "Test & deploy",
        "Validate core workflows, resolve issues, deploy the application, and prepare it for real users.",
      ],
    ],
  },
  {
    number: "06",
    slug: "nextjs-product-development-retainer",
    icon: RefreshCw,
    title: "Next.js product development retainer",
    eyebrow: "Ongoing product development",
    description:
      "Keep your product moving forward with a reliable development partner who understands your codebase and goals.",
    intro:
      "Launching a product is only the beginning. As your business grows, you need to ship new features, improve existing experiences, resolve issues, and respond to changing user needs. My Next.js development retainer gives you ongoing technical support without the commitment of hiring a full-time developer. I work alongside your team to turn priorities into production-ready improvements, maintain code quality, and keep development moving consistently. You get a dependable partner focused on making your product better every month.",
    fit:
      "Best for SaaS founders, growing startups, product teams, and businesses needing consistent Next.js development capacity.",
    price: "From $1,500/mo",
    priceNote:
      "Monthly pricing depends on reserved development capacity, product complexity, and support requirements.",
    timeline: "Monthly ongoing",
    package: "Development partnership",
    tools: ["Next.js", "TypeScript", "GitHub"],
    includes: [
      "Feature development",
      "Bug fixes & improvements",
      "Ongoing collaboration",
    ],
    deliverables: [
      [
        "Continuous feature development",
        "Implementation of prioritized product features, enhancements, and user-facing improvements.",
      ],
      [
        "Bug fixes and technical maintenance",
        "Investigation and resolution of application issues, dependency updates, and maintainability improvements.",
      ],
      [
        "Performance and UX optimization",
        "Ongoing refinements to application speed, responsiveness, accessibility, and user experience.",
      ],
      [
        "Development planning and updates",
        "Regular progress updates, clear task prioritization, and collaborative planning aligned with your roadmap.",
      ],
    ],
    faq: [
      [
        "How does the monthly retainer work?",
        "We agree on a monthly development capacity and priority backlog. I work through the agreed tasks and provide regular progress updates.",
      ],
      [
        "Can you work with my existing Next.js application?",
        "Yes. I can join an existing project, review the codebase, and contribute within your established development workflow.",
      ],
      [
        "Can I change priorities during the month?",
        "Yes. Priorities can be adjusted collaboratively within the agreed capacity and scope.",
      ],
    ],
    process: [
      [
        "Onboard",
        "Understand your product, codebase, roadmap, and development priorities.",
      ],
      [
        "Build & iterate",
        "Deliver features, fixes, and improvements through a consistent development workflow.",
      ],
      [
        "Review & plan",
        "Share progress, evaluate completed work, and align on the next set of priorities.",
      ],
    ],
  },
  {
    number: "07",
    slug: "figma-to-nextjs-development",
    icon: FileCode2,
    title: "Pixel-perfect Figma to Next.js development",
    eyebrow: "Figma to code",
    description:
      "Transform your Figma designs into responsive, production-ready Next.js interfaces with exceptional attention to detail.",
    intro:
      "A carefully designed interface deserves an equally thoughtful implementation. I convert Figma designs into clean, responsive Next.js code while preserving the visual details, spacing, typography, and interactions that make the design work. Beyond visual accuracy, I focus on accessibility, reusable components, performance, and maintainable architecture. Whether you have a single landing page or a complete product interface, you get high-quality frontend code that stays true to your design and is ready to integrate into a real application.",
    fit:
      "Best for designers, creative agencies, startups, and product teams with approved Figma designs ready for development.",
    price: "From $500",
    priceNote:
      "Final pricing depends on the number of screens, responsive variants, animations, and functionality.",
    timeline: "1–4 weeks",
    package: "Design-to-code implementation",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    includes: [
      "Pixel-accurate UI",
      "Responsive components",
      "Clean TypeScript code",
    ],
    deliverables: [
      [
        "High-fidelity Next.js implementation",
        "Carefully coded interfaces that closely match the provided Figma layouts, typography, spacing, and visual details.",
      ],
      [
        "Responsive layouts",
        "Thoughtful adaptations for desktop, tablet, and mobile, including behavior not explicitly covered by the original designs.",
      ],
      [
        "Reusable React components",
        "Well-structured, maintainable components that make future updates and extensions easier.",
      ],
      [
        "Interactions, accessibility, and handoff",
        "Functional UI states, accessible markup, basic interaction testing, and organized source code ready for integration.",
      ],
    ],
    faq: [
      [
        "How closely will the code match my Figma design?",
        "I aim for high visual fidelity, including typography, spacing, colors, layout, and responsive behavior, while accounting for real browser rendering.",
      ],
      [
        "Do you use Tailwind CSS?",
        "Yes. I typically work with Next.js, TypeScript, and Tailwind CSS, and can adapt to an existing project's styling approach.",
      ],
      [
        "Can you implement animations and interactions?",
        "Yes. I can build hover states, transitions, animations, and interactive components based on your design requirements.",
      ],
    ],
    process: [
      [
        "Inspect",
        "Review the Figma files, components, responsive layouts, assets, and interaction requirements.",
      ],
      [
        "Implement",
        "Translate the designs into reusable Next.js components with accurate styling and responsive behavior.",
      ],
      [
        "Refine",
        "Compare the implementation against the designs, test across screen sizes, and polish the final details.",
      ],
    ],
  },
  {
    number: "08",
    slug: "high-converting-nextjs-landing-page",
    icon: MousePointerClick,
    title: "High-converting Next.js landing page",
    eyebrow: "Conversion-focused development",
    description:
      "Turn more visitors into customers with a fast, persuasive landing page built around one clear goal.",
    intro:
      "Your landing page has one job: help the right visitors take action. I design and develop conversion-focused landing pages with Next.js, combining compelling visual hierarchy, clear messaging, strategic calls to action, and fast-loading performance. Every section is structured to communicate value, address objections, and guide visitors toward the next step. Whether you are launching a SaaS product, validating an offer, or running paid campaigns, you get a polished landing page designed to support measurable business outcomes.",
    fit:
      "Best for SaaS launches, startup waitlists, lead generation, product campaigns, and businesses promoting a focused offer.",
    price: "From $700",
    priceNote:
      "Final pricing depends on page complexity, design needs, animations, and conversion integrations.",
    timeline: "1–2 weeks",
    package: "Conversion landing page",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    includes: [
      "Conversion-focused layout",
      "Fast responsive frontend",
      "Analytics integration",
    ],
    deliverables: [
      [
        "Conversion-focused landing page",
        "A strategically structured page with a compelling hero, clear value proposition, persuasive sections, and focused calls to action.",
      ],
      [
        "Responsive Next.js development",
        "A fast, accessible landing page that delivers a consistent experience across desktop and mobile devices.",
      ],
      [
        "Lead capture and conversion integrations",
        "Contact forms, waitlist signups, booking links, or other conversion actions connected to your preferred tools.",
      ],
      [
        "SEO, analytics, and deployment",
        "Essential SEO metadata, analytics or conversion tracking setup, performance checks, and production deployment support.",
      ],
    ],
    faq: [
      [
        "Can you design the landing page as well?",
        "Yes. I can handle both design and development, or build directly from your existing Figma design.",
      ],
      [
        "Will the landing page guarantee more conversions?",
        "No landing page can guarantee results, but I use established UX and conversion principles to reduce friction and create a stronger foundation for testing and improvement.",
      ],
      [
        "Can you integrate forms and analytics?",
        "Yes. I can connect lead capture forms, email marketing tools, analytics, and supported conversion tracking services.",
      ],
    ],
    process: [
      [
        "Strategize",
        "Define the target audience, core offer, conversion goal, and messaging hierarchy.",
      ],
      [
        "Design & develop",
        "Create a persuasive visual experience and build it with responsive, performance-focused Next.js code.",
      ],
      [
        "Launch & measure",
        "Test interactions, configure tracking, optimize performance, and deploy the landing page.",
      ],
    ],
  },
] as const satisfies readonly Service[];


// export const workProjects = [
//   { title: "Atlas Analytics", slug: "atlas-analytics", category: "Product strategy · SaaS", description: "A calmer way for operations teams to understand performance and act on the numbers that matter.", homeDescription: "A clearer product direction for an analytics platform helping operations teams act on the numbers that matter.", slides: [{ label: "Dashboard", title: "Make every signal easier to act on.", className: "bg-indigo-600" }, { label: "Workflows", title: "Turn insight into momentum.", className: "bg-violet-600" }, { label: "Reporting", title: "Spend less time assembling the story.", className: "bg-sky-600" }] },
//   { title: "Northstar Commerce", slug: "northstar-commerce", category: "Web experience · E-commerce", description: "A flexible storefront experience that makes discovery feel personal without slowing down the purchase journey.", homeDescription: "A more intuitive shopping experience that makes discovery feel personal without slowing down the journey.", slides: [{ label: "Discovery", title: "Find the right thing faster.", className: "bg-amber-600" }, { label: "Collections", title: "Browse with a little more delight.", className: "bg-orange-600" }, { label: "Checkout", title: "Keep the good feeling going.", className: "bg-rose-600" }] },
//   { title: "Field Notes", slug: "field-notes", category: "Brand identity · Editorial", description: "A warm, editorial identity for a community platform helping independent makers share what they know.", homeDescription: "A warm, editorial identity for a community platform helping independent makers share what they know.", slides: [{ label: "Stories", title: "Give good ideas room to breathe.", className: "bg-emerald-600" }, { label: "Community", title: "Make sharing feel more human.", className: "bg-teal-600" }, { label: "Toolkit", title: "A system made to keep growing.", className: "bg-cyan-600" }] },
// ] as const


const workProjectsData = [
  {
    title: "Launchport",
    slug: "launchport",
    liveUrl: "https://launchport.sugengpriyanto.my.id",
    category: "Next.js · LegalTech",
    description:
      "A streamlined incorporation platform helping international solo founders establish a Delaware LLC and launch their US business with confidence.",
    homeDescription:
      "Making US company formation simpler and more accessible for ambitious founders building beyond borders.",
    slides: [
      {
        label: "Incorporation",
        title: "Start your US company from anywhere.",
        className: "bg-blue-600",
      },
      {
        label: "Process",
        title: "Less paperwork. More building.",
        className: "bg-indigo-600",
      },
      {
        label: "Guidance",
        title: "A clearer path to doing business in the US.",
        className: "bg-sky-600",
      },
    ],
  },
  {
    title: "Orbitfolk",
    slug: "orbitfolk",
    liveUrl: "https://orbitfolk.sugengpriyanto.my.id",
    category: "Next.js · Travel & Community",
    description:
      "A community-driven travel platform connecting digital nomads through curated workations, shared adventures, and meaningful experiences around the world.",
    homeDescription:
      "Bringing remote workers together through extraordinary destinations, shared adventures, and a sense of belonging.",
    slides: [
      {
        label: "Destinations",
        title: "Work remotely. Feel connected.",
        className: "bg-teal-600",
      },
      {
        label: "Experiences",
        title: "Discover places worth staying for.",
        className: "bg-cyan-600",
      },
      {
        label: "Community",
        title: "Go somewhere new. Find your people.",
        className: "bg-emerald-600",
      },
    ],
  },
  {
    title: "IceDnD",
    slug: "icednd",
    liveUrl: "https://icednd.sugengpriyanto.my.id",
    category: "Next.js · Luxury Hospitality",
    description:
      "A premium hotel discovery and booking experience showcasing Norway's extraordinary stays, from secluded retreats to unforgettable Arctic escapes.",
    homeDescription:
      "An elevated booking experience for discovering extraordinary hotels and unforgettable escapes across Norway.",
    slides: [
      {
        label: "Discover",
        title: "Find your extraordinary escape.",
        className: "bg-slate-700",
      },
      {
        label: "Stays",
        title: "Where remarkable places meet refined comfort.",
        className: "bg-sky-800",
      },
      {
        label: "Booking",
        title: "From inspiration to reservation, effortlessly.",
        className: "bg-indigo-800",
      },
    ],
  },
  {
    title: "Venturecraft",
    slug: "venturecraft",
    liveUrl: "https://venture-craft.sugengpriyanto.my.id",
    category: "Next.js · EdTech",
    description:
      "A premium online learning experience delivering a practical mini MBA for tech founders ready to sharpen their business thinking and build with confidence.",
    homeDescription:
      "Making business education more practical and accessible for the next generation of ambitious tech founders.",
    slides: [
      {
        label: "Programs",
        title: "Think like a founder. Build like a leader.",
        className: "bg-violet-700",
      },
      {
        label: "Learning",
        title: "Big business thinking, built for real life.",
        className: "bg-purple-600",
      },
      {
        label: "Growth",
        title: "Turn knowledge into your next big move.",
        className: "bg-fuchsia-600",
      },
    ],
  },
  {
    title: "Aurelle",
    slug: "aurelle",
    liveUrl: "https://aurelle.sugengpriyanto.my.id",
    category: "Shopify · Luxury Fashion",
    description:
      "An editorial-inspired luxury fashion storefront where timeless aesthetics, considered details, and effortless shopping come together.",
    homeDescription:
      "A refined Shopify shopping experience that brings timeless fashion and modern luxury into focus.",
    slides: [
      {
        label: "Editorial",
        title: "An expression of effortless elegance.",
        className: "bg-stone-700",
      },
      {
        label: "Collections",
        title: "Discover pieces worth keeping.",
        className: "bg-amber-800",
      },
      {
        label: "Shopping",
        title: "Luxury in every little detail.",
        className: "bg-neutral-800",
      },
    ],
  },
  {
    title: "Stackhire",
    slug: "stackhire",
    liveUrl: "https://stackhire.sugengpriyanto.my.id",
    category: "Next.js · Recruitment Platform",
    description:
      "A modern job discovery platform connecting ambitious professionals with meaningful career opportunities through a simpler, more focused search experience.",
    homeDescription:
      "Helping talented professionals discover better opportunities through a clearer, more intuitive job search experience.",
    slides: [
      {
        label: "Explore",
        title: "Find work that moves you forward.",
        className: "bg-blue-700",
      },
      {
        label: "Opportunities",
        title: "The right opportunity starts here.",
        className: "bg-indigo-600",
      },
      {
        label: "Applications",
        title: "Less searching. More possibilities.",
        className: "bg-cyan-700",
      },
    ],
  },
  {
    title: "Pixelthorn",
    slug: "pixelthorn",
    liveUrl: "https://pixelthorn.sugengpriyanto.my.id",
    category: "Framer · Creative Agency",
    description:
      "A bold, immersive agency website showcasing imaginative game worlds, creative expertise, and the craft behind unforgettable interactive experiences.",
    homeDescription:
      "A high-impact Framer website bringing a game development studio's imagination, creativity, and work to life.",
    slides: [
      {
        label: "Studio",
        title: "Imagination is just the beginning.",
        className: "bg-fuchsia-700",
      },
      {
        label: "Projects",
        title: "Worlds built to be remembered.",
        className: "bg-violet-800",
      },
      {
        label: "Expertise",
        title: "Where creative vision becomes playable reality.",
        className: "bg-rose-700",
      },
    ],
  },
  {
    title: "Maison Ombre",
    slug: "maison-ombre",
    liveUrl: "https://maison.sugengpriyanto.my.id",
    category: "Next.js · Fine Dining",
    description:
      "An atmospheric fine dining website combining refined storytelling, elegant menu presentation, and a seamless reservation experience.",
    homeDescription:
      "A sophisticated digital destination capturing the atmosphere of fine dining and making every reservation feel special.",
    slides: [
      {
        label: "Experience",
        title: "An invitation to something extraordinary.",
        className: "bg-stone-800",
      },
      {
        label: "Cuisine",
        title: "Every detail tells a story.",
        className: "bg-amber-900",
      },
      {
        label: "Reservations",
        title: "Your table awaits.",
        className: "bg-neutral-900",
      },
    ],
  },
  {
    title: "Velluna",
    slug: "velluna",
    liveUrl: "https://velluna.sugengpriyanto.my.id",
    category: "Shopify · Beauty & Skincare",
    description:
      "A modern beauty storefront blending soft visual storytelling, thoughtful product discovery, and an effortless shopping experience.",
    homeDescription:
      "A beautifully considered Shopify store that makes discovering everyday beauty essentials feel effortless.",
    slides: [
      {
        label: "Beauty",
        title: "A little ritual. A lot of radiance.",
        className: "bg-rose-400",
      },
      {
        label: "Products",
        title: "Find what makes you feel your best.",
        className: "bg-pink-500",
      },
      {
        label: "Shopping",
        title: "Your beauty ritual, beautifully simple.",
        className: "bg-fuchsia-500",
      },
    ],
  },
  {
    title: "WageFriday",
    slug: "wagefriday",
    liveUrl: "https://wagefriday.sugengpriyanto.my.id",
    category: "Framer & Frameship · Band Merchandise",
    description:
      "An energetic merchandise storefront combining expressive band identity with a seamless shopping experience built using Framer and Frameship.",
    homeDescription:
      "A bold Framer-powered merchandise store bringing music, identity, and fan culture together.",
    slides: [
      {
        label: "Merchandise",
        title: "Wear the music. Own the moment.",
        className: "bg-red-700",
      },
      {
        label: "Collections",
        title: "Made for the fans who feel everything.",
        className: "bg-zinc-800",
      },
      {
        label: "Store",
        title: "From the stage to your wardrobe.",
        className: "bg-orange-700",
      },
    ],
  },
  {
    title: "Pondok",
    slug: "pondok",
    liveUrl: "https://pondok.sugengpriyanto.my.id",
    category: "Next.js · Resort & Hospitality",
    description:
      "A tranquil resort booking experience inspired by Bali's natural beauty, bringing immersive destination storytelling and effortless reservations together.",
    homeDescription:
      "A serene digital escape that captures the beauty of Bali and makes booking the perfect retreat feel effortless.",
    slides: [
      {
        label: "Discover",
        title: "Find your own piece of paradise.",
        className: "bg-emerald-700",
      },
      {
        label: "Retreats",
        title: "Slow down. Stay a little longer.",
        className: "bg-lime-700",
      },
      {
        label: "Reservations",
        title: "Your Bali escape begins here.",
        className: "bg-teal-700",
      },
    ],
  },
  {
    title: "Nox Glitch",
    slug: "nox-glitch",
    liveUrl: "https://nox.sugengpriyanto.my.id",
    category: "Shopify · Gaming Merchandise",
    description:
      "A high-energy Shopify merchandise store translating a gaming streamer's personality into bold visuals, exclusive drops, and a fan-first shopping experience.",
    homeDescription:
      "A bold merchandise experience connecting gaming culture, creator identity, and the community behind the screen.",
    slides: [
      {
        label: "Creator",
        title: "Built for the ones who never log off.",
        className: "bg-purple-800",
      },
      {
        label: "Drops",
        title: "Exclusive gear. Unmistakable energy.",
        className: "bg-fuchsia-700",
      },
      {
        label: "Community",
        title: "More than merch. Part of the game.",
        className: "bg-indigo-900",
      },
    ],
  },
  {
    title: "Nadia Hawkins",
    slug: "nadia-hawkins",
    liveUrl: "https://nh.sugengpriyanto.my.id",
    category: "Next.js · Author & E-commerce",
    description:
      "An elegant author website combining literary storytelling, book discovery, and a personal storefront into one cohesive digital home.",
    homeDescription:
      "A thoughtful digital home for an author's stories, books, and the readers who connect with them.",
    slides: [
      {
        label: "Author",
        title: "Every story begins somewhere.",
        className: "bg-amber-800",
      },
      {
        label: "Books",
        title: "Discover your next favorite story.",
        className: "bg-rose-800",
      },
      {
        label: "Shop",
        title: "Bring the stories you love a little closer.",
        className: "bg-stone-700",
      },
    ],
  },
] as const;

// Portfolio display order. Edit this list to reorder projects everywhere they appear.
const portfolioOrder = [
  "Stackhire",
  "Venturecraft",
  "Nox Glitch",
  "Aurelle",
  "Maison Ombre",
  "Orbitfolk",
  "WageFriday",
  "Pixelthorn",
  "Nadia Hawkins",
  "Pondok",
  "Velluna",
  "Launchport",
  "IceDnD",
] as const;

export const workProjects = portfolioOrder.map(
  (title) => workProjectsData.find((project) => project.title === title)!,
);


// export const caseStudies = {
//   "atlas-analytics": { eyebrow: "Product strategy", title: "Find the clearest path from opportunity to outcome.", intro: "When a product has too many possibilities, strategy creates the focus to make the right thing next.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&auto=format&fit=crop&q=85", tools: ["Notion", "FigJam", "Dovetail", "Figma"], overview: "Atlas Analytics had a compelling product and a growing customer base, but the team was pulled in too many directions. We created a shared product direction that connected customer needs to business priorities.", challenge: "The product roadmap had become a collection of requests rather than a clear point of view. Teams needed a way to decide what mattered now, what could wait, and how to measure progress.", approach: "We mapped the opportunity space, synthesized customer interviews, clarified the product promise, and turned the strongest opportunities into a sequenced roadmap with measurable bets.", outcome: "The team left with a sharper story, a prioritized six-month roadmap, and a lightweight decision framework they could keep using after the engagement.", deliverables: ["Product vision and positioning", "Audience and opportunity mapping", "Prioritized roadmap", "Success metrics and experiment plan"], steps: [["Align", "Create a shared view of the problem, audience, and business goal."], ["Focus", "Turn competing opportunities into a clear set of product bets."], ["Activate", "Give the team a practical roadmap and the confidence to start."]] },
//   "northstar-commerce": { eyebrow: "UX & UI design", title: "Make the right next step feel obvious.", intro: "I turn complex flows into experiences that feel simple, distinctive, and ready for real people to use.", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1800&auto=format&fit=crop&q=85", tools: ["Figma", "FigJam", "Maze", "Principle"], overview: "Northstar Commerce needed a shopping experience that could handle a wide range of products without making people feel lost. We redesigned the discovery journey around confidence and momentum.", challenge: "Customers were browsing without a clear sense of where to go next. The existing experience had plenty of content, but not enough guidance to help people narrow their options.", approach: "We studied the purchase journey, rebuilt the information architecture, prototyped several discovery patterns, and created a visual system that made hierarchy feel immediate.", outcome: "The new experience gave customers clearer paths through the catalog and gave the internal team a flexible foundation for future collections and campaigns.", deliverables: ["Experience maps and user flows", "Wireframes and interaction prototypes", "Visual direction and UI design", "Responsive screen specifications"], steps: [["Understand", "Learn how people currently work, where they struggle, and what they expect."], ["Explore", "Try multiple directions quickly through flows, wireframes, and prototypes."], ["Refine", "Polish the strongest direction into a coherent, usable interface."]] },
//   "field-notes": { eyebrow: "Design systems", title: "Build a visual language your whole team can speak.", intro: "A good system creates consistency without flattening the character that makes a product feel like yours.", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1800&auto=format&fit=crop&q=85", tools: ["Figma", "Storybook", "Zeroheight", "GitHub"], overview: "Field Notes was growing across web, social, and events, but every new touchpoint required a fresh design decision. We built a system that gave the brand structure without making it feel rigid.", challenge: "The team had strong creative instincts but no shared source of truth. Small inconsistencies accumulated, slowing production and making the brand harder to recognize across channels.", approach: "We audited the existing work, defined the foundations, built reusable patterns, and documented the decisions in a practical system designed for everyday use.", outcome: "The team gained a reliable toolkit for making new work faster, with enough flexibility to keep the identity expressive as the community grows.", deliverables: ["Foundations, tokens, and guidelines", "Reusable component patterns", "Accessibility and interaction states", "Documentation and team handoff"], steps: [["Audit", "Understand what exists, what is working, and where inconsistency creates drag."], ["Define", "Create the foundations and component rules that make decisions easier."], ["Enable", "Document the system so designers and engineers can use it with confidence."]] },
//   "frontend-development": { eyebrow: "Frontend development", title: "Turn thoughtful design into a fast, living interface.", intro: "I build responsive frontends that preserve the intent of the design and hold up in the details.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&auto=format&fit=crop&q=85", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"], overview: "The team had a strong product story and a detailed design direction, but needed a frontend partner to turn that work into a responsive, maintainable experience.", challenge: "The interface needed to feel polished across screen sizes while remaining simple for the team to extend. Performance, accessibility, and visual fidelity all mattered equally.", approach: "We translated the visual language into reusable components, built the key flows responsively, and used progressive refinement to test the details across devices.", outcome: "The result was a fast, accessible frontend that matched the design intent and gave the team a clean foundation for future pages and features.", deliverables: ["Responsive React interfaces", "Accessible interaction patterns", "Component implementation", "Performance and launch support"], steps: [["Translate", "Create a shared understanding between the design and the codebase."], ["Build", "Implement the interface with reusable, maintainable components."], ["Polish", "Test across devices, refine the details, and prepare for a confident launch."]] },
// } as const


export const caseStudies = {
  "launchport": {
    eyebrow: "Next.js · LegalTech",
    title: "Make starting a US company feel possible from anywhere.",
    intro:
      "A clearer, more approachable path to US company formation for international founders ready to build beyond borders.",
    image: "/images/projects/launchport.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Launchport helps non-US solo founders navigate the process of forming a Delaware LLC. The project focused on creating a trustworthy, approachable digital experience that communicates complex legal services without overwhelming visitors. I developed a modern Next.js website that makes the benefits, requirements, and next steps easier to understand.",
    challenge:
      "Forming a US company from abroad can feel complicated and intimidating. Legal terminology, unfamiliar requirements, and uncertainty around the process create barriers for international entrepreneurs. The website needed to simplify a complex service, establish credibility, and guide potential customers toward taking their first step with confidence.",
    approach:
      "I structured the website around the questions founders are most likely to ask, creating a clear information hierarchy, transparent service explanations, and focused calls to action. Using Next.js and reusable React components, I built a responsive experience with fast navigation, accessible layouts, and a consistent visual language designed to communicate reliability and professionalism.",
    outcome:
      "A polished, conversion-focused website that presents US company formation in a more accessible way. The experience gives international founders a clearer understanding of the service while providing Launchport with a flexible foundation for communicating its offerings and growing its online presence.",
    deliverables: [
      "Responsive Next.js website",
      "Service and incorporation landing pages",
      "Conversion-focused user journeys",
      "Reusable React components",
      "SEO and performance foundations",
    ],
    steps: [
      [
        "Clarify",
        "Translate a complex incorporation service into a clear digital narrative built around founders' needs.",
      ],
      [
        "Develop",
        "Build a responsive Next.js experience with intuitive layouts, reusable components, and focused calls to action.",
      ],
      [
        "Refine",
        "Polish the content hierarchy, responsive behavior, and key interactions for a confident browsing experience.",
      ],
    ],
  },

  "orbitfolk": {
    eyebrow: "Next.js · Travel & Community",
    title: "Make the world feel smaller and the connections bigger.",
    intro:
      "A digital home for remote workers seeking meaningful connections, inspiring destinations, and experiences beyond the ordinary.",
    image: "/images/projects/orbitfolk.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Orbitfolk is a digital nomad platform inspired by the idea that working remotely should not mean exploring the world alone. Built around curated trips, shared experiences, and community, the website brings destination discovery and meaningful connection into one cohesive experience. I developed a modern Next.js platform designed to capture the freedom of remote work while making travel opportunities easy to explore.",
    challenge:
      "Digital nomads have endless travel options, but finding experiences that combine productive remote work with genuine community can be difficult. Orbitfolk needed a digital presence that communicated the emotional appeal of traveling together while presenting destinations, experiences, and program details clearly enough to encourage participation.",
    approach:
      "I created a destination-led website experience with immersive visuals, thoughtful content sections, and clear navigation between trips and community information. The frontend was developed with reusable Next.js components and responsive layouts, balancing expressive storytelling with practical usability so visitors could move naturally from inspiration to exploring a trip.",
    outcome:
      "An engaging travel and community website that brings the Orbitfolk concept to life. The platform gives remote workers an inviting way to discover destinations, understand the experience, and take the next step toward joining a community of like-minded travelers.",
    deliverables: [
      "Responsive Next.js website",
      "Destination and trip discovery pages",
      "Community-focused landing pages",
      "Reusable UI components",
      "Mobile-friendly browsing experience",
    ],
    steps: [
      [
        "Explore",
        "Understand the intersection of remote work, travel, and community to shape an experience around belonging.",
      ],
      [
        "Create",
        "Develop engaging destination pages, clear program information, and a visual language that inspires exploration.",
      ],
      [
        "Connect",
        "Refine navigation and calls to action so visitors can move naturally from discovering a destination to joining an experience.",
      ],
    ],
  },

  "icednd": {
    eyebrow: "Next.js · Luxury Hospitality",
    title: "Bring the extraordinary beauty of Norway closer.",
    intro:
      "A refined hotel discovery and booking experience where remarkable destinations meet effortless exploration.",
    image: "/images/projects/icednd.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "IceDnD is a luxury hospitality platform dedicated to extraordinary stays across Norway. From dramatic Arctic landscapes to secluded boutique retreats, the experience brings premium accommodation discovery into a thoughtfully designed digital environment. I developed a Next.js website that balances immersive destination storytelling with a clear and intuitive booking journey.",
    challenge:
      "Luxury travelers expect more than a functional booking interface. They want inspiration, confidence, and a sense of the experience before arriving. IceDnD needed to showcase distinctive properties while keeping essential information accessible and the journey from discovering a hotel to making a reservation as straightforward as possible.",
    approach:
      "I focused on an image-led interface with refined typography, spacious layouts, and clear property information. Hotel discovery, accommodation details, and reservation interactions were organized into a cohesive experience. The Next.js frontend was structured using reusable components and responsive patterns to maintain visual consistency across devices.",
    outcome:
      "A premium digital booking experience that captures the atmosphere of Norway's exceptional destinations. The result balances visual storytelling with practical navigation, giving travelers an inviting way to discover stays and approach reservations with confidence.",
    deliverables: [
      "Luxury hotel discovery interface",
      "Property detail pages",
      "Reservation experience frontend",
      "Responsive Next.js implementation",
      "Reusable accommodation UI components",
    ],
    steps: [
      [
        "Discover",
        "Define the visual and functional requirements of a luxury hospitality experience built around inspiring destinations.",
      ],
      [
        "Build",
        "Develop immersive property pages, structured accommodation details, and responsive booking interfaces.",
      ],
      [
        "Polish",
        "Refine visual consistency, interaction details, and the transition from hotel exploration to reservation.",
      ],
    ],
  },

  "venturecraft": {
    eyebrow: "Next.js · EdTech",
    title: "Make business education work for the next generation of founders.",
    intro:
      "A premium learning experience that turns complex business knowledge into practical momentum for ambitious tech entrepreneurs.",
    image: "/images/projects/venturecraft.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Venturecraft offers a practical mini MBA experience designed for founders building technology-driven businesses. The website introduces an alternative to traditional business education, emphasizing actionable lessons and entrepreneurial thinking. I developed a premium Next.js experience that communicates the value of the program and makes exploring its curriculum feel straightforward and engaging.",
    challenge:
      "Educational products need to demonstrate their value before someone commits to learning. Venturecraft needed to communicate the program's credibility, explain what participants would learn, and make a substantial curriculum feel approachable. The challenge was presenting a premium educational offering without overwhelming prospective students with information.",
    approach:
      "I structured the experience around the program's value proposition, curriculum, learning outcomes, and enrollment journey. Clear content hierarchy, strong typography, focused calls to action, and reusable components helped create a cohesive educational website. The responsive Next.js implementation keeps important information accessible across screen sizes.",
    outcome:
      "A polished digital presence that positions Venturecraft as an approachable yet premium learning opportunity. The website gives prospective students a clear understanding of the program while establishing a flexible foundation for presenting courses, content, and future offerings.",
    deliverables: [
      "Next.js educational website",
      "Program and curriculum pages",
      "Enrollment-focused landing experience",
      "Responsive UI component library",
      "SEO and performance foundations",
    ],
    steps: [
      [
        "Structure",
        "Organize the program narrative, learning benefits, and curriculum into a clear information architecture.",
      ],
      [
        "Develop",
        "Build a polished Next.js website with reusable layouts and engaging educational content sections.",
      ],
      [
        "Optimize",
        "Refine the browsing and enrollment journey to make the program easier to understand and explore.",
      ],
    ],
  },

  "aurelle": {
    eyebrow: "Shopify · Luxury Fashion",
    title: "Create a shopping experience as considered as the collection.",
    intro:
      "An elegant digital storefront where modern luxury, editorial storytelling, and effortless commerce come together.",
    image: "/images/projects/aurelle.webp",
    tools: ["Shopify", "Liquid", "JavaScript", "CSS"],
    overview:
      "Aurelle is a luxury fashion store built around timeless aesthetics and considered style. The project focused on translating the brand's sophisticated identity into an elegant online shopping experience. I developed a Shopify storefront that combines immersive editorial presentation with intuitive product discovery and commerce functionality.",
    challenge:
      "A luxury fashion brand needs to communicate more than its products. Every detail, from typography and imagery to product navigation, contributes to how customers perceive quality. Aurelle needed an online store that expressed its premium positioning without compromising usability or making the shopping journey unnecessarily complicated.",
    approach:
      "I developed a refined Shopify experience with editorial-inspired layouts, thoughtful spacing, and a consistent visual hierarchy. Product collections and detail pages were structured to keep merchandise at the center of the experience, while responsive design and clear shopping interactions maintained usability across devices.",
    outcome:
      "A sophisticated Shopify storefront that reflects Aurelle's luxury positioning while supporting an intuitive shopping journey. The result creates space for the products to stand out and provides a flexible platform for presenting future collections and campaigns.",
    deliverables: [
      "Custom Shopify storefront",
      "Editorial-inspired homepage",
      "Product and collection pages",
      "Responsive shopping experience",
      "Reusable Shopify theme sections",
    ],
    steps: [
      [
        "Interpret",
        "Translate Aurelle's luxury positioning into a cohesive visual language and digital shopping direction.",
      ],
      [
        "Craft",
        "Develop elegant storefront layouts, product presentation components, and intuitive collection navigation.",
      ],
      [
        "Refine",
        "Polish responsive layouts, product interactions, and visual details to create a seamless premium experience.",
      ],
    ],
  },

  "stackhire": {
    eyebrow: "Next.js · Recruitment Platform",
    title: "Make finding the right opportunity feel less like work.",
    intro:
      "A more intuitive way to discover career opportunities, explore roles, and take the next step with confidence.",
    image: "/images/projects/stackhire.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Stackhire is an online job-seeking platform designed to connect professionals with relevant career opportunities. The project focuses on making job discovery simpler, more organized, and more approachable. I developed a Next.js experience that prioritizes clear job information, intuitive navigation, and a consistent interface across the job exploration journey.",
    challenge:
      "Job seekers often encounter overwhelming listings, inconsistent information, and complicated application experiences. Stackhire needed an interface that made opportunities easier to browse and compare while helping users quickly understand whether a role matched their interests, skills, and career goals.",
    approach:
      "I organized the interface around job discovery, structured listing information, and clear role details. Reusable frontend components helped keep job cards, navigation patterns, and application entry points consistent. The responsive Next.js implementation supports a practical experience for people searching for opportunities across different devices.",
    outcome:
      "A focused job discovery experience that makes exploring career opportunities more straightforward. The platform establishes a clear visual and technical foundation for presenting roles, supporting applicants, and expanding recruitment-related functionality.",
    deliverables: [
      "Next.js recruitment platform",
      "Job listing and discovery interfaces",
      "Detailed job opportunity pages",
      "Responsive application journey",
      "Reusable UI components",
    ],
    steps: [
      [
        "Understand",
        "Map the essential needs of job seekers and identify the information that matters most when evaluating opportunities.",
      ],
      [
        "Develop",
        "Build organized job listing interfaces, detailed opportunity views, and responsive navigation patterns.",
      ],
      [
        "Improve",
        "Refine readability, information hierarchy, and application entry points for a clearer job search experience.",
      ],
    ],
  },

  "pixelthorn": {
    eyebrow: "Framer · Creative Agency",
    title: "Give a game studio's imagination a world of its own.",
    intro:
      "A bold, immersive studio website that brings creative vision, interactive storytelling, and digital craftsmanship together.",
    image: "/images/projects/pixelthorn.webp",
    tools: ["Framer", "Figma", "JavaScript", "CSS"],
    overview:
      "Pixelthorn is a game development agency focused on creating memorable interactive experiences. The website needed to reflect the studio's imaginative character while presenting its creative capabilities and work with clarity. I developed a distinctive Framer experience that combines expressive visual direction, engaging interactions, and flexible content presentation.",
    challenge:
      "Creative studios need websites that demonstrate their personality before a visitor reads a single sentence. Pixelthorn required a bold visual identity that could stand apart from conventional agency websites while remaining intuitive for potential clients exploring the studio's work and services.",
    approach:
      "I used Framer to create a visually engaging website with strong typography, immersive project presentation, and considered motion. The experience balances experimental creative elements with straightforward navigation, giving the studio's portfolio and expertise room to stand out without sacrificing clarity.",
    outcome:
      "An expressive studio website that communicates Pixelthorn's creative identity and makes its work the centerpiece of the experience. The result offers a distinctive digital presence with responsive layouts and flexible content management for future projects.",
    deliverables: [
      "Custom Framer agency website",
      "Immersive portfolio presentation",
      "Interactive visual elements",
      "Responsive page layouts",
      "Flexible project content structure",
    ],
    steps: [
      [
        "Imagine",
        "Explore the studio's creative personality and establish a visual direction that feels bold and recognizable.",
      ],
      [
        "Create",
        "Build expressive Framer layouts, engaging interactions, and project showcases that highlight the studio's work.",
      ],
      [
        "Polish",
        "Fine-tune animations, responsiveness, and visual details to bring the digital experience together.",
      ],
    ],
  },

  "maison-ombre": {
    eyebrow: "Next.js · Fine Dining",
    title: "Make the dining experience begin before the first course.",
    intro:
      "An atmospheric digital experience that captures the elegance of fine dining and makes every reservation feel special.",
    image: "/images/projects/maison-ombre.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Maison Ombre is a fine dining restaurant experience built around atmosphere, exceptional cuisine, and thoughtful hospitality. The website brings the restaurant's character online through refined visual storytelling, elegant menu presentation, and a clear reservation journey. I developed a responsive Next.js experience that reflects the sense of occasion guests expect from premium dining.",
    challenge:
      "For a fine dining restaurant, the first impression often happens long before a guest arrives. Maison Ombre needed a website that communicated its identity and dining atmosphere while making practical tasks, especially exploring the menu and reserving a table, feel natural and effortless.",
    approach:
      "I developed a visually restrained experience centered on elegant typography, atmospheric imagery, and intentional spacing. The layout gives the restaurant's story and cuisine room to breathe while maintaining clear navigation to essential information. Reservation-oriented interactions were presented through focused, responsive interfaces.",
    outcome:
      "A sophisticated restaurant website that extends the Maison Ombre atmosphere into the digital experience. Guests can explore the restaurant, discover its culinary identity, and navigate toward reservations through an interface designed around clarity and elegance.",
    deliverables: [
      "Responsive Next.js restaurant website",
      "Fine dining experience pages",
      "Digital menu presentation",
      "Reservation-focused interface",
      "Reusable frontend components",
    ],
    steps: [
      [
        "Capture",
        "Translate the restaurant's character, atmosphere, and culinary philosophy into a distinctive visual direction.",
      ],
      [
        "Develop",
        "Create elegant content layouts, menu presentations, and responsive reservation-oriented interfaces.",
      ],
      [
        "Perfect",
        "Refine typography, spacing, imagery, and interactive details to deliver a cohesive dining experience online.",
      ],
    ],
  },

  "velluna": {
    eyebrow: "Shopify · Beauty & Skincare",
    title: "Make discovering everyday beauty feel effortless.",
    intro:
      "A thoughtful beauty storefront that brings product discovery, modern aesthetics, and intuitive shopping into harmony.",
    image: "/images/projects/velluna.webp",
    tools: ["Shopify", "Liquid", "JavaScript", "CSS"],
    overview:
      "Velluna is a beauty and skincare store designed around accessible self-care and considered product experiences. The project focused on developing a visually inviting Shopify storefront that presents products clearly and makes exploring beauty essentials enjoyable. I created a responsive shopping experience that balances soft editorial styling with practical commerce functionality.",
    challenge:
      "Beauty shoppers often need more context than product imagery alone can provide. Ingredients, benefits, product details, and brand trust all influence purchasing decisions. Velluna needed a storefront that communicated these details clearly while maintaining a warm, polished visual identity and an uncomplicated shopping journey.",
    approach:
      "I built a Shopify storefront with product-focused layouts, organized collections, and clear information hierarchy. Soft visual treatments and responsive components help the brand feel approachable, while structured product details and prominent purchase actions keep the experience practical and easy to navigate.",
    outcome:
      "A cohesive beauty shopping experience that brings Velluna's products and brand personality together. The store provides customers with an intuitive way to browse, understand, and purchase products while giving the business a flexible foundation for future collections.",
    deliverables: [
      "Custom Shopify beauty storefront",
      "Product and collection templates",
      "Responsive mobile shopping experience",
      "Reusable theme sections",
      "Product information and purchase layouts",
    ],
    steps: [
      [
        "Define",
        "Understand the brand's visual personality, product categories, and the information shoppers need to make confident choices.",
      ],
      [
        "Build",
        "Develop a cohesive Shopify storefront with clear product presentation and intuitive collection browsing.",
      ],
      [
        "Refine",
        "Improve responsive layouts, product interactions, and visual consistency throughout the shopping experience.",
      ],
    ],
  },

  "wagefriday": {
    eyebrow: "Framer & Frameship · Music Commerce",
    title: "Bring the energy of the band into every interaction.",
    intro:
      "A bold merchandise experience that connects music, identity, and fan culture through a distinctive digital storefront.",
    image: "/images/projects/wagefriday.webp",
    tools: ["Framer", "Frameship", "Figma", "CSS"],
    overview:
      "WageFriday is a band merchandise store designed to extend the group's identity beyond its music. The project combines Framer's creative website capabilities with Frameship-powered commerce functionality to present merchandise through a visually expressive shopping experience. I built a storefront that reflects the band's personality while making products easy for fans to discover.",
    challenge:
      "Band merchandise is as much about identity and connection as it is about buying products. WageFriday needed a store that felt authentic to its music and community rather than a generic e-commerce template. At the same time, the experience had to make browsing products and moving toward checkout clear and intuitive.",
    approach:
      "I used Framer to develop an energetic, visually distinctive storefront with bold typography, merchandise-focused layouts, and expressive interactions. Frameship provided the commerce integration for the shopping experience, allowing the creative frontend to remain closely connected to the band's identity.",
    outcome:
      "A merchandise storefront that brings together the visual freedom of Framer and practical commerce functionality. The resulting experience gives WageFriday a distinctive platform for presenting merchandise and connecting with its audience.",
    deliverables: [
      "Custom Framer merchandise website",
      "Frameship commerce integration",
      "Merchandise product and collection layouts",
      "Responsive storefront experience",
      "Brand-focused interactive elements",
    ],
    steps: [
      [
        "Express",
        "Translate the band's identity and audience culture into a bold visual direction for the storefront.",
      ],
      [
        "Integrate",
        "Develop the Framer experience and connect merchandise shopping functionality through Frameship.",
      ],
      [
        "Launch",
        "Refine product presentation, responsive layouts, and shopping interactions for a consistent fan experience.",
      ],
    ],
  },

  "pondok": {
    eyebrow: "Next.js · Resort & Hospitality",
    title: "Bring the feeling of a Bali escape to the screen.",
    intro:
      "A serene resort discovery and booking experience inspired by the island's natural beauty and slower pace of living.",
    image: "/images/projects/pondok.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Pondok is a Bali resort booking experience designed to connect travelers with the island's distinctive hospitality and atmosphere. The website combines immersive destination presentation with clear accommodation information and an intuitive reservation journey. I developed a Next.js experience that communicates the calm, welcoming character of a tropical retreat.",
    challenge:
      "Travelers choosing a resort want to imagine the experience before making a reservation. Pondok needed to communicate atmosphere, comfort, and the appeal of its location while keeping room details and booking information accessible. The challenge was balancing an emotionally engaging presentation with practical usability.",
    approach:
      "I created an image-led website with natural visual tones, spacious layouts, and a relaxed content rhythm. Accommodation information, resort experiences, and reservation entry points were organized into clear sections. Responsive Next.js components help maintain a consistent experience whether visitors are browsing from a phone or a larger screen.",
    outcome:
      "An inviting digital resort experience that captures the atmosphere of a Bali getaway. The website gives travelers a clear way to explore accommodations, understand the resort offering, and move toward planning their stay.",
    deliverables: [
      "Responsive Next.js resort website",
      "Accommodation discovery pages",
      "Room and resort detail layouts",
      "Reservation-focused frontend",
      "Reusable hospitality UI components",
    ],
    steps: [
      [
        "Immerse",
        "Define a visual direction inspired by Bali's hospitality, natural surroundings, and relaxed atmosphere.",
      ],
      [
        "Develop",
        "Create immersive accommodation pages, clear resort information, and responsive booking-oriented layouts.",
      ],
      [
        "Refine",
        "Polish navigation, visual storytelling, and reservation entry points to make exploring the resort effortless.",
      ],
    ],
  },

  "nox-glitch": {
    eyebrow: "Shopify · Creator Merchandise",
    title: "Turn a creator's identity into something fans can wear.",
    intro:
      "A high-energy merchandise storefront built around gaming culture, creator personality, and the community behind the screen.",
    image: "/images/projects/nox-glitch.webp",
    tools: ["Shopify", "Liquid", "JavaScript", "CSS"],
    overview:
      "Nox Glitch is a gaming streamer's merchandise store created to connect a recognizable online personality with a dedicated fan community. The project focused on building a Shopify experience that reflects the creator's visual identity while providing a straightforward way to explore and purchase merchandise.",
    challenge:
      "Creator merchandise needs to feel like a natural extension of the personality fans already follow. Nox Glitch needed a storefront that embraced gaming culture, presented products with energy, and made shopping intuitive. The design had to stand apart from generic merchandise stores without introducing friction into the purchase journey.",
    approach:
      "I developed a bold Shopify storefront using high-contrast visual elements, expressive typography, and merchandise-focused product layouts. Collection navigation, product details, and purchase actions were structured for clarity, while responsive styling helped the experience retain its character across devices.",
    outcome:
      "A distinctive Shopify merchandise store that captures the Nox Glitch identity and gives fans a dedicated destination for official products. The storefront balances energetic visual expression with a clear, practical shopping experience.",
    deliverables: [
      "Custom Shopify merchandise storefront",
      "Creator-branded homepage",
      "Product and collection pages",
      "Responsive commerce layouts",
      "Reusable Shopify theme components",
    ],
    steps: [
      [
        "Capture",
        "Translate the creator's personality and gaming aesthetic into a recognizable merchandise store direction.",
      ],
      [
        "Build",
        "Develop high-impact Shopify layouts with organized merchandise presentation and clear shopping interactions.",
      ],
      [
        "Refine",
        "Polish responsive behavior, product details, and visual consistency to create a cohesive fan experience.",
      ],
    ],
  },

  "nadia-hawkins": {
    eyebrow: "Next.js · Author & E-commerce",
    title: "Give every story a place to begin.",
    intro:
      "A thoughtful digital home that brings an author's books, creative world, and connection with readers into one experience.",
    image: "/images/projects/nadia-hawkins.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    overview:
      "Nadia Hawkins is an author website and online store designed to bring literary storytelling and book discovery into a unified digital experience. The project creates a dedicated home for the author's work, personal identity, and book collection. I developed a responsive Next.js website that combines an editorial atmosphere with approachable shopping and content exploration.",
    challenge:
      "An author's website serves several purposes at once: introducing the person behind the stories, showcasing published work, connecting with readers, and supporting book sales. Nadia Hawkins needed an experience that brought these elements together without making the website feel crowded or overly commercial.",
    approach:
      "I created an editorial-inspired interface with carefully structured book presentations, engaging author content, and clear navigation between stories and shopping. Reusable Next.js components and responsive layouts keep the design consistent while allowing individual books and content sections to maintain their own identity.",
    outcome:
      "An elegant author website that gives Nadia Hawkins a cohesive digital presence. The experience helps readers discover books, connect with the author's story, and explore purchasing options through a carefully considered interface.",
    deliverables: [
      "Custom Next.js author website",
      "Book showcase and detail pages",
      "Author biography and content sections",
      "Storefront and purchase-oriented interfaces",
      "Responsive reusable components",
    ],
    steps: [
      [
        "Discover",
        "Understand the author's voice, catalog, and relationship with readers to establish a meaningful digital direction.",
      ],
      [
        "Create",
        "Develop editorial-inspired pages, book presentations, and intuitive paths between reading and shopping.",
      ],
      [
        "Polish",
        "Refine visual storytelling, responsive layouts, and interactions for a cohesive author experience.",
      ],
    ],
  },
} as const;
