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
    teamName: 'Bhamka FC',
    played: 1,
    wins: 1,
    draws: 0,
    losses: 0,
    goalsFor: 4,
    goalsAgainst: 0,
    goalDifference: 4,
    points: 2,
  },
  {
    position: 2,
    teamName: 'Ghatal Baba FC',
    played: 1,
    wins: 1,
    draws: 0,
    losses: 0,
    goalsFor: 3,
    goalsAgainst: 2,
    goalDifference: 1,
    points: 2,
  },
   {
    position: 3,
    teamName: 'Blue Lock',
    played: 1,
    wins: 1,
    draws: 0,
    losses: 0,
    goalsFor: 2,
    goalsAgainst: 1,
    goalDifference: 1,
    points: 2,
  },
  {
    position: 4,
    teamName: 'Sagarmatha FC',
    played: 1,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 2,
    goalsAgainst: 3,
    goalDifference: -1,
    points: 0,
  },
  {
    position: 5,
    teamName: 'Tiger Land',
    played: 1,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 1,
    goalsAgainst: 2,
    goalDifference: -1,
    points: 0,
  },
  {
    position: 6,
    teamName: 'Iron Beast',
    played: 1,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 0,
    goalsAgainst: 4,
    goalDifference: -4,
    points: 0,
  },
];
