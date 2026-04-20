import React from 'react';
import { ArrowUp } from 'lucide-react';

interface SiteFooterProps {
  name: string;
  lastUpdated: string;
  links?: Array<{
    href: string;
    label: string;
  }>;
  onBackToTop: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  name,
  lastUpdated,
  links = [],
  onBackToTop,
}) => {
  return (
    <footer className="border-t border-white/10 pt-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
            {name}
          </p>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          {links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onBackToTop}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </div>
    </footer>
  );
};
