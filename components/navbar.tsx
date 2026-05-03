'use client';

import { type MouseEvent, useState } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);

    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mohammed Anzil Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-0 py-4 flex items-center justify-between">
        <Link href="#home" className="text-lg sm:text-xl font-bold rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="text-foreground">&lt;/&gt; </span>
          <span className="text-primary">Mohammed Anzil M</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-primary focus-visible:text-primary focus-visible:outline-none transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume"
            onClick={handleResumeClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors text-sm font-medium"
          >
            Resume
            <Download className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border/40 bg-background px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-foreground/70 hover:text-primary focus-visible:text-primary focus-visible:outline-none transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume"
            onClick={handleResumeClick}
            className="block px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors text-sm font-medium mt-4"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
