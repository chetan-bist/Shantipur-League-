import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Zap } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
}

export function HeroSection({ title, subtitle, cta }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Zap className="h-4 w-4" />
              ⚽ Welcome to Shantipur Local Tournament
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            <span className="gradient-text">{title}</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-lg text-slate-400 md:text-xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {cta && (
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-smooth hover:shadow-glow hover:scale-105"
              >
                {cta.label}
                <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-semibold text-primary transition-smooth hover:bg-primary/10"
              >
                Learn More
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
