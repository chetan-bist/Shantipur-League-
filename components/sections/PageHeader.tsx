import { Container } from '@/components/layout/Container';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <section className="border-b border-surface-light bg-gradient-to-b from-surface to-background py-12 md:py-16">
      <Container>
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-slate-50 md:text-4xl">
              <span className="gradient-text">{title}</span>
            </h1>
            {description && <p className="mt-2 text-slate-400">{description}</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}
