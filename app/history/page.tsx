import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Timeline } from '@/components/timeline/Timeline';
import { tournamentHistory } from '@/data/history';

export default function HistoryPage() {
  const sortedHistory = [...tournamentHistory].sort((a, b) => b.year - a.year);

  return (
    <>
      <PageHeader
        title="Tournament History"
        description="A look back at past Santipur Champions League tournaments"
        icon="📚"
      />

      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Past Championships"
            subtitle="Relive the glory moments from previous tournaments"
            className="mb-12"
          />
          <Timeline editions={sortedHistory} />
        </Container>
      </section>

      {/* Tournament Stats */}
      <section className="border-t border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Tournament Statistics"
            subtitle="Historic achievements and records"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {/* Most Championships */}
            <div className="glass space-y-2 rounded-lg p-6">
              <p className="text-sm text-slate-400">Most Championships</p>
              <p className="text-3xl font-bold text-primary">Santipur United</p>
              <p className="text-xs text-slate-400">1 championship</p>
            </div>

            {/* Appearances */}
            <div className="glass space-y-2 rounded-lg p-6">
              <p className="text-sm text-slate-400">Total Editions</p>
              <p className="text-3xl font-bold text-secondary">{tournamentHistory.length}</p>
              <p className="text-xs text-slate-400">Since 2020</p>
            </div>

            {/* Total Matches Played */}
            <div className="glass space-y-2 rounded-lg p-6">
              <p className="text-sm text-slate-400">Top Scorer Record</p>
              <p className="text-3xl font-bold text-accent">14</p>
              <p className="text-xs text-slate-400">Goals in a season (2021)</p>
            </div>

            {/* Highest Scoring Final */}
            <div className="glass space-y-2 rounded-lg p-6">
              <p className="text-sm text-slate-400">Tournament MVPs</p>
              <p className="text-3xl font-bold text-accent">4</p>
              <p className="text-xs text-slate-400">Different winners</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
