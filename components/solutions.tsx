"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Hotel,
  Briefcase,
  MapPin,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "apartments",
    label: "Apartment Complexes",
    icon: Building2,
    description:
      "Install cost-effective EV charging across your apartment community. PlugOp's energy management maximizes the number of chargers per circuit, keeping costs low for residents and management.",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: Hotel,
    description:
      "Attract EV-driving guests to your hotel or resort with reliable charging amenities. PlugOp ensures a seamless experience with transparent charging times and automated billing.",
  },
  {
    id: "workplace",
    label: "Workplace",
    icon: Briefcase,
    description:
      "Offer EV charging as a workplace benefit. PlugOp makes it easy to manage employee charging schedules and allocate power efficiently across your corporate parking facilities.",
  },
  {
    id: "public",
    label: "Public Charging",
    icon: MapPin,
    description:
      "Deploy public charging stations at retail locations and public spaces. PlugOp's software handles payment processing, load balancing, and usage analytics out of the box.",
  },
  {
    id: "fleet",
    label: "Fleet Charging",
    icon: Truck,
    description:
      "Keep your fleet vehicles charged and ready. PlugOp's AI prioritizes charging based on departure schedules, ensuring every vehicle is ready when it needs to be.",
  },
];

export default function Solutions() {
  const [active, setActive] = useState("apartments");
  const current = solutions.find((s) => s.id === active)!;

  return (
    <section id="solutions" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Charging Solutions for Any Application
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From public charging at a retail location to assigned charging in an
            apartment. PlugOp will operate a charging program to fit your needs.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                  active === s.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Icon className="h-4 w-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-background p-8 text-center">
          <current.icon className="mx-auto h-10 w-10 text-primary" />
          <h3 className="mt-4 text-xl font-bold text-foreground">
            {current.label}
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {current.description}
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
