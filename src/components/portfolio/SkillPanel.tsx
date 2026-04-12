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
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.32)]">
      <div className="space-y-5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
          <Icon size={20} />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description && (
            <p className="text-sm leading-7 text-slate-300">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
