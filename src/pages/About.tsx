import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Workflow,
  Wrench,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

import { brand } from "../data/brand";

const About = () => {
  return (
    <main className="min-h-screen bg-[var(--hotech-bg)] text-[var(--hotech-text)]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 overflow-hidden
          "
        >
          <div
            className="
              absolute -left-40 top-20
              h-80 w-80
              rounded-full
              bg-[var(--hotech-accent)]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute -right-40 bottom-0
              h-96 w-96
              rounded-full
              bg-[var(--hotech-secondary)]/10
              blur-3xl
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Eyebrow */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]/70
                px-4 py-2
                text-sm font-medium
                text-[var(--hotech-text-muted)]
                shadow-sm
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[var(--hotech-accent)]
                  shadow-[0_0_10px_var(--hotech-accent)]
                "
              />

              <span>About {brand.name}</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Engineering Ideas
              <span
                className="
                  mt-4
                  block
                  bg-gradient-to-r
                  from-[var(--hotech-accent)]
                  to-[var(--hotech-secondary)]
                  bg-clip-text
                  text-transparent
                "
              >
                into Reality.
              </span>
            </h1>

            {/* Positioning */}
            <p
              className="
                mx-auto mt-6
                max-w-3xl
                text-lg leading-relaxed
                text-[var(--hotech-text-muted)]
                sm:text-xl
              "
            >
              {brand.positioning}
            </p>

            {/* Belief */}
            <div
              className="
                mx-auto mt-8
                max-w-2xl
                border-l-2
                border-[var(--hotech-accent)]
                pl-5 text-left
              "
            >
              <p className="text-base italic text-[var(--hotech-text-muted)] sm:text-lg">
                "{brand.belief}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                rounded-2xl
                border border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]
                p-7
                shadow-sm
                sm:p-9
              "
            >
              <div
                className="
                  mb-6 flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-[var(--hotech-accent)]/20
                  bg-[var(--hotech-accent)]/10
                "
              >
                <Target
                  className="h-6 w-6 text-[var(--hotech-accent)]"
                  aria-hidden="true"
                />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--hotech-accent)]">
                Our Mission
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Turn inefficiency into opportunity.
              </h2>

              <p className="mt-5 leading-relaxed text-[var(--hotech-text-muted)]">
                {brand.mission}
              </p>
            </motion.article>

            {/* Philosophy */}
            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                relative overflow-hidden
                rounded-2xl
                border border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]
                p-7
                sm:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute right-0 top-0
                  h-32 w-32
                  rounded-full
                  bg-[var(--hotech-secondary)]/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative mb-6 flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-[var(--hotech-secondary)]/20
                  bg-[var(--hotech-secondary)]/10
                "
              >
                <Lightbulb
                  className="h-6 w-6 text-[var(--hotech-secondary)]"
                  aria-hidden="true"
                />
              </div>

              <p className="relative mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--hotech-secondary)]">
                Our Philosophy
              </p>

              <h2 className="relative text-2xl font-bold sm:text-3xl">
                Technology should simplify work.
              </h2>

              <p className="relative mt-5 leading-relaxed text-[var(--hotech-text-muted)]">
                We don't build technology simply because we can. We start by
                understanding how work is currently being done, identify where
                time and effort are being lost, and then design systems that
                make the process simpler.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE THINK
      ========================================================= */}
      <section className="border-y border-[var(--hotech-border)] bg-[var(--hotech-surface)]/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--hotech-accent)]">
              How We Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Simple principles.{" "}
              <span className="text-[var(--hotech-accent)]">
                Practical results.
              </span>
            </h2>

            <p className="mt-4 text-[var(--hotech-text-muted)]">
              Our approach keeps technology connected to the problem it is
              supposed to solve.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brand.principles.map((principle, index) => {
              const icons = [Target, Wrench, Workflow, Rocket];
              const Icon = icons[index % icons.length];

              return (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-2xl
                    border border-[var(--hotech-border)]
                    bg-[var(--hotech-bg)]/70
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--hotech-accent)]/40
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      mb-5 flex h-11 w-11 items-center justify-center
                      rounded-xl
                      bg-[var(--hotech-accent)]/10
                      text-[var(--hotech-accent)]
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  >
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--hotech-text-muted)]">
                    {principle.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT THIS MEANS FOR CLIENTS
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--hotech-accent)]">
                Why Hotech
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                We build systems around{" "}
                <span className="text-[var(--hotech-accent)]">
                  real problems.
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-[var(--hotech-text-muted)]">
                Your business shouldn't have to adapt itself around poorly
                designed software. The right system should fit the way your
                business works while creating room for improvement and growth.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand the problem before choosing the technology.",
                  "Replace repetitive manual work with reliable systems.",
                  "Create solutions that are practical to use and maintain.",
                  "Build foundations that can evolve as the business grows.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="
                        mt-0.5 h-5 w-5 shrink-0
                        text-[var(--hotech-accent)]
                      "
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-relaxed text-[var(--hotech-text-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-[var(--hotech-border)]
                bg-[var(--hotech-surface)]
                p-8
                shadow-xl
                sm:p-10
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute -right-20 -top-20
                  h-56 w-56
                  rounded-full
                  bg-[var(--hotech-accent)]/10
                  blur-3xl
                "
              />

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-[var(--hotech-accent)]/10
                    "
                  >
                    <Workflow
                      className="h-5 w-5 text-[var(--hotech-accent)]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      The Hotech Approach
                    </p>

                    <p className="text-xs text-[var(--hotech-text-muted)]">
                      Problem → System → Improvement
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Identify the bottleneck",
                    "Design the right workflow",
                    "Build the digital system",
                    "Automate repetitive tasks",
                    "Measure and improve",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="
                        flex items-center gap-4
                        rounded-xl
                        border border-[var(--hotech-border)]
                        bg-[var(--hotech-bg)]/60
                        p-4
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8 shrink-0 items-center justify-center
                          rounded-lg
                          bg-[var(--hotech-accent)]/10
                          text-xs font-bold
                          text-[var(--hotech-accent)]
                        "
                      >
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
          transition={{ duration: 0.6 }}
          className="
            relative mx-auto max-w-5xl overflow-hidden
            rounded-3xl
            border border-[var(--hotech-border)]
            bg-[var(--hotech-surface)]
            p-8 text-center
            sm:p-12
            lg:p-16
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[var(--hotech-accent)]/5
              via-transparent
              to-[var(--hotech-secondary)]/5
            "
          />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--hotech-accent)]">
              Let's Build Something Useful
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Have a process that needs improving?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[var(--hotech-text-muted)]">
              Tell us what is slowing your business down. We'll help you
              explore a practical digital solution.
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
                "
              >
                Start a Conversation

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/services"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  border border-[var(--hotech-border)]
                  bg-[var(--hotech-bg)]/50
                  px-6 py-3
                  text-sm font-semibold
                  transition-colors
                  hover:border-[var(--hotech-accent)]/40
                  hover:text-[var(--hotech-accent)]
                "
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;