import React from 'react';

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  eyebrow,
  title,
  description,
  children,
}) => {
  return (
    <section id={id} className="scroll-mt-32 space-y-10">
      <header className="max-w-4xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-soft">
          {eyebrow}
        </p>
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]">
            {title}
          </h2>
          {description && (
            <p className="max-w-3xl text-base leading-8 text-slate-400">
              {description}
            </p>
          )}
        </div>
        <div className="h-px w-full max-w-2xl bg-gradient-to-r from-white/12 via-white/5 to-transparent" />
      </header>
      {children}
    </section>
  );
};
