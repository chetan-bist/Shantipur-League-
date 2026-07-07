import { Topgoalscorer } from '@/data/topgoalscorer';

interface TopgoalscorerTableProps {
  topgoalscorer: Topgoalscorer[];
}

export function TopgoalscorerTable({ topgoalscorer }: TopgoalscorerTableProps) {
  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-surface-light bg-surface">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">#</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Team</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-400">Player</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-400">Goals</th>
            </tr>
          </thead>
          <tbody>
            {topgoalscorer.map((row, idx) => (
              <tr
                key={row.position}
                className={`border-b border-surface-light transition-smooth hover:bg-surface ${
                  idx < 2 ? 'bg-primary/5' : ''
                }`}
              >
                <td className="px-4 py-3 text-sm font-bold text-slate-50">
                  {row.position === 1 && '🥇'}
                  {row.position === 2 && '🥈'}
                  {row.position === 3 && '🥉'}
                  {row.position > 3 && row.position}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-slate-50">{row.teamName}</td>
                <td className="px-4 py-3 text-center text-sm text-slate-400">{row.playerName}</td>
                <td className="px-4 py-3 text-center text-sm font-semibold text-primary">
                  {row.goals}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

