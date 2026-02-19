import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    bgColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
  },
};
