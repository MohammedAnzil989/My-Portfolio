export default function About() {
  return (
    <section id="about" className="pt-8 pb-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Full-Stack Developer with 1.5+ years of experience building and deploying web applications using Next.js, React.js, TypeScript, Prisma ORM, and PostgreSQL.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Experienced in REST API integration, database schema modeling, role-based dashboards, and full-stack deployment on Vercel. Focused on clean architecture, performance optimization, and scalable code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg border border-border/40 bg-background/50 p-5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
                <p className="text-primary text-sm font-semibold mb-2">Education</p>
                <h3 className="font-bold text-foreground">BSc Computer Science</h3>
                <p className="text-foreground/70 text-sm mt-1">Manonmaniam Sundaranar University, Tamil Nadu</p>
                <p className="text-foreground/60 text-sm mt-2">CGPA 7.9 | 2020 - 2023</p>
              </div>
              <div className="rounded-lg border border-border/40 bg-background/50 p-5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
                <p className="text-primary text-sm font-semibold mb-2">Certification</p>
                <h3 className="font-bold text-foreground">Frontend Developer Certification</h3>
                <p className="text-foreground/70 text-sm mt-1">Greens Technologies</p>
                <p className="text-foreground/60 text-sm mt-2">2024</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors pt-4"
            >
              Know More About Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-border/40 bg-background/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <h3 className="font-semibold">Name</h3>
              </div>
              <p className="text-foreground/70 ml-8">Mohammed Anzil M</p>
            </div>

            <div className="p-4 rounded-lg border border-border/40 bg-background/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-foreground/70 ml-8 break-all">mohammedanzil989@gmail.com</p>
            </div>

            <div className="p-4 rounded-lg border border-border/40 bg-background/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-foreground/70 ml-8">Nagercoil, Tamil Nadu, India</p>
            </div>

            <div className="p-4 rounded-lg border border-border/40 bg-background/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                <h3 className="font-semibold">Availability</h3>
              </div>
              <p className="text-primary ml-8 font-semibold">Open to Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
