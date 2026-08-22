import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  completed: boolean;
  demoUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface ContactItem {
  label: string;
  text: string;
  href: string;
  icon: IconType;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}
