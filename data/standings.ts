export interface Standings {
  position: number;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export const standings: Standings[] = [
   {
    position: 1,
    teamName: 'Blue Lock FC',
    played: 4,
    wins: 4,
    draws: 0,
    losses: 0,
    goalsFor: 13,
    goalsAgainst: 2,
    goalDifference: 11,
    points: 12,
  },
  {
    position: 2,
    teamName: 'Ghatal Baba FC',
    played: 4,
    wins: 3,
    draws: 0,
    losses: 1,
    goalsFor: 14,
    goalsAgainst: 8,
    goalDifference: 6,
    points: 9,
  },
   {
    position: 3,
    teamName: 'Sagarmatha FC',
    played: 4,
    wins: 2,
    draws: 0,
    losses: 2,
    goalsFor: 9,
    goalsAgainst: 7,
    goalDifference: 2,
    points: 6,
  },
   {
    position: 4,
    teamName: 'Bhamka FC',
    played: 4,
    wins: 1,
    draws: 1,
    losses: 2,
    goalsFor: 7,
    goalsAgainst: 10,
    goalDifference: -3,
    points: 4,
  },
  {
    position: 5,
    teamName: 'Tiger Land FC',
    played: 4,
    wins: 1,
    draws: 1,
    losses: 2,
    goalsFor: 4,
    goalsAgainst: 7,
    goalDifference: -3,
    points: 4,
  },
  {
    position: 6,
    teamName: 'Iron Beast FC',
    played: 4,
    wins: 0,
    draws: 0,
    losses: 4,
    goalsFor: 2,
    goalsAgainst: 15,
    goalDifference: -13,
    points: 0,
  },
];
