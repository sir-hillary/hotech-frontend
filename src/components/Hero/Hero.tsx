import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import { brand } from "../../data/brand";

const Hero = () => {
  const capabilities = [
    {
      icon: Code2,
      label: "Custom Web Systems",
    },
    {
      icon: Zap,
      label: "Workflow Automation",
    },
    {
      icon: Layers3,
      label: "Scalable Architecture",
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[var(--hotech-bg)]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Primary glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-16rem]
            h-[36rem]
            w-[36rem]
            -translate-x-1/2
            rounded-full
            bg-[var(--hotech-accent)]/10
            blur-[120px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            -left-32
            top-1/3
            h-72
            w-72
            rounded-full
            bg-[var(--hotech-secondary)]/10
            blur-[100px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-[var(--hotech-accent)]/10
            blur-[110px]
          "
        />

        {/* Subtle technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(var(--hotech-text)_1px,transparent_1px),linear-gradient(90deg,var(--hotech-text)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-[var(--hotech-bg)]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-4
          pb-20
          pt-28
          sm:px-6
          lg:px-8
          lg:pb-24
          lg:pt-32
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT — BRAND MESSAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Brand eyebrow */}

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mb-6
                inline-flex
                max-w-full
                items-center
                gap-2.5
                rounded-full
                border
                border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]/70
                px-3.5
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-[var(--hotech-text-muted)]
                shadow-sm
                backdrop-blur-md
              "
            >
              <span
                aria-hidden="true"
                className="
                  relative
                  flex
                  h-2
                  w-2
                  shrink-0
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[var(--hotech-accent)]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--hotech-accent)]
                  "
                />
              </span>

              <span className="truncate">
                {brand.tagline}
              </span>
            </motion.div>

            {/* Main headline */}

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-[var(--hotech-text)]
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Build smarter.
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[var(--hotech-accent)]
                  via-[var(--hotech-secondary)]
                  to-[var(--hotech-accent)]
                  bg-clip-text
                  pb-2
                  text-transparent
                "
              >
                Work simpler.
              </span>
            </motion.h1>

            {/* Positioning */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-[var(--hotech-text-muted)]
                sm:text-lg
                sm:leading-8
              "
            >
              {brand.positioning}
            </motion.p>

            {/* Capabilities */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="
                mt-7
                flex
                flex-wrap
                gap-x-5
                gap-y-3
              "
            >
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[var(--hotech-text-muted)]
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        text-[var(--hotech-accent)]
                      "
                    />

                    {item.label}
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--hotech-accent)]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[var(--hotech-accent)]/20
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-[var(--hotech-accent)]/30
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[var(--hotech-bg)]
                "
              >
                Build Your System

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/portfolio"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[var(--hotech-border)]
                  bg-[var(--hotech-surface)]/60
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[var(--hotech-text)]
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[var(--hotech-accent)]/40
                  hover:bg-[var(--hotech-accent)]/5
                  hover:text-[var(--hotech-accent)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                "
              >
                Explore Our Work

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </motion.div>

            {/* Brand belief */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="
                mt-8
                max-w-xl
                border-l-2
                border-[var(--hotech-accent)]/40
                pl-4
                text-sm
                italic
                leading-6
                text-[var(--hotech-text-muted)]
              "
            >
              "{brand.belief}"
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — SYSTEM VISUALIZATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="
              relative
              mx-auto
              w-full
              max-w-xl
            "
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-10
                rounded-[2rem]
                bg-[var(--hotech-accent)]/15
                blur-3xl
              "
            />

            {/* System card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]/75
                p-5
                shadow-2xl
                shadow-black/10
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* Card header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--hotech-border)]
                  pb-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[var(--hotech-accent)]/10
                      text-[var(--hotech-accent)]
                    "
                  >
                    <Code2
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-[var(--hotech-text)]
                      "
                    >
                      Digital System
                    </p>

                    <p
                      className="
                        text-xs
                        text-[var(--hotech-text-muted)]
                      "
                    >
                      {brand.name}
                    </p>
                  </div>
                </div>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[var(--hotech-accent)]/20
                    bg-[var(--hotech-accent)]/10
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[var(--hotech-accent)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[var(--hotech-accent)]
                    "
                  />

                  Ready
                </span>
              </div>

              {/* Architecture */}

              <div className="relative py-8">
                <div className="grid grid-cols-3 gap-3">
                  {capabilities.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.15,
                        }}
                        className="
                          relative
                          rounded-xl
                          border
                          border-[var(--hotech-border)]
                          bg-[var(--hotech-bg)]/60
                          p-4
                          text-center
                        "
                      >
                        <div
                          className="
                            mx-auto
                            mb-3
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            bg-[var(--hotech-accent)]/10
                            text-[var(--hotech-accent)]
                          "
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>

                        <p
                          className="
                            text-xs
                            font-semibold
                            text-[var(--hotech-text)]
                          "
                        >
                          {item.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-[16%]
                    right-[16%]
                    top-1/2
                    -z-10
                    hidden
                    h-px
                    bg-[var(--hotech-accent)]/20
                    sm:block
                  "
                />
              </div>

              {/* System values */}

              <div className="grid grid-cols-2 gap-3">
                <div
                  className="
                    rounded-xl
                    border
                    border-[var(--hotech-border)]
                    bg-[var(--hotech-bg)]/50
                    p-4
                  "
                >
                  <p
                    className="
                      text-xs
                      text-[var(--hotech-text-muted)]
                    "
                  >
                    Philosophy
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-[var(--hotech-text)]
                    "
                  >
                    Practical
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-[var(--hotech-border)]
                    bg-[var(--hotech-bg)]/50
                    p-4
                  "
                >
                  <p
                    className="
                      text-xs
                      text-[var(--hotech-text-muted)]
                    "
                  >
                    Built For
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-[var(--hotech-text)]
                    "
                  >
                    Growth
                  </p>
                </div>
              </div>

              {/* Floating badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.3,
                }}
                className="
                  absolute
                  -right-3
                  top-20
                  hidden
                  rounded-xl
                  border
                  border-[var(--hotech-border)]
                  bg-[var(--hotech-surface)]
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    aria-hidden="true"
                    className="
                      h-5
                      w-5
                      text-[var(--hotech-accent)]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-[var(--hotech-text-muted)]
                      "
                    >
                      Designed to
                    </p>

                    <p
                      className="
                        text-xs
                        font-semibold
                        text-[var(--hotech-text)]
                      "
                    >
                      Simplify Work
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;