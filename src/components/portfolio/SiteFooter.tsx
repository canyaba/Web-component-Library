import React from 'react';
import { ArrowUp } from 'lucide-react';

interface SiteFooterProps {
  name: string;
  lastUpdated: string;
  onBackToTop: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  name,
  lastUpdated,
  onBackToTop,
}) => {
  return (
    <footer className="border-t border-white/10 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            {name}
          </p>
          <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        <button
          type="button"
          onClick={onBackToTop}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </div>
    </footer>
  );
};
