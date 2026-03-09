"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Unlock EV Charging Tax Credits for Commercial Properties in 2025",
    excerpt: "Learn how to take advantage of federal and state incentives to offset your EV infrastructure costs.",
    category: "Tax Credits",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Is Your Project Ready for EV Mandates in 2025?",
    excerpt: "New building codes require EV-ready infrastructure. Here's what property developers need to know.",
    category: "Regulations",
    date: "Mar 10, 2025",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "Scalable EV Charging Programs for Apartments",
    excerpt: "How to design an EV charging program that grows with your residents' needs.",
    category: "Best Practices",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    slug: "#",
  },
];

export default function Blog() {
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
    <section ref={sectionRef} id="blog" className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-sm font-medium text-primary">Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Latest from Our Blog
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay informed with the latest insights on EV charging, regulations, and best practices.
            </p>
          </div>
          
          <Link
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-sm font-semibold text-foreground hover:border-primary/20 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href={post.slug}
              className={`group premium-card overflow-hidden ${isInView ? "animate-fade-up opacity-0" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Category header */}
              <div className="p-6 pb-0">
                <span className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
