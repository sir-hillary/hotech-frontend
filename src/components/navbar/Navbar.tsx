import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo_light from "../../assets/logo_light.png";
import logo_dark from "../../assets/logo_dark.png";
import { navItems } from "../../config/navigation";

const Navbar = () => {
  const location = useLocation();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;

    const savedTheme = localStorage.getItem("hotech-theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  /*
   * Theme-aware logo
   *
   * Dark mode  → light logo
   * Light mode → dark logo
   */
  const currentLogo = isDark ? logo_dark : logo_light;

  /* -------------------------------------------------------
     Scroll state
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     Close navigation when route changes
  ------------------------------------------------------- */

  useEffect(() => {
    setIsOpen(false);
    setIsSoftwareOpen(false);
  }, [location.pathname]);

  /* -------------------------------------------------------
     Theme management
  ------------------------------------------------------- */

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);

    localStorage.setItem(
      "hotech-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  /* -------------------------------------------------------
     Keyboard / outside click handling
  ------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSoftwareOpen(false);

        if (isOpen) {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !(
          event.target instanceof Node &&
          dropdownRef.current.contains(event.target)
        )
      ) {
        setIsSoftwareOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /* -------------------------------------------------------
     Mobile body lock
  ------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* -------------------------------------------------------
     Helpers
  ------------------------------------------------------- */

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsSoftwareOpen(false);
  };

  const handleDropdownKeyDown = (event) => {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      setIsSoftwareOpen(true);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsSoftwareOpen(false);
    }
  };

  const handleMobileMenuKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? `
              border-b border-[var(--hotech-border)]
              bg-[var(--hotech-surface)]/90
              py-2.5
              shadow-lg
              shadow-black/5
              backdrop-blur-xl
            `
            : "bg-transparent py-4"
        }
      `}
    >
      <nav
        aria-label="Primary navigation"
        className="
          mx-auto flex max-w-7xl
          items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* ==================================================
            BRAND
        ================================================== */}

        <Link
          to="/"
          aria-label="Hotech home"
          onClick={closeMenu}
          className="
            group shrink-0 rounded-lg
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--hotech-focus)]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[var(--hotech-bg)]
          "
        >
          <img
            src={currentLogo}
            alt="Hotech"
            className="
              h-8 w-auto max-w-[160px]
              object-contain
              transition-all duration-300
              group-hover:scale-[1.04]
              sm:h-9
            "
          />
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div
                  key={item.id}
                  ref={dropdownRef}
                  className="relative"
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isSoftwareOpen}
                    onClick={() =>
                      setIsSoftwareOpen((previous) => !previous)
                    }
                    onKeyDown={handleDropdownKeyDown}
                    onMouseEnter={() =>
                      setIsSoftwareOpen(true)
                    }
                    className={`
                      group relative inline-flex
                      items-center gap-1.5
                      rounded-lg px-3.5 py-2
                      text-sm font-medium
                      transition-colors
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--hotech-focus)]
                      ${
                        isSoftwareOpen
                          ? "text-[var(--hotech-accent)]"
                          : `
                            text-[var(--hotech-text-muted)]
                            hover:text-[var(--hotech-text)]
                          `
                      }
                    `}
                  >
                    {item.label}

                    <ChevronDown
                      aria-hidden="true"
                      className={`
                        h-4 w-4
                        transition-transform duration-200
                        ${
                          isSoftwareOpen
                            ? `
                              rotate-180
                              text-[var(--hotech-accent)]
                            `
                            : "opacity-60"
                        }
                      `}
                    />
                  </button>

                  {/* Dropdown */}

                  <div
                    role="menu"
                    aria-hidden={!isSoftwareOpen}
                    onMouseEnter={() =>
                      setIsSoftwareOpen(true)
                    }
                    onMouseLeave={() =>
                      setIsSoftwareOpen(false)
                    }
                    className={`
                      absolute left-0 top-full w-64 pt-2
                      origin-top-left
                      transition-all duration-200
                      ${
                        isSoftwareOpen
                          ? `
                            visible
                            translate-y-0
                            opacity-100
                          `
                          : `
                            invisible
                            pointer-events-none
                            -translate-y-2
                            opacity-0
                          `
                      }
                    `}
                  >
                    <div
                      className="
                        overflow-hidden rounded-xl
                        border border-[var(--hotech-border)]
                        bg-[var(--hotech-surface)]
                        p-1.5
                        shadow-xl
                        shadow-black/10
                        backdrop-blur-xl
                      "
                    >
                      {/* Small brand accent */}

                      <div
                        aria-hidden="true"
                        className="
                          mx-3 mb-1 mt-1
                          h-px
                          bg-gradient-to-r
                          from-[var(--hotech-accent)]
                          via-[var(--hotech-secondary)]
                          to-transparent
                          opacity-50
                        "
                      />

                      {item.children.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          target={
                            child.external
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            child.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          role="menuitem"
                          onClick={() =>
                            setIsSoftwareOpen(false)
                          }
                          className="
                            group/item
                            flex items-center
                            justify-between
                            rounded-lg
                            px-3 py-2.5
                            text-sm font-medium
                            text-[var(--hotech-text-muted)]
                            transition-all
                            hover:bg-[var(--hotech-accent)]/10
                            hover:text-[var(--hotech-accent)]
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-[var(--hotech-focus)]
                          "
                        >
                          <span>{child.label}</span>

                          {child.external && (
                            <ExternalLink
                              aria-hidden="true"
                              className="
                                h-3.5 w-3.5
                                opacity-50
                                transition-all
                                group-hover/item:translate-x-0.5
                                group-hover/item:-translate-y-0.5
                                group-hover/item:opacity-100
                              "
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `
                  group relative
                  rounded-lg
                  px-3.5 py-2
                  text-sm font-medium
                  transition-colors
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                  ${
                    isActive
                      ? `
                        font-semibold
                        text-[var(--hotech-accent)]
                      `
                      : `
                        text-[var(--hotech-text-muted)]
                        hover:text-[var(--hotech-text)]
                      `
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        inset-x-3.5
                        -bottom-0.5
                        h-0.5
                        origin-center
                        rounded-full
                        bg-[var(--hotech-accent)]
                        transition-transform duration-200
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* ==================================================
            DESKTOP ACTIONS
        ================================================== */}

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              rounded-lg p-2
              text-[var(--hotech-text-muted)]
              transition-all
              hover:bg-[var(--hotech-accent)]/10
              hover:text-[var(--hotech-accent)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--hotech-focus)]
            "
          >
            {isDark ? (
              <Sun
                aria-hidden="true"
                className="h-5 w-5"
              />
            ) : (
              <Moon
                aria-hidden="true"
                className="h-5 w-5"
              />
            )}
          </button>

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
              active:translate-y-0
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--hotech-focus)]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[var(--hotech-bg)]
            "
          >
            <span>Build Your System</span>

            <ExternalLink
              aria-hidden="true"
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* ==================================================
            MOBILE ACTIONS
        ================================================== */}

        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              rounded-lg p-2
              text-[var(--hotech-text-muted)]
              transition-colors
              hover:bg-[var(--hotech-accent)]/10
              hover:text-[var(--hotech-accent)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--hotech-focus)]
            "
          >
            {isDark ? (
              <Sun
                aria-hidden="true"
                className="h-5 w-5"
              />
            ) : (
              <Moon
                aria-hidden="true"
                className="h-5 w-5"
              />
            )}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="
              rounded-lg p-2
              text-[var(--hotech-text)]
              transition-colors
              hover:bg-[var(--hotech-accent)]/10
              hover:text-[var(--hotech-accent)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--hotech-focus)]
            "
          >
            <Menu
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
        </div>
      </nav>

      {/* ====================================================
          MOBILE NAVIGATION
      ==================================================== */}

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleMobileMenuKeyDown}
        className={`
          fixed inset-0 z-50 lg:hidden
          ${
            isOpen
              ? "visible"
              : "invisible pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`
            absolute inset-0
            bg-black/60
            backdrop-blur-sm
            transition-opacity duration-300
            ${
              isOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* Drawer */}

        <aside
          className={`
            absolute right-0 top-0
            flex h-full
            w-[min(88vw,380px)]
            flex-col
            border-l
            border-[var(--hotech-border)]
            bg-[var(--hotech-surface)]
            shadow-2xl
            transition-transform duration-300 ease-out
            ${
              isOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          {/* Drawer Header */}

          <div
            className="
              flex items-center
              justify-between
              border-b
              border-[var(--hotech-border)]
              px-5 py-4
            "
          >
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Hotech home"
              className="
                rounded-lg
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--hotech-focus)]
              "
            >
              <img
                src={currentLogo}
                alt="Hotech"
                className="
                  h-7 w-auto max-w-[150px]
                  object-contain
                  transition-all duration-200
                "
              />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="
                rounded-lg p-2
                text-[var(--hotech-text-muted)]
                transition-colors
                hover:bg-[var(--hotech-accent)]/10
                hover:text-[var(--hotech-accent)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--hotech-focus)]
              "
            >
              <X
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>
          </div>

          {/* Mobile Navigation */}

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setIsSoftwareOpen(
                            (previous) => !previous
                          )
                        }
                        aria-expanded={isSoftwareOpen}
                        className="
                          flex w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-3.5 py-3
                          text-left
                          text-sm font-medium
                          text-[var(--hotech-text)]
                          transition-colors
                          hover:bg-[var(--hotech-accent)]/10
                          hover:text-[var(--hotech-accent)]
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[var(--hotech-focus)]
                        "
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          aria-hidden="true"
                          className={`
                            h-4 w-4
                            transition-transform duration-200
                            ${
                              isSoftwareOpen
                                ? `
                                  rotate-180
                                  text-[var(--hotech-accent)]
                                `
                                : "opacity-60"
                            }
                          `}
                        />
                      </button>

                      <div
                        className={`
                          grid
                          transition-all
                          duration-200
                          ${
                            isSoftwareOpen
                              ? `
                                mt-1
                                mb-2
                                grid-rows-[1fr]
                                opacity-100
                              `
                              : `
                                grid-rows-[0fr]
                                opacity-0
                              `
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              ml-3
                              space-y-1
                              border-l-2
                              border-[var(--hotech-border)]
                              pl-3
                            "
                          >
                            {item.children.map(
                              (child) => (
                                <a
                                  key={child.id}
                                  href={child.href}
                                  target={
                                    child.external
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    child.external
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  onClick={closeMenu}
                                  className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    px-3 py-2.5
                                    text-sm
                                    font-medium
                                    text-[var(--hotech-text-muted)]
                                    transition-colors
                                    hover:bg-[var(--hotech-accent)]/10
                                    hover:text-[var(--hotech-accent)]
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[var(--hotech-focus)]
                                  "
                                >
                                  <span>
                                    {child.label}
                                  </span>

                                  {child.external && (
                                    <ExternalLink
                                      aria-hidden="true"
                                      className="
                                        h-3.5 w-3.5
                                        opacity-60
                                      "
                                    />
                                  )}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) => `
                      block
                      rounded-xl
                      px-3.5 py-3
                      text-sm
                      transition-colors
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--hotech-focus)]
                      ${
                        isActive
                          ? `
                            bg-[var(--hotech-accent)]/10
                            font-semibold
                            text-[var(--hotech-accent)]
                          `
                          : `
                            font-medium
                            text-[var(--hotech-text)]
                            hover:bg-[var(--hotech-accent)]/10
                            hover:text-[var(--hotech-accent)]
                          `
                      }
                    `}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Mobile CTA */}

          <div
            className="
              border-t
              border-[var(--hotech-border)]
              p-4
            "
          >
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                group
                flex w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[var(--hotech-accent)]
                px-4 py-3
                text-sm font-semibold
                text-white
                shadow-md
                shadow-[var(--hotech-accent)]/20
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-[var(--hotech-accent)]/30
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--hotech-focus)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--hotech-bg)]
              "
            >
              <span>Build Your System</span>

              <ExternalLink
                aria-hidden="true"
                className="
                  h-4 w-4
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;