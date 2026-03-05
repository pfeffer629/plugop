const partners = [
  "Hilliard",
  "Polaris",
  "Lifestyle Communities",
  "UDR",
  "ZRS",
  "Hawthorne",
  "Oakwood",
  "Avenue Partners",
  "Brownstone",
];

export default function LogoMarquee() {
  return (
    <section className="border-b border-border bg-card py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by leading property managers
      </p>
      <div className="relative mt-6 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 px-6">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-12 items-center justify-center rounded-lg bg-secondary px-6"
            >
              <span className="whitespace-nowrap text-sm font-semibold text-secondary-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
