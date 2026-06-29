import { Sponsor } from '@/data/sponsors';
import { Badge } from '@/components/ui/Badge';

interface SponsorGridProps {
  sponsors: Sponsor[];
}

export function SponsorGrid({ sponsors }: SponsorGridProps) {
  const sponsorsByCategory = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.category]) {
      acc[sponsor.category] = [];
    }
    acc[sponsor.category].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const categoryOrder = ['Title', 'Platinum', 'Gold', 'Silver'];

  return (
    <div className="space-y-8">
      {categoryOrder.map((category) => (
        sponsorsByCategory[category] && (
          <div key={category}>
            <h3 className="mb-4 text-lg font-semibold text-slate-400">
              <Badge variant="secondary">{category}</Badge>
            </h3>
            <div className={`grid gap-4 ${
              category === 'Title' ? 'grid-cols-1' :
              category === 'Platinum' ? 'sm:grid-cols-2' :
              'sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {sponsorsByCategory[category].map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="glass flex flex-col items-center justify-center rounded-lg p-6 text-center transition-smooth hover:shadow-glow"
                >
                  <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">S</span>
                  </div>
                  <h4 className="font-semibold text-slate-50">{sponsor.name}</h4>
                  <p className="text-sm text-slate-400">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}
