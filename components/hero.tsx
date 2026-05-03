import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100svh-5rem)] flex items-start justify-center overflow-hidden px-4 pt-5 pb-8 sm:pt-6 sm:pb-10 lg:pt-7 lg:pb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-28 right-6 sm:right-16 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-16 left-4 sm:left-12 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-35" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center max-w-6xl w-full">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-primary font-semibold text-sm mb-2">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-[0.98]">
              <span className="text-foreground">Mohammed Anzil</span>
              <span className="text-primary"> M</span>
            </h1>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">Full Stack Developer</h2>
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-md">
              I build production-grade web applications with Next.js, React, Prisma, PostgreSQL, IoT integrations, and real-time dashboards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-0">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:shadow-lg hover:shadow-primary/20 inline-flex items-center justify-center gap-2"
            >
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="pt-1 border-t border-border/40">
            <p className="text-foreground/60 text-sm mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MohammedAnzil989"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-primary/10 border border-border/40 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all text-foreground/70 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/mohammedanzil711"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-primary/10 border border-border/40 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all text-foreground/70 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="mailto:mohammedanzil989@gmail.com"
                className="p-3 rounded-lg hover:bg-primary/10 border border-border/40 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all text-foreground/70 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="group relative flex justify-center items-center py-6 lg:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />
          <div className="absolute w-72 h-72 sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border border-primary/30 transition-all duration-300 group-hover:border-primary/80 group-hover:shadow-lg group-hover:shadow-primary/20" />
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border border-secondary/20 transition-all duration-300 group-hover:border-secondary/60 group-hover:shadow-lg group-hover:shadow-secondary/20" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20">
            <Image
              src="/IMG_1357.PNG"
              alt="Mohammed Anzil M"
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
              className="object-cover object-[center_35%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
