import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="border-t border-border/50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-xl text-center">
        <p className={`mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
          Stay Connected
        </p>

        <h2 className={`mb-12 font-['Playfair_Display',serif] text-[clamp(1.5rem,3vw,2.5rem)] italic text-foreground ${isVisible ? "animate-on-scroll animate-delay-100" : "opacity-0"}`}>
          Be first to know.
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`mb-16 flex flex-col gap-4 sm:flex-row ${isVisible ? "animate-on-scroll animate-delay-200" : "opacity-0"}`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 border-b border-border bg-transparent px-1 py-3 text-sm tracking-wider text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded-sm bg-primary px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/80"
          >
            {submitted ? "Thank You" : "Notify Me"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
