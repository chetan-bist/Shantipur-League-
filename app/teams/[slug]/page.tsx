'use client';

import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { teams } from '@/data/teams';
import { matches } from '@/data/matches';
import { standings } from '@/data/standings';
import { POSITIONS } from '@/lib/constants';
import { Trophy, Users, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';

interface TeamDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = use(params);
  const [activeTab, setActiveTab] = useState<'matches' | 'table' | 'squad'>('matches');

  const team = teams.find(t => t.slug === slug);

  if (!team) {
    notFound();
  }

  const teamMatches = matches.filter(
    m => m.homeTeam === team.name || m.awayTeam === team.name
  );

  const teamStanding = standings.find(s => s.teamName === team.name);

  return (
    <>
      <PageHeader
        title={team.name}
        description={`Founded in ${team.founded}`}
        icon="🏆"
      />

      <section className="py-16 md:py-20">
        <Container className="space-y-12">
          {/* Team Stats */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Coach and Captain */}
            <div className="glass space-y-4 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-slate-50">Leadership</h2>
              <div className="space-y-4 border-t border-surface-light pt-4">
                <div>
                  <p className="text-sm text-slate-400">Head Coach</p>
                  <p className="text-lg font-semibold text-slate-50">{team.coach}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Team Captain</p>
                  <p className="text-lg font-semibold text-primary">{team.captain}</p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="glass space-y-4 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-slate-50">Season Stats</h2>
              <div className="grid grid-cols-2 gap-4 border-t border-surface-light pt-4">
                <div>
                  <p className="text-sm text-slate-400">Wins</p>
                  <p className="text-2xl font-bold text-primary">{team.wins}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Draws</p>
                  <p className="text-2xl font-bold text-accent">{team.draws}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Losses</p>
                  <p className="text-2xl font-bold text-error">{team.losses}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Goals For</p>
                  <p className="text-2xl font-bold text-secondary">{team.goalsFor}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="glass rounded-lg p-6">
            <div className="flex gap-4 border-b border-surface-light pb-4">
              <button
                onClick={() => setActiveTab('matches')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-smooth ${
                  activeTab === 'matches'
                    ? 'bg-primary text-slate-900'
                    : 'text-slate-400 hover:bg-surface hover:text-slate-50'
                }`}
              >
                <Calendar className="h-4 w-4" />
                Matches
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-smooth ${
                  activeTab === 'table'
                    ? 'bg-primary text-slate-900'
                    : 'text-slate-400 hover:bg-surface hover:text-slate-50'
                }`}
              >
                <Trophy className="h-4 w-4" />
                Table
              </button>
              <button
                onClick={() => setActiveTab('squad')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-smooth ${
                  activeTab === 'squad'
                    ? 'bg-primary text-slate-900'
                    : 'text-slate-400 hover:bg-surface hover:text-slate-50'
                }`}
              >
                <Users className="h-4 w-4" />
                Squad
              </button>
            </div>

            {/* Tab Content */}
            <div className="border-t border-surface-light pt-6">
              {/* Matches Tab */}
              {activeTab === 'matches' && (
                <div className="space-y-3">
                  {teamMatches.length > 0 ? (
                    teamMatches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-3 hover:bg-surface/30 rounded-lg transition-smooth">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-50">
                            {match.homeTeam}  vs {match.awayTeam}
                          </p>
                          <p className="text-xs text-slate-400">{match.round}</p>
                        </div>
                        {match.status === 'completed' && (
                          <div className="text-right">
                            <p className="text-lg font-bold text-slate-50">
                              {match.homeScore} - {match.awayScore}
                            </p>
                          </div>
                        )}
                        {match.status !== 'completed' && (
                          <div className="text-right">
                            <p className="text-xs font-semibold text-secondary">UPCOMING</p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">No matches found</p>
                  )}
                </div>
              )}

              {/* Table Tab */}
              {activeTab === 'table' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-50">League Standings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-surface">
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">Pos</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-slate-400">Team</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">P</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">W</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">D</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">L</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">GD</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standings.map((standing) => (
                          <tr
                            key={standing.position}
                            className={`border-t border-surface-light transition-smooth ${
                              standing.teamName === team.name ? 'bg-primary/10' : 'hover:bg-surface/50'
                            }`}
                          >
                            <td className="px-4 py-3 text-center text-sm font-semibold text-primary">{standing.position}</td>
                            <td className="px-4 py-3 text-sm font-medium text-slate-50">
                              {standing.teamName === team.name ? (
                                <span className="text-primary font-bold">{standing.teamName}</span>
                              ) : (
                                standing.teamName
                              )}
                            </td>
                            <td className="px-4 py-3 text-center text-sm text-slate-400">{standing.played}</td>
                            <td className="px-4 py-3 text-center text-sm text-slate-400">{standing.wins}</td>
                            <td className="px-4 py-3 text-center text-sm text-slate-400">{standing.draws}</td>
                            <td className="px-4 py-3 text-center text-sm text-slate-400">{standing.losses}</td>
                            <td className={`px-4 py-3 text-center text-sm font-semibold ${standing.goalDifference >= 0 ? 'text-primary' : 'text-error'}`}>
                              {standing.goalDifference > 0 ? '+' : ''}{standing.goalDifference}
                            </td>
                            <td className="px-4 py-3 text-center text-sm font-bold text-accent">{standing.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Squad Tab */}
              {activeTab === 'squad' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-surface">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-400">Image</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-400">#</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-400">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-400">Position</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-slate-400">Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.players.map((player) => (
                        <tr key={player.id} className="border-t border-surface-light hover:bg-surface/50 transition-smooth">
                          <td className="px-4 py-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-surface">
                              <img
                                src={player.image || '/placeholder-user.jpg'}
                                alt={player.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-primary">{player.number}</td>
                          <td className="px-4 py-3 text-sm font-medium text-slate-50">{player.name}</td>
                          <td className="px-4 py-3 text-sm text-slate-400">
                            {POSITIONS[player.position as keyof typeof POSITIONS]}
                          </td>
                          <td className="px-4 py-3 text-center text-sm text-slate-400">{player.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}