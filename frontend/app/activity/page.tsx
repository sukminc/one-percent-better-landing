"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import { GitCommitHorizontal, GitBranch, ExternalLink, RefreshCw, Clock } from "lucide-react";

const GH_OWNER = "sukminc";

const REPO_MAP: Record<string, string> = Object.fromEntries(
  projects.filter((p) => p.repoName).map((p) => [p.slug, p.repoName!])
);

interface Commit {
  sha:     string;
  message: string;
  date:    string;
  url:     string;
}

interface RepoActivity {
  slug:        string;
  repoName:    string;
  title:       string;
  tagline:     string;
  status:      string;
  mvpProgress: number;
  commits:     Commit[];
  totalCount:  number | null;
  error:       string | null;
  loading:     boolean;
}

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60)   return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60)   return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24)   return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30)   return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

const STATUS_COLOR: Record<string, string> = {
  live:     "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  building: "text-[#5E5CE6] bg-[#5E5CE6]/10 border-[#5E5CE6]/20",
  idea:     "text-[#8A8B97] bg-[#8A8B97]/10 border-[#8A8B97]/20",
};

const STATUS_BAR: Record<string, string> = {
  live:     "bg-emerald-400",
  building: "bg-[#5E5CE6]",
  idea:     "bg-[#4B4C58]",
};

function RepoCard({ repo }: { repo: RepoActivity }) {
  return (
    <div className="rounded-2xl border border-[#232329] hover:border-[#36363F] bg-[#161618] p-6 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="font-semibold text-[#F7F8F8] text-sm">{repo.title}</h3>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${STATUS_COLOR[repo.status] ?? STATUS_COLOR.idea}`}>
              {repo.status}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#4B4C58]">
            <GitBranch size={9} />
            <span className="font-mono">{GH_OWNER}/{repo.repoName}</span>
          </div>
        </div>
        {repo.totalCount !== null && (
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold text-[#F7F8F8]">{repo.totalCount}</div>
            <div className="text-[9px] text-[#4B4C58]">commits</div>
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-[10px] text-[#4B4C58] mb-1.5">
          <span className="truncate pr-2">{repo.tagline}</span>
          <span className="flex-shrink-0">{repo.mvpProgress === 100 ? "Live ✓" : `${repo.mvpProgress}%`}</span>
        </div>
        <div className="h-1 bg-[#232329] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${STATUS_BAR[repo.status] ?? "bg-[#4B4C58]"}`}
            style={{ width: `${repo.mvpProgress}%` }}
          />
        </div>
      </div>

      {/* Commits */}
      <div className="flex flex-col gap-0.5">
        {repo.loading && (
          <div className="space-y-2.5 py-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-2.5 animate-pulse">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#232329] flex-shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 bg-[#1C1C1F] rounded w-3/4" />
                  <div className="h-2 bg-[#1C1C1F] rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!repo.loading && !repo.error && repo.commits.map((c, i) => (
          <a
            key={c.sha}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2.5 py-2 hover:bg-white/[0.02] rounded-lg px-2 -mx-2 transition-colors"
          >
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-[#5E5CE6]" : "bg-[#36363F]"}`} />
            <div className="flex-1 min-w-0">
              <p className={`text-sm leading-snug truncate ${i === 0 ? "text-[#F7F8F8]" : "text-[#8A8B97]"} group-hover:text-[#F7F8F8] transition-colors`}>
                {c.message.split("\n")[0]}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <code className="text-[10px] text-[#4B4C58] font-mono">{c.sha.slice(0, 7)}</code>
                <span className="text-[10px] text-[#36363F]">·</span>
                <span className="flex items-center gap-1 text-[10px] text-[#4B4C58]">
                  <Clock size={9} />{timeAgo(c.date)}
                </span>
              </div>
            </div>
            <ExternalLink size={11} className="mt-1 flex-shrink-0 text-[#4B4C58] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}

        {!repo.loading && repo.error && (
          <p className="text-[10px] text-[#4B4C58] py-2">{repo.error}</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[#1C1C1F]">
        <a
          href={`https://github.com/${GH_OWNER}/${repo.repoName}/commits`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#4B4C58] hover:text-[#5E5CE6] transition-colors flex items-center gap-1"
        >
          <GitCommitHorizontal size={12} />
          View full history
        </a>
      </div>
    </div>
  );
}

export default function ActivityPage() {
  const [repos, setRepos] = useState<RepoActivity[]>([]);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [refreshing, setRefreshing] = useState(false);

  async function fetchAll() {
    setRefreshing(true);

    const initial: RepoActivity[] = projects.map((p) => ({
      slug:        p.slug,
      repoName:    REPO_MAP[p.slug] ?? p.slug,
      title:       p.title,
      tagline:     p.tagline,
      status:      p.status,
      mvpProgress: p.mvpProgress,
      commits:     [],
      totalCount:  null,
      error:       null,
      loading:     true,
    }));
    setRepos(initial);

    await Promise.all(
      initial.map(async (repo) => {
        if (!REPO_MAP[repo.slug]) {
          setRepos((prev) => prev.map((r) => r.slug === repo.slug ? { ...r, loading: false } : r));
          return;
        }
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GH_OWNER}/${repo.repoName}/commits?per_page=3`,
            { headers: { Accept: "application/vnd.github+json" } }
          );
          if (!res.ok) {
            setRepos((prev) => prev.map((r) => r.slug === repo.slug
              ? { ...r, loading: false, error: res.status === 404 ? "No repo" : `Error ${res.status}` }
              : r
            ));
            return;
          }

          const linkHeader = res.headers.get("Link") ?? "";
          const lastMatch  = linkHeader.match(/[?&]page=(\d+)>; rel="last"/);
          const data       = await res.json();
          const commits: Commit[] = (Array.isArray(data) ? data : []).map((c: {
            sha: string; html_url: string;
            commit: { message: string; author: { date: string } };
          }) => ({
            sha:     c.sha,
            message: c.commit.message,
            date:    c.commit.author.date,
            url:     c.html_url,
          }));

          setRepos((prev) => prev.map((r) => r.slug === repo.slug
            ? { ...r, commits, totalCount: lastMatch ? parseInt(lastMatch[1], 10) : commits.length, loading: false }
            : r
          ));
        } catch {
          setRepos((prev) => prev.map((r) => r.slug === repo.slug
            ? { ...r, loading: false, error: "Network error" }
            : r
          ));
        }
      })
    );

    setLastRefreshed(new Date());
    setRefreshing(false);
  }

  useEffect(() => { fetchAll(); }, []);

  // Sort by most recent commit date
  const sorted = [...repos].sort((a, b) => {
    const aDate = a.commits[0]?.date ?? "";
    const bDate = b.commits[0]?.date ?? "";
    return bDate.localeCompare(aDate);
  });

  return (
    <main className="min-h-screen bg-[#0F0F11] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">

        <div className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
            <div>
              <p className="text-xs text-[#8A8B97] mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live from GitHub · sukminc
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Build Log</h1>
            </div>
            <button
              onClick={fetchAll}
              disabled={refreshing}
              className="flex items-center gap-2 text-xs text-[#8A8B97] hover:text-[#F7F8F8] transition-colors disabled:opacity-40"
            >
              <RefreshCw size={13} className={refreshing ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
          <p className="text-xs text-[#4B4C58] flex items-center gap-1.5">
            <Clock size={10} />
            Last updated {timeAgo(lastRefreshed.toISOString())} · Last 3 commits per project · Sorted by most recent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sorted.map((r) => <RepoCard key={r.slug} repo={r} />)}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#232329] text-[#8A8B97] text-sm hover:border-[#36363F] hover:text-[#F7F8F8] transition-all"
          >
            ← Back to projects
          </Link>
        </div>

      </div>
    </main>
  );
}
