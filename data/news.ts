export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Match Report' | 'Interview' | 'Tournament Update' | 'Team News';
}

export const news: NewsArticle[] = [
  {
    id: 1,
    title: 'Kolkata Kickers Dominate Victory Warriors in Thrilling Encounter',
    slug: 'kolkata-kickers-dominate-victory-warriors',
    excerpt: 'Kolkata Kickers secured a convincing 3-0 victory over Victory Warriors in an impressive display of attacking football.',
    content: `In a spectacular performance on June 15th, Kolkata Kickers demonstrated their championship credentials with a dominant 3-0 victory over Victory Warriors at Eden Gardens. 

The match saw Kolkata's attacking prowess on full display, with goals from Sourav Banerjee, Abhijit Roy, and a stunning free-kick from Pradeep Bhat. Victory Warriors fought hard but couldn't breach Kolkata's solid defense.

Coach Amit Das praised his team's performance: "This was a complete team effort. Our midfield controlled the game and our defense was impenetrable. This is the kind of football we need to play in the tournament."

The victory puts Kolkata Kickers at the top of the standings with 28 points, cementing their position as strong contenders for the championship.`,
    author: 'Ravi Sharma',
    date: '2024-06-16',
    category: 'Match Report',
  },
  {
    id: 2,
    title: 'Santipur United\'s Captain Arnab Das Speaks on Championship Ambitions',
    slug: 'arnab-das-championship-ambitions',
    excerpt: 'Santipur United captain Arnab Das opens up about the team\'s goals and the intensity of competition in this year\'s tournament.',
    content: `In an exclusive interview, Santipur United captain Arnab Das shared his thoughts on the Santipur Champions League and the team's aspirations.

"Every team here is world-class, and we know that every match is crucial," Das said. "We have the talent and the determination to go all the way. Our chemistry as a team has improved significantly, and we believe we can compete with anyone."

When asked about the fierce rivalry between teams, Das remained diplomatic: "Rivalries push us to be better. We respect every opponent and approach each match with the intensity it deserves. The Champions League is about bringing out the best in every player."

The captain also highlighted the importance of team support: "Our fans have been incredible. Their energy gives us the motivation to perform at our best."

Das will be looking to lead his team to victory in their upcoming match against Victory Warriors on July 13th.`,
    author: 'Priya Patel',
    date: '2024-06-17',
    category: 'Interview',
  },
  {
    id: 3,
    title: 'Tournament Reaches Crucial Group Stage - Week 5 Preview',
    slug: 'group-stage-week-5-preview',
    excerpt: 'As the tournament reaches its climax in the group stage, tensions are mounting with every team fighting for a semi-final spot.',
    content: `The Santipur Champions League is entering a critical phase as we approach Week 5 of the group stage. With every team having played four matches, the race for the top positions is heating up.

Current Standings:
1. Kolkata Kickers - 28 points
2. Santipur United - 26 points
3. Bengal Tigers - 24 points
4. Victory Warriors - 22 points
5. Eastern Eagles - 18 points

The competition remains incredibly tight, with only 6 points separating first and fourth place. The upcoming fixtures will determine who advances to the semi-finals and who faces elimination.

This week's must-watch matches:
- Santipur United vs Victory Warriors (July 13, 18:00)
- Bengal Tigers vs Eastern Eagles (July 13, 16:00)

These matches are expected to be highly competitive, with each team desperate for the three points to secure their semi-final position.

Tournament organizers have confirmed that the semi-finals will take place on July 20th, followed by the grand final on July 27th at Santipur Grand Stadium.`,
    author: 'Vikram Singh',
    date: '2024-06-18',
    category: 'Tournament Update',
  },
  {
    id: 4,
    title: 'Bengal Tigers Announce New Training Facility Opening',
    slug: 'bengal-tigers-new-training-facility',
    excerpt: 'Bengal Tigers officially open their state-of-the-art training facility to enhance player development and performance.',
    content: `Bengal Tigers have announced the grand opening of their new state-of-the-art training facility in Kolkata. The facility features multiple practice pitches, a gym, recovery center, and advanced sports science laboratories.

The facility will significantly enhance the team's preparation and player development programs. Coach Sanjay Mishra expressed his enthusiasm: "This new facility represents our commitment to excellence. Our players now have world-class amenities to train and recover, which will directly translate to better performances on the pitch."

The training facility is equipped with:
- 3 professional-grade practice pitches
- Modern gym and strength training center
- Recovery and physiotherapy center
- Video analysis room
- Medical facilities

The opening ceremony was attended by tournament organizers and several prominent football personalities from the region. This investment demonstrates Bengal Tigers' ambitions to become one of the premier teams in Asian football.`,
    author: 'Amit Kumar',
    date: '2024-06-19',
    category: 'Team News',
  },
  {
    id: 5,
    title: 'Young Star Varun Mehta Impresses in Eastern Eagles\' Recent Performances',
    slug: 'varun-mehta-eastern-eagles-star',
    excerpt: 'Eastern Eagles\' young captain Varun Mehta has been turning heads with his exceptional performances in recent matches.',
    content: `Eastern Eagles captain Varun Mehta has emerged as one of the tournament's most exciting young talents. Despite the team's challenging position in the standings, Mehta's performances have garnered praise from analysts and opponents alike.

At just 24 years old, Mehta has demonstrated exceptional technical skills, vision, and leadership qualities. His ability to change the tempo of the game and create scoring opportunities has made him a pivotal player for Eastern Eagles.

"Varun represents the future of Eastern Eagles and potentially Indian football," said an anonymous senior tournament official. "His work ethic, intelligence, and passion for the game are exceptional for his age."

Eastern Eagles coaching staff has been utilizing Mehta's talent to create a more attacking style of play. With the semi-finals approaching, Mehta will be crucial in the team's efforts to overturn their current position and make a strong push for the championship.

The young star will be looking to deliver a standout performance in the team's final group-stage matches to secure their semi-final berth.`,
    author: 'Neha Desai',
    date: '2024-06-20',
    category: 'Team News',
  },
  {
    id: 6,
    title: 'Defensive Masterclass: How Santipur United Shut Down Bengal Tigers',
    slug: 'santipur-defense-masterclass',
    excerpt: 'Santipur United\'s defense put on a commanding display to secure a 2-1 victory against Bengal Tigers in a match that showcased tactical excellence.',
    content: `On June 15th, Santipur United and Bengal Tigers produced an exciting encounter that was decided by superior defensive organization and clinical finishing.

Despite Bengal Tigers' attacking ambitions, Santipur United\'s defense remained solid throughout the match. Defender Vikram Singh orchestrated a disciplined backline that minimized scoring opportunities for the opposition.

"This was about understanding our opponents' strengths and nullifying them," said coach Rajesh Kumar. "Our defenders were excellent. Vikram Singh and the entire back four communicated well and prevented Bengal Tigers from creating clear-cut chances."

Santipur's attacking play was equally impressive, with captain Arnab Das and Nikhil Gupta combining well to create the goals that secured the three points.

This defensive performance set the tone for Santipur United's strong tournament campaign, with the team currently sitting in second place in the standings.

Upcoming Focus:
Santipur United will look to maintain this defensive solidity while continuing to develop their attacking play as they prepare for the crucial Week 5 fixtures.`,
    author: 'Ravi Sharma',
    date: '2024-06-16',
    category: 'Match Report',
  },
];
