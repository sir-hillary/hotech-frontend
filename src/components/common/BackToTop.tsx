import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-5 z-40
        flex h-11 w-11
        items-center justify-center
        rounded-xl
        border border-[var(--hotech-border)]
        bg-[var(--hotech-surface)]/90
        text-[var(--hotech-text-muted)]
        shadow-lg shadow-black/10
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--hotech-accent)]/40
        hover:bg-[var(--hotech-accent)]/10
        hover:text-[var(--hotech-accent)]
        hover:shadow-xl
        hover:shadow-[var(--hotech-accent)]/10
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--hotech-focus)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--hotech-bg)]
        sm:bottom-7
        sm:right-7
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      <ArrowUp
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default BackToTop;