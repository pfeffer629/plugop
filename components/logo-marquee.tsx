"use client";

import Image from "next/image";

const partners = [
  { name: "Hilliard", logo: "/images/hilliard.avif", bgColor: null },
  { name: "Polaris", logo: "/images/polaris.avif", bgColor: null },
  { name: "Lifestyle Communities", logo: "/images/lifestyle.avif", bgColor: null },
  { name: "UDR", logo: "/images/udr.avif", bgColor: null },
  { name: "ZRS Management", logo: "/images/zrs.avif", bgColor: "#c30103" },
  { name: "Hawthorne", logo: "/images/hawthorne.avif", bgColor: null },
  { name: "Oakwood", logo: "/images/oakwood.avif", bgColor: null },
  { name: "Avenue Partners", logo: "/images/avenue.avif", bgColor: null },
  { name: "Brownstone", logo: "/images/brownstone.webp", bgColor: null },
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
        <div className="animate-marquee flex w-max gap-8 items-center">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex items-center justify-center w-[160px] h-[72px] rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 hover:bg-card hover:shadow-md transition-all duration-300"
            >
              {partner.bgColor ? (
                <div 
                  className="flex items-center justify-center h-8 px-3 rounded-[5px]"
                  style={{ backgroundColor: partner.bgColor }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={60}
                    height={20}
                    className="object-contain"
                    style={{ width: "auto", height: "16px" }}
                  />
                </div>
              ) : (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-h-8 max-w-[120px]"
                  style={{ width: "auto", height: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
