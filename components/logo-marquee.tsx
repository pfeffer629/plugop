"use client";

const partners = [
  "Hilliard",
  "Polaris",
  "Lifestyle Communities",
  "UDR",
  "ZRS Management",
  "Hawthorne",
  "Oakwood",
  "Avenue Partners",
  "Brownstone",
  "Lincoln Property",
];

export default function LogoMarquee() {
  return (
    <section className="relative py-16 overflow-hidden bg-muted/30">
      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by <span className="text-foreground font-semibold">500+</span> property managers nationwide
        </p>
      </div>
      
      <div className="relative">
        <div className="animate-marquee flex w-max gap-8">
          {[...partners, ...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="group flex items-center justify-center px-8 py-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
