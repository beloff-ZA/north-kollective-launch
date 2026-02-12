import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Defining brand positioning, narrative architecture, and strategic frameworks that create lasting market differentiation.",
  },
  {
    title: "Creative Direction",
    description:
      "Guiding the visual and conceptual identity of projects with precision, ensuring every touchpoint reflects sophistication.",
  },
  {
    title: "Digital Presence",
    description:
      "Crafting refined digital experiences and strategic online positioning that elevates perception and drives engagement.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="border-t border-border/50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className={`mb-16 text-xs font-medium uppercase tracking-[0.3em] text-primary ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
          Services
        </p>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group cursor-default space-y-5 border-t border-border/30 pt-8 transition-colors duration-500 hover:border-primary/40 ${
                isVisible ? `animate-on-scroll animate-delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              <h3 className="text-lg font-light uppercase tracking-[0.15em] text-foreground transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
