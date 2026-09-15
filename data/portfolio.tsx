import { type ComponentType, type ReactNode } from "react";
import { Bot, Compass, LineChart, Sparkles } from "lucide-react";

// --- PROJECTS ---
export type FlowNode = {
  title: string;
  subtitle?: string;
  highlight?: boolean;
};

export type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  skills?: string[];
  features?: string[];
  keyFeatures?: string[];
  flow?: (FlowNode | FlowNode[])[];
};

export const PROJECTS: Project[] = [
  {
    id: "real-estate-platform",
    icon: Compass,
    iconLabel: "Next.js + TypeScript",
    title: "Real Estate Platform with NextAuth & Google Maps",
    description: "Built a role-based real estate platform where agents can register and manage properties, admins control listings and users, and customers explore property details, files, maps, and saved properties. Includes search, filters, pagination, and Google Maps integration.",
    meta: "Next.js 15 | React 18 | TypeScript | Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1024&auto=format&fit=crop",
    imageAlt: "Real Estate Platform",
    skills: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "NextAuth.js", "Zod"],
    features: [
      "Role-Based Access Control",
      "Google Maps Integration",
      "NextAuth.js & Google OAuth",
      "React Hook Form & Zod",
    ],
    keyFeatures: [
      "Property Pagination",
      "Advanced Search/Filters",
      "Image Uploads",
      "Saved Properties"
    ],
    flow: [
      { title: "User / Agent", subtitle: "NextAuth Login" },
      { title: "Next.js Server Actions", subtitle: "Data Mutations", highlight: true },
      { title: "PostgreSQL", subtitle: "Database via ORM" }
    ]
  },
  {
    id: "medication-tracker",
    icon: LineChart,
    iconLabel: "React + WhatsApp",
    title: "WhatsApp Medication Adherence Tracker",
    description: "Built a responsive React.js and Tailwind CSS caregiver dashboard for managing senior profiles and medication schedules, with the core setup flow completed in under two minutes. Supports 500+ reminders/month with 98% on-time delivery.",
    meta: "React.js | Tailwind CSS | WhatsApp Cloud API | UChat",
    imageRatio: 1024 / 768,
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=1024&auto=format&fit=crop",
    imageAlt: "Medication Dashboard",
    skills: ["React.js", "Tailwind CSS", "WhatsApp API", "UChat", "State Management"],
    features: [
      "Responsive Caregiver Dashboard",
      "2-Minute Setup Flow",
      "WhatsApp Scheduled Reminders",
      "Yes/No Response Capture",
    ],
    keyFeatures: [
      "500+ Reminders/Month",
      "98% Delivery Rate",
      "Patient Profiles",
      "Medication Schedules"
    ],
    flow: [
      { title: "Caregiver Dashboard", subtitle: "React.js UI" },
      { title: "Scheduling API", subtitle: "Webhook Triggers", highlight: true },
      { title: "UChat / WhatsApp", subtitle: "Patient Reminders" }
    ]
  },
  {
    id: "hospital-lead-gen",
    icon: Sparkles,
    iconLabel: "Next.js + SEO",
    title: "Hospital Lead Generation & Services Website",
    description: "Designed and developed a responsive Next.js and Tailwind CSS website with service pages, lead forms, SEO, analytics, and performance optimization. Increased inbound patient leads by 35% within 3 months.",
    meta: "Next.js | Tailwind CSS | SEO | Google Analytics",
    imageRatio: 1024 / 768,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1024&auto=format&fit=crop",
    imageAlt: "Hospital Website",
    skills: ["Next.js", "Tailwind CSS", "SEO Optimization", "Google Analytics", "Performance"],
    features: [
      "High-Performance Rendering",
      "Optimized SEO Structure",
      "Lead Generation Forms",
      "Google Analytics Tracking",
    ],
    keyFeatures: [
      "Responsive Layouts",
      "Service Pages",
      "35% Lead Increase",
      "Fast Core Web Vitals"
    ],
    flow: [
      { title: "Patient Search", subtitle: "Organic Google Traffic" },
      { title: "Next.js SSR Pages", subtitle: "Optimized Delivery", highlight: true },
      { title: "Lead Form API", subtitle: "CRM Integration" }
    ]
  },
  {
    id: "fleet-agent",
    icon: Sparkles,
    iconLabel: "n8n + OpenAI",
    title: "AI Fleet Management & Operations WhatsApp Agent",
    description: "Built an end-to-end WhatsApp conversational AI agent for fleet management. Orchestrates inspections, accident reporting, bookings, availability, scheduling, and roadside assistance. Highlights: tool calling, Microsoft Graph integration, multi-step validation, and API-write verification.",
    meta: "AI & Automation Engineer | n8n, OpenAI, WhatsApp API, MS Graph",
    imageRatio: 1024 / 768,
    image: "https://cdn.dribbble.com/userupload/46128964/file/b92b9d268dd928642ca94bd49e32923a.jpg?resize=752x497&vertical=center",
    imageAlt: "Fleet Management Agent",
    skills: ["n8n", "OpenAI GPT-4.1", "WhatsApp API", "MS Graph API", "Tool Calling"],
    features: [
      "Dynamic Tool Calling",
      "Multi-step State Management",
      "Strict Safety Guardrails",
      "Microsoft Graph Integration",
    ],
    keyFeatures: [
      "Multi-step Validation",
      "API Error Handling",
      "Automated Workflows",
      "Real-time Syncing"
    ],
    flow: [
      { title: "WhatsApp Input", subtitle: "Customer Message" },
      { title: "OpenAI GPT-4", subtitle: "Intent & Extraction" },
      { title: "n8n Sub-workflows", subtitle: "Logic & Validation", highlight: true },
      { title: "Microsoft Graph API", subtitle: "Booking & Storage" }
    ]
  },
  {
    id: "aesthetic-crm",
    icon: LineChart,
    iconLabel: "GHL + GPT-4",
    title: "Healthcare & Aesthetic Clinic Conversational AI Agent",
    description: "WhatsApp conversational AI system for a medical aesthetics clinic. Handles patient sync, lead qualification, booking, routing, payment checks, and CRM automation. Architecture: WhatsApp → AI Agent → GoHighLevel → Webhooks → Clinic API.",
    meta: "AI Automation & CRM Engineer | GPT-4, GoHighLevel, Webhooks",
    imageRatio: 1024 / 768,
    image: "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: "Aesthetic Clinic Agent",
    skills: ["GPT-4", "GoHighLevel", "WhatsApp", "Webhooks", "Custom APIs"],
    features: [
      "Lead Qualification",
      "Automated Booking",
      "Payment Verification",
      "CRM State Tracking",
    ],
    keyFeatures: [
      "GHL Integration",
      "Custom Webhooks",
      "Lead Routing",
      "Clinic API Sync"
    ],
    flow: [
      { title: "Lead/Patient Interaction", subtitle: "WhatsApp" },
      { title: "GoHighLevel Webhooks", subtitle: "Data Sync" },
      { title: "AI Agent", subtitle: "Qualification & Booking", highlight: true },
      { title: "Clinic API", subtitle: "DB Updates & Confirmation" }
    ]
  },
  {
    id: "multilingual-voice",
    icon: Bot,
    iconLabel: "Retell AI + Whisper",
    title: "Multilingual Voice AI Agent – Car Service Center",
    description: "Built a voice AI agent handling customer calls in English, Spanish, and German. Collects vehicle info, identifies service needs, stores data, handles human transfer, and sends WhatsApp confirmations. Flow: Call → Retell AI → n8n → APIs → Data.",
    meta: "AI Automation Engineer | Retell AI, n8n, Whisper API",
    imageRatio: 1024 / 768,
    image: "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
    imageAlt: "Voice AI Agent",
    skills: ["Retell AI", "n8n", "Whisper API", "WhatsApp", "External APIs"],
    features: [
      "Multilingual Support",
      "Voice to Text Processing",
      "Human Handoff Routing",
      "WhatsApp Follow-ups",
    ],
    keyFeatures: [
      "Retell AI Voice",
      "Whisper Transcription",
      "n8n Orchestration",
      "Data Storage"
    ],
    flow: [
      { title: "Customer Call", subtitle: "Multilingual Input" },
      { title: "Retell AI + Whisper", subtitle: "Voice to Text & Intent" },
      { title: "n8n Workflow Engine", subtitle: "Tool Execution & DB", highlight: true },
      { title: "WhatsApp API", subtitle: "Action Confirmation" }
    ]
  }
];


