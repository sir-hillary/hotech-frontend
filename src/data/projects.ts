import smartGPT from "../assets/projects/smartgpt.webp";
import smartBlog from "../assets/projects/smartblog.webp";
import greenCart from "../assets/projects/greencart.webp";
import mediTrack from "../assets/projects/meditrack.webp";
import kuzaCareer from "../assets/projects/kuzacareer.webp";

import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "smartgpt",
    title: "SmartGPT AI Assistant",
    description:
      "An AI-powered web application for generating and interacting with text and image content through a modern conversational interface.",
    image: smartGPT,
    category: "AI System",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI API",
    ],
    completed: true,
    featured: true,
    demoUrl: "https://smart-gpt-swart.vercel.app",
    repositoryUrl: "https://github.com/sir-hillary/SmartGPT.git",
  },

  {
    id: "smartblog",
    title: "SmartBlog",
    description:
      "An AI-assisted publishing platform designed to simplify content creation and help users create and manage blog content more efficiently.",
    image: smartBlog,
    category: "Content System",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AI Integration",
    ],
    completed: true,
    featured: true,
    demoUrl: "https://smartblog-inky.vercel.app",
    repositoryUrl: "https://github.com/sir-hillary/SMARTBLOG.git",
  },

  {
    id: "greencart",
    title: "GreenCart",
    description:
      "A full-stack e-commerce system designed to streamline online grocery ordering, product management, and payments.",
    image: greenCart,
    category: "Business System",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    completed: true,
    demoUrl: "https://greencartecommerce.vercel.app",
    repositoryUrl:
      "https://github.com/sir-hillary/greencart-ecommerce-web-app",
  },

  {
    id: "meditrack",
    title: "MediTrack",
    description:
      "A pharmacy management system that helps staff manage inventory, sales, transactions, and operational insights from a centralized dashboard.",
    image: mediTrack,
    category: "Management System",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],
    completed: true,
    featured: true,
    demoUrl: "https://jackypharmaceuticals.vercel.app",
    repositoryUrl:
      "https://github.com/sir-hillary/meditrack",
  },

  {
    id: "kuzacareer",
    title: "KuzaCareer AI",
    description:
      "An AI-powered resume platform designed to simplify CV creation and provide job seekers with a faster path from career information to a professional resume.",
    image: kuzaCareer,
    category: "AI System",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "AI Integration",
      "PDF Generation",
    ],
    completed: false,
    demoUrl: "https://kuzacareer.vercel.app",
    repositoryUrl:
      "https://github.com/sir-hillary/PERFECTME-RESUME-BUILDER",
  },
];