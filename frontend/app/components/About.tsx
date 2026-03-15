"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const experience = [
  {
    company: "OnePercentBetter.dev",
    role: "Founder",
    period: "2025 - Present",
    summary:
      "Built a recruiter-friendly public surface and small product loops that keep recent execution visible.",
  },
  {
    company: "TheScore / ESPN Bet",
    role: "Senior Data Engineer",
    period: "2023 - 2025",
    summary:
      "Built and maintained data pipelines, observability tooling, and reporting systems for high-volume betting operations.",
  },
  {
    company: "Earlier roles",
    role: "Data / QA / Automation",
    period: "2016 - 2023",
    summary:
      "Built the habits that still drive this work: validate the data, automate repetitive pain, and ship systems people can trust.",
  },
];

type ActivityDay = {
  date: string;
  count: number;
};

type ActivityState = {
  activeDays: number;
  days: ActivityDay[];
  reposAttempted?: number;
  reposTracked: number;
  totalCommits: number;
  topRepos?: Array<{
    repoName: string;
    displayName: string;
    commits: number;
    url: string;
  }>;
};

function intensityClass(count: number) {
  if (count >= 5) return "bg-[#111111] border-[#111111]";
  if (count >= 3) return "bg-[#7d6850] border-[#7d6850]";
  if (count >= 1) return "bg-[#c7b08a] border-[#c7b08a]";
  return "bg-[#f0e8dd] border-[#e0d5c7]";
}

export default function About() {
  const [activity, setActivity] = useState<ActivityState | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadActivity = async () => {
      try {
        const res = await fetch("/api/activity", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(String(res.status));
        }

        const data = (await res.json()) as ActivityState;
        if (mounted) {
          setActivity(data);
        }
      } catch {
        if (mounted) {
          setActivity({
            activeDays: 0,
            days: [],
            reposAttempted: 0,
            reposTracked: 0,
            totalCommits: 0,
          });
        }
      }
    };

    loadActivity();
    const interval = window.setInterval(loadActivity, 60_000);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const heatmapWeeks = activity?.days.length
    ? Array.from({ length: Math.ceil(activity.days.length / 7) }, (_, weekIndex) =>
        activity.days.slice(weekIndex * 7, weekIndex * 7 + 7)
      )
    : [];
  const topRepoMax = Math.max(...(activity?.topRepos?.map((repo) => repo.commits) ?? [1]));

  return (
    <section id="about" className="px-6 pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8b857b]">
            About
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Proven data engineering. Visible current execution.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#5f5a52]">
            <p>
              I have spent 10+ years in data engineering, QA, automation, and data
              quality across fintech, media, and enterprise systems. Most recently,
              I was a Senior Data Engineer at theScore / ESPN Bet, building pipelines,
              observability, and reporting for high-volume betting operations.
            </p>
            <p>
              1% Better.dev is the public layer for my current work. I use it to ship
              small products, stay hands-on with LLM workflows and delivery, and keep
              recent execution easy for recruiters and collaborators to verify.
            </p>
            <p>
              The hiring story is straightforward: proven engineering depth first,
              then current product reps. The site, linked repos, and activity feed
              are here to make that legible quickly.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Core value
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              Useful first.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              Tight scope, clean execution, and repeated shipping beats bigger promises.
            </p>
          </div>
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Right now
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              Small products, real reps.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              Today, Focus, and the site itself are active proof surfaces, not concept art.
            </p>
          </div>
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Separate vertical
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              Poker stays separate.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              It remains a distinct specialist lane and does not lead the hiring story here.
            </p>
          </div>
        </div>

        <div className="mt-10 glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8b857b]">
            Experience
          </p>
          <div className="mt-8 space-y-6">
            {experience.map((item) => (
              <div key={item.company} className="border-t border-[#ebe5db] pt-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-medium text-[#111111]">{item.company}</p>
                    <p className="text-sm text-[#5f5a52]">{item.role}</p>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#8b857b]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8b857b]">
                Build activity
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#111111]">
                Recent GitHub activity across this site and the linked 1% Better repos.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                A quick record of actual reps. This heatmap aggregates recent commit
                activity from the landing page repo plus the linked 1% Better repositories.
              </p>

              <a
                href="https://github.com/sukminc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#ddd8cf] px-5 py-3 text-sm text-[#5f5a52] transition-colors hover:border-[#b9b2a7] hover:text-[#111111]"
              >
                Open GitHub
                <ArrowUpRight size={14} />
              </a>
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-[#e5dfd5] bg-[linear-gradient(180deg,#f9f6f1_0%,#f4eee5_100%)] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
                  Active days
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#111111]">
                  {activity?.activeDays ?? "--"}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
                  Tracked repos
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#111111]">
                  {activity?.reposTracked ?? "--"}
                </p>
                {activity?.reposAttempted !== undefined && activity.reposAttempted !== activity.reposTracked ? (
                  <p className="mt-1 text-[11px] text-[#8b857b]">
                    {activity.reposAttempted} attempted
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
                  Recent commits
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#111111]">
                  {activity?.totalCommits ?? "--"}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:items-start">
              <div className="min-w-0">
                <div className="overflow-x-auto">
                  <div className="inline-flex min-w-max gap-1">
                  {heatmapWeeks.length > 0 ? (
                    heatmapWeeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-rows-7 gap-1">
                        {week.map((day) => (
                          <div
                            key={day.date}
                            title={`${day.date}: ${day.count} commit${day.count === 1 ? "" : "s"}`}
                            className={`h-3 w-3 rounded-[4px] border ${intensityClass(day.count)}`}
                          />
                        ))}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-[#8b857b]">
                      Loading recent activity...
                    </div>
                  )}
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-3 text-xs text-[#8b857b]">
                  <span className="font-mono uppercase tracking-[0.16em]">Less</span>
                  <div className="flex gap-1.5">
                    {[0, 1, 3, 5].map((count) => (
                      <span key={count} className={`h-3 w-3 rounded-[4px] border ${intensityClass(count)}`} />
                    ))}
                  </div>
                  <span className="font-mono uppercase tracking-[0.16em]">More</span>
                </div>
              </div>

              <div className="min-w-0">
                <div className="rounded-[1.1rem] border border-[#e5dfd5] bg-[#fbf8f3] px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
                      Top repos
                    </p>
                    <p className="text-[11px] text-[#8b857b]">84d view</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {(activity?.topRepos ?? []).map((repo) => (
                      <a
                        key={repo.repoName}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl px-2 py-2 transition-colors hover:bg-[#f3ede4]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-[#111111] group-hover:text-[#5f5a52]">
                              {repo.displayName}
                            </p>
                            <p className="text-[11px] text-[#8b857b]">{repo.commits} commits</p>
                          </div>
                          <ArrowUpRight size={12} className="shrink-0 text-[#8b857b]" />
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#ebe5db]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#111111_0%,#7d6850_55%,#c7b08a_100%)]"
                            style={{ width: `${Math.max(10, Math.round((repo.commits / topRepoMax) * 100))}%` }}
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
