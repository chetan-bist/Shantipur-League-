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
    played: 3,
    wins: 3,
    draws: 0,
    losses: 0,
    goalsFor: 9,
    goalsAgainst: 2,
    goalDifference: 7,
    points: 9,
  },
   {
    position: 2,
    teamName: 'Sagarmatha FC',
    played: 3,
    wins: 2,
    draws: 0,
    losses: 1,
    goalsFor: 9,
    goalsAgainst: 3,
    goalDifference: 6,
    points: 6,
  },
  {
    position: 3,
    teamName: 'Ghatal Baba FC',
    played: 3,
    wins: 2,
    draws: 0,
    losses: 1,
    goalsFor: 8,
    goalsAgainst: 7,
    goalDifference: 1,
    points: 6,
  },
  
   {
    position: 4,
    teamName: 'Bhamka FC',
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    goalsFor: 6,
    goalsAgainst: 4,
    goalDifference: 2,
    points: 4,
  },
 
  {
    position: 5,
    teamName: 'Tiger Land FC',
    played: 3,
    wins: 0,
    draws: 1,
    losses: 2,
    goalsFor: 2,
    goalsAgainst: 6,
    goalDifference: -4,
    points: 1,
  },
  {
    position: 6,
    teamName: 'Iron Beast FC',
    played: 3,
    wins: 0,
    draws: 0,
    losses: 3,
    goalsFor: 1,
    goalsAgainst: 13,
    goalDifference: -12,
    points: 0,
  },
];
