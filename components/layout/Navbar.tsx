'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { NAV_LINKS } from '@/lib/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="sticky top-0 z-50 glass border-b border-surface-light">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-smooth">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            {/* यहाँ तपाईंको लोगो इमेज थपिएको छ */}
            <Image 
              src="/scl-logo.png" // तपाईंको इमेजको सही Path यहाँ राख्नुहोस्
              alt="SCL Logo" 
              width={40} 
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold gradient-text">SCL</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-smooth hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-smooth hover:bg-surface-light"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        )}
      </Container>

      {/* Mobile Navigation */}
      {isMobile && isOpen && (
        <div className="border-t border-surface-light bg-surface">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-smooth hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
}
