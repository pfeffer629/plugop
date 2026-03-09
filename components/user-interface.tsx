"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Property Manager Dashboard",
    description: "Real-time visibility into charger utilization, energy consumption, and revenue metrics.",
  },
  {
    icon: Smartphone,
    title: "Resident Interface",
    description: "Users see estimated charge completion times and get notifications when their vehicle is ready.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed usage reports, billing summaries, and energy savings metrics at your fingertips.",
  },
];

export default function UserInterface() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard mockup */}
          <div className={`relative ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}>
            {/* Main dashboard visualization */}
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl shadow-primary/5 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Property Dashboard</div>
                    <div className="text-xs text-muted-foreground">Real-time monitoring</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-500">$2,450</div>
                  <div className="text-xs text-muted-foreground">this month</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Energy</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">847 kWh</div>
                  <div className="text-xs text-muted-foreground">delivered</div>
                </div>
              </div>
              
              {/* Charger Status */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-foreground">Active Chargers</div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Charger {i}</div>
                        <div className="text-xs text-muted-foreground">Unit {100 + i}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-500">{85 + i * 3}%</div>
                      <div className="text-xs text-muted-foreground">{30 - i * 5} min left</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/5" />
          </div>

          {/* Right: Content */}
          <div className={`${isInView ? "animate-fade-up opacity-0 delay-200" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple & Transparent</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Interfaces Focused on{" "}
              <span className="gradient-text">Simplicity</span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              No app required. Our web-based interfaces give residents and property managers 
              everything they need at a glance.
            </p>

            {/* Feature list */}
            <div className="mt-10 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-border bg-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
