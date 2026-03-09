"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "./contact-form";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "No upfront costs or hidden fees",
  "Custom solution for your property",
  "Full installation & maintenance",
  "24/7 monitoring & support",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@plugop.com" },
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: MapPin, label: "Location", value: "Columbus, OH" },
  { icon: Clock, label: "Response", value: "Within 24 hours" },
];

export default function Contact() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="contact" className="relative py-16 lg:py-20 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bottom" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-10 ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 mb-4">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Build a Scalable{" "}
            <span className="gradient-text">Charging Program</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Schedule a 30-minute call to discuss your property&apos;s needs.
          </p>
        </div>

        {/* Main content */}
        <div className={`${isInView ? "animate-fade-up opacity-0 delay-200" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/5">
            {/* Left side - Info */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-[#272B41] via-[#272B41] to-[#5260C4]">
              {/* Content */}
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why partner with PlugOp?
                </h3>
                
                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/70 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Contact info */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-3">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-xs text-white/60">{info.label}</div>
                            <div className="text-xs text-white font-medium">{info.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:col-span-3 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Fill out the form below</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
