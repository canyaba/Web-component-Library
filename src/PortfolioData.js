const githubProfile = 'https://github.com/canyaba';
const linkedInProfile = 'https://www.linkedin.com/in/chibuike-anyaba';

export const basicInfo = {
  name: 'Chibuike Anyaba',
  headline:
    'Frontend-focused developer building clean systems and reliable interfaces',
  location: 'Winnipeg, MB',
  email: 'chibuikeanyaba@gmail.com',
  linkedin: linkedInProfile,
  github: githubProfile,
  bio: 'Full Stack Web Development student with hands-on experience building database-driven applications, reusable UI work, and maintainable delivery workflows. I approach product work with a bias for clarity, structured implementation, and practical engineering polish.',
};

export const aboutHighlights = [
  {
    title: 'Current Focus',
    detail:
      'Building frontend projects that balance interface quality, maintainable structure, and deployment readiness.',
  },
  {
    title: 'Workflow',
    detail:
      'Comfortable working through scoped requirements, iterative delivery, debugging, and team-oriented Agile practices.',
  },
  {
    title: 'Component Library Context',
    detail:
      'This portfolio lives inside a UI component library assignment, so reusability and Storybook support remain part of the design approach.',
  },
];

export const workItems = [
  {
    title: 'FitGear Equipment CMS',
    description:
      'Planned and built a local-business content management system for equipment and category management. Added validation, CRUD workflows, and category-driven views to improve accuracy and day-to-day usability.',
    image:
      'https://placehold.co/800x600/0f172a/93c5fd?text=FitGear+Equipment+CMS',
    link: githubProfile,
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'SQL',
      'XAMPP',
      'phpMyAdmin',
    ],
  },
  {
    title: 'Academic Full-Stack Projects',
    description:
      'Applied diploma coursework in web security, databases, Agile delivery, and systems testing across multiple full-stack assignments. The work strengthened implementation discipline and delivery structure across academic projects.',
    image:
      'https://placehold.co/800x600/111827/60a5fa?text=Full-Stack+Coursework',
    link: linkedInProfile,
    techList: [
      'Agile',
      'SCRUM',
      'Kanban',
      'Web Security',
      'Database Design',
      'Testing',
    ],
  },
  {
    title: 'Sales Associate Operations',
    description:
      'Supported retail operations by clarifying customer needs, resolving issues, investigating discrepancies, and escalating when needed. Strengthened communication, problem solving, and dependable execution in a fast-paced environment.',
    image:
      'https://placehold.co/800x600/172554/93c5fd?text=Operations+%26+Support',
    link: linkedInProfile,
    techList: [
      'Customer Support',
      'Problem Solving',
      'Team Communication',
      'Inventory Review',
    ],
  },
];

export const skills = {
  description:
    'The current stack is strongest where interface implementation, database-backed systems, debugging, and delivery workflow overlap.',
  languagesAndFrameworks: [
    'JavaScript',
    'PHP',
    'Python',
    'Ruby',
    'SQL',
    'HTML',
    'CSS',
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Docker',
    'XAMPP',
    'phpMyAdmin',
    'PostgreSQL',
    'VirtualBox',
    'OWASP ZAP',
    'MS Excel',
    'MS PowerPoint',
  ],
};

export const resources = [
  {
    title: 'GitHub',
    icon: 'FolderGit2',
    summary:
      'Repository home for source code, version history, and portfolio project links.',
    link: githubProfile,
  },
  {
    title: 'LinkedIn',
    icon: 'BadgeCheck',
    summary:
      'Professional profile covering education, experience, and career direction.',
    link: linkedInProfile,
  },
  {
    title: 'OWASP ZAP',
    icon: 'ShieldCheck',
    summary:
      'Security testing resource that aligns with my coursework in web security and application validation.',
    link: 'https://www.zaproxy.org/',
  },
];

export const devSetup = {
  vscodeSetup:
    'Visual Studio Code with ESLint, Prettier, GitHub integration, and Docker tooling enabled for a consistent development workflow.',
  terminalSetup:
    'Zsh with Oh My Zsh, Git aliases, and Docker CLI for container-first workflows.',
  preferredEditorFont: 'Fira Code',
  supportingResource: {
    title: 'Docker Documentation',
    summary:
      'Reference material for containerization, production packaging, and deployment-ready build workflows.',
    link: 'https://docs.docker.com/',
  },
};

export const contactActions = [
  {
    label: 'GitHub',
    href: githubProfile,
    helper: 'Code samples, assignment repos, and active project history.',
  },
  {
    label: 'LinkedIn',
    href: linkedInProfile,
    helper: 'Professional profile, education context, and career direction.',
  },
  {
    label: 'Supporting Resource',
    href: devSetup.supportingResource.link,
    helper: 'Reference documentation for packaging and deployment workflows.',
  },
];

const portfolioData = {
  basicInfo,
  aboutHighlights,
  workItems,
  skills,
  resources,
  devSetup,
  contactActions,
};

export default portfolioData;
