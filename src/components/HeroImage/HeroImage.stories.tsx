import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    disabled: { control: 'boolean' },
    src: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/700x300',
    heading: 'Hero Section',
    subheading: 'Responsive hero image component',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/700x300',
    heading: 'Disabled Hero',
    subheading: 'Disabled state preview',
    disabled: true,
  },
};
