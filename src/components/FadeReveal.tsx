import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

const FadeReveal = ({ children }: { children: ComponentChildren }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-5");
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="translate-y-5 opacity-0 duration-1000">
      {children}
    </div>
  );
};

export default FadeReveal;
