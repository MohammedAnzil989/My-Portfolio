'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Lock, Maximize2, Maximize, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  isClientProject?: boolean;
  liveLink?: string;
  githubLink?: string;
}

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'SML Oil Care (Yanthra Dhana Raksha)',
      description:
        'Smart IoT oil condition monitoring and predictive maintenance platform providing real-time telemetry, machine health tracking, and automated threshold alerts.',
      tech: ['Next.js', 'IoT Telemetry', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
      image: '/project-1.jpg',
      video: '/smloilcare.mp4',
      isClientProject: true,
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Orange Surgicals Ecommerce',
      description:
        'Full-stack ecommerce platform with product listing, cart interactions, secure data handling, and optimized Cloudinary image delivery.',
      tech: ['Next.js', 'Prisma ORM', 'Neon', 'PostgreSQL', 'Cloudinary'],
      image: '/project-2.jpg',
      video: '/orange%20surgicals.mp4',
      isClientProject: true,
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
              className="group rounded-xl border border-border/40 bg-background overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              {/* Project Video / Image - Optimized Ambient Frame */}
              {project.video ? (
                <div
                  onClick={() =>
                    setSelectedVideo({
                      url: project.video!,
                      title: project.title,
                    })
                  }
                  className="relative aspect-video w-full bg-neutral-950 overflow-hidden cursor-pointer group/video flex items-center justify-center select-none"
                  title="Click to view full video"
                >
                  {/* Ambient Blurred Video Glow (eliminates empty black bars) */}
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-125 pointer-events-none"
                  />

                  {/* Main Crisp Video (100% visible, no crop, no cut off) */}
                  <video
                    key={project.video}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover/video:scale-[1.02]"
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 z-20 bg-black/20 group-hover/video:bg-black/35 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover/video:opacity-100 transition-opacity bg-black/80 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-xl border border-white/20">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to expand</span>
                    </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-2 right-2 z-20 p-1.5 rounded-md bg-black/60 text-white/90 backdrop-blur-xs pointer-events-none">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 min-h-[3.5rem]">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.isClientProject && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <Lock className="w-3 h-3" />
                      Client Project (NDA)
                    </span>
                  )}
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed flex-1 min-h-[4rem]">
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

                {/* Links (for non-video projects) */}
                {!project.video && (project.liveLink !== '#' || project.githubLink !== '#') && (
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

      {/* Video Modal / Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl bg-card border border-border/70 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-border/50 bg-background/90">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                <h4 className="font-semibold text-foreground text-sm sm:text-base md:text-lg truncate">
                  {selectedVideo.title}
                </h4>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={toggleFullScreen}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-muted hover:bg-accent text-foreground transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium border border-border/50"
                  title="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-lg bg-muted hover:bg-accent text-foreground transition-colors cursor-pointer border border-border/50"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Container - Optimized for Ultrawide & 16:9 */}
            <div className="w-full bg-black flex items-center justify-center overflow-hidden max-h-[78vh]">
              <video
                ref={videoRef}
                key={selectedVideo.url}
                src={selectedVideo.url}
                controls
                autoPlay
                playsInline
                className="w-full h-auto max-h-[78vh] object-contain bg-black"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-muted/40 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
              <span className="truncate">Client project demonstration • Full resolution</span>
              <span className="hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border">Esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
