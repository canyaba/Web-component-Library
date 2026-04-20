import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techList: string[];
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  techList,
  featured = false,
}) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] shadow-panel transition duration-500 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.045]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0c0f14]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-80 saturate-[0.8] transition duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-md">
          {featured ? 'Featured project' : 'Selected work'}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.8rem]">
            {title}
          </h3>
          <p
            className={`text-sm leading-7 text-slate-400 ${
              featured ? 'max-w-2xl' : ''
            }`}
          >
            {description}
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/12 via-white/5 to-transparent" />

        <div className="flex flex-wrap gap-2.5">
          {techList.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-[#11141a] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            View project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};
