"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Users, Brain, ArrowRight, Check } from "lucide-react";

const features = [
  {
    id: "cost",
    icon: Zap,
    title: "Skip Expensive Upgrades",
    subtitle: "40% Cost Reduction",
    description: "Install several chargers on a single electric circuit. Our software optimally shifts power between each electric vehicle.",
    benefits: ["No electrical panel upgrades", "Reduced installation time", "Lower infrastructure costs"],
    color: "primary",
  },
  {
    id: "ux",
    icon: Users,
    title: "User Experience Focused",
    subtitle: "No App Required",
    description: "Don't compromise user experience. PlugOp software transparently informs users of charging times without requiring an app.",
    benefits: ["Plug & charge simplicity", "Real-time status display", "Seamless authentication"],
    color: "accent",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI-Based Power Sharing",
    subtitle: "Smart Load Management",
    description: "Our AI-based algorithms learn user driving behavior to ensure the right electric vehicles are charged when they need it most.",
    benefits: ["Predictive charging", "Optimal energy distribution", "Peak demand management"],
    color: "primary",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
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
    <section ref={sectionRef} id="features" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 radial-gradient-bottom opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why PlugOp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Reduce Installation Costs by{" "}
            <span className="gradient-text">40%</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Charging programs are expensive due to hefty electrical capacity upgrades. 
            PlugOp&apos;s energy management allows you to install more chargers with less electrical infrastructure.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left: Feature selector */}
          <div className={`lg:w-1/2 space-y-4 ${isInView ? "animate-fade-up opacity-0 delay-200" : "opacity-0"}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-card border-primary/20 shadow-lg shadow-primary/5"
                      : "bg-transparent border-border hover:border-primary/10 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-primary text-white" : "bg-secondary text-foreground"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2"
                        }`} />
                      </div>
                      <p className="text-sm text-primary font-medium mt-1">{feature.subtitle}</p>
                      <p className={`text-sm text-muted-foreground mt-2 transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                      }`}>
                        {feature.description}
                      </p>
                      
                      {/* Benefits list */}
                      <div className={`mt-4 space-y-2 transition-all duration-500 ${
                        isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                      }`}>
                        {feature.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Stats and CTA */}
          <div className={`lg:w-1/2 flex flex-col justify-center ${isInView ? "animate-fade-up opacity-0 delay-400" : "opacity-0"}`}>
            <div className="space-y-8">
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Properties Served</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-2">Ready to reduce costs?</h3>
                <p className="text-muted-foreground mb-4">Get a customized quote for your property today.</p>
                <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
