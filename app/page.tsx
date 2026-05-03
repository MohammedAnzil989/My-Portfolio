import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
