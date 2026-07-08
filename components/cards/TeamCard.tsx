import Link from 'next/link';
import Image from 'next/image';
import { Team } from '@/data/teams';
import { Trophy, Users } from 'lucide-react';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const stats = [
    { label: 'W', value: team.wins },
    { label: 'D', value: team.draws },
    { label: 'L', value: team.losses },
    { label: 'GF', value: team.goalsFor },
    { label: 'GA', value: team.goalsAgainst },
  ];

  return (
    <Link href={`/teams/${team.slug}`}>
      <div className="glass group cursor-pointer rounded-lg p-6 transition-smooth hover:shadow-glow-blue">
        {/* Team Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-50 group-hover:text-primary transition-smooth">
              {team.name}
            </h3>
            <p className="text-sm text-slate-400">Founded {team.founded}</p>
          </div>
          <Image 
            src={team.logo} 
            alt={`${team.name} Logo`} 
            width={80} 
            height={80} 
            className="object-cover"
          />
        </div>

        {/* Coach and Captain */}
        <div className="mb-4 space-y-2 border-b border-surface-light pb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-secondary" />
            <div>
              <p className="text-xs text-slate-400">Coach</p>
              <p className="text-sm font-medium text-slate-50">{team.coach}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-slate-400">Captain</p>
              <p className="text-sm font-medium text-slate-50">{team.captain}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className="text-lg font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Click Hint */}
        <p className="mt-4 text-center text-xs text-secondary group-hover:text-accent transition-smooth">
          View Details →
        </p>
      </div>
    </Link>
  );
}
