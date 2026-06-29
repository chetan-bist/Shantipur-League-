export interface TournamentEdition {
  year: number;
  champion: string;
  runnerUp: string;
  mvp: string;
  bestGoalkeeper: string;
  topScorer: string;
  topScorerGoals: number;
}

export const tournamentHistory: TournamentEdition[] = [
  {
    year: 2020,
    champion: 'Eastern Eagles',
    runnerUp: 'Kolkata Kickers',
    mvp: 'Avinash Rao',
    bestGoalkeeper: 'Sumer Sharma',
    topScorer: 'Varun Mehta',
    topScorerGoals: 12,
  },
  {
    year: 2021,
    champion: 'Bengal Tigers',
    runnerUp: 'Santipur United',
    mvp: 'Akshay Kumar',
    bestGoalkeeper: 'Jayant Sinha',
    topScorer: 'Samrat Dey',
    topScorerGoals: 14,
  },
  {
    year: 2022,
    champion: 'Victory Warriors',
    runnerUp: 'Eastern Eagles',
    mvp: 'Vikram Verma',
    bestGoalkeeper: 'Arjun Nair',
    topScorer: 'Mohit Singh',
    topScorerGoals: 11,
  },
  {
    year: 2023,
    champion: 'Santipur United',
    runnerUp: 'Kolkata Kickers',
    mvp: 'Rajesh Kumar',
    bestGoalkeeper: 'Suresh Patel',
    topScorer: 'Arnab Das',
    topScorerGoals: 13,
  },
];
