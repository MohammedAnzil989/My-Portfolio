export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['REST APIs', 'Next.js API Routes', 'Prisma ORM', 'n8n'],
    },
    {
      title: 'Database & Media',
      skills: ['PostgreSQL', 'Neon', 'SQL', 'Cloudinary'],
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'Git', 'GitHub', 'Vercel', 'Postman', 'Microsoft Office'],
    },
  ];

  return (
    <section id="skills" className="pt-6 pb-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
        </div>

        <div className="space-y-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="grid grid-cols-1 md:grid-cols-[13rem_1fr] items-center gap-4 rounded-lg border border-border/40 bg-background/30 p-4 overflow-hidden"
            >
              <h3 className="text-lg font-semibold text-primary md:pl-2">{category.title}</h3>
              <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div
                  className="skill-marquee flex w-max gap-4"
                  style={{
                    animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
                    animationDuration: `${22 + index * 3}s`,
                  }}
                >
                  {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                    <div
                      key={`${skill}-${skillIndex}`}
                      className="flex min-h-14 min-w-36 items-center justify-center p-4 rounded-lg border border-border/40 bg-background/40 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      aria-hidden={skillIndex >= category.skills.length}
                    >
                      <p className="text-sm font-medium text-foreground/80 text-center whitespace-nowrap group-hover:text-primary transition-colors">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
