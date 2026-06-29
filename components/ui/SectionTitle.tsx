import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h2 className="text-3xl font-bold text-slate-50 md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="text-slate-400">{subtitle}</p>}
    </div>
  );
}
