import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import type {
  ContactItem,
  SocialLink,
} from "../types/portfolio";

export const contactInfo: ContactItem[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    text: "h.o.omondi15@gmail.com",
    href: "mailto:h.o.omondi15@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    text: "+2547 26436088",
    href: "tel:+254726436088",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    text: "Chat on WhatsApp",
    href: "https://wa.me/254726436088",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    text: "Nairobi, Kenya",
    href: "#contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sirhillary-tech-13827a21b",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sir-hillary",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100075875217577",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/254726436088",
  },
];

export const websiteConfig = {
  name: "Hotech",
  location: "Nairobi, Kenya",
} as const;