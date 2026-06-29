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
    coach: 'Harish Bhatt',
    captain: 'Ajay Chand',
    logo: '/sagarmathafc-logo.png',
      
    players: [
      { id: 1, name: 'Arun Chand', number: 10, position: 'FWD', age: 28, image: '/placeholder-user.jpg' },
      { id: 2, name: 'Rohan Sharma', number: 7, position: 'MID', age: 26, image: '/placeholder-user.jpg' },
      { id: 3, name: 'Vikram Singh', number: 5, position: 'DEF', age: 30, image: '/placeholder-user.jpg' },
      { id: 4, name: 'Suresh Patel', number: 1, position: 'GK', age: 32, image: '/placeholder-user.jpg' },
      { id: 5, name: 'Nikhil Gupta', number: 9, position: 'FWD', age: 24, image: '/placeholder-user.jpg' },
    ],
    wins: 8,
    draws: 2,
    losses: 4,
    goalsFor: 28,
    goalsAgainst: 14,
  },
  {
    id: 2,
    name: 'Tiger Land',
    slug: 'tiger-land',
    founded: 2026,
    coach: 'Manish Bhatt',
    captain: 'Sourav Bist',
    logo: '/tiger-land-logo.png',
    players: [
      { id: 6, name: 'Sourav Banerjee', number: 11, position: 'FWD', age: 29, image: '/placeholder-user.jpg' },
      { id: 7, name: 'Abhijit Roy', number: 8, position: 'MID', age: 27, image: '/placeholder-user.jpg' },
      { id: 8, name: 'Ravi Sharma', number: 4, position: 'DEF', age: 31, image: '/placeholder-user.jpg' },
      { id: 9, name: 'Deepak Nath', number: 1, position: 'GK', age: 33, image: '/placeholder-user.jpg' },
      { id: 10, name: 'Pradeep Bhat', number: 9, position: 'FWD', age: 25, image: '/placeholder-user.jpg' },
    ],
    wins: 9,
    draws: 1,
    losses: 4,
    goalsFor: 32,
    goalsAgainst: 16,
  },
  {
    id: 3,
    name: 'Bhamka FC',
    slug: 'bhamka-fc',
    founded: 2014,
    coach: 'Sameer Khatri',
    captain: 'Arjun Bist',
    logo: '/bhamkafc-logo.png',
    players: [
      { id: 11, name: 'Akshay Kumar', number: 10, position: 'FWD', age: 27, image: '/placeholder-user.jpg' },
      { id: 12, name: 'Viraj Patel', number: 6, position: 'MID', age: 28, image: '/placeholder-user.jpg' },
      { id: 13, name: 'Harsh Singh', number: 3, position: 'DEF', age: 29, image: '/placeholder-user.jpg' },
      { id: 14, name: 'Jayant Sinha', number: 1, position: 'GK', age: 31, image: '/placeholder-user.jpg' },
      { id: 15, name: 'Samrat Dey', number: 9, position: 'FWD', age: 26, image: '/placeholder-user.jpg' },
    ],
    wins: 7,
    draws: 3,
    losses: 4,
    goalsFor: 25,
    goalsAgainst: 17,
  },
  {
    id: 4,
    name: 'Blue Lock',
    slug: 'blue-lock',
    founded: 2026,
    coach: 'Aryan Giri',
    captain: 'Devraj Bohara',
    logo: '/blue-luckfc-logo.png',
    players: [
      { id: 16, name: 'Mohit Singh', number: 10, position: 'FWD', age: 26, image: '/placeholder-user.jpg' },
      { id: 17, name: 'Dhruv Reddy', number: 7, position: 'MID', age: 25, image: '/placeholder-user.jpg' },
      { id: 18, name: 'Rajesh Kumar', number: 5, position: 'DEF', age: 32, image: '/placeholder-user.jpg' },
      { id: 19, name: 'Arjun Nair', number: 1, position: 'GK', age: 28, image: '/placeholder-user.jpg' },
      { id: 20, name: 'Siddharth Roy', number: 9, position: 'FWD', age: 23, image: '/placeholder-user.jpg' },
    ],
    wins: 6,
    draws: 4,
    losses: 4,
    goalsFor: 22,
    goalsAgainst: 18,
  },
  {
    id: 5,
    name: 'Real Madrid',
    slug: 'real-madrid',
    founded: 2026,
    coach: 'Golu Khadka',
    captain: 'Sagar Bhatt',
    logo: '/real-madridfc-logo.png',
    players: [
      { id: 21, name: 'Varun Mehta', number: 10, position: 'FWD', age: 24, image: '/placeholder-user.jpg' },
      { id: 22, name: 'Karan Desai', number: 8, position: 'MID', age: 26, image: '/placeholder-user.jpg' },
      { id: 23, name: 'Ashok Nath', number: 4, position: 'DEF', age: 30, image: '/placeholder-user.jpg' },
      { id: 24, name: 'Sumer Sharma', number: 1, position: 'GK', age: 29, image: '/placeholder-user.jpg' },
      { id: 25, name: 'Raghav Singh', number: 9, position: 'FWD', age: 22, image: '/placeholder-user.jpg' },
    ],
    wins: 5,
    draws: 3,
    losses: 6,
    goalsFor: 18,
    goalsAgainst: 21,
  },
  {
    id: 6,
    name: 'Iron Beast',
    slug: 'iron-beast',
    founded: 2026,
    coach: 'Khagendra Saud',
    captain: 'Puskar Bhatt',
    logo: '/iron-beastfc-logo.png',
    players: [
      { id: 26, name: 'Varun Mehta', number: 10, position: 'FWD', age: 24, image: '/placeholder-user.jpg' },
      { id: 27, name: 'Karan Desai', number: 8, position: 'MID', age: 26, image: '/placeholder-user.jpg' },
      { id: 28, name: 'Ashok Nath', number: 4, position: 'DEF', age: 30, image: '/placeholder-user.jpg' },
      { id: 29, name: 'Sumer Sharma', number: 1, position: 'GK', age: 29, image: '/placeholder-user.jpg' },
      { id: 30, name: 'Raghav Singh', number: 9, position: 'FWD', age: 22, image: '/placeholder-user.jpg' },
    ],
    wins: 2,
    draws: 3,
    losses: 6,
    goalsFor: 18,
    goalsAgainst: 21,
  },
];
