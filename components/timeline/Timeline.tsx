import { TournamentEdition } from '@/data/history';

interface TimelineProps {
  editions: TournamentEdition[];
}

export function Timeline({ editions }: TimelineProps) {
  return (
    <div className="space-y-8">
      {editions.map((edition, idx) => (
        <div key={edition.year} className="flex gap-6 md:gap-8">
          {/* Timeline Line */}
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
              {edition.year}
            </div>
            {idx !== editions.length - 1 && (
              <div className="mt-2 w-1 flex-1 bg-gradient-to-b from-primary/50 to-primary/10" />
            )}
          </div>

          {/* Content */}
          <div className="glass flex-1 rounded-lg p-6 pb-12 md:pb-6">
            <h3 className="mb-4 text-2xl font-bold text-slate-50">Tournament {edition.year}</h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* Champion */}
              <div>
                <p className="mb-2 text-sm text-slate-400">🏆 Champion</p>
                <p className="text-lg font-semibold text-primary">{edition.champion}</p>
              </div>

              {/* Runner Up */}
              <div>
                <p className="mb-2 text-sm text-slate-400">🥈 Runner-up</p>
                <p className="text-lg font-semibold text-accent">{edition.runnerUp}</p>
              </div>

              {/* MVP */}
              <div>
                <p className="mb-2 text-sm text-slate-400">⭐ MVP</p>
                <p className="text-lg font-semibold text-secondary">{edition.mvp}</p>
              </div>

              {/* Best Goalkeeper */}
              <div>
                <p className="mb-2 text-sm text-slate-400">🧤 Best Goalkeeper</p>
                <p className="text-lg font-semibold text-slate-50">{edition.bestGoalkeeper}</p>
              </div>

              {/* Top Scorer */}
              <div className="md:col-span-2">
                <p className="mb-2 text-sm text-slate-400">⚽ Top Scorer</p>
                <p className="text-lg font-semibold text-slate-50">
                  {edition.topScorer} ({edition.topScorerGoals} goals)
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
