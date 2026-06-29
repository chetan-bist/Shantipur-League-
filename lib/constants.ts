export const COLORS = {
  primary: '#10b981', // Emerald Green
  secondary: '#3b82f6', // Blue
  background: '#0f172a', // Dark slate
  surface: '#1e293b', // Slate 800
  surfaceLight: '#334155', // Slate 700
  text: '#f1f5f9', // Slate 100
  textSecondary: '#cbd5e1', // Slate 300
  accent: '#06b6d4', // Cyan
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  white: '#ffffff',
  black: '#000000',
};

export const TYPOGRAPHY = {
  fontSans: 'font-sans',
  fontMono: 'font-mono',
};

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const SITE_NAME = 'Santipur Champions League';
export const SITE_DESCRIPTION = 'Premier football tournament showcasing the finest teams in the region. Live matches, standings, news, and more.';
export const SITE_URL = 'https://santipur-champions.vercel.app';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Matches', href: '/matches' },
  { label: 'Teams', href: '/teams' },
  { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
];

export const FOOTER_LINKS = {

  tournament: [
    { label: 'About Tournament', href: '/about' },
    { label: 'History', href: '/history' },
    { label: 'Rules & Regulations', href: '/about' },
  ],
  contact: [
    { label: 'Email: info@santipurchampions.com', href: 'mailto:info@santipurchampions.com' },
    { label: 'Phone: +91-33-2468-1234', href: 'tel:+913324681234' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com/santipurchampions' },
    { label: 'Twitter', href: 'https://twitter.com/santipurchampions' },
    { label: 'Instagram', href: 'https://instagram.com/santipurchampions' },
    { label: 'YouTube', href: 'https://youtube.com/@santipurchampions' },
  ],
};

export const POSITIONS = {
  GK: 'Goalkeeper',
  DEF: 'Defender',
  MID: 'Midfielder',
  FWD: 'Forward',
};

export const MATCH_STATUS = {
  upcoming: 'Upcoming',
  live: 'LIVE',
  completed: 'Completed',
};
