import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { NewsCard } from '@/components/cards/NewsCard';
import { news } from '@/data/news';

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News"
        description="Latest updates and stories from the tournament"
        icon="📰"
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
