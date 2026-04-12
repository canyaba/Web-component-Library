import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ContactPanel } from './ContactPanel';

const meta: Meta<typeof ContactPanel> = {
  title: 'Portfolio/ContactPanel',
  component: ContactPanel,
};

export default meta;

type Story = StoryObj<typeof ContactPanel>;

export const Default: Story = {
  args: {
    email: 'chibuikeanyaba@gmail.com',
    intro:
      'I am open to internship and junior front-end opportunities where I can contribute to product work and grow in a strong engineering environment.',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/canyaba',
        helper: 'Code samples and active project history.',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chibuike-anyaba',
        helper: 'Professional background and education.',
      },
      {
        label: 'Resume Resource',
        href: 'https://docs.docker.com/',
        helper: 'Deployment-oriented learning reference.',
      },
    ],
  },
};
