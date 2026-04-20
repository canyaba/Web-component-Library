import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroFrame } from './HeroFrame';

const meta: Meta<typeof HeroFrame> = {
  title: 'Portfolio/HeroFrame',
  component: HeroFrame,
};

export default meta;

type Story = StoryObj<typeof HeroFrame>;

export const Default: Story = {
  args: {
    eyebrow: 'Home',
    name: 'Chibuike Anyaba',
    headline:
      'Designing disciplined interfaces and dependable systems with a calm, modern edge',
    description:
      'Full Stack Web Development student focused on frontend implementation, reusable component thinking, and database-backed product work.',
    tags: ['Winnipeg, MB', 'Component systems', 'Production-aware workflow'],
    primaryAction: {
      href: '#projects',
      label: 'View Projects',
    },
    secondaryAction: {
      href: '#contact',
      label: 'Contact Me',
    },
    metrics: [
      {
        label: 'Primary Focus',
        value: 'Frontend systems',
        detail:
          'Interfaces with stronger structure, clearer spacing, and more dependable implementation.',
      },
      {
        label: 'Working Style',
        value: 'Calm and deliberate',
        detail:
          'Clean hierarchy, restrained visuals, and practical delivery habits.',
      },
    ],
  },
};
