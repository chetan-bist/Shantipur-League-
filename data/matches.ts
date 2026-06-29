export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  round: string;
}

export const matches: Match[] = [
  // Completed Matches
  {
    id: 1,
    homeTeam: 'Sagarmatha FC',
    awayTeam: 'Tiger Land',
    homeScore: 2,
    awayScore: 1,
    date: '2024-06-15',
    time: '18:00',
    venue: 'Santipur Stadium',
    status: 'completed',
    round: 'Group Stage - Week 1',
  },
  {
    id: 2,
    homeTeam: 'Bhamka FC',
    awayTeam: 'Blue Lock',
    homeScore: 3,
    awayScore: 0,
    date: '2024-06-15',
    time: '16:00',
    venue: 'Eden Gardens',
    status: 'completed',
    round: 'Group Stage - Week 1',
  },
  {
    id: 3,
    homeTeam: 'Real Madrid',
    awayTeam: 'Sagarmatha FC',
    homeScore: 1,
    awayScore: 2,
    date: '2024-06-22',
    time: '18:00',
    venue: 'Eagle Arena',
    status: 'completed',
    round: 'Group Stage - Week 2',
  },
  {
    id: 4,
    homeTeam: 'Tiger Land',
    awayTeam: 'Bhamka FC',
    homeScore: 0,
    awayScore: 1,
    date: '2024-06-22',
    time: '16:00',
    venue: 'Bengal Park',
    status: 'completed',
    round: 'Group Stage - Week 2',
  },
  {
    id: 5,
    homeTeam: 'Blue Lock',
    awayTeam: 'Real Madrid',
    homeScore: 2,
    awayScore: 2,
    date: '2024-06-29',
    time: '18:00',
    venue: 'Victory Grounds',
    status: 'completed',
    round: 'Group Stage - Week 3',
  },
  {
    id: 6,
    homeTeam: 'Bhamka FC',
    awayTeam: 'Sagarmatha FC',
    homeScore: 2,
    awayScore: 2,
    date: '2024-07-06',
    time: '16:00',
    venue: 'Eden Gardens',
    status: 'completed',
    round: 'Group Stage - Week 4',
  },

  // Upcoming Matches
  {
    id: 7,
    homeTeam: 'Sagarmatha FC',
    awayTeam: 'Blue Lock',
    date: '2024-07-13',
    time: '18:00',
    venue: 'Santipur Stadium',
    status: 'upcoming',
    round: 'Group Stage - Week 5',
  },
  {
    id: 8,
    homeTeam: 'Tiger Land',
    awayTeam: 'Real Madrid',
    date: '2024-07-13',
    time: '16:00',
    venue: 'Bengal Park',
    status: 'upcoming',
    round: 'Group Stage - Week 5',
  },
  {
    id: 9,
    homeTeam: 'Bhamka FC',
    awayTeam: 'Real Madrid',
    date: '2024-07-20',
    time: '18:00',
    venue: 'Eden Gardens',
    status: 'upcoming',
    round: 'Semi-Final 1',
  },
  {
    id: 10,
    homeTeam: 'Sagarmatha FC',
    awayTeam: 'Tiger Land',
    date: '2024-07-20',
    time: '16:00',
    venue: 'Santipur Stadium',
    status: 'upcoming',
    round: 'Semi-Final 2',
  },
  {
    id: 11,
    homeTeam: 'Iron Beast',
    awayTeam: 'Blue Lock',
    date: '2024-07-27',
    time: '19:00',
    venue: 'Santipur Grand Stadium',
    status: 'upcoming',
    round: 'Final',
  },
];