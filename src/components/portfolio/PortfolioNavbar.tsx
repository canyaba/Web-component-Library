import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface PortfolioNavItem {
  href: string;
  label: string;
}

interface PortfolioNavbarProps {
  name: string;
  items: PortfolioNavItem[];
}

export const PortfolioNavbar: React.FC<PortfolioNavbarProps> = ({
  name,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-white/10 bg-[#0d0f13]/80 px-4 py-3 shadow-panel backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <a
              href="#home"
              onClick={handleClose}
              className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {name}
            </a>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={handleToggle}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <nav aria-label="Primary navigation" className="hidden md:block">
              <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex rounded-full px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {isOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0f13]/95 p-3 shadow-panel backdrop-blur-xl md:hidden"
          >
            <ul className="grid gap-2">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleClose}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
