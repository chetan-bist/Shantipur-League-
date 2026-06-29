'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { MatchCard } from '@/components/cards/MatchCard';
import { matches } from '@/data/matches';
import { Trophy } from 'lucide-react';

type FilterTab = 'upcoming' | 'completed';

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('upcoming');

  const displayedMatches = matches.filter(m => m.status === activeTab);

  return (
    <>
      <PageHeader
        title="Matches"
        description="View all tournament matches, results, and fixtures"
        icon="🏟️"
      />

      <section className="py-16 md:py-20">
        <Container>
          {/* Tabs */}
          <div className="mb-8 flex gap-4 border-b border-surface-light">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-3 font-semibold transition-smooth ${
                activeTab === 'upcoming'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-400 hover:text-slate-50'
              }`}
            >
              Upcoming Fixtures ({matches.filter(m => m.status === 'upcoming').length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-3 font-semibold transition-smooth ${
                activeTab === 'completed'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-400 hover:text-slate-50'
              }`}
            >
              Results ({matches.filter(m => m.status === 'completed').length})
            </button>
          </div>

          {/* Matches Grid */}
          {displayedMatches.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedMatches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg bg-surface py-16 text-center">
              <Trophy className="mb-4 h-12 w-12 text-slate-400 opacity-50" />
              <p className="text-slate-400">No matches found in this category</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
