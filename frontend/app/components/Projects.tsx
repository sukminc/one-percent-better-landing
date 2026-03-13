"use client";

import { projects, type ProjectCategory } from "../data/projects";

const CATEGORY_META: Record<ProjectCategory, { title: string; description: string }> = {
  featured: {
    title: "Featured Products",
    description: "Small, sharp products under the 1% Better brand. Built to ship fast.",
  },
  poker: {
    title: "Poker Product Line",
    description: "A separate product family. More targeted, more private, still under construction.",
  },
  ops: {
    title: "Operating Layer",
    description: "Internal systems powering the build loop behind the scenes.",
  },
  archive: {
    title: "Archive / Proof of Work",
    description: "Past work that supports the story without competing with the product narrative.",
  },
};

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <div>
      <div className="glass-panel rounded-[1.5rem] border border-[#ddd8cf] px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[#111111]">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">{project.tagline}</p>
          </div>
          <span className="rounded-full border border-[#d7d0c3] bg-[#f4efe6] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8b857b]">
            Coming soon
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sections = (["featured", "poker", "ops", "archive"] as ProjectCategory[]).map((category) => ({
    category,
    meta: CATEGORY_META[category],
    items: projects.filter((project) => project.category === category),
  }));

  return (
    <section id="projects" className="section-shell py-24 px-6">
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <p className="text-xs text-[#8b857b]">Projects</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Quietly building.
            {" "}
            <span className="text-[#8b857b]">The right things will ship fast.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52]">
            Just the hooks for now. The details stay private until the products are ready.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.category}>
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[#111111]">{section.meta.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5f5a52]">{section.meta.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {section.items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
