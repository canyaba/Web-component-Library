import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroAction {
  href: string;
  label: string;
}

interface HeroMetric {
  label: string;
  value: string;
  detail: string;
}

interface HeroFrameProps {
  eyebrow: string;
  name: string;
  headline: string;
  description: string;
  tags: string[];
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  metrics: HeroMetric[];
}

export const HeroFrame: React.FC<HeroFrameProps> = ({
  eyebrow,
  name,
  headline,
  description,
  tags,
  primaryAction,
  secondaryAction,
  metrics,
}) => {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-8rem)] scroll-mt-28 items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-8 shadow-frame backdrop-blur-xl sm:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,166,199,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="relative space-y-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-soft">
              {eyebrow}
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {name}
              </h1>
              <p className="max-w-3xl text-lg font-medium leading-8 text-accent-soft sm:text-xl">
                {headline}
              </p>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-accent/50 hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {primaryAction.label}
              <ArrowRight size={16} />
            </a>
            <a
              href={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0f1217] p-7 shadow-panel">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:68px_68px]" />
          <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-[radial-gradient(circle,rgba(138,166,199,0.12),transparent_72%)] blur-3xl" />

          <div className="relative space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                Current posture
              </p>
              <p className="max-w-md font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-white">
                Minimal surfaces. Sharper hierarchy. Quiet confidence.
              </p>
              <p className="max-w-md text-sm leading-7 text-slate-400">
                The interface is intentionally reduced so the work, tone, and
                structure carry more weight than decoration.
              </p>
            </div>

            <div className="space-y-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        {metric.label}
                      </p>
                      <p className="text-base font-semibold text-white">
                        {metric.value}
                      </p>
                    </div>
                    <div className="mt-1 h-2 w-2 rounded-full bg-accent/80 shadow-[0_0_18px_rgba(138,166,199,0.45)]" />
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
