import React, { useMemo } from 'react';
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  FolderGit2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import {
  aboutHighlights,
  basicInfo,
  contactActions,
  devSetup,
  resources,
  skills,
  workItems,
} from './PortfolioData';
import {
  ContactPanel,
  PortfolioNavbar,
  ProjectCard,
  SectionShell,
  SiteFooter,
  SkillPanel,
} from './components/portfolio';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio / Projects', href: '#projects' },
  { label: 'Contact Me', href: '#contact' },
];

const resourceIconMap = {
  FolderGit2,
  BadgeCheck,
  ShieldCheck,
};

function App() {
  const lastUpdated = useMemo(
    () =>
      new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date()),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-20 right-[10%] h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <PortfolioNavbar name={basicInfo.name} items={navigationItems} />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section
          id="home"
          className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl sm:p-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
                  Home
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {basicInfo.name}
                  </h1>
                  <p className="max-w-3xl text-lg font-medium text-blue-300 sm:text-xl">
                    {basicInfo.headline}
                  </p>
                </div>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  {basicInfo.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  basicInfo.location,
                  'Minimal UI systems',
                  'Production-aware workflow',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34)]">
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Sparkles size={20} />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Focused on clarity and delivery
                </h2>
                <p className="text-sm leading-7 text-slate-300">
                  The redesign keeps the presentation minimal while still
                  feeling intentional, polished, and aligned with a frontend
                  component-library assignment.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['3', 'Project cards'],
                ['5', 'Primary nav links'],
                ['1', 'Consistent design system'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.2)]"
                >
                  <p className="text-3xl font-semibold text-blue-300">
                    {value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionShell
          id="about"
          eyebrow="About"
          title="Professional summary and working style"
          description="This section replaces the old generic summary blocks with cleaner, more focused portfolio messaging."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34)] sm:p-8">
              <div className="space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Briefcase size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    A portfolio inside a component library context
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Instead of treating this as a standalone marketing page, the
                    redesign keeps the code organized as reusable portfolio
                    primitives that still fit the assignment repository and can
                    be reviewed inside Storybook.
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    The emphasis is on stronger typography, more deliberate
                    spacing, cleaner section boundaries, and a calmer visual
                    system that feels modern without becoming noisy.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {aboutHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.22)]"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">
                      {highlight.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="skills"
          eyebrow="Skills"
          title="Technical strengths and workflow tools"
          description={skills.description}
        >
          <div className="grid gap-6 md:grid-cols-6">
            <div className="md:col-span-4">
              <SkillPanel
                title="Languages / Frameworks"
                description="Core technologies used across application and UI assignments."
                items={skills.languagesAndFrameworks}
                icon={Code2}
              />
            </div>

            <div className="md:col-span-2">
              <SkillPanel
                title="Tools"
                description="Delivery, debugging, and development workflow tools."
                items={skills.tools}
                icon={Wrench}
              />
            </div>

            <div className="md:col-span-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34)]">
                <div className="space-y-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <BookOpen size={20} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                      Developer setup
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">
                      {devSetup.vscodeSetup}
                    </p>
                    <p className="text-sm leading-7 text-slate-300">
                      {devSetup.terminalSetup}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34)]">
                <div className="space-y-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <Terminal size={20} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                      Supporting references
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">
                      {devSetup.supportingResource.summary}
                    </p>
                    <a
                      href={devSetup.supportingResource.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                    >
                      {devSetup.supportingResource.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Portfolio / Projects"
          title="Selected work with clearer visual rhythm"
          description="Project cards now use a shared visual treatment so the section feels curated instead of stacked."
        >
          <div className="grid gap-6 md:grid-cols-6">
            {workItems.map((item, index) => (
              <div
                key={item.title}
                className={`md:col-span-3 ${index === 0 ? 'lg:col-span-4' : ''}`}
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  techList={item.techList}
                  featured={index === 0}
                />
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact Me"
          title="Relevant links and next-step contact points"
          description="The old footer-only treatment is replaced with a dedicated contact section that still stays compact."
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactPanel
              email={basicInfo.email}
              intro="I am open to internship and junior product or frontend opportunities where I can contribute to clean interfaces, dependable implementation, and thoughtful collaboration."
              actions={contactActions}
            />

            <div className="grid gap-4">
              {resources.map((resource) => {
                const Icon =
                  resourceIconMap[
                    resource.icon as keyof typeof resourceIconMap
                  ] ?? FolderGit2;

                return (
                  <article
                    key={resource.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.22)]"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <Icon size={18} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {resource.title}
                        </h3>
                        <p className="text-sm leading-7 text-slate-300">
                          {resource.summary}
                        </p>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                        >
                          Visit link
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </SectionShell>

        <SiteFooter
          name={basicInfo.name}
          lastUpdated={lastUpdated}
          onBackToTop={scrollToTop}
        />
      </main>
    </div>
  );
}

export default App;