// --- EXPERIENCE ---
export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  slug?: string;
  brand?: string;
  description?: ReactNode;
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    company: "Digital Adventure",
    role: "AI Automation Engineer",
    period: "09/2023 – Present",
    brand: "#0a0a0a",
    description: (
      <div className="mt-3 flex flex-col gap-2 text-[14px] text-foreground/80 leading-snug">
        <ul className="list-disc pl-4 space-y-1">
          <li>Led the design and deployment of AI-driven conversational agents, voice agents, and workflow automations.</li>
          <li>Specialized in n8n, Zapier, UChat, WhatsApp API, and CRM integrations to automate sales, customer support, and business operations.</li>
        </ul>
      </div>
    ),
  },
  {
    company: "Digital Adventure",
    role: "Web Developer",
    period: "03/2024 – Present",
    brand: "#0a0a0a",
    description: (
      <div className="mt-3 flex flex-col gap-2 text-[14px] text-foreground/80 leading-snug">
        <ul className="list-disc pl-4 space-y-1">
          <li>Developed and maintained production web applications using <strong>React.js, Next.js, TypeScript, JavaScript</strong>, and <strong>REST APIs</strong>.</li>
          <li>Built frontend functionality using React Hooks, Redux Toolkit, form validation, and asynchronous operations.</li>
          <li>Integrated REST APIs, third-party services, webhooks, authentication systems, and external APIs.</li>
          <li>Diagnosed and resolved production issues involving React rendering, responsive behavior, and cross-browser compatibility.</li>
        </ul>
      </div>
    ),
  },
  {
    company: "Freelance",
    role: "Front-End Developer",
    period: "05/2023 – 03/2024",
    brand: "#1FB6CB",
    description: (
      <div className="mt-3 flex flex-col gap-2 text-[14px] text-foreground/80 leading-snug">
        <ul className="list-disc pl-4 space-y-1">
          <li>Designed and developed React.js and Next.js websites for small-business clients, handling requirements, UI development, and API integration.</li>
          <li>Built responsive, mobile-first interfaces from Figma designs with a focus on usability, performance, and accessibility.</li>
        </ul>
      </div>
    ),
  },
  {
    company: "Zignuts Technolab Pvt. Ltd",
    role: "Trainee Web Developer",
    period: "11/2022 – 05/2023",
    brand: "#f97316",
    description: (
      <div className="mt-3 flex flex-col gap-2 text-[14px] text-foreground/80 leading-snug">
        <ul className="list-disc pl-4 space-y-1">
          <li>Developed React.js applications and reusable frontend components using React, JavaScript, HTML, CSS, and REST APIs.</li>
          <li>Implemented forms, asynchronous data handling, dynamic UI functionality, and API integrations.</li>
          <li>Troubleshot issues across frontend rendering, API communication, and responsive layouts.</li>
        </ul>
      </div>
    ),
  },
];


