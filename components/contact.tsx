import Image from "next/image";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex flex-col lg:flex-row">
            <div className="relative hidden lg:block lg:w-2/5">
              <Image
                src="/images/ev-charger-hilliard.jpg"
                alt="EV charger installed at an apartment complex"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            <div className="flex-1 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Reach out to learn more
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl text-balance">
                Build a Scalable Charging Program
              </h2>
              <p className="mt-3 text-muted-foreground">
                Schedule a 30-minute, no obligation call with our team!
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
