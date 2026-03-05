import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Unlock EV Charging Tax Credits for Commercial Properties in 2025",
    image: "/images/blog-tax-credits.jpg",
    slug: "#",
  },
  {
    title: "Is Your Project Ready for EV Mandates in 2025?",
    image: "/images/blog-mandates.jpg",
    slug: "#",
  },
  {
    title: "Scalable EV Charging Programs for Apartments",
    image: "/images/blog-scalable.jpg",
    slug: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              From Our Blog
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest Information Updates
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            More from Our Blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-foreground text-balance">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
