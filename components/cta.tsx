export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-y border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Let&apos;s work together</h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
          I&apos;m available for full-stack development roles and production web application work.
        </p>

        <a
          href="mailto:mohammedanzil989@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-lg"
        >
          Contact Me
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
