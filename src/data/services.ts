import {
  Bot,
  Database,
  LayoutDashboard,
  Workflow,
  Code2,
  Server,
} from "lucide-react";

import type { Service } from "../types/portfolio";

export const services: Service[] = [
  {
    id: "business-systems",
    title: "Business Web Systems",
    description:
      "Custom web applications that centralize information, simplify operations, and replace fragmented manual processes.",
    features: [
      "Management systems",
      "Business dashboards",
      "Internal tools",
      "Custom workflows",
    ],
    category: "Digital Systems",
    icon: LayoutDashboard,
  },

  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Turn repetitive tasks and manual workflows into streamlined digital processes that save time and reduce operational friction.",
    features: [
      "Workflow automation",
      "API integrations",
      "Notifications",
      "Data synchronization",
    ],
    category: "Automation",
    icon: Workflow,
  },

  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description:
      "Practical AI features integrated into business systems where they can genuinely improve productivity and decision-making.",
    features: [
      "AI assistants",
      "Content automation",
      "Intelligent search",
      "AI integrations",
    ],
    category: "AI",
    icon: Bot,
  },

  {
    id: "backend-systems",
    title: "Backend & API Systems",
    description:
      "Reliable backend services and APIs that power secure, maintainable, and scalable web applications.",
    features: [
      "REST APIs",
      "Authentication",
      "Database design",
      "Third-party integrations",
    ],
    category: "Engineering",
    icon: Server,
  },

  {
    id: "data-systems",
    title: "Data & Database Solutions",
    description:
      "Structured data systems designed to make business information easier to manage, access, and use.",
    features: [
      "PostgreSQL",
      "MongoDB",
      "Data modeling",
      "Reporting systems",
    ],
    category: "Engineering",
    icon: Database,
  },

  {
    id: "system-modernization",
    title: "System Modernization",
    description:
      "Improve existing applications by removing technical debt, modernizing architecture, and improving performance and maintainability.",
    features: [
      "Codebase refactoring",
      "Architecture improvements",
      "Performance optimization",
      "TypeScript migration",
    ],
    category: "Engineering",
    icon: Code2,
  },
];