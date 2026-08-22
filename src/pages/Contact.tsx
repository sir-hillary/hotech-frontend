import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { contactAPI } from "../utils/api";
import { brand } from "../data/brand";
import { contactInfo, socialLinks } from "../config/contact";
import { services } from "../data/services";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  subject: string;
}

const processSteps = [
  {
    number: "01",
    title: "Tell us the problem",
    description:
      "Explain what is currently slowing you down, whether it is a manual process, scattered information, or a system you want to improve.",
  },
  {
    number: "02",
    title: "We understand the workflow",
    description:
      "We look at the problem before recommending technology, so the solution fits the way your business actually works.",
  },
  {
    number: "03",
    title: "We propose a practical solution",
    description:
      "You get a clear direction on what should be built, improved, automated, or integrated.",
  },
  {
    number: "04",
    title: "We build and refine",
    description:
      "Once we agree on the direction, we turn the idea into a useful, maintainable digital system.",
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setDone(false);

    const formData = new FormData(event.currentTarget);

    const data: ContactFormData = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      subject: String(
        formData.get("subject") ??
          formData.get("service") ??
          "Website Project Inquiry"
      ).trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setError("Please fill in your name, email address and message.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const result = await contactAPI.sendMessage(data);

      if (!result.success) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setDone(true);
      formRef.current?.reset();

      setTimeout(() => {
        setDone(false);
      }, 6000);
    } catch (err) {
      console.error("Contact form submission failed:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );

      setTimeout(() => {
        setError(null);
      }, 7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-hotech-bg text-hotech-text overflow-hidden transition-colors duration-300">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Ambient brand glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-hotech-accent/10 blur-3xl" />

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
              border border-hotech-accent/20
              bg-hotech-accent/5
            "
          >
            <Sparkles className="w-4 h-4 text-hotech-accent" />

            <span className="text-sm font-medium text-hotech-text-muted">
              Let's solve a real problem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold tracking-tight
            "
          >
            Let's turn your{" "}
            <span className="text-hotech-accent">
              idea into a system.
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
            {brand.belief} Tell us what you are trying to improve, automate,
            or build and we will help you find a practical way forward.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          CONTACT / FORM
      ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div
                className="
                  p-6 lg:p-8
                  rounded-3xl
                  border border-hotech-border
                  bg-hotech-surface
                  shadow-sm
                  transition-colors duration-300
                "
              >
                <div className="mb-8">
                  <p className="text-sm font-medium text-hotech-accent mb-2">
                    START HERE
                  </p>

                  <h2 className="text-2xl lg:text-3xl font-bold text-hotech-text">
                    Have a problem worth solving?
                  </h2>

                  <p className="mt-3 text-hotech-text-muted leading-relaxed">
                    You do not need to know exactly what technology you need.
                    Start by telling us what is not working.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                      }}
                      className="
                        group flex items-start gap-4
                        p-4 rounded-2xl
                        border border-hotech-border
                        bg-hotech-surface-elevated
                        hover:border-hotech-accent/30
                        hover:bg-hotech-accent/5
                        transition-all duration-300
                      "
                    >
                      <div
                        className="
                          flex-shrink-0 p-3
                          rounded-xl
                          border border-hotech-border
                          bg-hotech-surface
                          group-hover:border-hotech-accent/30
                          transition-colors duration-300
                        "
                      >
                        <info.icon className="w-5 h-5 text-hotech-accent" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-hotech-text-subtle mb-1">
                          {info.label}
                        </p>

                        <p className="text-sm font-medium text-hotech-text-muted group-hover:text-hotech-accent transition-colors">
                          {info.text}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-8 pt-8 border-t border-hotech-border">
                  <p className="text-sm font-medium text-hotech-text-muted mb-4">
                    Connect with HOTECH
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="
                          p-3 rounded-xl
                          border border-hotech-border
                          bg-hotech-surface-elevated
                          hover:border-hotech-accent/30
                          hover:bg-hotech-accent/10
                          transition-all duration-300
                        "
                      >
                        <social.icon
                          className="
                            w-5 h-5
                            text-hotech-text-subtle
                            group-hover:text-hotech-accent
                            transition-colors
                          "
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div
                className="
                  p-6 lg:p-8
                  rounded-3xl
                  border border-hotech-accent/20
                  bg-hotech-surface
                  relative overflow-hidden
                "
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-hotech-accent/10 blur-3xl" />

                <div className="relative">
                  <MessageSquare className="w-7 h-7 text-hotech-accent mb-5" />

                  <p className="text-lg font-semibold text-hotech-text leading-relaxed">
                    "{brand.belief}"
                  </p>

                  <p className="mt-4 text-sm text-hotech-text-muted leading-relaxed">
                    {brand.positioning}
                  </p>
                </div>
              </div>
            </motion.aside>

            {/* =====================================================
                FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div
                className="
                  p-6 sm:p-8 lg:p-10
                  rounded-3xl
                  border border-hotech-border
                  bg-hotech-surface
                  shadow-sm
                  transition-colors duration-300
                "
              >
                <div className="mb-8">
                  <p className="text-sm font-medium text-hotech-accent mb-2">
                    PROJECT INQUIRY
                  </p>

                  <h2 className="text-2xl lg:text-3xl font-bold text-hotech-text">
                    Tell us what you need.
                  </h2>

                  <p className="mt-3 text-hotech-text-muted">
                    Give us enough context to understand the problem. We will
                    take it from there.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-hotech-text-muted"
                      >
                        Your name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="
                          w-full px-4 py-3.5 rounded-xl
                          border border-hotech-border
                          bg-hotech-bg
                          text-hotech-text
                          placeholder:text-hotech-text-subtle
                          outline-none
                          focus:border-hotech-focus
                          focus:ring-2 focus:ring-hotech-focus/15
                          transition-all duration-300
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-hotech-text-muted"
                      >
                        Email address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="
                          w-full px-4 py-3.5 rounded-xl
                          border border-hotech-border
                          bg-hotech-bg
                          text-hotech-text
                          placeholder:text-hotech-text-subtle
                          outline-none
                          focus:border-hotech-focus
                          focus:ring-2 focus:ring-hotech-focus/15
                          transition-all duration-300
                        "
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-hotech-text-muted"
                    >
                      Business / organization
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your business name"
                      className="
                        w-full px-4 py-3.5 rounded-xl
                        border border-hotech-border
                        bg-hotech-bg
                        text-hotech-text
                        placeholder:text-hotech-text-subtle
                        outline-none
                        focus:border-hotech-focus
                        focus:ring-2 focus:ring-hotech-focus/15
                        transition-all duration-300
                      "
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block mb-2 text-sm font-medium text-hotech-text-muted"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="
                        w-full px-4 py-3.5 rounded-xl
                        border border-hotech-border
                        bg-hotech-bg
                        text-hotech-text
                        outline-none
                        focus:border-hotech-focus
                        focus:ring-2 focus:ring-hotech-focus/15
                        transition-all duration-300
                      "
                    >
                      <option value="" disabled>
                        Select an area
                      </option>

                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-hotech-text-muted"
                    >
                      Tell us about the problem *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      required
                      placeholder="What are you currently doing manually? What would you like to improve, automate, or build?"
                      className="
                        w-full px-4 py-3.5 rounded-xl
                        border border-hotech-border
                        bg-hotech-bg
                        text-hotech-text
                        placeholder:text-hotech-text-subtle
                        resize-none
                        outline-none
                        focus:border-hotech-focus
                        focus:ring-2 focus:ring-hotech-focus/15
                        transition-all duration-300
                      "
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="
                        p-4 rounded-xl
                        border border-red-500/20
                        bg-red-500/10
                        text-sm text-red-500
                      "
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Success */}
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="
                        flex items-start gap-3
                        p-4 rounded-xl
                        border border-emerald-500/20
                        bg-emerald-500/10
                      "
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />

                      <div>
                        <p className="font-medium text-emerald-500">
                          Message received.
                        </p>

                        <p className="text-sm text-hotech-text-muted mt-1">
                          We will review your inquiry and get back to you.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    className="
                      w-full
                      flex items-center justify-center gap-3
                      px-6 py-4
                      rounded-xl
                      bg-hotech-accent
                      text-white
                      font-semibold
                      hover:brightness-95
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                      transition-all duration-300
                      hover:shadow-lg
                      hover:shadow-hotech-accent/20
                    "
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-hotech-text-subtle">
                    Your information is only used to respond to your inquiry.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section
        className="
          px-4 sm:px-6 lg:px-8
          py-20
          border-y border-hotech-border
          bg-hotech-surface/40
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium text-hotech-accent mb-3">
              WHAT HAPPENS NEXT
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-hotech-text">
              From problem to practical solution.
            </h2>

            <p className="mt-4 text-hotech-text-muted text-lg">
              No unnecessary complexity. We first understand the problem, then
              determine where technology can actually help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  relative p-6 rounded-2xl
                  border border-hotech-border
                  bg-hotech-surface
                  hover:border-hotech-accent/30
                  transition-all duration-300
                "
              >
                <span className="text-sm font-mono text-hotech-accent">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-hotech-text">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-hotech-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="
              relative overflow-hidden
              p-8 sm:p-10 lg:p-14
              rounded-3xl
              border border-hotech-accent/20
              bg-hotech-surface
              text-center
            "
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-hotech-accent/10 blur-3xl" />

            <div className="relative">
              <Clock3 className="w-8 h-8 text-hotech-accent mx-auto mb-5" />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hotech-text">
                Not sure what you need yet?
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-hotech-text-muted leading-relaxed">
                That's okay. Start with the problem. A conversation can help
                clarify whether you need a new system, automation, an
                integration, or simply a better way of doing things.
              </p>

              <Link
                to="/services"
                className="
                  inline-flex items-center gap-2
                  mt-7 px-6 py-3
                  rounded-xl
                  border border-hotech-border
                  bg-hotech-surface-elevated
                  text-hotech-text-muted
                  font-medium
                  hover:border-hotech-accent/40
                  hover:text-hotech-accent
                  transition-all
                "
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;