import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'FitGear Equipment CMS',
    description:
      'Database-backed business CMS with validation, CRUD flows, and a cleaner admin experience.',
    image: 'https://placehold.co/800x600/0f172a/93c5fd?text=Project+Preview',
    link: 'https://github.com/canyaba',
    techList: ['PHP', 'JavaScript', 'SQL', 'XAMPP'],
  },
};

export const Featured: Story = {
  args: {
    ...Default.args,
    featured: true,
  },
};
