import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { news } from '@/data/news';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = news.find(n => n.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = news.filter(
    n => n.id !== article.id && n.category === article.category
  ).slice(0, 3);

  return (
    <>
      <PageHeader
        title={article.title}
        description={article.excerpt}
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <article className="glass space-y-6 rounded-lg p-8">
                {/* Article Metadata */}
                <div className="flex flex-wrap items-center gap-4 border-b border-surface-light pb-6">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {format(parseISO(article.date), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <User className="h-4 w-4" />
                    By {article.author}
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none space-y-4">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-slate-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Article Info */}
              <div className="glass rounded-lg p-6">
                <h3 className="mb-4 font-bold text-slate-50">Article Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-slate-400">Category</p>
                    <p className="font-semibold text-slate-50">{article.category}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Published</p>
                    <p className="font-semibold text-slate-50">
                      {format(parseISO(article.date), 'MMMM dd, yyyy')}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Author</p>
                    <p className="font-semibold text-slate-50">{article.author}</p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="glass rounded-lg p-6">
                  <h3 className="mb-4 font-bold text-slate-50">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => (
                      <a
                        key={related.id}
                        href={`/news/${related.slug}`}
                        className="block p-2 rounded-lg hover:bg-surface/30 transition-smooth group"
                      >
                        <p className="text-sm font-medium text-slate-50 group-hover:text-primary transition-smooth line-clamp-2">
                          {related.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {format(parseISO(related.date), 'MMM dd')}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
