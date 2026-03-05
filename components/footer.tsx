import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-foreground"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground font-sans">
                PlugOp
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cost-effective EV charging programs for apartment complexes and
              commercial properties.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Company</h4>
              <nav className="mt-3 flex flex-col gap-2">
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
                <Link
                  href="#solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Solutions
                </Link>
                <Link
                  href="#blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Solutions
              </h4>
              <nav className="mt-3 flex flex-col gap-2">
                <Link
                  href="#solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Apartments
                </Link>
                <Link
                  href="#solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Hospitality
                </Link>
                <Link
                  href="#solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Workplace
                </Link>
                <Link
                  href="#solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Fleet
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PlugOp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
