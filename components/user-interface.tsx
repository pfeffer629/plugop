import Image from "next/image";
import { Monitor, Smartphone, BarChart3 } from "lucide-react";

export default function UserInterface() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Simple & Transparent
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              User Interfaces Focused on Simplicity & Transparency
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              No app required. Our web-based interfaces give residents and
              property managers everything they need at a glance.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Property Manager Dashboard
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Real-time visibility into charger utilization, energy
                    consumption, and revenue.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Resident Interface
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Users see estimated charge completion times and get
                    notifications when their vehicle is ready.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Analytics & Reporting
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Detailed usage reports, billing summaries, and energy savings
                    metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/energy-management.jpg"
                alt="PlugOp energy management dashboard interface"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
