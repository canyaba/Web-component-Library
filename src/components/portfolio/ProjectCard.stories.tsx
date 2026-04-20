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
      'Database-backed business CMS with stronger CRUD structure, validation, and a cleaner administrative experience.',
    image: 'https://placehold.co/800x600/0c0f14/c4cfdb?text=Project+Preview',
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
