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
    title: 'Composed structure for atmospheric section design',
    description:
      'This wrapper keeps hierarchy, spacing, and visual restraint consistent across the portfolio.',
    children: (
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-slate-300">
        Section content goes here.
      </div>
    ),
  },
};
