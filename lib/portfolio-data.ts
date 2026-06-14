export const profile = {
  name: 'Agung Ahmad Rifai',
  tagline: 'Generalist mind, results-driven builder.',
  role: 'Information Systems Student',
  // TODO: replace with your real GitHub URL
  githubUrl: 'https://github.com/your-username',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

export const aboutParagraphs = [
  "I'm an Information Systems student with a generalist mindset — I like to understand how the whole system fits together, from the database up to the interface. I'm drawn to the space where technology meets real-world problems.",
  'I study at one of the top campuses in the country, where I focus on building software that is practical, reliable, and actually ships. I care more about results than buzzwords.',
  "Whether it's a playful game or a tool that helps a community, I enjoy turning ideas into things people can use.",
]

export type Skill = {
  name: string
  description: string
}

export const skills: Skill[] = [
  {
    name: 'Python',
    description: 'Scripting, automation, data processing, and backend logic.',
  },
  {
    name: 'SQL / Databases',
    description: 'Designing schemas, writing queries, and modeling data.',
  },
  {
    name: 'Java',
    description: 'Object-oriented programming and building structured applications.',
  },
  {
    name: 'Git & GitHub',
    description: 'Version control and collaborating on code with others.',
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Bonappetit',
    description:
      'A pixel-art cooking game inspired by Overcooked. Players juggle orders, timers, and chaos in the kitchen — built to be fast, fun, and a little frantic.',
    tags: ['Game Design', 'Pixel Art', 'Gameplay Logic'],
  },
  {
    name: 'TENXI',
    description:
      'Software for monitoring reforestation efforts in a village. It helps track tree planting progress and growth over time so communities can measure real environmental impact.',
    tags: ['Monitoring', 'Database', 'Social Impact'],
  },
]
