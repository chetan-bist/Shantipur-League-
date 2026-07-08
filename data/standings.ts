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
    teamName: 'Ghatal Baba FC',
    played: 2,
    wins: 2,
    draws: 0,
    losses: 0,
    goalsFor: 8,
    goalsAgainst: 3,
    goalDifference: 5,
    points: 6,
  },
   {
    position: 2,
    teamName: 'Blue Lock FC',
    played: 2,
    wins: 2,
    draws: 0,
    losses: 0,
    goalsFor: 5,
    goalsAgainst: 2,
    goalDifference: 3,
    points: 6,
  },
   {
    position: 3,
    teamName: 'Bhamka FC',
    played: 2,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 5,
    goalsAgainst: 3,
    goalDifference: 2,
    points: 3,
  },
  {
    position: 4,
    teamName: 'Sagarmatha FC',
    played: 2,
    wins: 1,
    draws: 0,
    losses: 1,
    goalsFor: 5,
    goalsAgainst: 3,
    goalDifference: 2,
    points: 3,
  },
  {
    position: 5,
    teamName: 'Tiger Land FC',
    played: 2,
    wins: 0,
    draws: 0,
    losses: 2,
    goalsFor: 1,
    goalsAgainst: 5,
    goalDifference: -4,
    points: 0,
  },
  {
    position: 6,
    teamName: 'Iron Beast FC',
    played: 2,
    wins: 0,
    draws: 0,
    losses: 2,
    goalsFor: 1,
    goalsAgainst: 9,
    goalDifference: -8,
    points: 0,
  },
];
