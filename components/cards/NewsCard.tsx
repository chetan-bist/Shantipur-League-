import Link from 'next/link';
import { NewsArticle } from '@/data/news';
import { Badge } from '@/components/ui/Badge';
import { format, parseISO } from 'date-fns';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${article.slug}`}>
      <div className="glass group cursor-pointer rounded-lg p-6 transition-smooth hover:shadow-glow">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {format(parseISO(article.date), 'MMM dd')}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold text-slate-50 group-hover:text-primary transition-smooth line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 text-sm text-slate-400 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-surface-light pt-4">
          <p className="text-xs text-slate-400">By {article.author}</p>
          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-smooth" />
        </div>
      </div>
    </Link>
  );
}
