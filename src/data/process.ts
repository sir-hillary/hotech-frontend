import {
  Search,
  Workflow,
  Lightbulb,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";

import type { ProcessStep } from "../types/portfolio";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by understanding your business, the problem you're facing, and how the current workflow operates.",
    icon: Search,
  },

  {
    step: "02",
    title: "Map the Workflow",
    description:
      "We identify repetitive tasks, bottlenecks, disconnected processes, and opportunities where technology can make work simpler.",
    icon: Workflow,
  },

  {
    step: "03",
    title: "Design the Solution",
    description:
      "We turn the requirements into a clear digital solution, defining the user experience, system architecture, and technical approach.",
    icon: Lightbulb,
  },

  {
    step: "04",
    title: "Build",
    description:
      "We develop the system using modern technologies with a focus on reliability, maintainability, security, and performance.",
    icon: Code2,
  },

  {
    step: "05",
    title: "Launch",
    description:
      "We test, deploy, and help you transition from the old way of working to the new digital workflow.",
    icon: Rocket,
  },

  {
    step: "06",
    title: "Improve",
    description:
      "After launch, we monitor the system, gather feedback, and improve the solution as your needs evolve.",
    icon: RefreshCw,
  },
];