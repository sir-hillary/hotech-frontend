import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers3,
  Sparkles,
  CheckCircle2,
  Clock3,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-hotech-bg text-hotech-text overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-hotech-accent/10 blur-3xl" />

          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-hotech-accent-secondary/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-6
              rounded-full
              border border-hotech-border
              bg-hotech-surface/70
              backdrop-blur-xl
            "
          >
            <Sparkles className="w-4 h-4 text-hotech-accent" />

            <span className="text-sm font-medium text-hotech-text-muted">
              Selected Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold
              tracking-tight
            "
          >
            Systems built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotech-accent to-hotech-accent-secondary">
              solve real problems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              max-w-3xl mx-auto mt-6
              text-lg sm:text-xl
              text-hotech-text-muted
              leading-relaxed
            "
          >
            A selection of web applications, AI systems, and business tools
            designed to simplify workflows, organize information, and create
            better digital experiences.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}
      {featuredProjects.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
              <div>
                <p className="text-sm font-semibold tracking-wide text-hotech-accent uppercase">
                  Featured Work
                </p>

                <h2 className="mt-2 text-3xl lg:text-4xl font-bold">
                  Projects worth exploring.
                </h2>
              </div>

              <p className="max-w-md text-sm text-hotech-text-muted leading-relaxed">
                These projects represent the kind of systems and digital
                products I enjoy building.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          ALL PROJECTS
      ========================================================= */}
      {otherProjects.length > 0 && (
        <section
          className="
            px-4 sm:px-6 lg:px-8
            py-20 lg:py-28
            border-y border-hotech-border
            bg-hotech-surface/30
          "
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold tracking-wide text-hotech-accent uppercase">
                More Work
              </p>

              <h2 className="mt-2 text-3xl lg:text-4xl font-bold">
                More systems and experiments.
              </h2>

              <p className="mt-4 text-hotech-text-muted text-lg leading-relaxed">
                Projects at different stages of development, each contributing
                to the experience of building useful digital products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PROJECT CAPABILITIES
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold tracking-wide text-hotech-accent uppercase">
              What These Projects Demonstrate
            </p>

            <h2 className="mt-2 text-3xl lg:text-4xl font-bold">
              More than just interfaces.
            </h2>

            <p className="mt-4 text-lg text-hotech-text-muted leading-relaxed">
              The focus is not simply on making something look good. The
              projects combine interface design, backend engineering, data,
              APIs, and real application logic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Layers3,
                title: "System Architecture",
                description:
                  "Applications structured around maintainability, scalability, and clear separation of concerns.",
              },
              {
                icon: Code2,
                title: "Full-Stack Engineering",
                description:
                  "Frontend experiences connected to APIs, databases, authentication, and backend services.",
              },
              {
                icon: Sparkles,
                title: "AI Integration",
                description:
                  "Practical AI features integrated into products where they can provide genuine value.",
              },
              {
                icon: CheckCircle2,
                title: "Real-World Functionality",
                description:
                  "Projects built around actual workflows rather than static interface demonstrations.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  p-6
                  rounded-2xl
                  border border-hotech-border
                  bg-hotech-surface
                  hover:border-hotech-accent/40
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    border border-hotech-accent/20
                    bg-hotech-accent/10
                  "
                >
                  <item.icon className="w-5 h-5 text-hotech-accent" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-hotech-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto">
          <div
            className="
              relative overflow-hidden
              p-8 sm:p-10 lg:p-14
              rounded-3xl
              border border-hotech-accent/20
              bg-gradient-to-br
              from-hotech-accent/10
              via-hotech-surface
              to-hotech-surface-elevated
              text-center
            "
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-hotech-accent/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hotech-accent-secondary/10 blur-3xl" />

            <div className="relative">
              <Layers3 className="w-8 h-8 text-hotech-accent mx-auto mb-5" />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Have a system in mind?
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-hotech-text-muted leading-relaxed">
                If one of these projects is close to what you need, or you
                have a completely different problem to solve, let's talk about
                it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-hotech-accent
                    text-white
                    font-semibold
                    hover:opacity-90
                    hover:shadow-lg
                    hover:shadow-hotech-accent/20
                    transition-all
                  "
                >
                  Start a Conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    rounded-xl
                    border border-hotech-border
                    bg-hotech-surface
                    text-hotech-text
                    font-medium
                    hover:border-hotech-accent/40
                    hover:text-hotech-accent
                    transition-all
                  "
                >
                  Explore Services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =============================================================
   FEATURED PROJECT CARD
============================================================= */

const FeaturedProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border border-hotech-border
        bg-hotech-surface
        hover:border-hotech-accent/40
        transition-all duration-500
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-hotech-surface-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        <div className="absolute top-4 left-4">
          <span
            className="
              inline-flex items-center
              px-3 py-1.5
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/10
              text-xs font-medium text-white
            "
          >
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4">
          <ProjectStatus completed={project.completed} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-sm text-hotech-text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        <TechStack technologies={project.techStack} />

        <ProjectActions
          {...(project.demoUrl && { demoUrl: project.demoUrl })}
          {...(project.repositoryUrl && { repositoryUrl: project.repositoryUrl })}
        />
      </div>
    </motion.article>
  );
};

