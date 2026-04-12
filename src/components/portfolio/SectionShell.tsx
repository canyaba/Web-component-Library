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
    <section id={id} className="scroll-mt-28 space-y-8">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
          {eyebrow}
        </p>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-base leading-7 text-slate-300">{description}</p>
          )}
        </div>
      </header>
      {children}
    </section>
  );
};
