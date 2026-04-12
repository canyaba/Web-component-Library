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
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(2,6,23,0.32)] transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p
            className={`text-sm leading-7 text-slate-300 ${
              featured ? 'max-w-2xl' : ''
            }`}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techList.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
          >
            View project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};
