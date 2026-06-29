import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'live' | 'upcoming' | 'completed' | 'primary' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-smooth';

  const variantStyles = {
    live: 'animate-pulse-glow bg-error/20 text-error',
    upcoming: 'bg-secondary/20 text-secondary',
    completed: 'bg-primary/20 text-primary',
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary/20 text-secondary',
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
}
