import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-light bg-surface py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                    {/* यहाँ तपाईंको लोगो इमेज थपिएको छ */}
                      <Image 
                        src="/scl-logo.png" // तपाईंको इमेजको सही Path यहाँ राख्नुहोस्
                         alt="SCL Logo" 
                          width={40} 
                          height={40}
                          className="object-cover"
                      />
                  </div>
              <span className="font-bold text-slate-50 gradient-text">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-slate-400">
              ⚽Bringing our village together through football. Support our local talent and experience the passion of Shantipur's ultimate football festival!.
            </p>
          </div>

          {/* Tournament */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-50">Tournament</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.tournament.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-smooth hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-50">Contact</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-smooth hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-50">Follow Us</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.social.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-smooth hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-surface-light" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Designed with passion for football enthusiasts worldwide
          </p>
        </div>
      </Container>
    </footer>
  );
}
