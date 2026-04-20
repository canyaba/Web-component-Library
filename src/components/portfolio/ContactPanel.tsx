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
    <section className="relative overflow-hidden rounded-[2.35rem] border border-white/10 bg-white/[0.035] p-6 shadow-frame backdrop-blur-xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,166,199,0.1),transparent_32%)]" />

      <div className="relative space-y-8">
        <div className="space-y-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
            <Mail size={20} />
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">
              Contact Me
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              {intro}
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex text-lg font-medium text-accent-soft transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/12 via-white/5 to-transparent" />

        <div className="grid gap-4 md:grid-cols-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.7rem] border border-white/10 bg-[#0c0f14]/70 p-5 transition duration-300 hover:border-white/16 hover:bg-[#11151c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white">
                    {action.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-accent-soft transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  />
                </div>
                <p className="text-sm leading-6 text-slate-400">
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
