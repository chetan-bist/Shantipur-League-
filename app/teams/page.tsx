import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { TeamCard } from '@/components/cards/TeamCard';
import { teams } from '@/data/teams';

export default function TeamsPage() {
  return (
    <>
      <PageHeader
        title="Teams"
        description="Explore all the competing teams in the tournament"
        icon="⚽"
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
