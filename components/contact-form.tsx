"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-muted-foreground max-w-sm">
          We&apos;ll review your information and get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group">
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground"
            placeholder="John"
          />
        </div>
        <div className="group">
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground"
            placeholder="Doe"
          />
        </div>
      </div>
      
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground"
          placeholder="john@company.com"
        />
      </div>
      
      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Company / Property Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground"
          placeholder="Acme Properties"
        />
      </div>
      
      <div>
        <label
          htmlFor="units"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Number of Units/Parking Spaces
        </label>
        <select
          id="units"
          name="units"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10"
        >
          <option value="">Select range</option>
          <option value="1-50">1-50 units</option>
          <option value="51-100">51-100 units</option>
          <option value="101-250">101-250 units</option>
          <option value="251-500">251-500 units</option>
          <option value="500+">500+ units</option>
        </select>
      </div>
      
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none placeholder:text-muted-foreground"
          placeholder="Tell us about your property and EV charging needs..."
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-white disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Schedule a Call</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      
      <p className="text-xs text-center text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
        {" "}and{" "}
        <a href="#" className="text-primary hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
}
