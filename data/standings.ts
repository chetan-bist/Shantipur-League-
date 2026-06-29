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
    teamName: 'Sagarmatha FC',
    played: 4,
    wins: 9,
    draws: 1,
    losses: 4,
    goalsFor: 32,
    goalsAgainst: 16,
    goalDifference: 16,
    points: 28,
  },
  {
    position: 2,
    teamName: 'Tiger Land',
    played: 4,
    wins: 8,
    draws: 2,
    losses: 4,
    goalsFor: 28,
    goalsAgainst: 14,
    goalDifference: 14,
    points: 26,
  },
  {
    position: 3,
    teamName: 'Bhamka FC',
    played: 4,
    wins: 7,
    draws: 3,
    losses: 4,
    goalsFor: 25,
    goalsAgainst: 17,
    goalDifference: 8,
    points: 24,
  },
  {
    position: 4,
    teamName: 'Blue Lock',
    played: 4,
    wins: 6,
    draws: 4,
    losses: 4,
    goalsFor: 22,
    goalsAgainst: 18,
    goalDifference: 4,
    points: 22,
  },
  {
    position: 5,
    teamName: 'Real Madrid',
    played: 4,
    wins: 5,
    draws: 3,
    losses: 6,
    goalsFor: 18,
    goalsAgainst: 21,
    goalDifference: -3,
    points: 18,
  },
  {
    position: 6,
    teamName: 'Iron Beast',
    played: 4,
    wins: 2,
    draws: 3,
    losses: 6,
    goalsFor: 18,
    goalsAgainst: 21,
    goalDifference: -3,
    points: 9,
  },
];
