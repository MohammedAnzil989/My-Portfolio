import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Digital Twin Motor Telemetry',
      description: 'Real-time dashboard for motor speed, temperature, pressure, vibration, and load with API-driven telemetry and Three.js visualization.',
      tech: ['Next.js', 'Three.js', 'Prisma ORM', 'PostgreSQL', 'Postman'],
      image: '/project-1.jpg',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Orange Surgicals Ecommerce',
      description: 'Full-stack ecommerce platform with product listing, cart interactions, secure data handling, and optimized Cloudinary image delivery.',
      tech: ['Next.js', 'Prisma ORM', 'Neon', 'PostgreSQL', 'Cloudinary'],
      image: '/project-2.jpg',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'PharmaChain Cold Chain',
      description: 'IoT and blockchain-based monitoring system for temperature, humidity, shock tracking, QR/NFC verification, and delivery compliance.',
      tech: ['IoT', 'Blockchain', 'REST APIs', 'QR/NFC', 'Next.js'],
      image: '/project-3.jpg',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="pt-10 pb-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-border/40 bg-background overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.liveLink !== '#' || project.githubLink !== '#') && (
                  <div className="flex gap-3 pt-4 border-t border-border/40">
                    {project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        className="flex-1 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary/10 transition-all text-center"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
