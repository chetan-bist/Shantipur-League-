import { Container } from '@/components/layout/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MatchCard } from '@/components/cards/MatchCard';
import { TeamCard } from '@/components/cards/TeamCard';
import { NewsCard } from '@/components/cards/NewsCard';
import { StandingsTable } from '@/components/tables/StandingsTable';
import { SponsorGrid } from '@/components/grids/SponsorGrid';
import { matches } from '@/data/matches';
import { teams } from '@/data/teams';
import { news } from '@/data/news';
import { standings } from '@/data/standings';
import { sponsors } from '@/data/sponsors';

export default function Home() {
  const upcomingMatches = matches.filter(m => m.status === 'upcoming').slice(0, 3);
  const featuredNews = news.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Shantipur Champions League"
        subtitle="⚽ Bringing our village together through football. Support our local talent and experience the passion of Shantipur's ultimate football festival!"
        cta={{ label: 'Watch Now', href: '/matches' }}
      />

      {/* Featured Teams Section */}
      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Teams"
            subtitle="Explore all competing teams"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Matches Section */}
      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Upcoming Matches"
            subtitle="Don't miss the next thrilling matchups"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </Container>
      </section>

      {/* Standings Section */}
      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Tournament Standings"
            subtitle="Current league table and team performance"
            className="mb-8"
          />
          <StandingsTable standings={standings} />
        </Container>
      </section>

      {/* Latest News Section */}
      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Latest News"
            subtitle="Stay updated with tournament news and team updates"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Our Sponsors"
            subtitle="Supporting Excellence in Football"
            className="mb-8 text-center"
          />
          <SponsorGrid sponsors={sponsors} />
        </Container>
      </section>
    </>
  );
}
