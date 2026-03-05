import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Cost-Effective EV Charging Programs
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              With PlugOp, implement an EV charging program for your apartment
              complex for a fraction of the cost without compromising user
              experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Meeting
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative h-[320px] w-[220px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl md:h-[400px] md:w-[260px]">
              <Image
                src="/images/phone-app.jpg"
                alt="PlugOp EV charging mobile app interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
