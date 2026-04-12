import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { SectionShell } from './SectionShell';

const meta: Meta<typeof SectionShell> = {
  title: 'Portfolio/SectionShell',
  component: SectionShell,
};

export default meta;

type Story = StoryObj<typeof SectionShell>;

export const Default: Story = {
  args: {
    id: 'demo',
    eyebrow: 'About',
    title: 'Minimal structure for section composition',
    description:
      'This wrapper keeps heading hierarchy and spacing consistent across the portfolio.',
    children: (
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-slate-300">
        Section content goes here.
      </div>
    ),
  },
};