// --- EDUCATION ---
export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  slug?: string;
};

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    school: "Parul Institute of Engineering & Technology, Vadodara",
    degree: "Bachelor Of Technology in Computer Science",
    period: "07/2019 – 04/2023",
  },
];


// --- SKILLS ---
export const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux",
  "AI Agents",
  "OpenAI GPT-4",
  "n8n",
  "Make.com",
  "WhatsApp API",
  "Python",
  "REST APIs",
  "Git",
];


// --- STACK CHIPS ---
export type Chip = {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

export const STACK_CHIPS: Chip[] = [
  { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
  { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
  { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
  { label: "JavaScript", slug: "javascript", bg: "#F7DF1E", fg: "#000000" },
  { label: "Tailwind", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
  { label: "OpenAI", slug: "openai", bg: "#412991", fg: "#ffffff", iconUrl: "https://openai.com/favicon.svg" },
  { label: "n8n", slug: "n8n", bg: "#FF6D5A", fg: "#ffffff" },
  { label: "Make", slug: "make", bg: "#FF5CFF", fg: "#ffffff" },
  { label: "Python", slug: "python", bg: "#3776AB", fg: "#ffffff" },
  { label: "WhatsApp", slug: "whatsapp", bg: "#25D366", fg: "#ffffff" },
  { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
];


// --- HOW I BUILD ---
export type BuildStep = {
  step: string;
  title: string;
  description: string;
};

export const HOW_I_BUILD_STEPS: BuildStep[] = [
  {
    step: "01",
    title: "Requirements",
    description: "Understand business logic & user needs",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Component design & state management strategy",
  },
  {
    step: "03",
    title: "UI/UX",
    description: "Responsive layouts with Tailwind & shadcn",
  },
  {
    step: "04",
    title: "Frontend",
    description: "React/Next.js implementation & hooks",
  },
  {
    step: "05",
    title: "Integration",
    description: "REST APIs, NextAuth & database ORMs",
  },
  {
    step: "06",
    title: "Validation",
    description: "Zod schemas & React Hook Form",
  },
  {
    step: "07",
    title: "Testing",
    description: "Cross-browser & responsive checks",
  },
  {
    step: "08",
    title: "Deploy",
    description: "Vercel deployment & performance optimization",
  },
];


// --- POLAROIDS ---
export type Polaroid = {
  id: string;
  rotate: number;
  image?: string;
};

export const POLAROID_PHOTOS: Polaroid[] = [
  { id: "a", rotate: -8, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop" },
  { id: "b", rotate: 6, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=400&auto=format&fit=crop" },
  { id: "c", rotate: -4, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" },
  { id: "d", rotate: 7, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" },
  { id: "e", rotate: -6, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop" },
  { id: "f", rotate: 5, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" },
];
