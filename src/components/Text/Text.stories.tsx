import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    bgColor: { control: 'color' },
    size: { control: 'radio' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'Sample text component',
    size: 'medium',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    text: 'Large text',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled text',
    disabled: true,
  },
};
