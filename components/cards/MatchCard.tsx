import { Match } from '@/data/matches';
import { Badge } from '@/components/ui/Badge';
import { format, parseISO } from 'date-fns';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const isCompleted = match.status === 'completed';
  const isLive = match.status === 'live';
  const isUpcoming = match.status === 'upcoming';

  return (
    <div className="glass rounded-lg p-6 transition-smooth hover:shadow-glow">
      {/* Badge */}
      <div className="mb-4 flex items-center justify-between">
        <Badge variant={match.status as any}>{match.status.toUpperCase()}</Badge>
        <span className="text-xs text-slate-400">{match.round}</span>
      </div>

      {/* Teams and Score */}
      <div className="space-y-4">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-50">{match.homeTeam}</span>
          {isCompleted && (
            <span className="text-2xl font-bold text-primary">{match.homeScore}</span>
          )}
        </div>

        {/* VS Divider */}
        <div className="relative flex items-center gap-3">
          <div className="flex-1 border-t border-surface-light" />
          <span className="text-sm text-slate-400">vs</span>
          <div className="flex-1 border-t border-surface-light" />
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-50">{match.awayTeam}</span>
          {isCompleted && (
            <span className="text-2xl font-bold text-secondary">{match.awayScore}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-surface-light pt-4">
        <p className="text-xs text-slate-400">
          {format(parseISO(match.date), 'MMM dd, yyyy')} at {match.time}
        </p>
        <p className="text-xs text-slate-400">{match.venue}</p>
      </div>
    </div>
  );
}
