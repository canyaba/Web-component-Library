const githubProfile = 'https://github.com/canyaba';
const linkedInProfile = 'https://www.linkedin.com/in/chibuike-anyaba';

export const basicInfo = {
  name: 'Chibuike Anyaba',
  headline:
    'Designing disciplined interfaces and dependable systems with a calm, modern edge',
  location: 'Winnipeg, MB',
  email: 'chibuikeanyaba@gmail.com',
  linkedin: linkedInProfile,
  github: githubProfile,
  bio: 'Full Stack Web Development student focused on frontend implementation, reusable component thinking, and database-backed product work. I gravitate toward interfaces that feel clear, trustworthy, and built with long-term structure in mind.',
};

export const aboutHighlights = [
  {
    title: 'Design Posture',
    detail:
      'I prefer restrained visual systems, clear hierarchy, and interface decisions that hold up under real use rather than quick visual noise.',
  },
  {
    title: 'Working Standard',
    detail:
      'My workflow leans on scoped implementation, debugging discipline, and a steady delivery pace supported by linting, testing, and clean handoff habits.',
  },
  {
    title: 'Assignment Context',
    detail:
      'This portfolio still lives inside a component-library repository, so reusability, Storybook support, and practical architecture are part of the design language.',
  },
];

export const workItems = [
  {
    title: 'FitGear Equipment CMS',
    description:
      'Planned and built a content management system for equipment and category administration. The project focused on dependable CRUD workflows, category-aware structure, and validation that improved daily usability.',
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
      'Applied coursework in web security, databases, Agile delivery, and systems testing across multiple full-stack builds. The result was a stronger standard for implementation structure, reviewability, and release readiness.',
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
      'Worked in a fast-moving retail environment where consistency, customer clarity, and dependable follow-through mattered. That experience sharpened communication, issue handling, and day-to-day execution under pressure.',
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
    'The strongest overlap in my current stack is where interface craftsmanship, backend structure, debugging discipline, and delivery workflow meet.',
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
      'Repository home for source code, version history, and the working record behind portfolio projects.',
    link: githubProfile,
  },
  {
    title: 'LinkedIn',
    icon: 'BadgeCheck',
    summary:
      'Professional profile covering education, experience, and the direction of my current work.',
    link: linkedInProfile,
  },
  {
    title: 'OWASP ZAP',
    icon: 'ShieldCheck',
    summary:
      'Security testing resource that reflects my interest in application validation, review discipline, and safer delivery practices.',
    link: 'https://www.zaproxy.org/',
  },
];

export const devSetup = {
  vscodeSetup:
    'Visual Studio Code configured with ESLint, Prettier, GitHub integration, and Docker tooling for a cleaner day-to-day development rhythm.',
  terminalSetup:
    'Zsh with Oh My Zsh, Git aliases, and Docker CLI for a lightweight, container-aware command-line workflow.',
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
    helper:
      'Code samples, assignment repositories, and a clear record of implementation work.',
  },
  {
    label: 'LinkedIn',
    href: linkedInProfile,
    helper:
      'Professional context, education background, and current career direction.',
  },
  {
    label: 'Supporting Resource',
    href: devSetup.supportingResource.link,
    helper:
      'Reference documentation for packaging, deployment, and production-oriented workflow decisions.',
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
