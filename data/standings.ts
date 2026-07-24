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
    played: 6,
    wins: 6,
    draws: 0,
    losses: 0,
    goalsFor: 21,
    goalsAgainst: 4,
    goalDifference: 17,
    points: 18,
  },
  {
    position: 2,
    teamName: 'Ghatal Baba FC',
    played: 6,
    wins: 5,
    draws: 0,
    losses: 1,
    goalsFor: 21,
    goalsAgainst: 10,
    goalDifference: 11,
    points: 15,
  },
   {
    position: 3,
    teamName: 'Sagarmatha FC',
    played: 6,
    wins: 3,
    draws: 0,
    losses: 3,
    goalsFor: 11,
    goalsAgainst: 12,
    goalDifference: -1,
    points: 9,
  },
  {
    position: 4,
    teamName: 'Tiger Land FC',
    played: 6,
    wins: 1,
    draws: 1,
    losses: 3,
    goalsFor: 6,
    goalsAgainst: 15,
    goalDifference: -9,
    points: 5,
  },
   {
    position: 5,
    teamName: 'Bhamka FC',
    played: 5,
    wins: 1,
    draws: 1,
    losses: 2,
    goalsFor: 7,
    goalsAgainst: 10,
    goalDifference: -3,
    points: 4,
  },
  
  {
    position: 6,
    teamName: 'Iron Beast FC',
    played: 5,
    wins: 0,
    draws: 0,
    losses: 4,
    goalsFor: 2,
    goalsAgainst: 15,
    goalDifference: -13,
    points: 0,
  },
];
