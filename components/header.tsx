"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#blog", label: "Resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative group"
        >
          <Image
            src="/images/logo-full.svg"
            alt="PlugOp"
            width={140}
            height={40}
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 transition-colors duration-300 hover:text-foreground group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold text-white focus-ring"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary focus-ring"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}>
            <Menu className="w-5 h-5" />
          </span>
          <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
            <X className="w-5 h-5" />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="glass mx-4 mt-2 p-6 rounded-2xl shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium text-foreground/80 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:text-foreground hover:pl-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full px-5 py-3 rounded-xl text-center text-sm font-semibold text-white block"
            >
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
