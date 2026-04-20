import React, { useMemo } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  FolderGit2,
  ShieldCheck,
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
  HeroFrame,
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
    <div className="min-h-screen overflow-x-hidden bg-ink text-mist">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,166,199,0.09),transparent_24%),radial-gradient(circle_at_85%_14%,rgba(90,100,124,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%)]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <PortfolioNavbar name={basicInfo.name} items={navigationItems} />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-28 px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <HeroFrame
          eyebrow="Home"
          name={basicInfo.name}
          headline={basicInfo.headline}
          description={basicInfo.bio}
          tags={[
            basicInfo.location,
            'Component-library workflow',
            'Production-aware implementation',
          ]}
          primaryAction={{
            href: '#projects',
            label: 'View Projects',
          }}
          secondaryAction={{
            href: '#contact',
            label: 'Contact',
          }}
          metrics={[
            {
              label: 'Current Focus',
              value: 'Frontend systems',
              detail:
                'Building interfaces with clearer hierarchy, cleaner structure, and more deliberate interaction design.',
            },
            {
              label: 'Working Mode',
              value: 'Calm and methodical',
              detail:
                'I work best where visual quality, implementation discipline, and delivery reliability are all expected at the same time.',
            },
          ]}
        />

        <SectionShell
          id="about"
          eyebrow="About"
          title="Identity, standards, and the way I approach product work"
          description="This section is intentionally quieter. The goal is to communicate mindset and direction without falling into resume clutter."
        >
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2.45rem] border border-white/10 bg-white/[0.035] p-7 shadow-frame backdrop-blur-xl sm:p-9">
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
                  <Briefcase size={20} />
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                    I value restraint, clarity, and systems that feel built to
                    last.
                  </h3>
                  <p className="max-w-2xl text-sm leading-8 text-slate-400">
                    My interest sits where interface design and implementation
                    quality overlap. I care about surfaces that feel clean, but
                    I care more about structure, consistency, and whether the
                    underlying system still feels solid after the visuals fade
                    into the background.
                  </p>
                  <p className="max-w-2xl text-sm leading-8 text-slate-400">
                    Because this portfolio exists inside a component-library
                    assignment repository, the design choices here are meant to
                    be reusable, inspectable, and practical rather than purely
                    decorative.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {aboutHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-5 shadow-panel"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {highlight.title}
                    </p>
                    <p className="text-base leading-7 text-slate-300">
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
          title="Curated technical range, not a scattered tool list"
          description={skills.description}
        >
          <div className="grid gap-6 md:grid-cols-6">
            <div className="md:col-span-4">
              <SkillPanel
                title="Languages / Frameworks"
                description="Core technologies used across interface work, data-backed applications, and full-stack assignments."
                items={skills.languagesAndFrameworks}
                icon={Code2}
              />
            </div>

            <div className="md:col-span-2">
              <SkillPanel
                title="Tools"
                description="The workflow layer behind debugging, collaboration, and deployment readiness."
                items={skills.tools}
                icon={Wrench}
              />
            </div>

            <div className="md:col-span-3">
              <article className="h-full rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel sm:p-7">
                <div className="space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
                    <BookOpen size={20} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                      Developer setup
                    </h3>
                    <p className="text-sm leading-7 text-slate-400">
                      {devSetup.vscodeSetup}
                    </p>
                    <p className="text-sm leading-7 text-slate-400">
                      {devSetup.terminalSetup}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="md:col-span-3">
              <article className="h-full rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel sm:p-7">
                <div className="space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
                    <Terminal size={20} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                      Environment notes
                    </h3>
                    <p className="text-sm leading-7 text-slate-400">
                      Preferred editor font: {devSetup.preferredEditorFont}
                    </p>
                    <p className="text-sm leading-7 text-slate-400">
                      {devSetup.supportingResource.summary}
                    </p>
                    <a
                      href={devSetup.supportingResource.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      {devSetup.supportingResource.title}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Portfolio / Projects"
          title="Selected work with more atmosphere, structure, and visual restraint"
          description="This section carries more weight than before. The cards are darker, more spacious, and less generic so the work feels considered instead of simply listed."
        >
          <div className="grid gap-6 md:grid-cols-6">
            {workItems.map((item, index) => (
              <div
                key={item.title}
                className={`${
                  index === 0
                    ? 'md:col-span-6 lg:col-span-4'
                    : 'md:col-span-3 lg:col-span-2'
                }`}
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

            <article className="md:col-span-6 rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Project posture
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                    The visual treatment is quieter so the structure of the work
                    can speak more clearly.
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-8 text-slate-400">
                  Rather than pushing bright callouts or loud gradients, the
                  project layer now relies on proportion, contrast, spacing, and
                  material restraint. That gives the cards a stronger sense of
                  permanence and makes the portfolio feel less like a template.
                </p>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact Me"
          title="A clear path to the work, profile, and supporting resources"
          description="The contact area keeps the primary routes visible while making the supporting resources easy to scan during a demonstration."
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactPanel
              email={basicInfo.email}
              intro="I am open to frontend, full-stack, and product-focused conversations where thoughtful implementation and dependable follow-through matter."
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
                    className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 shadow-panel"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-soft">
                        <Icon size={18} />
                      </div>
                      <div className="space-y-2.5">
                        <h3 className="text-lg font-semibold text-white">
                          {resource.title}
                        </h3>
                        <p className="text-sm leading-7 text-slate-400">
                          {resource.summary}
                        </p>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                        >
                          Visit link
                          <ArrowUpRight size={16} />
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
          links={[
            { label: 'GitHub', href: basicInfo.github },
            { label: 'LinkedIn', href: basicInfo.linkedin },
          ]}
          onBackToTop={scrollToTop}
        />
      </main>
    </div>
  );
}

export default App;
