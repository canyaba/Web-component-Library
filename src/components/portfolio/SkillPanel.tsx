import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SkillPanelProps {
  title: string;
  description?: string;
  items: string[];
  icon: LucideIcon;
}

export const SkillPanel: React.FC<SkillPanelProps> = ({
  title,
  description,
  items,
  icon: Icon,
}) => {
  return (
    <article className="h-full rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm sm:p-7">
      <div className="space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
          <Icon size={20} />
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
            {title}
          </h3>
          {description && (
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              {description}
            </p>
          )}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-white/12 via-white/5 to-transparent" />
        <div className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#11141a] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
