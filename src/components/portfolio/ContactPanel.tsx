import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface ContactAction {
  label: string;
  href: string;
  helper: string;
}

interface ContactPanelProps {
  email: string;
  intro: string;
  actions: ContactAction[];
}

export const ContactPanel: React.FC<ContactPanelProps> = ({
  email,
  intro,
  actions,
}) => {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.32)] sm:p-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
            <Mail size={20} />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Contact Me</h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              {intro}
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex text-lg font-medium text-blue-300 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5 transition hover:border-blue-400/30 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white">
                    {action.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  {action.helper}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
