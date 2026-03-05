import Image from "next/image";
import { Zap, Users, Brain } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why PlugOp
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Reduce Installation Costs by 40%
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Charging programs are expensive due to hefty electrical capacity
            upgrades. PlugOp&apos;s energy management allows you to install more
            chargers with less electrical.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/ev-chargers-garage.jpg"
                alt="EV chargers installed in an apartment parking garage"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">
                Skip the Expensive Electricity Upgrades
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                With PlugOp, install several chargers on a single electric
                circuit. Our software optimally shifts power between each
                electric vehicle.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/man-charging-ev.jpg"
                alt="Person charging an electric vehicle"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">
                User Experience Focused
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Don&apos;t compromise user experience. PlugOp software
                transparently informs users of charging times. No app required.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/energy-management.jpg"
                alt="Energy management dashboard showing power distribution"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">
                AI-Based Power Sharing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our AI-based algorithms learn user driving behavior to ensure
                the right electric vehicles are charged when they need it most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
