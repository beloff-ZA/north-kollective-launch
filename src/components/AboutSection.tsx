import aboutImage from "@/assets/about-image.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="px-6 py-32 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div className={`space-y-8 ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            About
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light uppercase leading-tight tracking-[0.12em] text-foreground">
            Design-Led
            <br />
            Strategic Thinking
          </h2>
          <div className="space-y-5 text-sm leading-relaxed tracking-wide text-muted-foreground">
            <p>
              North Kollective Studio was founded on the belief that exceptional brands are built at the intersection of strategic clarity and creative precision.
            </p>
            <p>
              We partner with forward-thinking companies, luxury brands, and visionary leaders to craft identities that resonate, strategies that endure, and presences that command attention.
            </p>
          </div>
          <div className="h-[1px] w-16 bg-primary/40" />
        </div>

        <div className={`${isVisible ? "animate-on-scroll animate-delay-200" : "opacity-0"}`}>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={aboutImage}
              alt="Abstract architectural forms with dramatic shadows"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
