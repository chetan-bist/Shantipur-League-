import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn about the Santipur Champions League"
        icon="ℹ️"
      />

      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <div className="space-y-8">
            {/* Mission */}
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-slate-50">
                  <span className="gradient-text">Our Mission</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  The Santipur Champions League is dedicated to promoting excellence in football and providing a platform for the finest teams in the region to showcase their skills. We believe in the power of sport to inspire, unite, and transform communities.
                </p>
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="mb-4 font-semibold text-slate-50">Key Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-slate-400">Promote competitive football at the highest level</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-slate-400">Develop young talent and provide opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-slate-400">Foster team spirit and community engagement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-slate-400">Deliver world-class entertainment and experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tournament Format */}
      <section className="border-b border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Tournament Format"
            subtitle="How the championship works"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass rounded-lg p-6">
              <div className="mb-3 text-3xl">🏟️</div>
              <h3 className="mb-2 font-bold text-slate-50">Group Stage</h3>
              <p className="text-sm text-slate-400">
                All teams compete in a round-robin format where each team plays every other team once.
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="mb-3 text-3xl">🥊</div>
              <h3 className="mb-2 font-bold text-slate-50">Semi-Finals</h3>
              <p className="text-sm text-slate-400">
                Top teams advance to knockout semi-finals for an exciting battle to reach the championship.
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="mb-3 text-3xl">🏆</div>
              <h3 className="mb-2 font-bold text-slate-50">Grand Final</h3>
              <p className="text-sm text-slate-400">
                The two best teams face off in the grand final to claim the championship title.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Get in Touch"
            subtitle="Have questions? We'd love to hear from you"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email */}
            <div className="glass flex flex-col items-center rounded-lg p-6 text-center">
              <div className="mb-4 rounded-lg bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-slate-50">Email</h3>
              <a
                href="mailto:info@santipurchampions.com"
                className="text-sm text-slate-400 hover:text-primary transition-smooth"
              >
                info@santipurchampions.com
              </a>
            </div>

            {/* Phone */}
            <div className="glass flex flex-col items-center rounded-lg p-6 text-center">
              <div className="mb-4 rounded-lg bg-secondary/10 p-3">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 font-bold text-slate-50">Phone</h3>
              <a
                href="Phone:9847537376"
                className="text-sm text-slate-400 hover:text-secondary transition-smooth"
              >
                9847537376
              </a>
            </div>

            {/* Location */}
            <div className="glass flex flex-col items-center rounded-lg p-6 text-center">
              <div className="mb-4 rounded-lg bg-accent/10 p-3">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-bold text-slate-50">Location</h3>
              <p className="text-sm text-slate-400">
                Santipur, Mahendranagar, kanchanpur<br />Nepal
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="border-t border-surface-light py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Meet the Team"
            subtitle="The people behind the tournament"
            className="mb-8"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Rajesh Kumar', role: 'Tournament Director' },
              { name: 'Priya Patel', role: 'Operations Manager' },
              { name: 'Amit Singh', role: 'Media & Communications' },
              { name: 'Neha Desai', role: 'Team Coordinator' },
            ].map((member) => (
              <div key={member.name} className="glass rounded-lg p-6 text-center">
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 mx-auto" />
                <h3 className="font-bold text-slate-50">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
