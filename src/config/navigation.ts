import type { NavItem } from "../types/navigation";

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    type: "route",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    type: "route",
  },
  {
    id: "projects",
    label: "Projects",
    path: "/portfolio",
    type: "route",
  },
  {
    id: "services",
    label: "Solutions",
    path: "/services",
    type: "route",
  },
  {
    id: "software",
    label: "Software Solutions",
    type: "dropdown",
    children: [
      {
        id: "biometrics",
        label: "Biometrics",
        href: "https://biometric.kemrut.com",
        external: true,
      },
      {
        id: "microfinance",
        label: "Microfinance",
        href: "https://kss.kemrut.com",
        external: true,
      },
    ],
  },
];
