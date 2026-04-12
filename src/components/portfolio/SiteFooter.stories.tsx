import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { SiteFooter } from './SiteFooter';

const meta: Meta<typeof SiteFooter> = {
  title: 'Portfolio/SiteFooter',
  component: SiteFooter,
};

export default meta;

type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {
  args: {
    name: 'Chibuike Anyaba',
    lastUpdated: 'April 12, 2026, 2:45 PM',
    onBackToTop: () => undefined,
  },
};