/* =============================================================
   STANDARD PROJECT CARD
============================================================= */

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="
        group overflow-hidden
        rounded-2xl
        border border-hotech-border
        bg-hotech-surface
        hover:border-hotech-accent/40
        transition-all duration-300
      "
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-hotech-surface-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />

        <div className="absolute top-3 left-3">
          <span
            className="
              px-3 py-1.5
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/10
              text-xs text-white
            "
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <ProjectStatus completed={project.completed} />
        </div>

        <p className="mt-3 text-sm text-hotech-text-muted leading-relaxed">
          {project.description}
        </p>

        <TechStack technologies={project.techStack} />

        <ProjectActions
          {...(project.demoUrl && { demoUrl: project.demoUrl })}
          {...(project.repositoryUrl && { repositoryUrl: project.repositoryUrl })}
        />
      </div>
    </motion.article>
  );
};

/* =============================================================
   STATUS
============================================================= */

const ProjectStatus = ({ completed }: { completed: boolean }) => {
  return completed ? (
    <span
      className="
        inline-flex items-center gap-1.5
        px-2.5 py-1
        rounded-full
        bg-emerald-500/10
        border border-emerald-500/20
        text-xs font-medium
        text-emerald-500
        backdrop-blur-md
      "
    >
      <CheckCircle2 className="w-3.5 h-3.5" />
      Live
    </span>
  ) : (
    <span
      className="
        inline-flex items-center gap-1.5
        px-2.5 py-1
        rounded-full
        bg-amber-500/10
        border border-amber-500/20
        text-xs font-medium
        text-amber-500
        backdrop-blur-md
      "
    >
      <Clock3 className="w-3.5 h-3.5" />
      In Progress
    </span>
  );
};

/* =============================================================
   TECH STACK
============================================================= */

const TechStack = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="
            px-2.5 py-1
            rounded-lg
            border border-hotech-border
            bg-hotech-bg
            text-xs
            text-hotech-text-muted
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

/* =============================================================
   PROJECT ACTIONS
============================================================= */

const ProjectActions = ({
  demoUrl,
  repositoryUrl,
}: {
  demoUrl?: string;
  repositoryUrl?: string;
}) => {
  return (
    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-hotech-border">
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-4 py-2.5
            rounded-xl
            bg-hotech-accent
            text-white
            text-sm font-semibold
            hover:opacity-90
            transition-all
          "
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}

      {repositoryUrl && (
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-4 py-2.5
            rounded-xl
            border border-hotech-border
            bg-hotech-surface
            text-hotech-text
            text-sm font-medium
            hover:border-hotech-accent/40
            hover:text-hotech-accent
            transition-all
          "
        >
          <Github className="w-4 h-4" />
          Source
        </a>
      )}
    </div>
  );
};

export default Projects;