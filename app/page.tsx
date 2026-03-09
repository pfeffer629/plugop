import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoMarquee from "@/components/logo-marquee";
import Features from "@/components/features";
import Solutions from "@/components/solutions";
import UserInterface from "@/components/user-interface";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <LogoMarquee />
        <Features />
        <Solutions />
        <UserInterface />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
