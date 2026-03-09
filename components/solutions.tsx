"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Hotel,
  Briefcase,
  MapPin,
  Truck,
  ArrowRight,
  Check,
} from "lucide-react";

const solutions = [
  {
    id: "apartments",
    label: "Apartments",
    icon: Building2,
    title: "Apartment Complexes",
    description: "Install cost-effective EV charging across your apartment community with AI-powered energy management.",
    features: [
      "Maximize chargers per circuit",
      "Resident billing integration",
      "24/7 monitoring & support",
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: Hotel,
    title: "Hotels & Resorts",
    description: "Attract EV-driving guests with reliable charging amenities and seamless automated billing.",
    features: [
      "Guest charging integration",
      "Automated billing systems",
      "Premium guest experience",
    ],
  },
  {
    id: "workplace",
    label: "Workplace",
    icon: Briefcase,
    title: "Corporate Facilities",
    description: "Offer EV charging as a workplace benefit with efficient employee charging management.",
    features: [
      "Employee scheduling",
      "Power allocation control",
      "Usage reporting & analytics",
    ],
  },
  {
    id: "public",
    label: "Public",
    icon: MapPin,
    title: "Public Charging",
    description: "Deploy public stations at retail locations with integrated payment processing.",
    features: [
      "Payment processing built-in",
      "Load balancing automation",
      "Real-time usage analytics",
    ],
  },
  {
    id: "fleet",
    label: "Fleet",
    icon: Truck,
    title: "Fleet Charging",
    description: "Keep your fleet vehicles charged and ready with AI-prioritized departure scheduling.",
    features: [
      "Departure schedule priority",
      "Route optimization ready",
      "Fleet management integration",
    ],
  },
];

export default function Solutions() {
  const [active, setActive] = useState("apartments");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = solutions.find((s) => s.id === active)!;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 mb-6">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Charging Solutions for{" "}
            <span className="gradient-text">Any Application</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From public charging at a retail location to assigned charging in an apartment. 
            PlugOp operates a charging program to fit your needs.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 ${isInView ? "animate-fade-up opacity-0 delay-100" : "opacity-0"}`}>
          {solutions.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`group relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solution Content */}
        <div className={`${isInView ? "animate-fade-up opacity-0 delay-200" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Feature Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl p-8">
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <div
                      key={solution.id}
                      className={`transition-all duration-700 ease-out ${
                        active === solution.id
                          ? "opacity-100"
                          : "opacity-0 absolute inset-0 pointer-events-none"
                      }`}
                    >
                      {active === solution.id && (
                        <div className="space-y-6">
                          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-primary" />
                          </div>
                          <div>
                            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                              {current.label}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                          <div className="grid gap-3 pt-2">
                            {solution.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-foreground font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-primary/5 border border-primary/10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  const isActive = active === solution.id;
                  
                  return (
                    <div
                      key={solution.id}
                      className={`transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                      }`}
                    >
                      {isActive && (
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                              {solution.title}
                            </h3>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {solution.description}
                          </p>
                          
                          <div className="space-y-4 mb-8">
                            {solution.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 animate-fade-up opacity-0"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-primary" />
                                </div>
                                <span className="text-foreground font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Link
                            href="#contact"
                            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white group"
                          >
                            <span>Explore This Solution</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
