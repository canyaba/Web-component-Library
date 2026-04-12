import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { PortfolioNavbar } from './PortfolioNavbar';

const meta: Meta<typeof PortfolioNavbar> = {
  title: 'Portfolio/PortfolioNavbar',
  component: PortfolioNavbar,
};

export default meta;

type Story = StoryObj<typeof PortfolioNavbar>;

export const Default: Story = {
  args: {
    name: 'Chibuike Anyaba',
    items: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Portfolio / Projects', href: '#projects' },
      { label: 'Contact Me', href: '#contact' },
    ],
  },
};
