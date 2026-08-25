import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import logoLight from "../../assets/logo_light.png";
import logoDark from "../../assets/logo_dark.png";

import { brand } from "../../data/brand";
import { services } from "../../data/services";
import { socialLinks } from "../../config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // =========================================================
  // THEME STATE
  // =========================================================

  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const htmlElement = document.documentElement;

    const updateTheme = () => {
      setIsDarkTheme(htmlElement.classList.contains("dark"));
    };

    // Check immediately
    updateTheme();

    // Watch for changes to the <html> class
    const observer = new MutationObserver(updateTheme);

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/services" },
    { name: "Projects", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-[var(--hotech-border)]
        bg-[var(--hotech-surface)]
        text-[var(--hotech-text)]
      "
    >
      {/* =====================================================
          SUBTLE BRAND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-32 left-1/2
          h-64 w-96
          -translate-x-1/2
          rounded-full
          bg-[var(--hotech-accent)]/5
          blur-3xl
        "
      />

      <div
        className="
          relative mx-auto
          max-w-7xl
          px-4 py-14
          sm:px-6
          lg:px-8 lg:py-16
        "
      >
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div
          className="
            grid grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-5">
            <div className="max-w-md">
              <Link
                to="/"
                aria-label={`${brand.name} home`}
                className="
                  inline-flex rounded-lg
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[var(--hotech-surface)]
                "
              >
                {/* =================================================
                    THEME-AWARE LOGO
                ================================================== */}

                <img
                  src={isDarkTheme ? logoDark : logoLight}
                  alt={brand.name}
                  className="
                    block
                    h-9
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-[1.03]
                  "
                />
              </Link>

              {/* Tagline */}

              <p
                className="
                  mt-5
                  text-base font-medium
                  text-[var(--hotech-text)]
                "
              >
                {brand.tagline}
              </p>

              {/* Positioning */}

              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm leading-7
                  text-[var(--hotech-text-muted)]
                "
              >
                {brand.positioning}
              </p>

              {/* Belief */}

              <div
                className="
                  mt-6
                  border-l-2
                  border-[var(--hotech-accent)]
                  pl-4
                "
              >
                <p
                  className="
                    text-sm italic leading-6
                    text-[var(--hotech-text-muted)]
                  "
                >
                  "{brand.belief}"
                </p>
              </div>

              {/* Social Links */}

              {socialLinks.length > 0 && (
                <div className="mt-7 flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="
                          group
                          rounded-lg
                          border border-[var(--hotech-border)]
                          bg-[var(--hotech-bg)]
                          p-2.5
                          text-[var(--hotech-text-muted)]
                          transition-all duration-200
                          hover:-translate-y-0.5
                          hover:border-[var(--hotech-accent)]/40
                          hover:bg-[var(--hotech-accent)]/10
                          hover:text-[var(--hotech-accent)]
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[var(--hotech-focus)]
                        "
                      >
                        <Icon
                          size={17}
                          aria-hidden="true"
                          className="
                            transition-transform duration-200
                            group-hover:scale-105
                          "
                        />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div className="lg:col-span-2">
            <h3
              className="
                mb-5
                text-sm font-semibold
                text-[var(--hotech-text)]
              "
            >
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="
                      group inline-flex
                      items-center gap-2
                      text-sm
                      text-[var(--hotech-text-muted)]
                      transition-colors duration-200
                      hover:text-[var(--hotech-accent)]
                    "
                  >
                    <span
                      className="
                        h-1 w-1 rounded-full
                        bg-[var(--hotech-accent)]
                        opacity-0
                        transition-opacity duration-200
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        transition-transform duration-200
                        group-hover:translate-x-0.5
                      "
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div className="lg:col-span-2">
            <h3
              className="
                mb-5
                text-sm font-semibold
                text-[var(--hotech-text)]
              "
            >
              What We Build
            </h3>

            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => {
                const serviceLabel =
                  "name" in service && typeof service.name === "string"
                    ? service.name
                    : "title" in service && typeof service.title === "string"
                      ? service.title
                      : "Service";

                const serviceHref =
                  "href" in service && typeof service.href === "string"
                    ? service.href
                    : "#";

                return (
                  <li key={serviceHref === "#" ? serviceLabel : serviceHref}>
                    <a
                      href={serviceHref}
                      className="
                        group inline-flex
                        items-center gap-2
                        text-sm
                        text-[var(--hotech-text-muted)]
                        transition-colors duration-200
                        hover:text-[var(--hotech-accent)]
                      "
                    >
                      <span
                        className="
                          h-1 w-1 rounded-full
                          bg-[var(--hotech-accent)]
                          opacity-0
                          transition-opacity duration-200
                          group-hover:opacity-100
                        "
                      />

                      <span
                        className="
                          transition-transform duration-200
                          group-hover:translate-x-0.5
                        "
                      >
                        {serviceLabel}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="lg:col-span-3">
            <h3
              className="
                mb-5
                text-sm font-semibold
                text-[var(--hotech-text)]
              "
            >
              Let's Work Together
            </h3>

            <p
              className="
                mb-5
                text-sm leading-6
                text-[var(--hotech-text-muted)]
              "
            >
              Have a repetitive process, business problem, or digital idea worth
              solving?
            </p>

            <Link
              to="/contact"
              className="
                group inline-flex
                items-center gap-2
                rounded-xl
                bg-[var(--hotech-accent)]
                px-4 py-2.5
                text-sm font-semibold
                text-white
                shadow-md
                shadow-[var(--hotech-accent)]/20
                transition-all duration-200
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-[var(--hotech-accent)]/30
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--hotech-focus)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--hotech-surface)]
              "
            >
              Start a Conversation
              <ArrowUpRight
                aria-hidden="true"
                className="
                  h-4 w-4
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

            {/* Contact details */}

            <div className="mt-6 space-y-3">
              <a
                href="mailto:h.o.omondi15@gmail.com"
                className="
                  flex items-center gap-3
                  text-sm
                  text-[var(--hotech-text-muted)]
                  transition-colors
                  hover:text-[var(--hotech-accent)]
                "
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>h.o.omondi15@gmail.com</span>
              </a>

              <div
                className="
                  flex items-center gap-3
                  text-sm
                  text-[var(--hotech-text-muted)]
                "
              >
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND PRINCIPLES
        ====================================================== */}

        <div
          className="
            mt-14
            grid grid-cols-1
            gap-4
            border-y
            border-[var(--hotech-border)]
            py-7
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {brand.principles.map((principle) => (
            <div key={principle.title}>
              <h4
                className="
                  text-sm font-semibold
                  text-[var(--hotech-text)]
                "
              >
                {principle.title}
              </h4>

              <p
                className="
                  mt-1.5
                  text-xs leading-5
                  text-[var(--hotech-text-muted)]
                "
              >
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex flex-col
            gap-5
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-xs
              text-[var(--hotech-text-muted)]
            "
          >
            © {currentYear}{" "}
            <span
              className="
                font-semibold
                text-[var(--hotech-text)]
              "
            >
              {brand.name}
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  text-xs
                  text-[var(--hotech-text-muted)]
                  transition-colors
                  hover:text-[var(--hotech-accent)]
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL BRAND LINE
        ====================================================== */}

        <div className="mt-5 text-center">
          <p
            className="
              text-[11px]
              tracking-wide
              text-[var(--hotech-text-muted)]/60
            "
          >
            {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
