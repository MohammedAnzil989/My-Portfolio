export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Full-Stack Developer',
      company: 'SM Marine Advanced Gearboxs India Private Limited, Nagercoil',
      period: 'July 2026 - Present',
      current: true,
      highlights: [
        'Developed responsive frontend interfaces for SML Oil Care, a marine engine oil-service management platform using Next.js and React.js.',
        'Built role-based dashboards for customers, technicians, chief technicians, toll operators, and administrators.',
        'Integrated FastAPI and supported backend development, GitLab version control, and deployment to staging and production using Vercel.',
      ],
    },
    {
      id: 2,
      role: 'Full-Stack Developer',
      company: 'MATT Engineering Solutions, Nagercoil',
      period: 'Feb 2025 - July 2026',
      current: false,
      highlights: [
        'Built responsive React.js and Next.js applications, reducing average page load time by about 30% through code splitting and lazy loading.',
        'Designed and integrated 10+ REST API endpoints with Next.js API Routes and Prisma ORM for dynamic production data.',
        'Collaborated with a cross-functional team to deliver clean Tailwind CSS interfaces and improve UI consistency across 3 projects.',
        'Deployed and maintained Vercel applications with cross-browser compatibility across Chrome, Firefox, and Safari.',
        'Automated internal workflows with n8n, reducing manual data handling time for the team.',
      ],
    },
  ];

  return (
    <section id="experience" className="pt-14 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM10 7V5h4v2" />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-border/40 bg-card/50 p-6 sm:p-8 hover:border-primary/40 transition-colors shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-semibold mt-1">{exp.company}</p>
                </div>
                <p className="text-foreground/60 font-medium shrink-0">{exp.period}</p>
              </div>

              <ul className="space-y-4">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="group flex gap-3 rounded-lg px-2 py-1 text-foreground/75 leading-relaxed transition-all duration-300 hover:bg-primary/5 hover:text-foreground hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_14px_var(--primary)]" />
                    <span className="transition-colors duration-300 group-hover:text-primary">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
