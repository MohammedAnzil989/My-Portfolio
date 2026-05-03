export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-foreground tracking-tight">
            Mohammed Anzil M.
          </span>
          <span className="text-xs text-foreground/50">
            Copyright {currentYear} - Built with Next.js &amp; Tailwind CSS
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/MohammedAnzil989"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-foreground/60 border border-border/40 rounded-lg hover:border-border/70 hover:text-foreground transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/mohammedanzil711"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-foreground/60 border border-border/40 rounded-lg hover:border-border/70 hover:text-foreground transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="mailto:mohammedanzil989@gmail.com"
            aria-label="Email"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-foreground/60 border border-border/40 rounded-lg hover:border-border/70 hover:text-foreground transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
