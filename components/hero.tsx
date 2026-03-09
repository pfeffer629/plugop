"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Zap, Shield, TrendingUp } from "lucide-react";

const stats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "500+", label: "Properties" },
  { value: "99.9%", label: "Uptime" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-up opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Now serving 500+ properties nationwide</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-up opacity-0 delay-100">
              The Future of{" "}
              <span className="gradient-text">EV Charging</span>{" "}
              for Multi-Family Properties
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up opacity-0 delay-200">
              Reduce installation costs by 40% with AI-powered load management. 
              No compromises on user experience.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
              <Link
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white group"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-foreground bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 group-hover:bg-primary/10 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </span>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-border animate-fade-up opacity-0 delay-400">
              <div className="flex flex-wrap gap-8 lg:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="flex-1 mt-16 lg:mt-0 animate-fade-up opacity-0 delay-300">
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border bg-card">
                <Image
                  src="/images/ev-chargers-garage.jpg"
                  alt="Modern EV charging infrastructure"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Bottom stats bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Active Charging</div>
                        <div className="text-xs text-muted-foreground">12 vehicles connected</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-500">98.5 kW</div>
                      <div className="text-xs text-muted-foreground">Current Load</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 animate-float">
                <div className="glass rounded-2xl p-4 shadow-lg flex items-center gap-3 max-w-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">AI-Powered</div>
                    <div className="text-xs text-muted-foreground">Smart load sharing</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 animate-float delay-500">
                <div className="glass rounded-2xl p-4 shadow-lg flex items-center gap-3 max-w-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">40% Savings</div>
                    <div className="text-xs text-muted-foreground">On installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
