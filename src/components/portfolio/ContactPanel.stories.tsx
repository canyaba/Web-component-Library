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
      'I am open to internship and junior opportunities where thoughtful product work, clean implementation, and steady collaboration are valued.',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/canyaba',
        helper:
          'Code samples, component-library work, and active project history.',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chibuike-anyaba',
        helper: 'Professional background, education, and current direction.',
      },
      {
        label: 'Supporting Resource',
        href: 'https://docs.docker.com/',
        helper: 'Packaging and deployment-oriented reference material.',
      },
    ],
  },
};
