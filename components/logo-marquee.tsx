"use client";

import Image from "next/image";

const partners = [
  { name: "Hilliard", logo: "/images/hilliard.avif" },
  { name: "Polaris", logo: "/images/polaris.avif" },
  { name: "Lifestyle Communities", logo: "/images/lifestyle.avif" },
  { name: "UDR", logo: "/images/udr.avif" },
  { name: "ZRS Management", logo: "/images/zrs.avif" },
  { name: "Hawthorne", logo: "/images/hawthorne.avif" },
  { name: "Oakwood", logo: "/images/oakwood.avif" },
  { name: "Avenue Partners", logo: "/images/avenue.avif" },
  { name: "Brownstone", logo: "/images/brownstone.webp" },
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
        <div className="animate-marquee flex w-max gap-12 items-center">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex items-center justify-center px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 hover:bg-card hover:shadow-md transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                style={{ width: "auto", height: "32px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
