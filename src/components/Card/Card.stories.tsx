import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    bgColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Sample Card',
    bgColor: '#ffffff',
    disabled: false,
    children: 'This is a reusable Card component.',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    bgColor: '#ffffff',
    disabled: true,
    children: 'Disabled state preview.',
  },
};
