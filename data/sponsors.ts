export interface Sponsor {
  id: number;
  name: string;
  category: 'Title' | 'Platinum' | 'Gold' | 'Silver';
  description: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'SportVision India',
    category: 'Title',
    description: 'Leading sports management and media company',
  },
  {
    id: 2,
    name: 'Elite Nutrition',
    category: 'Platinum',
    description: 'Premium sports nutrition and supplementation',
  },
  {
    id: 3,
    name: 'TechGear Sports',
    category: 'Platinum',
    description: 'High-performance sports equipment manufacturer',
  },
  {
    id: 4,
    name: 'CloudForce Analytics',
    category: 'Gold',
    description: 'Advanced performance analytics platform',
  },
  {
    id: 5,
    name: 'Zenith Energy Drinks',
    category: 'Gold',
    description: 'Official energy drink partner',
  },
  {
    id: 6,
    name: 'AthletiCare Medical',
    category: 'Gold',
    description: 'Sports medicine and physiotherapy services',
  },
  {
    id: 7,
    name: 'Champion Apparel',
    category: 'Silver',
    description: 'Official kit and apparel supplier',
  },
  {
    id: 8,
    name: 'Stadium Solutions',
    category: 'Silver',
    description: 'Premium venue management services',
  },
  {
    id: 9,
    name: 'Digital Dreams Broadcasting',
    category: 'Silver',
    description: 'Tournament broadcasting and media partner',
  },
];
