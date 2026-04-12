import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Code2 } from 'lucide-react';
import { SkillPanel } from './SkillPanel';

const meta: Meta<typeof SkillPanel> = {
  title: 'Portfolio/SkillPanel',
  component: SkillPanel,
};

export default meta;

type Story = StoryObj<typeof SkillPanel>;

export const Default: Story = {
  args: {
    title: 'Languages / Frameworks',
    description:
      'Core technologies used across current academic and portfolio work.',
    items: ['JavaScript', 'PHP', 'Python', 'SQL', 'HTML', 'CSS'],
    icon: Code2,
  },
};
