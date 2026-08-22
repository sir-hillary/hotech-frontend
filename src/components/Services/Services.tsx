import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  Code2,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import { services } from "../../data/services";
import { processSteps } from "../../data/process";

const Services = () => {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Problem First",
      description:
        "We start by understanding the problem and the workflow before deciding what technology is needed.",
    },
    {
      icon: Zap,
      title: "Practical Automation",
      description:
        "We automate repetitive work where software can reliably save time and reduce operational friction.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Systems",
      description:
        "We build systems that are secure, maintainable, and dependable enough to become part of your daily operations.",
    },
    {
      icon: Clock,
      title: "Built for Real Work",
      description:
        "Our solutions are designed around how people actually work, not around unnecessary technical complexity.",
    },
    {
      icon: Rocket,
      title: "Ready to Grow",
      description:
        "We create foundations that can evolve as your business, users, and requirements grow.",
    },
    {
      icon: Code2,
      title: "Maintainable Engineering",
      description:
        "Clean architecture and thoughtful implementation make future changes easier and less expensive.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--hotech-bg)] text-[var(--hotech-text)]">
      {/* =========================================================
          PAGE HERO
      ========================================================= */}

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--hotech-accent)]/10 blur-3xl" />

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,var(--hotech-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--hotech-border)_1px,transparent_1px)]
              bg-[size:48px_48px]
              opacity-[0.12]
              [mask-image:linear-gradient(to_bottom,black,transparent)]
            "
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-[var(--hotech-border)]
              bg-[var(--hotech-surface)]/70
              px-4 py-2
              text-sm font-medium
              text-[var(--hotech-text-muted)]
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--hotech-accent)]" />
            What We Build
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              text-4xl font-bold tracking-tight
              sm:text-5xl
              lg:text-6xl
          "
          >
            Digital systems that{" "}
            <span className="text-[var(--hotech-accent)]">
              make work simpler.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mx-auto mt-6 max-w-3xl
              text-base leading-7
              text-[var(--hotech-text-muted)]
              sm:text-lg
              sm:leading-8
            "
          >
            Hotech Studio builds practical digital systems that replace
            manual and repetitive workflows with simpler, more reliable ways
            of working.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl lg:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--hotech-accent)]">
              Our Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From an inefficient process to a working system.
            </h2>

            <p className="mt-4 leading-7 text-[var(--hotech-text-muted)]">
              We combine software development, automation, data, and AI to
              create systems that solve real operational problems.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 24,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl
                    border border-[var(--hotech-border)]
                    bg-[var(--hotech-surface)]/60
                    p-6
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-[var(--hotech-accent)]/40
                    hover:shadow-xl
                    hover:shadow-[var(--hotech-accent)]/5
                  "
                >
                  {/* Accent glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute -right-16 -top-16
                      h-32 w-32
                      rounded-full
                      bg-[var(--hotech-accent)]/10
                      blur-3xl
                      transition-opacity
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    {/* Icon + category */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div
                        className="
                          rounded-xl
                          border border-[var(--hotech-accent)]/20
                          bg-[var(--hotech-accent)]/10
                          p-3
                          text-[var(--hotech-accent)]
                          transition-colors
                          group-hover:bg-[var(--hotech-accent)]/15
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <span
                        className="
                          rounded-full
                          border border-[var(--hotech-border)]
                          bg-[var(--hotech-bg)]/50
                          px-2.5 py-1
                          text-[11px] font-medium
                          text-[var(--hotech-text-muted)]
                        "
                      >
                        {service.category}
                      </span>
                    </div>

                    <h3
                      className="
                        mb-3 text-xl font-semibold
                        transition-colors
                        group-hover:text-[var(--hotech-accent)]
                      "
                    >
                      {service.title}
                    </h3>

                    <p className="mb-6 text-sm leading-6 text-[var(--hotech-text-muted)]">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="
                            flex items-center gap-2
                            text-sm
                            text-[var(--hotech-text-muted)]
                          "
                        >
                          <Check
                            aria-hidden="true"
                            className="
                              h-4 w-4 shrink-0
                              text-[var(--hotech-accent)]
                            "
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        className="
          border-y
          border-[var(--hotech-border)]
          bg-[var(--hotech-surface)]/30
          px-4 py-16
          sm:px-6
          lg:px-8 lg:py-20
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--hotech-accent)]">
              How We Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              A simple process. A useful outcome.
            </h2>

            <p className="mt-4 leading-7 text-[var(--hotech-text-muted)]">
              Good systems begin with understanding the problem. We keep the
              process clear from discovery through delivery.
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline */}
            <div
              aria-hidden="true"
              className="
                absolute left-0 right-0 top-8 hidden
                h-px
                bg-[var(--hotech-border)]
                lg:block
              "
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >
                    <div
                      className="
                        relative z-10 mb-6
                        flex h-16 w-16 items-center justify-center
                        rounded-2xl
                        border border-[var(--hotech-accent)]/30
                        bg-[var(--hotech-bg)]
                        text-[var(--hotech-accent)]
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className="
                        text-xs font-semibold uppercase
                        tracking-widest
                        text-[var(--hotech-accent)]
                      "
                    >
                      Step {step.step}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--hotech-text-muted)]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY HOTECH
      ========================================================= */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl lg:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--hotech-accent)]">
              The Hotech Approach
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Technology should make work simpler.
            </h2>

            <p className="mt-4 leading-7 text-[var(--hotech-text-muted)]">
              We don't build software simply because we can. Every system
              should have a clear purpose and make something better.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    rounded-2xl
                    border border-[var(--hotech-border)]
                    bg-[var(--hotech-surface)]/50
                    p-6
                    transition-all duration-300
                    hover:border-[var(--hotech-accent)]/30
                    hover:bg-[var(--hotech-surface)]
                  "
                >
                  <div
                    className="
                      mb-5 inline-flex
                      rounded-xl
                      bg-[var(--hotech-accent)]/10
                      p-3
                      text-[var(--hotech-accent)]
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[var(--hotech-text-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative mx-auto max-w-5xl
            overflow-hidden
            rounded-3xl
            border border-[var(--hotech-border)]
            bg-[var(--hotech-surface)]
            p-8
            text-center
            sm:p-12
            lg:p-16
          "
        >
          {/* CTA glow */}
          <div
            aria-hidden="true"
            className="
              absolute left-1/2 top-0
              h-64 w-64
              -translate-x-1/2
              rounded-full
              bg-[var(--hotech-accent)]/10
              blur-3xl
            "
          />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--hotech-accent)]">
              Have a problem worth solving?
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's turn it into a system.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--hotech-text-muted)]">
              Tell us what is slowing your business down, what you want to
              automate, or what you want to build. We'll help you figure out
              the practical next step.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-[var(--hotech-accent)]
                  px-6 py-3
                  text-sm font-semibold text-white
                  shadow-lg
                  shadow-[var(--hotech-accent)]/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-[var(--hotech-accent)]/30
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                "
              >
                Start a Conversation

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/portfolio"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  border border-[var(--hotech-border)]
                  bg-[var(--hotech-bg)]/50
                  px-6 py-3
                  text-sm font-semibold
                  text-[var(--hotech-text)]
                  transition-all duration-200
                  hover:border-[var(--hotech-accent)]/40
                  hover:bg-[var(--hotech-accent)]/5
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--hotech-focus)]
                "
              >
                See Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;