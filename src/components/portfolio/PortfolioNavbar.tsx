import React from 'react';

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="max-w-full overflow-x-auto scrollbar-none"
        >
          <ul className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 p-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
