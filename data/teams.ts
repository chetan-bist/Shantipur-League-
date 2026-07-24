export interface Player {
  id: number;
  name: string;
  number: number;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  age: number;
  image?: string;
}

export interface Team {
  id: number;
  name: string;
  slug: string;
  founded: number;
  coach: string;
  captain: string;
  players: Player[];
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  logo: string;
}

export const teams: Team[] = [
  {
    id: 1,
    name: 'Sagarmatha FC',
    slug: 'sagarmatha-fc',
    founded: 2026,
    coach: 'none',
    captain: 'Nitesh',
    logo: '/sagarmathafc-logo.png',
      
    players: [
      { id: 1, name: 'Nitesh', number: 7, position: 'FWD', age: 19, image: '/placeholder-user.jpg' },
      { id: 2, name: 'Bikram', number: 17, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 3, name: 'Anish', number: 6, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 4, name: 'Sandesh', number: 1, position: 'GK', age: 19, image: '/placeholder-user.jpg' },
      { id: 5, name: 'Shahil', number: 9, position: 'DEF', age: 19, image: '/placeholder-user.jpg' },
      { id: 6, name: 'jenish', number: 19, position: 'DEF', age: 17, image: '/placeholder-user.jpg' },
      { id: 7, name: 'Binish', number: 5, position: 'DEF', age: 14, image: '/placeholder-user.jpg' },
      { id: 30, name: 'gyanu', number: 10, position: 'DEF', age: 25, image: '/placeholder-user.jpg' },
    ],
    wins: 3,
    draws: 0,
    losses: 3,
    goalsFor: 11,
    goalsAgainst: 12,
  },
  {
    id: 2,
    name: 'Tiger Land FC',
    slug: 'tiger-land',
    founded: 2026,
    coach: 'none',
    captain: 'Bipin',
    logo: '/tiger-land-logo.png',
    players: [
      { id: 6, name: 'Bipin', number: 11, position: 'FWD', age: 18, image: '/placeholder-user.jpg' },
      { id: 7, name: 'Shishir', number: 8, position: 'MID', age: 16, image: '/placeholder-user.jpg' },
      { id: 8, name: 'Bhuwan', number: 4, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 9, name: 'Ankush', number: 1, position: 'GK', age: 19, image: '/placeholder-user.jpg' },
      { id: 10, name: 'Dev', number: 9, position: 'FWD', age: 18, image: '/placeholder-user.jpg' },
      { id: 20, name: 'Nishant', number: 10, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 21, name: 'Rishav', number: 17, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 22, name: 'Harish', number: 7, position: 'MID', age: 22, image: '/placeholder-user.jpg' },
    ],
    wins: 1,
    draws: 1,
    losses: 3,
    goalsFor: 6,
    goalsAgainst: 15,
  },
  {
    id: 3,
    name: 'Bhamka FC',
    slug: 'bhamka-fc',
    founded: 2026,
    coach: 'none',
    captain: 'Dhirendra',
    logo: '/bhamkafc-logo.png',
    players: [
      { id: 11, name: 'Dhirendra', number: 1, position: 'GK', age: 20, image: '/placeholder-user.jpg' },
      { id: 12, name: 'Bihesh', number: 6, position: 'MID', age: 19, image: '/placeholder-user.jpg' },
      { id: 13, name: 'Jiwan', number: 3, position: 'DEF', age: 19, image: '/placeholder-user.jpg' },
      { id: 14, name: 'Aayush', number: 11, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 15, name: 'Aalish', number: 9, position: 'FWD', age: 16, image: '/placeholder-user.jpg' },
      { id: 16, name: 'Nikhil', number: 19, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 17, name: 'Dibhakar', number: 8, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 18, name: 'Nipurna', number: 10, position: 'FWD', age: 23, image: '/placeholder-user.jpg' },
    ],
    wins: 1,
    draws: 1,
    losses: 2,
    goalsFor: 7,
    goalsAgainst: 10,
  },
  {
    id: 4,
    name: 'Blue Lock FC',
    slug: 'blue-lock-fc',
    founded: 2026,
    coach: 'none',
    captain: 'Anuj',
    logo: '/blue-luckfc-logo.png',
    players: [
      { id: 16, name: 'Anuj', number: 10, position: 'FWD', age: 17, image: '/placeholder-user.jpg' },
      { id: 17, name: 'Chandra', number: 7, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 18, name: 'Aashish', number: 5, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 19, name: 'Harish', number: 1, position: 'DEF', age: 17, image: '/placeholder-user.jpg' },
      { id: 20, name: 'Anish', number: 4, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 21, name: 'bijay', number: 17, position: 'DEF', age: 16, image: '/placeholder-user.jpg' },
      { id: 22, name: 'Nabin', number: 11, position: 'DEF', age: 16, image: '/placeholder-user.jpg' },
      { id: 23, name: 'Gaji', number: 9, position: 'FWD', age: 27, image: '/placeholder-user.jpg' },
    ],
    wins: 6,
    draws: 0,
    losses: 0,
    goalsFor: 21,
    goalsAgainst: 4,
  },
  {
    id: 5,
    name: 'Ghatal Baba FC',
    slug: 'ghatal-baba-fc',
    founded: 2026,
    coach: 'none',
    captain: 'Rohit',
    logo: '/ghatalbabafc-logo.png',
    players: [
      { id: 21, name: 'Rohit', number: 10, position: 'FWD', age: 18, image: '/placeholder-user.jpg' },
      { id: 22, name: 'Harish', number: 8, position: 'MID', age: 16, image: '/placeholder-user.jpg' },
      { id: 23, name: 'Dipesh', number: 4, position: 'DEF', age: 15, image: '/placeholder-user.jpg' },
      { id: 24, name: 'Abash', number: 9, position: 'DEF', age: 17, image: '/placeholder-user.jpg' },
      { id: 25, name: 'Nirdesh', number: 1, position: 'GK', age: 16, image: '/placeholder-user.jpg' },
      { id: 20, name: 'Aidam', number: 5, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 26, name: 'Sandip', number: 17, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 28, name: 'Shirish', number: 7, position: 'FWD', age: 26, image: '/placeholder-user.jpg' },
    ],
    wins: 5,
    draws: 0,
    losses: 1,
    goalsFor: 21,
    goalsAgainst: 10,
  },
  {
    id: 6,
    name: 'Iron Beast FC',
    slug: 'iron-beast-fc',
    founded: 2026,
    coach: 'none',
    captain: 'Sonu',
    logo: '/iron-beastfc-logo.png',
    players: [
      { id: 26, name: 'Sonu', number: 10, position: 'MID', age: 20, image: '/placeholder-user.jpg' },
      { id: 27, name: 'Rohan', number: 8, position: 'FWD', age: 19, image: '/placeholder-user.jpg' },
      { id: 28, name: 'piush', number: 4, position: 'DEF', age: 17, image: '/placeholder-user.jpg' },
      { id: 29, name: 'Bindi', number: 11, position: 'MID', age: 17, image: '/placeholder-user.jpg' },
      { id: 30, name: 'Nitesh', number: 9, position: 'DEF', age: 18, image: '/placeholder-user.jpg' },
      { id: 31, name: 'Aryan', number: 5, position: 'DEF', age: 19, image: '/placeholder-user.jpg' },
      { id: 32, name: 'Dipesh', number: 19, position: 'MID', age: 18, image: '/placeholder-user.jpg' },
      { id: 33, name: 'Chetan', number: 1, position: 'GK', age: 24, image: '/iron-player1.jpg' },
    ],
    wins: 0,
    draws: 0,
    losses: 4,
    goalsFor: 2,
    goalsAgainst: 15,
  },
];
